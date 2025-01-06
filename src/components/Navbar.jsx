"use client";

import localFont from "next/font/local";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

const irishgrover = localFont({ src: "../app/fonts/IrishGrover.woff" });

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Our Team", href: "/our-team" },
  ];

  const services = [
    { title: "Auditing & Attest", href: "/auditing-attest" },
    { title: "Accounting", href: "/accounting" },
    { title: "Start A Business", href: "/start-business" },
    { title: "Direct Taxation", href: "/direct-taxation" },
    { title: "Financial Advisory Services", href: "/financial-advisory" },
    { title: "Corporate Advisory", href: "/corporate-advisory" },
    { title: "GST and Custom Duty", href: "/gst-custom" },
  ];

  return (
    <motion.nav
      className={`w-full fixed top-0 left-0 px-4 sm:px-6 lg:px-[100px] py-3 flex flex-row justify-between items-center transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-[#1a1a1a]/70 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        id="logoName"
        className={`${irishgrover.className} text-3xl sm:text-4xl lg:text-[48px] text-[#1EE05B]`}
        whileHover={{ scale: 1.05 }}
      >
        <Link href={"/"} passHref>
          LKA
        </Link>
      </motion.h1>

      {/* Desktop Menu */}
      <div className="hidden lg:block">
        <ul className="flex flex-row justify-between items-center gap-5 text-[18px]">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className={`cursor-pointer hover:text-[#1EE05B] transition-colors ${
                isScrolled ? "text-white" : "text-black"
              }`}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={item.href} passHref>
                {item.title}
              </Link>
            </motion.li>
          ))}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`bg-transparent hover:text-[#1EE05B] transition-colors text-[18px] ${
                    isScrolled ? "text-white" : "text-black"
                  }`}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[200px] md:grid-cols-1 lg:w-[200px]">
                    {services.map((service) => (
                      <li key={service}>
                        <NavigationMenuLink asChild>
                          <Link
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href={service.href}
                          >
                            <div className="text-sm font-medium leading-none">
                              {service.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <motion.button
            className="bg-[#1EE05B] text-black px-4 py-2 rounded-full hover:bg-[#19B84A] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={"/contact-us"}>Contact Us</Link>
          </motion.button>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      {/* <button
        className={`lg:hidden focus:outline-none z-50 relative ${
          isScrolled ? "text-white" : "text-black"
        }`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <Menu size={24} />
        )}
      </button> */}

      {/* Mobile Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className={`lg:hidden ${isScrolled ? "text-white" : "text-black"}`}
          >
            <Menu className="h-20" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className="block px-2 py-1 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <NavigationMenu orientation="vertical">
              <NavigationMenuList className="flex-col items-start">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-lg">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px]">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              href={service.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="text-sm font-medium leading-none">
                                {service.title}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button
              asChild
              className="bg-[#1EE05B] text-black hover:bg-[#19B84A] w-full"
            >
              <Link
                href="/contact-us"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </motion.nav>
  );
};

export default Navbar;
