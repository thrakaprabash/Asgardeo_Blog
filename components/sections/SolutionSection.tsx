"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { TiltCard } from "@/components/ui/TiltCard";
import { featuresData } from "@/lib/blogData";
import {
  KeyRound,
  Users,
  ShieldCheck,
  Fingerprint,
  Code2,
  Check,
  Sparkles,
} from "lucide-react";

export function SolutionSection() {
  const iconComponents: Record<string, React.ReactNode> = {
    KeyRound: <KeyRound className="w-6 h-6 text-asgardeo-orange" />,
    Users: <Users className="w-6 h-6 text-asgardeo-purpleLight" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-asgardeo-cyan" />,
    Fingerprint: <Fingerprint className="w-6 h-6 text-emerald-400" />,
    Code2: <Code2 className="w-6 h-6 text-rose-400" />,
  };

  return (
    <SectionWrapper
      id="solution"
      badge="The Solution"
      title="Identity as a Managed Service"
      subtitle="Asgardeo takes authentication and identity management completely out of your application code and turns it into a high-availability cloud service you plug into."
    >
      {/* Lead Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-14 p-6 rounded-2xl bg-gradient-to-r from-asgardeo-orange/10 via-asgardeo-purple/10 to-transparent border border-white/10 text-center"
      >
        <p className="text-base sm:text-lg text-gray-200 font-medium leading-relaxed">
          Instead of writing your own login system, you connect your app to Asgardeo using standard
          protocols like <span className="text-asgardeo-orange font-bold">OAuth 2.0</span> and{" "}
          <span className="text-asgardeo-purpleLight font-bold">OpenID Connect</span>, and it handles all the heavy lifting.
        </p>
      </motion.div>

      {/* 5 Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresData.map((feature, idx) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}
          >
            <TiltCard
              glowColor={
                idx % 3 === 0
                  ? "orange"
                  : idx % 3 === 1
                  ? "purple"
                  : "cyan"
              }
              className="p-7 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {iconComponents[feature.iconName]}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-gray-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-xs font-semibold text-asgardeo-orangeLight mb-3">
                  {feature.headline}
                </p>

                <p className="text-sm text-gray-400 leading-relaxed mb-6 font-normal">
                  {feature.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-2">
                {feature.benefits.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2 text-xs text-gray-300">
                    <Check className="w-3.5 h-3.5 text-asgardeo-orange shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
