"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { takeawayPoints } from "@/lib/blogData";
import {
  ShieldAlert,
  Rocket,
  TrendingUp,
  ExternalLink,
  Shield,
  Heart,
} from "lucide-react";

export function TakeawaySection() {
  const icons: Record<string, React.ReactNode> = {
    ShieldAlert: <ShieldAlert className="w-5 h-5 text-rose-400" />,
    Rocket: <Rocket className="w-5 h-5 text-asgardeo-orange" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-asgardeo-cyan" />,
  };

  return (
    <SectionWrapper id="takeaway" className="pt-12 pb-24">
      {/* Central Hero Quote */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center space-y-6 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-asgardeo-orange/10 border border-asgardeo-orange/30 text-asgardeo-orange">
          The Takeaway
        </div>

        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
          &ldquo;Authentication isn&apos;t a feature users notice when it works — but it&apos;s the{" "}
          <span className="text-gradient">first thing they notice when it breaks</span>.&rdquo;
        </blockquote>

        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Asgardeo&apos;s core value is simple: let a dedicated, secure, enterprise-tested identity platform handle login and access control, so you can spend your time building the product itself.
        </p>
      </motion.div>

      {/* 3 Summary Takeaway Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {takeawayPoints.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-surface-100/60 border border-white/10 backdrop-blur-md flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              {icons[item.icon]}
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Big Asgardeo CTA Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-br from-surface-100 via-surface-200 to-background border border-asgardeo-orange/30 shadow-asgardeo-glow text-center space-y-6"
      >
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-asgardeo-orange/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-asgardeo-purple/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to stop building login pages?
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Start securing your React, Node, or mobile app today with WSO2 Asgardeo. Generous free tier with up to 1,000 monthly active users and unlimited SSO.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wso2.com/asgardeo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-asgardeo-orange to-asgardeo-orangeDark hover:brightness-110 shadow-asgardeo-glow transition-all active:scale-95"
            >
              <span>Get Started with Asgardeo Free</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://wso2.com/asgardeo/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <span>Read Documentation</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-asgardeo-orange" />
          <span>WSO2 Asgardeo CIAM Architecture Deep-Dive</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400">
          <span>Designed & Built by</span>
          <span className="font-semibold text-white">Tharaka Prabash Lakpriya</span>
        </div>
      </footer>
    </SectionWrapper>
  );
}
