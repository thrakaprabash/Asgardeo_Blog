"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "orange" | "purple" | "cyan";
}

export function TiltCard({
  children,
  className,
  glowColor = "orange",
  ...props
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const glowBorder = {
    orange: "hover:border-asgardeo-orange/40 hover:shadow-asgardeo-glow",
    purple: "hover:border-asgardeo-purple/40 hover:shadow-purple-glow",
    cyan: "hover:border-asgardeo-cyan/40 hover:shadow-cyan-glow",
  }[glowColor];

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className={cn(
        "relative rounded-2xl transition-colors duration-300",
        "bg-surface-100/70 backdrop-blur-xl border border-white/10",
        glowBorder,
        className
      )}
      {...(props as any)}
    >
      <div
        style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}
        className="w-full h-full"
      >
        {children}
      </div>

      {/* Subtle dynamic mouse specular glare */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          exit={{ opacity: 0 }}
          className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-tr from-transparent via-white to-transparent"
        />
      )}
    </motion.div>
  );
}
