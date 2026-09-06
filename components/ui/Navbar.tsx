"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Shield, ExternalLink, Menu, X } from "lucide-react";

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navLinks = [
    { name: "The Problem", href: "#problem", id: "problem" },
    { name: "The Solution", href: "#solution", id: "solution" },
    { name: "Code Delta", href: "#diff", id: "diff" },
    { name: "Architecture", href: "#architecture", id: "architecture" },
    { name: "Developer SDKs", href: "#sdks", id: "sdks" },
    { name: "FAQ", href: "#faq", id: "faq" },
    { name: "Takeaway", href: "#takeaway", id: "takeaway" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // ScrollSpy logic: detect which section is currently centered/active
      const sectionIds = navLinks.map((l) => l.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top reading progress line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-asgardeo-orange via-amber-400 to-asgardeo-purple origin-left z-50"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-surface-300/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-asgardeo-orange to-asgardeo-purple p-0.5 shadow-asgardeo-glow group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-surface-300 rounded-[10px] flex items-center justify-center">
                <Shield className="w-5 h-5 text-asgardeo-orange group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black tracking-tight text-lg text-white">
                  Asgardeo
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-asgardeo-orange/20 text-asgardeo-orange border border-asgardeo-orange/30">
                  CIAM
                </span>
              </div>
              <span className="text-xs text-gray-400 font-medium block">
                by WSO2
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with ScrollSpy */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-asgardeo-orange/20 to-asgardeo-purple/20 border border-asgardeo-orange/40 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wso2.com/asgardeo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-asgardeo-orange to-asgardeo-orangeDark hover:brightness-110 shadow-asgardeo-glow transition-all active:scale-95"
            >
              <span>Explore Asgardeo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white bg-white/5 border border-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden px-4 pt-3 pb-6 bg-surface-200/95 backdrop-blur-xl border-b border-white/10 space-y-2"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-asgardeo-orange bg-asgardeo-orange/10 font-bold"
                      : "text-gray-200 hover:text-asgardeo-orange"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href="https://wso2.com/asgardeo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-asgardeo-orange shadow-asgardeo-glow"
              >
                <span>Explore Asgardeo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}
