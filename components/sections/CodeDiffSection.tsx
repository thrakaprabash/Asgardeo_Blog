"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ShieldAlert,
  ShieldCheck,
  Zap,
  Clock,
  Code,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function CodeDiffSection() {
  const [viewMode, setViewMode] = useState<"side-by-side" | "diff">("side-by-side");
  const [activeFeature, setActiveFeature] = useState<"frontend" | "backend">("frontend");

  const frontendDIY = `// ⚠️ THE DIY WAY: Insecure, brittle & 100+ lines of auth glue
import React, { useState, useEffect } from "react";
import axios from "axios";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mfaCode, setMfaCode] = useState("");
  const [requiresMfa, setRequiresMfa] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", { email, password });
      
      // ⚠️ DANGER: Storing tokens in localStorage invites XSS theft!
      localStorage.setItem("access_token", res.data.accessToken);
      localStorage.setItem("refresh_token", res.data.refreshToken);

      // ⚠️ Manual refresh timer - easily falls out of sync
      setupTokenRefreshTimer(res.data.expiresIn);
      window.location.href = "/dashboard";
    } catch (err) {
      if (err.response?.data?.stepUpMfa) {
        setRequiresMfa(true); // Custom half-baked MFA state
      } else {
        setError("Invalid credentials or server error");
      }
    }
  };

  // ⚠️ Custom token rotation interceptor (40+ more lines omitted...)
  return (
    <form onSubmit={handleLogin}>
      {/* ⚠️ Vulnerable to CSRF without custom anti-forgery tokens */}
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Sign In</button>
    </form>
  );
}`;

  const frontendAsgardeo = `// ✅ THE ASGARDEO WAY: Enterprise OIDC with PKCE in 7 lines
import { AuthProvider, useAuthContext } from "@asgardeo/auth-react";

export default function App() {
  return (
    <AuthProvider config={{
      clientID: "YOUR_CLIENT_ID",
      baseUrl: "https://api.asgardeo.io/t/your-org",
      signInRedirectURL: "https://myapp.com/dashboard",
      signOutRedirectURL: "https://myapp.com",
      scope: ["openid", "profile", "email"]
    }}>
      <MainApp />
    </AuthProvider>
  );
}

function MainApp() {
  // ✅ Automated PKCE, silent token refresh in secure web worker
  // ✅ Zero localStorage XSS exposure
  // ✅ Instant Google, GitHub, SAML, Biometrics & Adaptive MFA
  const { state, signIn, signOut } = useAuthContext();

  if (!state.isAuthenticated) {
    return <button onClick={() => signIn()}>Sign In with Asgardeo</button>;
  }

  return <div>Welcome back, {state.displayName}!</div>;
}`;

  const backendDIY = `// ⚠️ THE DIY WAY: In-House JWT Signing & DB Session Tracking
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "./database";

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  // 1. Database query
  const user = await db.users.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  // 2. Slow bcrypt verification
  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) return res.status(401).json({ error: "Invalid credentials" });

  // 3. ⚠️ Hardcoded secret risks & token management bugs
  const accessToken = jwt.sign(
    { sub: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );

  // 4. ⚠️ Custom refresh token table insertion & rotation logic
  const refreshToken = crypto.randomBytes(64).toString("hex");
  await db.refreshTokens.create({
    data: { token: refreshToken, userId: user.id, expiresAt: new Date(Date.now() + 7*864e5) }
  });

  // 5. ⚠️ Missing audit logs, compliance consent, or adaptive risk scoring!
  res.json({ accessToken, refreshToken });
});`;

  const backendAsgardeo = `// ✅ THE ASGARDEO WAY: Stateless JWT Verification via Public JWKS
import { asgardeoAuthMiddleware } from "@asgardeo/auth-node";

// ✅ No database lookup for sessions!
// ✅ Public cryptographic keys cached from Asgardeo JWKS endpoint
// ✅ Automatic RS256 signature, expiry, and audience claim validation
const authConfig = {
  baseUrl: "https://api.asgardeo.io/t/your-org",
  issuer: "https://api.asgardeo.io/t/your-org/oauth2/token",
  jwksUri: "https://api.asgardeo.io/t/your-org/oauth2/jwks"
};

// Protect any sensitive route with one middleware line
app.get("/api/orders", asgardeoAuthMiddleware(authConfig), (req, res) => {
  // req.user contains verified claims from Asgardeo
  res.json({ data: getUserOrders(req.user.sub) });
});`;

  return (
    <SectionWrapper
      id="diff"
      badge="The Code Delta"
      title="Before vs. After Asgardeo"
      subtitle="See why senior engineers stop hand-rolling authentication. Compare the security liability of DIY auth against the simplicity of Asgardeo."
    >
      {/* Feature Selector Tabs & Metrics Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-surface-200 border border-white/10">
          <button
            onClick={() => setActiveFeature("frontend")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeFeature === "frontend"
                ? "bg-asgardeo-orange text-white shadow-asgardeo-glow"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Frontend Authentication (React / SPA)
          </button>
          <button
            onClick={() => setActiveFeature("backend")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeFeature === "backend"
                ? "bg-asgardeo-purple text-white shadow-purple-glow"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Backend Route Protection (Node.js / Express)
          </button>
        </div>

        {/* Quick Delta Stats */}
        <div className="flex items-center gap-6 text-xs font-mono">
          <div className="flex items-center gap-2 text-rose-400">
            <XCircle className="w-4 h-4" />
            <span>DIY Auth: ~120+ lines, High Risk</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>Asgardeo: ~8 lines, Zero-Trust</span>
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Left Card: DIY Auth (The Vulnerable Way) */}
        <div className="rounded-2xl bg-[#0F1420] border border-rose-500/30 overflow-hidden flex flex-col shadow-lg">
          {/* Header */}
          <div className="px-5 py-3.5 bg-rose-950/30 border-b border-rose-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold">
              <ShieldAlert className="w-4 h-4" />
              <span>WITHOUT ASGARDEO (DIY Auth)</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30">
              High Liability
            </span>
          </div>

          {/* Code Window */}
          <div className="p-5 font-mono text-xs text-gray-300 overflow-x-auto flex-1 bg-[#0A0D16] leading-relaxed max-h-[480px]">
            <pre>
              <code>
                {activeFeature === "frontend" ? frontendDIY : backendDIY}
              </code>
            </pre>
          </div>

          {/* Risk Callouts */}
          <div className="p-4 bg-rose-950/20 border-t border-rose-500/20 space-y-2 text-xs text-gray-400">
            <div className="flex items-start gap-2 text-rose-300">
              <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-rose-400" />
              <span>Prone to XSS token theft, CSRF flaws, and unhandled JWT expiration loops.</span>
            </div>
            <div className="flex items-start gap-2 text-gray-400">
              <Clock className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gray-500" />
              <span>Takes 2-3 weeks of engineering time to build and ongoing maintenance sprints.</span>
            </div>
          </div>
        </div>

        {/* Right Card: Asgardeo CIAM (The Modern Way) */}
        <div className="rounded-2xl bg-[#0F1420] border-2 border-asgardeo-orange/40 overflow-hidden flex flex-col shadow-asgardeo-glow">
          {/* Header */}
          <div className="px-5 py-3.5 bg-gradient-to-r from-asgardeo-orange/20 to-asgardeo-purple/20 border-b border-asgardeo-orange/30 flex items-center justify-between">
            <div className="flex items-center gap-2 text-asgardeo-orange text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-asgardeo-orange" />
              <span>WITH WSO2 ASGARDEO</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-asgardeo-orange/20 text-orange-200 border border-asgardeo-orange/40">
              Production Ready in 5 Mins
            </span>
          </div>

          {/* Code Window */}
          <div className="p-5 font-mono text-xs text-gray-200 overflow-x-auto flex-1 bg-[#0A0D16] leading-relaxed max-h-[480px]">
            <pre>
              <code>
                {activeFeature === "frontend" ? frontendAsgardeo : backendAsgardeo}
              </code>
            </pre>
          </div>

          {/* Benefit Callouts */}
          <div className="p-4 bg-asgardeo-orange/10 border-t border-asgardeo-orange/20 space-y-2 text-xs text-gray-300">
            <div className="flex items-start gap-2 text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-emerald-400" />
              <span>Tokens stored safely in memory/web-workers — immune to standard localStorage XSS.</span>
            </div>
            <div className="flex items-start gap-2 text-orange-200">
              <Sparkles className="w-3.5 h-3.5 mt-0.5 shrink-0 text-asgardeo-orange" />
              <span>Instant support for Passkeys, SSO, Google, GitHub, and Adaptive MFA with zero code rewrites.</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
