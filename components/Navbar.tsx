"use client";

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden lg:flex">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Animation for small screen */}
      {
        isOpen && (
          <div className="absolute right-0 justify-center top-20 rounded-2xl w-[50%] bg-green-50 py-4 shadow-lg lg:hidden">
            <ul className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link onClick={()=>{setIsOpen(!isOpen)}} href={link.href} key={link.key} className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label}
                </Link>
              ))}
            </ul>

            <div className="mt-6 flexCenter" onClick={()=>{setIsOpen(!isOpen)}}>
              <Button
                type="button"
                title="Login"
                icon="/user.svg"
                variant="btn_dark_green"
              />
            </div>
          </div>
        )}

    </nav>
  )
}

export default Navbar