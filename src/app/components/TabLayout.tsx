"use client";

import { ReactNode, useEffect, useState } from "react";
import Button from "./Button";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TTabItem = {
  label: string;
  content: ReactNode;
  href?: string;
};

type TTabLayoutProps = {
  activeTab?: number;
  menus: TTabItem[];
};

function TabLayout({ menus }: TTabLayoutProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    console.log("pathname is: ", pathname);
  }, [pathname]);

  useEffect(() => {
    console.log("re rendering the TabLayout");
  }, []);

  return (
    <div id="tab-container" className="flex flex-col">
      <div id="tabs" className="flex gap-4 mb-2">
        {menus.map((m, idx) => {
          if (m.href) {
            return (
              <Link
                href={{
                  pathname: m.href,
                }}
              >
                <Button
                  key={idx}
                  data-index={idx}
                  onClick={(e) =>
                    setActiveTab(Number(e.currentTarget.dataset.index))
                  }
                  className="px-4 py-2 border border-amber-400 rounded-sm hover:scale-110 duration-200"
                  label={m.label}
                />
              </Link>
            );
          }
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
        {menus.map((m, idx) => {
          const isActive = idx === activeTab;
          return (
            <div
              id={idx === activeTab ? "active" : "inactive"}
              data-index={idx}
              key={idx}
              // style={{ display: idx === activeTab ? "block" : "none" }}
              className={clsx(
                "absolute w-full transition duration-200",
                isActive && "opacity-100 z-10",
                !isActive && "opacity-0 pointer-events-none",
              )}
            >
              {isActive && m.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TabLayout;
