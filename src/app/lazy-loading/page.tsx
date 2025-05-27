"use client";

import dynamic from "next/dynamic";
import { lazy, Suspense } from "react";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
const About = dynamic(() => import("./About"));
const Home = dynamic(() => import("./Home"));
const Contact = dynamic(() => import("./Contact"));
const TabLayout = dynamic(() => import("../components/TabLayout"));

const tabs = [
  {
    label: "Home",
    content: (
      // <Suspense fallback="Loading...">
      <Home />
      // </Suspense>
    ),
  },
  {
    label: "About",
    content: (
      // <Suspense fallback="Loading...">
      <About />
      // </Suspense>
    ),
  },
  {
    label: "Contact",
    content: (
      // <Suspense fallback="Loading...">
      <Contact />
      // </Suspense>
    ),
  },
];
export default function TabbedLayout() {
  return (
    <div className="h-full w-full text-center">
      Test Lazy Loading di next js
      <TabLayout menus={tabs} />
    </div>
  );
}
