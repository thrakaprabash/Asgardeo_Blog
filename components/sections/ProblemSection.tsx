"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { TiltCard } from "@/components/ui/TiltCard";
import { problemsData, dilemmaComparison } from "@/lib/blogData";
import {
  ShieldAlert,
  TrendingUp,
  Scale,
  Clock,
  AlertTriangle,
  XCircle,
  CheckCircle2,
  Flame,
} from "lucide-react";

export function ProblemSection() {
  const iconMap: Record<string, React.ReactNode> = {
    security: <ShieldAlert className="w-6 h-6 text-rose-400" />,
    requirements: <TrendingUp className="w-6 h-6 text-amber-400" />,
    compliance: <Scale className="w-6 h-6 text-blue-400" />,
    "opportunity-cost": <Clock className="w-6 h-6 text-purple-400" />,
  };

  return (
    <SectionWrapper
      id="problem"
      badge="The Problem"
      title="Authentication Is Deceptively Hard"
      subtitle="Authentication looks like a weekend project. In reality, it's one of the riskiest, most brittle parts of your entire software stack."
    >
      {/* 4 Key Problem Cards with 3D Tilt */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {problemsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TiltCard
              glowColor={index % 2 === 0 ? "orange" : "purple"}
              className="p-6 sm:p-8 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {iconMap[item.id]}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400 font-mono">
                <span className="text-gray-500">Risk Factor</span>
                <span className="text-amber-400 font-medium">{item.stat}</span>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* The Dilemma: Underinvest vs Overinvest vs Asgardeo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 pt-12 border-t border-white/10"
      >
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            The Architectural Dilemma
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Most teams get trapped on both extremes
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Teams either underinvest and ship something insecure, or overinvest and burn months reinventing the wheel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Underinvest Card */}
          <div className="p-6 rounded-2xl bg-surface-100/50 border border-red-500/20 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 text-rose-400 mb-2">
              <XCircle className="w-5 h-5" />
              <h4 className="font-bold text-base text-white">{dilemmaComparison.underinvest.title}</h4>
            </div>
            <p className="text-xs text-rose-300 font-medium mb-4">{dilemmaComparison.underinvest.subtitle}</p>
            <ul className="space-y-2.5 text-xs text-gray-400 mb-6">
              {dilemmaComparison.underinvest.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-400 mt-0.5">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-rose-300 text-xs font-medium">
              Result: {dilemmaComparison.underinvest.outcome}
            </div>
          </div>

          {/* Overinvest Card */}
          <div className="p-6 rounded-2xl bg-surface-100/50 border border-amber-500/20 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 text-amber-400 mb-2">
              <Flame className="w-5 h-5" />
              <h4 className="font-bold text-base text-white">{dilemmaComparison.overinvest.title}</h4>
            </div>
            <p className="text-xs text-amber-300 font-medium mb-4">{dilemmaComparison.overinvest.subtitle}</p>
            <ul className="space-y-2.5 text-xs text-gray-400 mb-6">
              {dilemmaComparison.overinvest.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium">
              Result: {dilemmaComparison.overinvest.outcome}
            </div>
          </div>

          {/* The Asgardeo Solution Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-asgardeo-orange/15 via-surface-100/80 to-surface-100/90 border-2 border-asgardeo-orange/50 shadow-asgardeo-glow backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-asgardeo-orange/20 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 text-asgardeo-orange mb-2">
              <CheckCircle2 className="w-5 h-5 text-asgardeo-orange" />
              <h4 className="font-bold text-base text-white">{dilemmaComparison.asgardeoWay.title}</h4>
            </div>
            <p className="text-xs text-asgardeo-orangeLight font-medium mb-4">{dilemmaComparison.asgardeoWay.subtitle}</p>
            <ul className="space-y-2.5 text-xs text-gray-300 mb-6">
              {dilemmaComparison.asgardeoWay.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-asgardeo-orange font-bold mt-0.5">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="p-3 rounded-lg bg-asgardeo-orange/20 border border-asgardeo-orange/40 text-orange-200 text-xs font-semibold">
              Result: {dilemmaComparison.asgardeoWay.outcome}
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
