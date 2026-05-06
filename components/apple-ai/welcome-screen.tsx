"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  Phone,
  Watch,
  Headphones,
  CreditCard,
  HelpCircle,
  Zap,
  Shield,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface WelcomeScreenProps {
  onSuggestionClick: (suggestion: string) => void;
}

const suggestions = [
  {
    icon: Phone,
    title: "Compare iPhones",
    description: "Find the perfect iPhone for your needs",
    prompt: "Compare the latest iPhone models and help me choose the best one for photography",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Laptop,
    title: "MacBook guide",
    description: "Explore the Mac lineup",
    prompt: "What MacBook should I get for video editing and software development?",
    gradient: "from-gray-500/20 to-slate-500/20",
  },
  {
    icon: Watch,
    title: "Apple Watch",
    description: "Discover health & fitness features",
    prompt: "Tell me about Apple Watch health and fitness tracking features",
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    icon: Headphones,
    title: "Audio products",
    description: "AirPods, HomePod & more",
    prompt: "What are the differences between AirPods Pro and AirPods Max?",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: CreditCard,
    title: "Apple Card",
    description: "Learn about Apple Card benefits",
    prompt: "What are the benefits of Apple Card and Apple Pay?",
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
  {
    icon: HelpCircle,
    title: "Get support",
    description: "Troubleshoot & get help",
    prompt: "I need help with my Apple device",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
];

const features = [
  {
    icon: Zap,
    title: "Instant answers",
    description: "Get detailed product information instantly",
  },
  {
    icon: Shield,
    title: "Privacy first",
    description: "Your conversations are private and secure",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Learn about Apple's environmental initiatives",
  },
];

export function WelcomeScreen({ onSuggestionClick }: WelcomeScreenProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          {/* Apple Logo Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-24 h-24 mx-auto mb-8"
          >
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-gray-600 to-gray-900 shadow-2xl shadow-black/50" />
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 17 20"
                className="w-10 h-12 fill-white"
                aria-label="Apple"
              >
                <path d="M15.5 14.5c-.5 1.2-1.1 2.3-2 3.3-.8.9-1.6 1.4-2.4 1.4-.5 0-1.2-.2-2-.5-.8-.3-1.5-.5-2.1-.5-.6 0-1.3.2-2 .5-.8.3-1.4.5-1.9.5-.9 0-1.8-.5-2.7-1.5C-.5 16.3 0 14.3 0 12c0-1.2.3-2.3.8-3.3.7-1.2 1.6-2 2.7-2.3.5-.2 1.2-.3 2-.3.7 0 1.5.2 2.4.6.9.4 1.4.6 1.7.6.2 0 .8-.2 1.8-.7.9-.4 1.7-.6 2.3-.6 1.7.1 3 1 3.9 2.5-1.6.9-2.3 2.2-2.3 3.8 0 1.2.4 2.3 1.3 3.2.4.4.8.7 1.3.9-.2.4-.3.7-.4 1.1zM11.4.3c0 .9-.3 1.8-1 2.6-.8 1-1.8 1.5-2.9 1.5 0-1 .4-1.9 1-2.6.4-.4.8-.8 1.3-1 .5-.3 1-.4 1.5-.5 0 0 .1 0 .1 0z" />
              </svg>
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-2 rounded-[36px] bg-accent/10 blur-xl -z-10" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight text-smooth"
          >
            Welcome to Apple AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto text-balance leading-relaxed"
          >
            Your personal guide to exploring Apple products and services. Ask me anything.
          </motion.p>
        </motion.div>

        {/* Suggestions grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full mb-12"
        >
          <p className="text-sm font-medium text-muted-foreground text-center mb-6 uppercase tracking-wider">
            Try asking about
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestions.map((suggestion, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.5 }}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSuggestionClick(suggestion.prompt)}
                className={cn(
                  "group relative flex flex-col items-start p-5 rounded-2xl",
                  "bg-card/50 border border-border/50",
                  "hover:border-accent/30 hover:bg-card",
                  "transition-all duration-300 text-left overflow-hidden"
                )}
              >
                {/* Gradient background on hover */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  suggestion.gradient
                )} />
                
                <div className="relative z-10 w-12 h-12 rounded-xl bg-secondary/80 flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                  <suggestion.icon className="w-6 h-6 text-foreground/70 group-hover:text-foreground transition-colors" />
                </div>
                <h3 className="relative z-10 text-base font-semibold text-foreground mb-1.5">
                  {suggestion.title}
                </h3>
                <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">
                  {suggestion.description}
                </p>
                {/* Arrow indicator */}
                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-4 h-4 text-accent" />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <feature.icon className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground font-medium">
                {feature.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
