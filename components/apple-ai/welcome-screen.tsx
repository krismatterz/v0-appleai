"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { appleLogoUrl, featuredProducts2026 } from "@/lib/mock-data";
import Image from "next/image";

interface WelcomeScreenProps {
  onSuggestionClick: (suggestion: string) => void;
}

const quickPrompts = [
  "iPhone 17 Pro Max",
  "MacBook Neo $599",
  "Apple Watch Ultra 3",
  "iPhone Air",
];

export function WelcomeScreen({ onSuggestionClick }: WelcomeScreenProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-4 min-h-0">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Hero with Apple Logo - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6"
        >
          {/* Apple Logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative w-20 h-20 mx-auto mb-3 flex items-center justify-center"
          >
            <Image
              src={appleLogoUrl}
              alt="Apple"
              width={60}
              height={60}
              className="w-auto h-auto max-w-[60px] max-h-[60px] object-contain dark:invert"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-2xl md:text-3xl font-semibold text-foreground mb-1.5 tracking-tight"
          >
            Welcome to Apple
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-sm md:text-base text-muted-foreground max-w-md mx-auto"
          >
            Chat to buy an iPhone, MacBook, Watch
          </motion.p>
        </motion.div>

        {/* Featured 2026 Products - Compact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="w-full mb-5"
        >
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
            {featuredProducts2026.map((product, index) => (
              <motion.button
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index + 0.3 }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSuggestionClick(`Tell me about the ${product.name}`)}
                className={cn(
                  "group relative flex flex-col items-center p-2 md:p-3 rounded-xl",
                  "bg-card/60 border border-border/40",
                  "hover:border-accent/40 hover:bg-card/90",
                  "transition-all duration-300 text-center overflow-hidden"
                )}
              >
                {/* Product Image */}
                <div className="relative w-full aspect-square max-h-16 md:max-h-20 mb-1.5 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Badge */}
                {product.isNew && (
                  <span className="absolute top-1.5 right-1.5 text-[8px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-1.5 py-0.5 rounded-full">
                    New
                  </span>
                )}
                
                {/* Product Info */}
                <h3 className="text-[10px] md:text-xs font-semibold text-foreground mb-0.5 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-[9px] md:text-[10px] font-medium text-accent">
                  {product.price}
                </p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Quick Prompts - Compact Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="w-full"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {quickPrompts.map((prompt, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: 0.55 + index * 0.03 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onSuggestionClick(`Tell me about ${prompt}`)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-full",
                  "bg-secondary/60 border border-border/30",
                  "hover:bg-secondary hover:border-accent/30",
                  "text-xs text-foreground/80 hover:text-foreground",
                  "transition-all duration-200"
                )}
              >
                <Sparkles className="w-3 h-3 text-accent" />
                <span>{prompt}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
