"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  badge: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Does Asgardeo support B2B SaaS multi-tenancy and custom organization branding?",
      answer:
        "Yes. Asgardeo provides native Organization Management. You can onboard multiple B2B enterprise customers, each with their own isolated user directory, dedicated identity federation (e.g., Acme Corp connects their corporate Okta or Azure AD via SAML/OIDC), and custom per-tenant theme branding.",
      badge: "B2B Architecture",
    },
    {
      question: "How does Asgardeo integrate with Next.js 14 App Router & Server Components?",
      answer:
        "Because Asgardeo issues standard cryptographic OpenID Connect JWT tokens signed with RS256, your Next.js middleware and Server Actions can validate tokens statelessly using Asgardeo's public JWKS endpoint. Tokens can be stored in HTTP-only secure session cookies, fully compatible with React Server Components.",
      badge: "Framework Support",
    },
    {
      question: "Can I bring my own custom domain (e.g., login.mycompany.com)?",
      answer:
        "Yes. You can easily map your custom domain in the Asgardeo Console using CNAME records. Asgardeo automatically provisions and manages TLS/SSL certificates, ensuring your end-users never see a third-party domain during login.",
      badge: "Custom Domains",
    },
    {
      question: "Is there vendor lock-in if our user base grows to millions?",
      answer:
        "No. Asgardeo is built entirely on open, industry-standard protocols (OAuth 2.0, OpenID Connect, SAML 2.0, and SCIM 2.0). User profiles and identity schemas can be queried and exported via standard SCIM REST APIs at any time.",
      badge: "Open Standards",
    },
    {
      question: "What are the limits of the Free Tier for developers and startups?",
      answer:
        "Asgardeo provides a generous free tier for developers: up to 1,000 Monthly Active Users (MAUs), unlimited single sign-on (SSO), social logins (Google, GitHub), and multi-factor authentication (MFA) without requiring a credit card.",
      badge: "Pricing & Limits",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper
      id="faq"
      badge="Developer FAQ"
      title="Frequently Asked Questions"
      subtitle="Deep-dive answers to technical questions about architecture, multi-tenancy, custom domains, and framework support."
    >
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                isOpen
                  ? "bg-surface-100/90 border-asgardeo-orange/40 shadow-asgardeo-glow"
                  : "bg-surface-200/50 border-white/10 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-asgardeo-orange">
                    {faq.badge}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {faq.question}
                  </h3>
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                    isOpen
                      ? "bg-asgardeo-orange text-white border-asgardeo-orange rotate-180"
                      : "bg-white/5 text-gray-400 border-white/10"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-6 pt-2 text-sm text-gray-300 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
