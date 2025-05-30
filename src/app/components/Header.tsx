"use client"

import React from "react";
import { UserProfile } from "./UserProfile";
import { NavBar } from "./NavBar";
import { Logo } from "./Logo";
import { useScroll } from "../hooks/useScroll";

export default function Header() {
  const isScrolled = useScroll();

  return (
    <header className={`${isScrolled && 'bg-black'} fixed top-0 z-50 flex w-full items-center justify-between px-4 p-2 lg:px-16 lg:py-6 transition-all`}>
      <div className="flex items-center space-x-2 md:space-x-4">
        <Logo />
        <NavBar />
      </div>

      <UserProfile />
    </header>
  )
}