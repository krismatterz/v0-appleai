"use client";

import { motion } from "framer-motion";
import { User, Sparkles, Volume2, Copy, ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProductCard, Product } from "./product-card";

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
}

export function ChatMessage({
  message,
  onQuickReply,
  onProductLearnMore,
}: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn("flex gap-4 p-4 md:p-6", isUser && "flex-row-reverse")}
    >
      {/* Avatar */}
      <div
        className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
          isUser
            ? "bg-secondary"
            : "bg-gradient-to-br from-gray-700 to-gray-900"
        )}
      >
        {isUser ? (
          <User className="w-4 h-4 text-muted-foreground" />
        ) : (
          <Sparkles className="w-4 h-4 text-white" />
        )}
      </div>

      {/* Content */}
      <div
        className={cn(
          "flex-1 space-y-3 max-w-3xl",
          isUser && "flex flex-col items-end"
        )}
      >
        {/* Message bubble */}
        <div
          className={cn(
            "rounded-2xl px-4 py-3",
            isUser
              ? "bg-primary text-primary-foreground rounded-tr-md"
              : "bg-card border border-border rounded-tl-md"
          )}
        >
          <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">
            {message.content}
            {message.isStreaming && (
              <span className="inline-block w-2 h-4 bg-current ml-1 typing-cursor" />
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
                className="px-4 py-2 text-sm rounded-full border border-border hover:bg-secondary transition-colors"
              >
                {reply}
              </motion.button>
            ))}
          </div>
        )}

        {/* Assistant actions */}
        {!isUser && !message.isStreaming && (
          <div className="flex items-center gap-2">
            <button
              className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Listen to response"
            >
              <Volume2 className="w-4 h-4 text-muted-foreground" />
            </button>
            <button
              className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Copy response"
            >
              <Copy className="w-4 h-4 text-muted-foreground" />
            </button>
            <div className="w-px h-4 bg-border mx-1" />
            <button
              className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Good response"
            >
              <ThumbsUp className="w-4 h-4 text-muted-foreground" />
            </button>
            <button
              className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Bad response"
            >
              <ThumbsDown className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        )}

        {/* Timestamp */}
        <p className="text-[10px] text-muted-foreground/60">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </motion.div>
  );
}
