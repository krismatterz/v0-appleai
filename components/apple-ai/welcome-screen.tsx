"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Sparkles,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { appleLogoUrl, featuredProducts2026 } from "@/lib/mock-data";
import Image from "next/image";

interface WelcomeScreenProps {
  onSuggestionClick: (suggestion: string) => void;
}

const quickPrompts = [
  "What's new in iPhone 17 Pro Max?",
  "Tell me about MacBook Neo at $599",
  "Compare Apple Watch Ultra 3 vs Series 11",
  "Show me the thinnest iPhone ever",
  "What's the M5 chip capable of?",
  "Which Apple Watch has blood pressure?",
];

const features = [
  {
    icon: Zap,
    title: "Instant answers",
  },
  {
    icon: Shield,
    title: "Privacy first",
  },
  {
    icon: Sparkles,
    title: "AI powered",
  },
];

export function WelcomeScreen({ onSuggestionClick }: WelcomeScreenProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12 overflow-y-auto">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Hero with Apple Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          {/* Apple Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-16 h-16 mx-auto mb-6"
          >
            <Image
              src={appleLogoUrl}
              alt="Apple"
              width={64}
              height={64}
              className="w-auto h-auto max-w-full max-h-full object-contain dark:invert"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-semibold text-foreground mb-3 tracking-tight text-balance"
          >
            Welcome to Apple AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto text-balance leading-relaxed"
          >
            Discover our 2026 lineup through conversation. Ask me anything about our latest products.
          </motion.p>
        </motion.div>

        {/* Featured 2026 Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full mb-10"
        >
          <p className="text-xs font-medium text-muted-foreground text-center mb-5 uppercase tracking-widest">
            Introducing the 2026 Lineup
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {featuredProducts2026.map((product, index) => (
              <motion.button
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.5 }}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSuggestionClick(`Tell me about the ${product.name}`)}
                className={cn(
                  "group relative flex flex-col items-center p-4 rounded-2xl",
                  "bg-card/60 border border-border/40",
                  "hover:border-accent/40 hover:bg-card/90",
                  "transition-all duration-300 text-center overflow-hidden"
                )}
              >
                {/* Product Image */}
                <div className="relative w-full aspect-square max-h-32 mb-3 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Badge */}
                {product.isNew && (
                  <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                    New
                  </span>
                )}
                
                {/* Product Info */}
                <h3 className="text-sm font-semibold text-foreground mb-0.5 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-1 line-clamp-1">
                  {product.tagline}
                </p>
                <p className="text-xs font-medium text-accent">
                  {product.price}
                </p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Quick Prompts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="w-full mb-10"
        >
          <p className="text-xs font-medium text-muted-foreground text-center mb-4 uppercase tracking-widest">
            Try asking
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {quickPrompts.map((prompt, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSuggestionClick(prompt)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-full",
                  "bg-secondary/60 border border-border/30",
                  "hover:bg-secondary hover:border-accent/30",
                  "text-sm text-foreground/80 hover:text-foreground",
                  "transition-all duration-200"
                )}
              >
                <MessageSquare className="w-3.5 h-3.5 text-muted-foreground" />
                <span>{prompt}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex items-center justify-center gap-8 md:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                <feature.icon className="w-3.5 h-3.5 text-accent" />
              </div>
              <span className="text-xs text-muted-foreground font-medium">
                {feature.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
