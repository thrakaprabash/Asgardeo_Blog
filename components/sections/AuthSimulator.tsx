"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  ShieldCheck,
  Key,
  Fingerprint,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  Lock,
  UserCheck,
} from "lucide-react";

export function AuthSimulator() {
  const [stage, setStage] = useState<"idle" | "evaluating" | "mfa" | "authenticated">("idle");
  const [selectedMethod, setSelectedMethod] = useState<"passkey" | "google" | "sso">("passkey");

  const handleStartAuth = () => {
    setStage("evaluating");
    setTimeout(() => {
      setStage("mfa");
    }, 1200);
  };

  const handleCompleteMFA = () => {
    setStage("authenticated");
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#FF7300", "#5C45FD", "#00E5FF", "#FFA043"],
    });
  };

  const handleReset = () => {
    setStage("idle");
  };

  const mockToken = {
    header: {
      alg: "RS256",
      typ: "JWT",
      kid: "asgardeo-key-2026-prod",
    },
    payload: {
      iss: "https://api.asgardeo.io/t/my-org/oauth2/token",
      sub: "usr_94b8e2194ca0",
      aud: "c4f820c78a014a",
      email: "developer@acmecorp.io",
      org_name: "acme-enterprises",
      amr: [selectedMethod, "adaptive-mfa-verified"],
      scope: "openid profile email groups",
      exp: 1788700000,
    },
  };

  return (
    <section id="simulation" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10 relative">
      <div className="text-center mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive Demo
        </div>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
          Experience Asgardeo in Action
        </h3>
        <p className="text-sm text-gray-400 max-w-xl mx-auto">
          Simulate an authentication handshake, test biometric passkeys, and inspect the resulting cryptographic JWT payload.
        </p>
      </div>

      <div className="rounded-2xl bg-surface-100/80 border border-white/10 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Controls / Simulation Flow */}
          <div className="md:col-span-6 space-y-5">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                Select Authentication Provider:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["passkey", "google", "sso"] as const).map((method) => (
                  <button
                    key={method}
                    disabled={stage !== "idle"}
                    onClick={() => setSelectedMethod(method)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                      selectedMethod === method
                        ? "bg-asgardeo-orange/20 border-asgardeo-orange text-white"
                        : "bg-surface-200/50 border-white/10 text-gray-400 hover:text-white"
                    } ${stage !== "idle" ? "opacity-60 cursor-not-allowed" : ""}`}
                  >
                    {method === "passkey" && "Biometric"}
                    {method === "google" && "Google IdP"}
                    {method === "sso" && "Enterprise SSO"}
                  </button>
                ))}
              </div>
            </div>

            {/* Stage Transitions */}
            <div className="space-y-3">
              {stage === "idle" && (
                <button
                  onClick={handleStartAuth}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-asgardeo-orange to-asgardeo-orangeDark hover:brightness-110 shadow-asgardeo-glow flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Key className="w-4 h-4" />
                  <span>Initiate Asgardeo OAuth2 Flow</span>
                </button>
              )}

              {stage === "evaluating" && (
                <div className="p-4 rounded-xl bg-asgardeo-purple/10 border border-asgardeo-purple/30 text-center space-y-2">
                  <RefreshCw className="w-5 h-5 text-asgardeo-purpleLight animate-spin mx-auto" />
                  <p className="text-xs font-semibold text-purple-200">
                    Evaluating device context, IP reputation & Zero-Trust policies...
                  </p>
                </div>
              )}

              {stage === "mfa" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-5 rounded-xl bg-surface-200 border border-asgardeo-cyan/40 space-y-3 shadow-cyan-glow"
                >
                  <div className="flex items-center gap-2 text-asgardeo-cyan text-sm font-bold">
                    <Fingerprint className="w-5 h-5 animate-pulse" />
                    <span>Adaptive Step-Up Verification</span>
                  </div>
                  <p className="text-xs text-gray-300">
                    Context matched security policy. Verify biometric passkey or confirm one-time challenge.
                  </p>
                  <button
                    onClick={handleCompleteMFA}
                    className="w-full py-2.5 rounded-lg text-xs font-bold text-white bg-asgardeo-cyan/20 hover:bg-asgardeo-cyan/30 border border-asgardeo-cyan/50 transition-colors"
                  >
                    Confirm Biometric Auth (Touch ID / Face ID)
                  </button>
                </motion.div>
              )}

              {stage === "authenticated" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
                >
                  <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-sm">
                    <UserCheck className="w-5 h-5" />
                    <span>Authentication Successful & Verified</span>
                  </div>
                  <p className="text-xs text-gray-300">
                    Identity delegated cleanly to Asgardeo. Valid JWT issued.
                  </p>
                  <button
                    onClick={handleReset}
                    className="text-xs text-gray-400 hover:text-white underline"
                  >
                    Reset & test another provider
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Column: Live JWT Inspection */}
          <div className="md:col-span-6">
            <div className="p-4 rounded-xl bg-[#090C14] border border-white/10 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-gray-400">
                <span className="flex items-center gap-1.5 text-xs text-asgardeo-orange">
                  <Lock className="w-3.5 h-3.5" />
                  Verified Claims (JWT)
                </span>
                <span className="text-[10px] text-gray-500">RS256 • Asgardeo IdP</span>
              </div>

              <pre className="text-gray-300 overflow-x-auto leading-relaxed max-h-[260px]">
                <code>{JSON.stringify(mockToken.payload, null, 2)}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
