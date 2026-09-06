"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  Smartphone,
  Laptop,
  Cloud,
  Shield,
  Key,
  ArrowRight,
  Database,
  Lock,
  CheckCircle2,
} from "lucide-react";

export function ArchitectureSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      name: "Delegated Auth Request",
      desc: "User clicks 'Log In'. Your app delegates authentication to Asgardeo with PKCE challenge (OAuth 2.0 / OIDC).",
      from: "Client App",
      to: "Asgardeo Cloud",
      highlight: "orange",
    },
    {
      step: "02",
      name: "Identity & Risk Evaluation",
      desc: "Asgardeo checks user directory, executes Adaptive MFA policies, prompts for biometrics / passkeys or social login.",
      from: "Asgardeo Engine",
      to: "MFA / IdP Providers",
      highlight: "purple",
    },
    {
      step: "03",
      name: "Cryptographic Token Handshake",
      desc: "Upon successful authentication, Asgardeo signs an ID Token and Access Token (JWT) with its private key.",
      from: "Asgardeo IdP",
      to: "Client Application",
      highlight: "cyan",
    },
    {
      step: "04",
      name: "Stateless API Access",
      desc: "Your backend API verifies the JWT using Asgardeo's public JWKS endpoint without hitting the database.",
      from: "Backend API",
      to: "Protected Resources",
      highlight: "emerald",
    },
  ];

  return (
    <SectionWrapper
      id="architecture"
      badge="How It Works"
      title="Architecture & Protocol Flow"
      subtitle="See how Asgardeo fits between your frontends, identity directories, and backend services to ensure zero-trust security."
    >
      {/* Interactive Visual Pipeline */}
      <div className="p-8 rounded-2xl bg-surface-100/60 border border-white/10 backdrop-blur-xl mb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Step 1: User / Client */}
          <div
            onClick={() => setActiveStep(0)}
            className={`cursor-pointer p-5 rounded-xl border transition-all duration-300 ${
              activeStep === 0
                ? "bg-asgardeo-orange/20 border-asgardeo-orange shadow-asgardeo-glow scale-[1.02]"
                : "bg-surface-200/60 border-white/10 hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-orange-500/20 flex items-center justify-center text-asgardeo-orange">
                <Laptop className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-gray-400">Step 1</span>
            </div>
            <h4 className="font-bold text-white text-sm mb-1">Your Application</h4>
            <p className="text-xs text-gray-400">React, Next.js, Mobile App</p>
          </div>

          {/* Step 2: Asgardeo */}
          <div
            onClick={() => setActiveStep(1)}
            className={`cursor-pointer p-5 rounded-xl border transition-all duration-300 ${
              activeStep === 1
                ? "bg-asgardeo-purple/20 border-asgardeo-purple shadow-purple-glow scale-[1.02]"
                : "bg-surface-200/60 border-white/10 hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center text-asgardeo-purple">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-gray-400">Step 2</span>
            </div>
            <h4 className="font-bold text-white text-sm mb-1">Asgardeo CIAM</h4>
            <p className="text-xs text-gray-400">Risk-based MFA & OAuth2 Core</p>
          </div>

          {/* Step 3: Identity Providers */}
          <div
            onClick={() => setActiveStep(2)}
            className={`cursor-pointer p-5 rounded-xl border transition-all duration-300 ${
              activeStep === 2
                ? "bg-cyan-500/20 border-asgardeo-cyan shadow-cyan-glow scale-[1.02]"
                : "bg-surface-200/60 border-white/10 hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/20 flex items-center justify-center text-asgardeo-cyan">
                <Cloud className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-gray-400">Step 3</span>
            </div>
            <h4 className="font-bold text-white text-sm mb-1">Federated IdPs</h4>
            <p className="text-xs text-gray-400">Google, GitHub, SAML, Passkeys</p>
          </div>

          {/* Step 4: Backend API */}
          <div
            onClick={() => setActiveStep(3)}
            className={`cursor-pointer p-5 rounded-xl border transition-all duration-300 ${
              activeStep === 3
                ? "bg-emerald-500/20 border-emerald-400 shadow-[0_0_30px_rgba(52,211,153,0.3)] scale-[1.02]"
                : "bg-surface-200/60 border-white/10 hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Database className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-gray-400">Step 4</span>
            </div>
            <h4 className="font-bold text-white text-sm mb-1">Your Backend API</h4>
            <p className="text-xs text-gray-400">JWT Token Validation</p>
          </div>
        </div>

        {/* Selected Step Deep Dive */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-6 rounded-xl bg-surface-200/80 border border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-asgardeo-orange">
                Phase {steps[activeStep].step}
              </span>
              <h4 className="text-lg font-bold text-white">
                {steps[activeStep].name}
              </h4>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <span>{steps[activeStep].from}</span>
              <ArrowRight className="w-3.5 h-3.5 text-asgardeo-orange" />
              <span>{steps[activeStep].to}</span>
            </div>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed font-normal">
            {steps[activeStep].desc}
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
