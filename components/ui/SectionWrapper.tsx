"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  badge?: string;
  title?: string;
  subtitle?: string;
}

export function SectionWrapper({
  id,
  className,
  children,
  badge,
  title,
  subtitle,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10", className)}
    >
      {(badge || title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-asgardeo-orange/10 border border-asgardeo-orange/30 text-asgardeo-orange">
              <span className="w-1.5 h-1.5 rounded-full bg-asgardeo-orange animate-ping" />
              {badge}
            </div>
          )}

          {title && (
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="text-base sm:text-lg text-gray-400 font-normal leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}

      {children}
    </section>
  );
}
