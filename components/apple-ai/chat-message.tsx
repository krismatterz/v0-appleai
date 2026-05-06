"use client";

import { motion } from "framer-motion";
import { User, Volume2, Copy, ThumbsUp, ThumbsDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProductCard, Product } from "./product-card";
import { useState } from "react";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  products?: Product[];
  isStreaming?: boolean;
  quickReplies?: string[];
}

interface ChatMessageProps {
  message: Message;
  onQuickReply?: (reply: string) => void;
  onProductLearnMore?: (product: Product) => void;
  isLast?: boolean;
}

export function ChatMessage({
  message,
  onQuickReply,
  onProductLearnMore,
  isLast,
}: ChatMessageProps) {
  const isUser = message.role === "user";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex gap-4 py-6",
        isUser && "flex-row-reverse"
      )}
    >
      {/* Avatar */}
      {isUser ? (
        <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
          <User className="w-4 h-4 text-muted-foreground" />
        </div>
      ) : (
        <div className="relative flex-shrink-0 w-9 h-9">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-600 to-gray-900" />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 17 20"
              className="w-4 h-4.5 fill-white"
              aria-label="Apple"
            >
              <path d="M15.5 14.5c-.5 1.2-1.1 2.3-2 3.3-.8.9-1.6 1.4-2.4 1.4-.5 0-1.2-.2-2-.5-.8-.3-1.5-.5-2.1-.5-.6 0-1.3.2-2 .5-.8.3-1.4.5-1.9.5-.9 0-1.8-.5-2.7-1.5C-.5 16.3 0 14.3 0 12c0-1.2.3-2.3.8-3.3.7-1.2 1.6-2 2.7-2.3.5-.2 1.2-.3 2-.3.7 0 1.5.2 2.4.6.9.4 1.4.6 1.7.6.2 0 .8-.2 1.8-.7.9-.4 1.7-.6 2.3-.6 1.7.1 3 1 3.9 2.5-1.6.9-2.3 2.2-2.3 3.8 0 1.2.4 2.3 1.3 3.2.4.4.8.7 1.3.9-.2.4-.3.7-.4 1.1zM11.4.3c0 .9-.3 1.8-1 2.6-.8 1-1.8 1.5-2.9 1.5 0-1 .4-1.9 1-2.6.4-.4.8-.8 1.3-1 .5-.3 1-.4 1.5-.5 0 0 .1 0 .1 0z" />
            </svg>
          </div>
        </div>
      )}

      {/* Content */}
      <div
        className={cn(
          "flex-1 space-y-4 max-w-2xl",
          isUser && "flex flex-col items-end"
        )}
      >
        {/* Message bubble */}
        <div
          className={cn(
            "rounded-2xl px-5 py-3.5",
            isUser
              ? "bg-foreground text-background rounded-tr-md"
              : "bg-card/60 border border-border/40 rounded-tl-md"
          )}
        >
          <p className="text-[15px] leading-relaxed whitespace-pre-wrap">
            {message.content}
            {message.isStreaming && (
              <span className="inline-block w-0.5 h-5 bg-current ml-1 typing-cursor align-middle" />
            )}
          </p>
        </div>

        {/* Products grid */}
        {message.products && message.products.length > 0 && (
          <div className="w-full">
            {message.products.length === 1 ? (
              <ProductCard
                product={message.products[0]}
                variant="featured"
                onLearnMore={onProductLearnMore}
              />
            ) : message.products.length <= 3 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {message.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    variant="compact"
                    onLearnMore={onProductLearnMore}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {message.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    variant="expanded"
                    onLearnMore={onProductLearnMore}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Quick replies */}
        {message.quickReplies && message.quickReplies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {message.quickReplies.map((reply, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onQuickReply?.(reply)}
                className={cn(
                  "px-4 py-2 text-sm rounded-full",
                  "border border-border/60 hover:border-accent/40",
                  "hover:bg-card/80 transition-all duration-200",
                  "text-muted-foreground hover:text-foreground"
                )}
              >
                {reply}
              </motion.button>
            ))}
          </div>
        )}

        {/* Assistant actions */}
        {!isUser && !message.isStreaming && (
          <div className="flex items-center gap-1">
            <button
              className="p-2 rounded-lg hover:bg-secondary/60 transition-colors group"
              aria-label="Listen to response"
            >
              <Volume2 className="w-4 h-4 text-muted-foreground/60 group-hover:text-muted-foreground" />
            </button>
            <button
              onClick={handleCopy}
              className="p-2 rounded-lg hover:bg-secondary/60 transition-colors group"
              aria-label="Copy response"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 text-muted-foreground/60 group-hover:text-muted-foreground" />
              )}
            </button>
            <div className="w-px h-4 bg-border/40 mx-1" />
            <button
              className="p-2 rounded-lg hover:bg-secondary/60 transition-colors group"
              aria-label="Good response"
            >
              <ThumbsUp className="w-4 h-4 text-muted-foreground/60 group-hover:text-muted-foreground" />
            </button>
            <button
              className="p-2 rounded-lg hover:bg-secondary/60 transition-colors group"
              aria-label="Bad response"
            >
              <ThumbsDown className="w-4 h-4 text-muted-foreground/60 group-hover:text-muted-foreground" />
            </button>
          </div>
        )}

        {/* Timestamp - only show for last message or user messages */}
        {(isLast || isUser) && (
          <p className="text-[11px] text-muted-foreground/50 font-medium">
            {message.timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        )}
      </div>
    </motion.div>
  );
}
