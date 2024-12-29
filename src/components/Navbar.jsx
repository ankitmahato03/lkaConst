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

const irishgrover = localFont({ src: "../app/fonts/IrishGrover.woff" });

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Our Team",
      href: "/our-team",
    }
  ];
  const services = [
    { title: "Auditing & Attest", href: "/auditing-attest" },
    { title: "Accounting", href: "/accounting" },
    { title: "Start A Business", href: "/start-business" },
    { title: "Direct Taxation", href: "/direct-taxation" },
    { title: "Financial Advisory Services", href: "/financial-advisory" },
    { title: "Corporate Advisory", href: "/corporate-advisory" },
    { title: "GST and Custom Duty", href: "/gst-custom" }
  ];

  return (
    <motion.nav
      className={`w-full fixed top-0 left-0 px-4 sm:px-6 lg:px-[100px] py-3 flex flex-row justify-between items-center transition-colors duration-300 z-50 ${
        isScrolled ? "bg-[#1a1a1a] shadow-lg" : "bg-transparent"
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
              className="cursor-pointer text-white hover:text-[#1EE05B] transition-colors"
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
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-[#1EE05B] transition-colors text-[18px]">
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
      <button
        className="lg:hidden text-white focus:outline-none z-50 relative"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#1a1a1a] z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={item.href}
                  className="text-white text-2xl mb-4 hover:text-[#1EE05B] transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.title}
                </motion.a>
              ))}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent text-white hover:text-[#1EE05B] transition-colors text-2xl">
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 w-[200px]">
                          {services.map((service, index) => (
                            <motion.li
                              key={service}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
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
                            </motion.li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </motion.div>
              <motion.button
                className="bg-[#1EE05B] text-black px-6 py-3 rounded-full hover:bg-[#19B84A] transition-colors text-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navItems.length + 1) * 0.1 }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
