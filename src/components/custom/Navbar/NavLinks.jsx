"use client"
import React from 'react'
import { FlexRow } from '../UI'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavLinks = () => {

    const pathname = usePathname()

  return (
    <FlexRow className="hidden md:flex gap-3">
        <Link className={`text-xl ${pathname === "/" ? "text-orange-500" : 'text-white'}`} href="/">Home</Link>
        <Link className={`text-xl ${pathname === "/product" || pathname.includes("/category") ? "text-orange-500" : 'text-white'}`} href="/product">Products</Link>
        <Link className={`text-xl ${pathname === "/gallery" ? "text-orange-500" : 'text-white'}`} href="/gallery">Gallery</Link>
        <Link className={`text-xl ${pathname === "/location" ? "text-orange-500" : 'text-white'}`} href="/location">Location</Link>
    </FlexRow>
  )
}

export default NavLinks