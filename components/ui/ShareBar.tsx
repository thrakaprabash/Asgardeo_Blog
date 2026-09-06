"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Check, Copy, Twitter, Linkedin, ExternalLink } from "lucide-react";

export function ShareBar() {
  const [copied, setCopied] = useState(false);

  const title = "Stop Building Your Own Login Page: How Asgardeo Solves the Authentication Headache";
  const url = typeof window !== "undefined" ? window.location.href : "https://wso2.com/asgardeo/";

  const handleCopy = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`Check out "${title}" by @WSO2 & @Tharaka:`);
    const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const handleShareLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative max-w-2xl mx-auto my-12 px-4">
      <div className="p-4 sm:p-5 rounded-2xl bg-surface-100/70 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-asgardeo-orange/10 border border-asgardeo-orange/20 flex items-center justify-center text-asgardeo-orange">
            <Share2 className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Share This Article
            </h4>
            <p className="text-xs text-gray-400">Spread the word to fellow developers</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Twitter / X */}
          <button
            onClick={handleShareTwitter}
            aria-label="Share on X"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-surface-200/80 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all active:scale-95"
          >
            <Twitter className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline">Post</span>
          </button>

          {/* LinkedIn */}
          <button
            onClick={handleShareLinkedIn}
            aria-label="Share on LinkedIn"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-surface-200/80 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all active:scale-95"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">Share</span>
          </button>

          {/* Copy Link */}
          <button
            onClick={handleCopy}
            aria-label="Copy Article Link"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-asgardeo-orange/20 hover:bg-asgardeo-orange/30 border border-asgardeo-orange/40 text-orange-200 transition-all active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-1/2 -translate-x-1/2 -top-12 z-50 px-4 py-2 rounded-xl bg-surface-300 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-2xl flex items-center gap-2"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Article URL copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
