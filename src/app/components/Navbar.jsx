"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../images/logo.png";
import { FaSun, FaMoon } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);

    // A function that handles humburger menu
  };
  return (
    <nav
      className={`fixed w-full h-20 shadow-xl z-10 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-cyan-200 text-black"
      }`}
    >
      <div className="flex justify-between items-center h-full px-4">
        <Link href="/">
          <div className="animate-pulse shadow-lg cursor-pointer bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-2 rounded-full">
            <Image src={Logo} alt="logo" width="205" height="75" priority />
          </div>
        </Link>
        <div className="hidden sm:flex">
          <ul className="flex gap-4">
            <Link href="/">
              <li className="text-xl font-SymbioticSen pt-2 cursor-pointer hover:animate-pulse hover:font-bold hover:text-blue-800">Home</li>
            </Link>
            <Link href="Services.jsx">
              <li className="text-xl font-SymbioticSen pt-2 hover:animate-pulse hover:font-bold hover:text-blue-800">Services</li>
            </Link>
            <Link href="../pages/Careers.jsx">
              <li className="text-xl font-SymbioticSen pt-2 hover:animate-pulse hover:font-bold hover:text-blue-800">Careers</li>
            </Link>
            <Link href="../pages/AboutUs.jsx">
              <li className="text-xl font-SymbioticSen pt-2 hover:animate-pulse hover:font-bold hover:text-blue-800">About Us</li>
            </Link>
            <Link href="../pages/Login.jsx">
            <li className="cursor-pointer bg-gradient-to-r from-blue-500 from-10% to-emerald-500 to-90% p-2 rounded-full hover:animate-pulse hover:font-bold hover:text-blue-800">
              Log in{" "}
            </li>
            </Link>
            <button className="cursor-pointer" onClick={toggleMode}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div
        className={`${
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-blue-300 p-10 ease-in duration-75 opacity-80"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-100"
        } ${isDarkMode ? "bg-cyan-950 text-white" : "bg-cyan-200 text-black"}`}
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <ul className="flex-col py-5">
          <Link href="../page.js">
            <li
              onClick={() => setMenuOpen(false)}
              className="text-xl font-SymbioticSen py-3"
            >
              Home
            </li>
          </Link>
          <Link href="../page.js">
            <li
              onClick={() => setMenuOpen(false)}
              className="text-xl font-SymbioticSen py-3"
            >
              Services
            </li>
          </Link>
          <Link href="../page.js">
            <li
              onClick={() => setMenuOpen(false)}
              className="text-xl font-SymbioticSen py-3"
            >
              Careers
            </li>
          </Link>
          <Link href="../page.js">
            <li
              onClick={() => setMenuOpen(false)}
              className="text-xl font-SymbioticSen py-3"
            >
              About Us
            </li>
          </Link>
          <li
            onClick={() => setMenuOpen(false)}
            className="text-xl cursor-pointer bg-gradient-to-r from-blue-500 from-10% to-emerald-500 to-90% p-2 rounded-full"
          >
            Log in{" "}
          </li>
          <button className="cursor-pointer py-5" onClick={toggleMode}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
