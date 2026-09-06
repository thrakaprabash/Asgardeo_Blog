export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  impact: string;
  badge: string;
  stat: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  headline: string;
  description: string;
  benefits: string[];
  gradient: string;
  iconName: string;
}

export interface CodeSnippet {
  framework: string;
  language: string;
  code: string;
  description: string;
}

export const blogMeta = {
  title: "Stop Building Your Own Login Page",
  subtitle: "How Asgardeo Solves the Authentication Headache",
  author: "Tharaka Prabash Lakpriya",
  date: "September 2026",
  readTime: "6 min read",
  product: "WSO2 Asgardeo",
  category: "Customer IAM (CIAM)",
  intro:
    "If you've ever built a web or mobile app from scratch, you know the drill. Somewhere around week one, before you've even touched the 'real' feature your users care about, you're stuck writing a login page, a signup form, a password reset flow, and some kind of session management. It feels simple at first — until you have to think about password hashing, email verification, MFA, social logins, token expiry, and what happens when someone tries to log in from three devices at once.",
  leadSummary:
    "This is the problem Asgardeo, WSO2's Customer Identity and Access Management (CIAM) product, is built to solve.",
};

export const problemsData: ProblemItem[] = [
  {
    id: "security",
    title: "Security is unforgiving",
    description:
      "One mistake in how you store salt hashes, sign JWTs, or validate credentials can expose your entire user base to credential stuffing and token hijacking.",
    impact: "Catastrophic breach risk",
    badge: "High Severity",
    stat: "81% of breaches involve compromised credentials",
  },
  {
    id: "requirements",
    title: "Requirements keep exploding",
    description:
      "Today it's simple email/password. Tomorrow it's 'Sign in with Google' and Apple, then mandatory SMS/TOTP MFA, then enterprise SAML/SSO across five distinct internal services.",
    impact: "Endless technical debt",
    badge: "Scope Creep",
    stat: "3-4x scope inflation over 6 months",
  },
  {
    id: "compliance",
    title: "Compliance adds relentless pressure",
    description:
      "Depending on your industry or region, you must handle GDPR consent, CCPA user data rights, SOC2 audit trails, and strict token lifecycles from day one.",
    impact: "Legal & regulatory penalties",
    badge: "Regulatory",
    stat: "Non-compliance fines reach millions",
  },
  {
    id: "opportunity-cost",
    title: "It is not your product's core value",
    description:
      "Every single sprint hour burned debugging JWT refresh rotation, CORS on auth headers, and session timeouts is an hour not spent building what makes your product unique.",
    impact: "Delayed time-to-market",
    badge: "Opportunity Cost",
    stat: "Weeks lost on reinventing auth",
  },
];

export const dilemmaComparison = {
  underinvest: {
    title: "Underinvesting in Auth",
    subtitle: "The 'Quick & Dirty' Trap",
    points: [
      "Ship homebrewed bcrypt + sessions in 3 days",
      "Vulnerable to session fixation & replay attacks",
      "No audit trails or compliance readiness",
      "Painful rework when enterprise clients demand SSO",
    ],
    outcome: "Security nightmare & urgent emergency rewrites",
  },
  overinvest: {
    title: "Overinvesting in Auth",
    subtitle: "The In-House IdP Trap",
    points: [
      "Dedicate 2 senior engineers for 3 months",
      "Build custom OAuth2 token broker from scratch",
      "Constant maintenance of protocol edge-cases",
      "Slow down product release timeline dramatically",
    ],
    outcome: "Burned budget without competitive advantage",
  },
  asgardeoWay: {
    title: "The Asgardeo Way",
    subtitle: "Identity as a Managed Cloud Service",
    points: [
      "Enterprise OIDC & OAuth 2.0 connected in minutes",
      "Instant SSO, Social Logins, and Biometric Passkeys",
      "Adaptive MFA & Zero-Trust security rules",
      "Zero server maintenance; scales to millions seamlessly",
    ],
    outcome: "Ship secure in hours, focus 100% on your product",
  },
};

