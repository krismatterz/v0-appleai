"use client";

import { motion } from "framer-motion";
import { Pencil, GraduationCap, Code, Briefcase, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { appleLogoUrl, featuredProducts2026 } from "@/lib/mock-data";
import Image from "next/image";

interface WelcomeScreenProps {
  onSuggestionClick: (suggestion: string) => void;
}

const quickCategories = [
  { icon: Pencil, label: "Shop", prompt: "Help me find the right Apple product" },
  { icon: GraduationCap, label: "Learn", prompt: "Tell me about Apple Intelligence features" },
  { icon: Code, label: "Compare", prompt: "Compare iPhone 17 Pro Max vs iPhone Air" },
  { icon: Briefcase, label: "Support", prompt: "I need help with my Apple device" },
  { icon: Sparkles, label: "Discover", prompt: "What's new at Apple in 2026" },
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
          className="text-center mb-5"
        >
          {/* Apple Logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative w-12 h-12 mx-auto mb-3 flex items-center justify-center"
          >
            <Image
              src={appleLogoUrl}
              alt="Apple"
              width={40}
              height={110}
              className="h-20 w-auto object-contain"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-2xl md:text-3xl font-semibold text-foreground mb-1 tracking-tight"
          >
            How can I help you today?
          </motion.h1>
        </motion.div>

        {/* Featured 2026 Products - Compact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-full mb-5"
        >
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
            {featuredProducts2026.map((product, index) => (
              <motion.button
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index + 0.25 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSuggestionClick(`Tell me about the ${product.name}`)}
                className={cn(
                  "group relative flex flex-col items-center p-2 md:p-3 rounded-xl",
                  "bg-card border border-border",
                  "hover:border-muted-foreground/30 hover:shadow-md",
                  "transition-all duration-200 text-center overflow-hidden"
                )}
              >
                {/* Product Image */}
                <div className="relative w-full aspect-square max-h-14 md:max-h-18 mb-1.5 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={80}
                    height={80}
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
                <h3 className="text-[10px] md:text-xs font-medium text-foreground mb-0.5 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-[9px] md:text-[10px] font-medium text-muted-foreground">
                  {product.price}
                </p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Quick Categories - Claude/ChatGPT style chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="w-full"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {quickCategories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: 0.5 + index * 0.03 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSuggestionClick(category.prompt)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full",
                  "bg-card border border-border",
                  "hover:bg-secondary hover:border-muted-foreground/30",
                  "text-sm text-foreground",
                  "transition-all duration-200"
                )}
              >
                <category.icon className="w-4 h-4 text-muted-foreground" />
                <span>{category.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
