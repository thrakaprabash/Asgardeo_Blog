import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stop Building Your Own Login Page | Asgardeo CIAM by WSO2",
  description:
    "How WSO2 Asgardeo solves the authentication headache for developers. Single Sign-On (SSO), Adaptive MFA, Social Logins, and Passkeys without the boilerplate.",
  keywords: [
    "WSO2",
    "Asgardeo",
    "CIAM",
    "Customer Identity",
    "Authentication",
    "OAuth2",
    "OpenID Connect",
    "Single Sign-On",
    "MFA",
    "Passkeys",
  ],
  authors: [{ name: "Tharaka Prabash Lakpriya" }],
  openGraph: {
    title: "Stop Building Your Own Login Page: How Asgardeo Solves the Authentication Headache",
    description:
      "Explore how WSO2 Asgardeo transforms authentication and authorization into an enterprise cloud service.",
    type: "article",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-['Plus_Jakarta_Sans',sans-serif] bg-background text-gray-100 min-h-screen antialiased selection:bg-asgardeo-orange/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