export const featuresData: FeatureItem[] = [
  {
    id: "sso",
    title: "Single Sign-On (SSO) Out of the Box",
    headline: "One login, seamless access across all apps",
    description:
      "Users log in once and get immediate, authorized access to every connected application without re-entering credentials. For teams building multi-product suites, internal portals, or micro-frontends, this eliminates fragmented identity.",
    benefits: [
      "Centralized session across web & mobile",
      "Zero credential re-entry friction",
      "Unified logout and global revocation",
    ],
    gradient: "from-orange-500/20 to-amber-500/20",
    iconName: "KeyRound",
  },
  {
    id: "social-enterprise",
    title: "Social & Enterprise Logins",
    headline: "Federate Google, GitHub, Microsoft, and SAML in clicks",
    description:
      "Want users to sign in with Google, GitHub, or an enterprise identity provider (Okta, Azure AD, Ping)? Asgardeo supports these as point-and-click configuration, never custom OAuth handshake spaghetti.",
    benefits: [
      "One-click Google & GitHub login",
      "Enterprise SAML 2.0 & OIDC federation",
      "Automated user provisioning (JIT)",
    ],
    gradient: "from-violet-500/20 to-purple-500/20",
    iconName: "Users",
  },
  {
    id: "mfa",
    title: "Multi-Factor Authentication (MFA)",
    headline: "Fortify security without writing auth workflows",
    description:
      "Adding a second layer of security — SMS OTP, email verification, TOTP authenticator apps (Google Authenticator), or FIDO2 biometrics — becomes a dashboard toggle rather than a multi-week engineering sprint.",
    benefits: [
      "TOTP authenticator app support",
      "SMS and email one-time passcodes",
      "Hardware keys & WebAuthn biometrics",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconName: "ShieldCheck",
  },
  {
    id: "adaptive",
    title: "Adaptive & Passwordless Authentication",
    headline: "Context-aware security with frictionless passkeys",
    description:
      "Asgardeo dynamically evaluates login risk in real-time based on IP reputation, geolocation, device footprint, and behavioral heuristics. Low-risk users enjoy instant biometric passkeys; suspicious requests trigger stepped-up verification.",
    benefits: [
      "FIDO2 WebAuthn Passkeys (TouchID / FaceID)",
      "Risk-based step-up authentication",
      "IP and device anomaly detection",
    ],
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconName: "Fingerprint",
  },
  {
    id: "sdks",
    title: "Developer-First SDKs & APIs",
    headline: "Integrate with minimal lines of code in any stack",
    description:
      "Whether you're crafting a React/Next.js SPA, a Node.js microservice, a Spring Boot backend, or a native Android (Kotlin) app, Asgardeo provides battle-tested SDKs that handle token storage, refresh loops, and PKCE securely.",
    benefits: [
      "React, Next.js, Angular, Vue SDKs",
      "Android Kotlin & iOS Swift native libraries",
      "Automatic PKCE & silent token refresh",
    ],
    gradient: "from-rose-500/20 to-orange-500/20",
    iconName: "Code2",
  },
];

export const codeExamples: CodeSnippet[] = [
  {
    framework: "React / Next.js",
    language: "tsx",
    description: "Wrap your frontend in AsgardeoAuthProvider and use the hook:",
    code: `import { AuthProvider, useAuthContext } from "@asgardeo/auth-react";

export function App() {
  return (
    <AuthProvider
      config={{
        signInRedirectURL: "https://myapp.com/dashboard",
        signOutRedirectURL: "https://myapp.com",
        clientID: "YOUR_ASGARDEO_CLIENT_ID",
        baseUrl: "https://api.asgardeo.io/t/your-org",
        scope: ["openid", "profile", "email"]
      }}
    >
      <Dashboard />
    </AuthProvider>
  );
}

function Dashboard() {
  const { state, signIn, signOut } = useAuthContext();

  if (!state.isAuthenticated) {
    return <button onClick={() => signIn()}>Log In with Asgardeo</button>;
  }

  return <div>Welcome, {state.displayName}! <button onClick={() => signOut()}>Log Out</button></div>;
}`,
  },
  {
    framework: "Android / Kotlin",
    language: "kotlin",
    description: "Zero-boilerplate OpenID Connect authentication in Android:",
    code: `// Initialize Asgardeo Auth Client
val authClient = AsgardeoAuth.getInstance(context)

authClient.init(
    clientID = "YOUR_CLIENT_ID",
    baseUrl = "https://api.asgardeo.io/t/your-org",
    redirectUri = "myapp://oauth2/callback"
)

// Trigger Login with single call
authClient.signIn(activity, object : AuthCallback {
    override fun onSuccess(authContext: AuthContext) {
        val user = authContext.user
        Log.d("Asgardeo", "Authenticated as: \${user.username}")
    }
    override fun onFailure(error: AuthError) {
        Log.e("Asgardeo", "Login error: \${error.message}")
    }
})`,
  },
  {
    framework: "Node.js / Express",
    language: "typescript",
    description: "Protect API routes with Asgardeo JWT validation middleware:",
    code: `import express from "express";
import { asgardeoAuthMiddleware } from "@asgardeo/auth-node";

const app = express();

const authConfig = {
  baseUrl: "https://api.asgardeo.io/t/your-org",
  issuer: "https://api.asgardeo.io/t/your-org/oauth2/token",
  jwksUri: "https://api.asgardeo.io/t/your-org/oauth2/jwks"
};

// Protected API Endpoint
app.get("/api/user/orders", asgardeoAuthMiddleware(authConfig), (req, res) => {
  // req.user contains verified claims from Asgardeo JWT
  res.json({ status: "success", orders: getOrdersForUser(req.user.sub) });
});`,
  },
];

export const takeawayPoints = [
  {
    icon: "ShieldAlert",
    text: "Authentication isn't a feature users praise when it works — but it's the very first thing that destroys trust when it breaks.",
  },
  {
    icon: "Rocket",
    text: "Asgardeo liberates engineering capacity from boilerplate OAuth2 plumbing so you can focus entirely on customer-facing differentiation.",
  },
  {
    icon: "TrendingUp",
    text: "Scales seamlessly from day-one indie side projects to millions of users with enterprise-grade SLA and compliance.",
  },
];
