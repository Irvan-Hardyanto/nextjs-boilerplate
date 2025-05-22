import TabLayout from "./components/TabLayout";

const tabs = [
  { label: "Home", content: <div className="bg-red-200 h-[300px]">Home</div> },
  {
    label: "About",
    content: <div className="bg-amber-200 h-[300px]">About</div>,
  },
  {
    label: "Contact",
    content: <div className="bg-green-200 h-[300px]">Contact</div>,
  },
];
export default function Home() {
  return (
    <div className="h-full w-full m-auto text-center">
      <TabLayout menus={tabs} />
    </div>
  );
}
