"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { codeExamples } from "@/lib/blogData";
import { Check, Copy, Terminal, Code2, Sparkles, Layers } from "lucide-react";

export function DeveloperImpactSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper
      id="sdks"
      badge="Why This Matters For Developers"
      title="Focus on Your App, Not Auth Plumbing"
      subtitle="You get enterprise-grade identity security without becoming an identity security expert. Integrate in minutes with lightweight SDKs."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Key Developer Insights from Blog */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-surface-100/70 border border-white/10 backdrop-blur-md space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-asgardeo-orange" />
              Build the Real Feature
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-normal">
              Whether you are building a MERN-stack SaaS or a Kotlin-based Android app, you focus on your product&apos;s actual features — the dashboard, the marketplace, the booking engine.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed font-normal">
              Asgardeo handles who&apos;s allowed in, how they prove who they are, and token lifetimes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-100/70 border border-white/10 backdrop-blur-md space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Layers className="w-5 h-5 text-asgardeo-purpleLight" />
              Scales as You Grow
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-normal">
              A side project might start with basic email/password. As that project evolves into an enterprise product, you can toggle SSO, MFA, or social login <span className="text-white font-semibold">without rewriting your auth layer</span>.
            </p>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-asgardeo-cyan">
              Auth was never hard-baked into your codebase.
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Code Sandbox */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-[#0B0F19] border border-white/10 overflow-hidden shadow-2xl">
            {/* Tab Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-surface-200/80 border-b border-white/10">
              <div className="flex items-center gap-2">
                {codeExamples.map((item, idx) => (
                  <button
                    key={item.framework}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === idx
                        ? "bg-asgardeo-orange text-white shadow-asgardeo-glow"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.framework}
                  </button>
                ))}
              </div>

              {/* Copy button */}
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 transition-colors"
                title="Copy code"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Sub-description */}
            <div className="px-5 py-2.5 bg-surface-300/60 border-b border-white/5 flex items-center gap-2 text-xs text-gray-400 font-mono">
              <Terminal className="w-3.5 h-3.5 text-asgardeo-orange" />
              <span>{codeExamples[activeTab].description}</span>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs text-gray-300 overflow-x-auto max-h-[420px] leading-relaxed">
              <pre>
                <code>{codeExamples[activeTab].code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
