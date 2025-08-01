import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import { headerNavigations } from "./constants";
import { Menu, X } from "lucide-react";
import Drawer from "../ui/Drawer";
import ContactDrawer from "./ContactDrawer";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <header
      className=" text-foreground z-10 w-full  flex items-center 
            px-6 py-1 pt-2 backdrop-blur-sm 
            justify-between top-0 fixed "
    >
      <div className="">
        <button
          href="#home"
          className="block select-none font-semibold flex-center text-5xl font-[Whisper]"
        >
          <span>R</span>
          <span className="text-primary">B</span>
        </button>
      </div>
      <nav className="flex-none ml-2">
        <ul className=" hidden sm:flex items-center gap-x-10 px-1">
          {headerNavigations.map((nav) => (
            <li key={nav.title}>
              <a
                href={nav.link}
                className="hover:border-b-2 hover:border-primary"
              >
                {nav.title}
              </a>
            </li>
          ))}
          <li>
            <Drawer
              label={
                <Button className="text-sm font-medium" variant="primary">
                  Contact
                </Button>
              }
              btnVariant="primary"
              className="w-[94%] max-w-md lg:w-lg"
            >
              <ContactDrawer />
            </Drawer>
          </li>
        </ul>

        {/* For Mobile  */}
        <button className="sm:hidden" onClick={openSidebar}>
          <Menu />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed left-0 top-0 sm:hidden bg-black/95 backdrop-blur-xl w-screen h-screen 
          transition-all duration-600
          ${isSidebarOpen ? "translate-x-0" : "translate-x-[100%]"}
          `}
        style={{ position: "fixed" }}
      >
        <aside className="h-full p-4">
          <button className="absolute right-3 top-2" onClick={closeSidebar}>
            <X />
          </button>
          <ul
            className={`flex flex-col gap-2 h-full transition-all ease-out duration-900
              ${isSidebarOpen ? "translate-y-0" : "-translate-y-[100%]"}
            `}
          >
            {headerNavigations.map((nav) => (
              <li key={nav.title} className="flex gap-3" onClick={closeSidebar}>
                <div className="flex-center">
                  <div className="w-1.5 border-1 border-primary"></div>
                </div>
                <a href={nav.link}>{nav.title}</a>
              </li>
            ))}
            <li className="flex gap-3" onClick={closeSidebar}>
              <div className="flex-center">
                <div className="w-1.5 border-1 border-primary"></div>
              </div>
              <Drawer
                label={
                  <button className="text-sm font-medium">
                    Contact
                  </button>
                }
                className="w-[94%] max-w-md lg:w-lg"
              >
                <ContactDrawer />
              </Drawer>
            </li>
          </ul>
        </aside>
      </div>
    </header>
  );
}

export default Header;
