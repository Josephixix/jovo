"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > lastScroll && currentScroll > 80) {
        setShow(false)
      } else {
        setShow(true)
      }

      setLastScroll(currentScroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScroll])

  return (
    <>
      {/* Navbar */}
      <nav
        className={`sticky top-0 z-40 w-full transform transition-transform duration-300 bg-gray-50 backdrop-blur ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-gray-50/90 backdrop-blur ">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="text-lg font-bold">
              Jovo_dev
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 font-medium">
              <Link href="#home"  className=" hover:bg-gray-200 transition-all duration-300">Home</Link>
              <Link href="#about" className=" hover:bg-gray-200 transition-all duration-300">About</Link>
              <Link href="#projects" className=" hover:bg-gray-200 transition-all duration-300">Projects</Link>
              <Link href="#contact" className=" hover:bg-gray-200 transition-all duration-300">Contact</Link>
            </div>

            {/* Desktop CTA */}
            <Link
              href="mailto:josephukohaobasi@gmail.com"
              className="hidden md:inline-flex rounded-full bg-black px-5 py-2 text-sm text-white font-semibold hover:bg-gray-800 transition-all duration-300"
            >
              Contact Me
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden flex flex-col gap-1.5"
            >
              <span className="h-0.5 w-6 bg-black" />
              <span className="h-0.5 w-6 bg-black" />
              <span className="h-0.5 w-6 bg-black" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">

          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-6">
            <span className="text-lg font-semibold">Jovo_dev</span>
            <button
              onClick={() => setOpen(false)}
              className="text-4xl leading-none"
            >
              ×
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-1 flex-col items-center justify-center gap-10 text-2xl">
            <Link onClick={() => setOpen(false)} href="#home">Home</Link>
            <Link onClick={() => setOpen(false)} href="#about">About</Link>
            <Link onClick={() => setOpen(false)} href="#projects">Projects</Link>
            <Link onClick={() => setOpen(false)} href="#contact">Contact</Link>

            <Link
              onClick={() => setOpen(false)}
              href="mailto:josephukohaobasi@gmail.com"
              className="mt-10 rounded-full bg-black px-8 py-4 text-white text-lg"
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
