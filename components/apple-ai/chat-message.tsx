"use client";

import { motion } from "framer-motion";
import { User, Volume2, Copy, ThumbsUp, ThumbsDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProductCard, Product } from "./product-card";
import { useState } from "react";
import { appleLogoUrl } from "@/lib/mock-data";
import Image from "next/image";
import { Streamdown } from "streamdown";
import "streamdown/styles.css";

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
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex gap-4 py-5",
        isUser && "flex-row-reverse"
      )}
    >
      {/* Avatar */}
      {isUser ? (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
          <User className="w-4 h-4 text-accent" />
        </div>
      ) : (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
          <Image
            src={appleLogoUrl}
            alt="Apple"
            width={16}
            height={20}
            className="w-auto h-auto max-w-[16px] max-h-[20px] object-contain"
          />
        </div>
      )}

      {/* Content */}
      <div
        className={cn(
          "flex-1 space-y-3 max-w-2xl",
          isUser && "flex flex-col items-end"
        )}
      >
        {/* Message bubble */}
        <div
          className={cn(
            "rounded-2xl px-4 py-3",
            isUser
              ? "bg-foreground text-background"
              : "bg-transparent"
          )}
        >
          {isUser ? (
            <p className="text-[15px] leading-relaxed whitespace-pre-wrap">
              {message.content}
            </p>
          ) : (
            <div className="prose prose-sm max-w-none prose-p:leading-relaxed prose-p:my-1.5 prose-headings:my-2 prose-ul:my-1.5 prose-ol:my-1.5 prose-li:my-0.5 prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-secondary prose-pre:border prose-pre:border-border text-foreground">
              <Streamdown>{message.content}</Streamdown>
              {message.isStreaming && (
                <span className="inline-block w-0.5 h-4 bg-foreground ml-0.5 typing-cursor align-middle" />
              )}
            </div>
          )}
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
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => onQuickReply?.(reply)}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-full",
                  "border border-border hover:border-muted-foreground/40",
                  "hover:bg-secondary transition-all duration-200",
                  "text-foreground"
                )}
              >
                {reply}
              </motion.button>
            ))}
          </div>
        )}

        {/* Assistant actions */}
        {!isUser && !message.isStreaming && (
          <div className="flex items-center gap-0.5">
            <button
              className="p-1.5 rounded-md hover:bg-secondary transition-colors group"
              aria-label="Listen to response"
            >
              <Volume2 className="w-3.5 h-3.5 text-muted-foreground/60 group-hover:text-muted-foreground" />
            </button>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-md hover:bg-secondary transition-colors group"
              aria-label="Copy response"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-green-600" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-muted-foreground/60 group-hover:text-muted-foreground" />
              )}
            </button>
            <div className="w-px h-3 bg-border mx-1" />
            <button
              className="p-1.5 rounded-md hover:bg-secondary transition-colors group"
              aria-label="Good response"
            >
              <ThumbsUp className="w-3.5 h-3.5 text-muted-foreground/60 group-hover:text-muted-foreground" />
            </button>
            <button
              className="p-1.5 rounded-md hover:bg-secondary transition-colors group"
              aria-label="Bad response"
            >
              <ThumbsDown className="w-3.5 h-3.5 text-muted-foreground/60 group-hover:text-muted-foreground" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
