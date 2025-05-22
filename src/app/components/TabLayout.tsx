"use client";

import { ReactNode, useState } from "react";
import Button from "./Button";
import clsx from "clsx";

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
      <div id="tab-content" className="relative w-full">
        {menus.map((m, idx) => (
          <div
            id={idx === activeTab ? "active" : "inactive"}
            data-index={idx}
            key={idx}
            // style={{ display: idx === activeTab ? "block" : "none" }}
            className={clsx(
              "absolute w-full transition duration-200",
              idx === activeTab && "opacity-100 z-10",
              idx !== activeTab && "opacity-0 pointer-events-none",
            )}
          >
            {m.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabLayout;
