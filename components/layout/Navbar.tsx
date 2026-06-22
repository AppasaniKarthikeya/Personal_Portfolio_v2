"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/utils";

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-12 py-4 backdrop-blur-md transition-all duration-500 ease-out border-b ${
        isScrolled
          ? "border-neo-crimson bg-neo-bg/90"
          : "border-[#5b403f] bg-neo-bg/80"
      }`}
    >
      <div className="font-headline-md text-neo-crimson tracking-tighter">
        KA_
      </div>

      <div className="hidden md:flex gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="font-label-sm text-text-warm hover:text-neo-crimson transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        onClick={(e) => scrollToSection(e, "#contact")}
        className="font-label-sm px-4 py-2 bg-neo-crimson text-black border border-transparent hover:bg-transparent hover:border-neo-crimson hover:text-neo-crimson transition-colors duration-300"
      >
        Connect
      </a>

      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
    </motion.nav>
  );
}
