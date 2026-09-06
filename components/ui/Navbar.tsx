"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Shield, Sparkles, ExternalLink, Menu, X } from "lucide-react";

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The Problem", href: "#problem" },
    { name: "The Solution", href: "#solution" },
    { name: "Architecture", href: "#architecture" },
    { name: "Developer SDKs", href: "#sdks" },
    { name: "Takeaway", href: "#takeaway" },
  ];

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
            ? "bg-surface-300/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
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

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-asgardeo-orange after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
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
            className="md:hidden px-4 pt-3 pb-6 bg-surface-200/95 backdrop-blur-xl border-b border-white/10 space-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-gray-200 hover:text-asgardeo-orange py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wso2.com/asgardeo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-asgardeo-orange"
            >
              <span>Explore Asgardeo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        )}
      </header>
    </>
  );
}
