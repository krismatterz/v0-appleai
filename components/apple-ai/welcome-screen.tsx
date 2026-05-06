"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Laptop,
  Phone,
  Watch,
  Headphones,
  CreditCard,
  HelpCircle,
  Zap,
  Shield,
  Leaf,
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
  },
  {
    icon: Laptop,
    title: "MacBook guide",
    description: "Explore the Mac lineup",
    prompt: "What MacBook should I get for video editing and software development?",
  },
  {
    icon: Watch,
    title: "Apple Watch",
    description: "Discover health & fitness features",
    prompt: "Tell me about Apple Watch health and fitness tracking features",
  },
  {
    icon: Headphones,
    title: "Audio products",
    description: "AirPods, HomePod & more",
    prompt: "What are the differences between AirPods Pro and AirPods Max?",
  },
  {
    icon: CreditCard,
    title: "Apple Card",
    description: "Learn about Apple Card benefits",
    prompt: "What are the benefits of Apple Card and Apple Pay?",
  },
  {
    icon: HelpCircle,
    title: "Get support",
    description: "Troubleshoot & get help",
    prompt: "I need help with my Apple device",
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
    <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-4xl mx-auto">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-2xl"
        >
          <Sparkles className="w-10 h-10 text-white" />
        </motion.div>
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
          Welcome to Apple AI
        </h1>
        <p className="text-lg text-muted-foreground max-w-md mx-auto text-balance">
          Your personal guide to exploring Apple products and services. Ask me anything.
        </p>
      </motion.div>

      {/* Suggestions grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full mb-10"
      >
        <p className="text-sm font-medium text-muted-foreground text-center mb-4">
          Try asking about
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {suggestions.map((suggestion, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSuggestionClick(suggestion.prompt)}
              className={cn(
                "flex flex-col items-start p-4 rounded-2xl",
                "bg-card border border-border",
                "hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5",
                "transition-all duration-200 text-left"
              )}
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-3">
                <suggestion.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">
                {suggestion.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {suggestion.description}
              </p>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
      >
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <feature.icon className="w-4 h-4 text-accent" />
            <span className="text-xs text-muted-foreground">
              {feature.title}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
