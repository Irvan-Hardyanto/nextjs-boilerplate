"use client";

import { ReactNode, useEffect, useState } from "react";
import Button from "./Button";

type TTabItem = {
  label: string;
  content: ReactNode;
};

type TTabLayoutProps = {
  activeTab?: number;
  menus: TTabItem[];
};

function TabLayout({ menus }: TTabLayoutProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    console.log("activeTab is: ", activeTab);
  }, [activeTab]);
  return (
    <div id="tab-container" className="flex flex-col">
      <div id="tabs" className="flex gap-4 mb-2">
        {menus.map((m, idx) => {
          return (
            <Button
              key={idx}
              data-index={idx}
              onClick={(e) =>
                setActiveTab(Number(e.currentTarget.dataset.index))
              }
              className="px-4 py-2 border border-amber-400 rounded-sm hover:scale-110 duration-200"
              label={m.label}
            />
          );
        })}
      </div>
      <div id="tab-content">
        {menus.map((m, idx) => (
          <div
            id={idx === activeTab ? "active" : "inactive"}
            data-index={idx}
            key={idx}
            style={{ display: idx === activeTab ? "block" : "none" }}
            className="transition-colors"
          >
            {m.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabLayout;
