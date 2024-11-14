import logo from "../assets/logo.png";
import React, { useState } from "react";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react"; // icon

export function Navbar() {
  // inital the value is set to false to say that its not open
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // with the help of toogle function the value is changed
  const toogleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="conatiner px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/*  below div for imag & title2*/}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>

          {/* few comp */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* 2 anker */}
          <div className="hidden lg:flex justify-center space-x-12 item-center">
            {/* button 1 */}
            <a
              href="#"
              className="px-2 py-3 border rounded-md  bg-gradient-to-r from-orange-800 to-orange-500"
            >
              Sign In
            </a>
            {/* button 2 */}
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 px-2 py-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          {/* small screen button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toogleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
              
            </button>
          </div>
        </div>
        {/* for small screen comp to show inside the menu the mobiledrawopen should be true then it shows ...*/}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-netural-900 w-full p-12 flex flex-col lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
              <div className="flex space-x-6">
                <a href="#" className="py-2 px-3 border rounded-md"> Sign In </a>
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 px-2 py-3 rounded-md">Create an account</a>
              </div>
          </div>
        )}
      </div>
    </nav>
  );
}
