import React, { ReactElement } from "react";
import Link from "next/link";
import NavLink from "next/link";
import {
  HomeModernIcon,
  ChartPieIcon,
  BellAlertIcon,
  UserIcon,
  BookOpenIcon,
  ArchiveBoxIcon,
  InboxIcon,
  InboxArrowDownIcon,
} from "@heroicons/react/20/solid";

type MenuItem = {
  name: string;
  icon: ReactElement | null;
  link: string;
  isActive: boolean;
};
const menu1: MenuItem[] = [
  {
    name: "Home",
    icon: <HomeModernIcon width={18} className="text-gray-800" />,
    link: "/",
    isActive: false,
  },
  {
    name: "Category",
    icon: <ChartPieIcon width={18} className="text-gray-800" />,
    link: "/category",
    isActive: false,
  },
  {
    name: "Jenis",
    icon: <InboxIcon width={18} className="text-gray-800" />,
    link: "/jenis",
    isActive: false,
  },
  {
    name: "Menu",
    icon: <BookOpenIcon width={18} className="text-gray-800" />,
    link: "/menu",
    isActive: false,
  },
  {
    name: "Stok",
    icon: <ArchiveBoxIcon width={18} className="text-gray-800" />,
    link: "/stok",
    isActive: false,
  },
  {
    name: "Pelanggan",
    icon: <UserIcon width={18} className="text-gray-800" />,
    link: "/pelanggan",
    isActive: false,
  },
  {
    name: "Meja",
    icon: <InboxArrowDownIcon width={18} className="text-gray-800" />,
    link: "/meja",
    isActive: false,
  },
  {
    name: "Pemesanan",
    icon: <BellAlertIcon width={18} className="text-gray-800" />,
    link: "/pemesanan",
    isActive: false,
  },
];

const Menus: React.FC<{ menu: MenuItem[] }> = ({ menu }) => {
  return (
    <div>
      <ul className="space-y-2">
        {menu.map((menu, index) => {
          const menuActive = menu.isActive
            ? "bg-blue-300 bg-opacity-30 px-3 border border-blue-300 text-blue-800 py-2 flex"
            : "px-3 py-2 flex";
          const textActive = menu.isActive ? "text-black-800" : "text-gray";
          return (
            <li
              key={index}
              className={`${menuActive} cursor-pointer rounded-md`}
            >
              <NavLink href={menu.link} className="flex items-center space-x-2">
                {menu.icon}
                <div
                  className={`ml-2 ${textActive} hidden sm:block mx-2`}
                ></div>
                <span className={`${textActive} font-medium`}>{menu.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const MainHeader = () => {
  return (
    <div className="App">
      <section className="w-64 bg-green-500 h-screen">
        <div className="border-b p-5 text-white font-bold">Coffee Shop</div>
        <div className="border-b p-5">
          <h6 className="text-white">Master Data</h6>
          <Menus menu={menu1} />
        </div>
      </section>
    </div>
  );
};

export default MainHeader;
