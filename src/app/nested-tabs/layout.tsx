"use client";

import React, { ReactNode } from "react";
import GeneralInfo from "./page";
import Profile from "./profile/page";
import Security from "./security/page";
import TabLayout from "../components/TabLayout";

type TNestedTabLayoutProps = {
  children: ReactNode;
};

const tabs = [
  {
    label: "General",
    content: <GeneralInfo />,
    href: "/nested-tabs",
  },
  {
    label: "Profile",
    content: <Profile />,
    href: "/nested-tabs/profile",
  },
  {
    label: "Security",
    content: <Security />,
    href: "/nested-tabs/security",
  },
];
function NestedTabLayout({ children }: TNestedTabLayoutProps) {
  return (
    <div>
      <TabLayout menus={tabs} />
    </div>
  );
}

export default NestedTabLayout;
