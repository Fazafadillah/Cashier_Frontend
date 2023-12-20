import React from "react";
import Link from "next/link";
import MainHeader from "./MainHeader";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-grey-100 w-full h-screen flex flex-row">
      <MainHeader />

      {/* <ul className="">
        <li className="mr-5">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-5">
          <Link href="/about">About</Link>
        </li>
        <li className="mr-5">
          <Link href="/category">Category</Link>
        </li>
        <li className="mr-5">
          <Link href="/jenis">Jenis</Link>
        </li>
        <li className="mr-5">
          <Link href="/menu">Menu</Link>
        </li>
        <li className="mr-5">
          <Link href="/stok">Stok</Link>
        </li>
        <li className="mr-5">
          <Link href="/pelanggan">Pelanggan</Link>
        </li>
        <li className="mr-5">
          <Link href="/meja">Meja</Link>
        </li>
        <li className="mr-5">
          <Link href="/pemesanan">Pemesanan</Link>
        </li>
      </ul> */}
      {children}
    </div>
  );
};

export default MainLayout;
