"use client"

import React from "react";
import { UserProfile } from "./UserProfile";
import { NavBar } from "./NavBar";
import { Logo } from "./Logo";
import { useScroll } from "../hooks/useScroll";
import SearchForm from "./SearchForm";
import { useRouter, useSearchParams } from "next/navigation";


export default function Header() {
  const isScrolled = useScroll();
  const router = useRouter();
  const params = useSearchParams();
  const initialSearchTerm = params.get('title') || '';
  const [searchTerm, setSearchTerm] = React.useState(initialSearchTerm)

  const onSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newParams = new URLSearchParams(params.toString())
    newParams.set('title', searchTerm);

    router.push(`/search?${newParams.toString()}`)
  }

  return (
    <header className={`${isScrolled && 'bg-black'} fixed top-0 z-50 flex w-full items-center justify-between px-4 p-2 lg:px-16 lg:py-6 transition-all`}>
      <div className="flex items-center space-x-2 md:space-x-4">
        <Logo />
        <NavBar />
      </div>

      <div className="flex items-center space-x-2 md:space-x-4">
        <SearchForm
          searchTerm={searchTerm}
          onSearchTermChange={onSearchTermChange}
          onSearch={onSearch}
        />
        <UserProfile />
      </div>
    </header>
  )
}