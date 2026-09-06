"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { blogMeta } from "@/lib/blogData";
import { ShieldCheck, ArrowRight, Sparkles, Lock, Layers, Cpu } from "lucide-react";

// Dynamic import for 3D Canvas with ssr: false
const FloatingShield = dynamic(() => import("@/components/three/FloatingShield"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border-2 border-asgardeo-orange/20 border-t-asgardeo-orange animate-spin" />
    </div>
  ),
});

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column: Typography and Hook */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Brand Tag / Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-gradient-to-r from-asgardeo-orange/15 via-asgardeo-purple/15 to-transparent border border-asgardeo-orange/30 text-white backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-asgardeo-orange opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-asgardeo-orange" />
            </span>
            <span className="text-asgardeo-orange font-bold uppercase tracking-wider text-[11px]">
              {blogMeta.product}
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300">{blogMeta.category}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
            Stop Building Your Own{" "}
            <span className="text-gradient">Login Page</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl font-medium text-gray-300 tracking-tight">
            How Asgardeo Solves the Authentication Headache
          </p>

          {/* Author / Designer Byline */}
          <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
            <span>
              Designed by{" "}
              <span className="text-white font-semibold">{blogMeta.author}</span>
            </span>
            <span className="text-gray-600">•</span>
            <span>{blogMeta.readTime}</span>
          </div>

          {/* Hook Paragraph from Blog */}
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-normal">
            {blogMeta.intro}
          </p>

          {/* Key Quote / Callout */}
          <div className="p-4 rounded-xl bg-asgardeo-orange/10 border-l-4 border-asgardeo-orange text-gray-200 text-sm sm:text-base font-medium">
            &ldquo;{blogMeta.leadSummary}&rdquo;
          </div>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#problem"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-asgardeo-orange to-asgardeo-orangeDark hover:brightness-110 shadow-asgardeo-glow transition-all active:scale-95"
            >
              <span>Why Auth Is Hard</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#simulation"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-gray-200 bg-surface-100 hover:bg-surface-50 border border-white/10 transition-all hover:border-asgardeo-purple/50"
            >
              <Sparkles className="w-4 h-4 text-asgardeo-purpleLight" />
              <span>Try Live Auth Simulator</span>
            </a>
          </div>

          {/* Fast Tech Highlights */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <Lock className="w-3.5 h-3.5 text-asgardeo-orange" />
              </div>
              <span className="text-xs text-gray-400 font-medium">OIDC & OAuth 2.0</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Layers className="w-3.5 h-3.5 text-asgardeo-purple" />
              </div>
              <span className="text-xs text-gray-400 font-medium">SSO & MFA Built-in</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Cpu className="w-3.5 h-3.5 text-asgardeo-cyan" />
              </div>
              <span className="text-xs text-gray-400 font-medium">React & Mobile SDKs</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Interactive Shield Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Subtle back glowing orb */}
          <div className="absolute w-72 h-72 rounded-full bg-asgardeo-orange/20 blur-[100px] pointer-events-none" />
          <div className="absolute w-64 h-64 rounded-full bg-asgardeo-purple/20 blur-[90px] pointer-events-none translate-y-12" />

          <div className="w-full relative z-10">
            <FloatingShield />
            <div className="text-center mt-2">
              <span className="text-[11px] font-mono tracking-wider uppercase text-gray-500 bg-surface-200/80 px-3 py-1 rounded-full border border-white/5">
                3D Cryptographic Core • Drag to Inspect
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
