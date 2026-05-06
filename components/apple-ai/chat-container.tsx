"use client";

import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatMessage, Message } from "./chat-message";
import { WelcomeScreen } from "./welcome-screen";
import { Product } from "./product-card";
import { cn } from "@/lib/utils";

interface ChatContainerProps {
  messages: Message[];
  isLoading?: boolean;
  onSuggestionClick: (suggestion: string) => void;
  onQuickReply: (reply: string) => void;
  onProductLearnMore: (product: Product) => void;
}

export function ChatContainer({
  messages,
  isLoading,
  onSuggestionClick,
  onQuickReply,
  onProductLearnMore,
}: ChatContainerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div
      ref={scrollRef}
      className={cn(
        "flex-1 overflow-y-auto scroll-smooth",
        "gradient-mesh"
      )}
    >
      <AnimatePresence mode="wait">
        {messages.length === 0 ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-full flex items-center justify-center"
          >
            <WelcomeScreen onSuggestionClick={onSuggestionClick} />
          </motion.div>
        ) : (
          <motion.div
            key="chat"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-6 flex flex-col items-center"
          >
            <div className="w-full max-w-3xl px-4">
              {messages.map((message, index) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  onQuickReply={onQuickReply}
                  onProductLearnMore={onProductLearnMore}
                  isLast={index === messages.length - 1}
                />
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-4 py-6"
                >
                  {/* Avatar */}
                  <div className="relative w-9 h-9 flex-shrink-0">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-600 to-gray-900" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Typing indicator */}
                  <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-card/60 border border-border/40">
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      className="w-2 h-2 rounded-full bg-muted-foreground/50"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
                      className="w-2 h-2 rounded-full bg-muted-foreground/50"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                      className="w-2 h-2 rounded-full bg-muted-foreground/50"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
