"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Plus, ArrowUp, AudioLines } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
  placeholder?: string;
}

export function ChatInput({
  onSendMessage,
  isLoading = false,
  placeholder = "Ask anything",
}: ChatInputProps) {
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        120
      )}px`;
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-3xl">
        <motion.form
          onSubmit={handleSubmit}
          initial={false}
          className={cn(
            "relative flex items-end gap-2 p-2 rounded-[28px]",
            "bg-card border border-border",
            "shadow-sm",
            "transition-all duration-200",
            isFocused && "border-muted-foreground/40 shadow-md"
          )}
        >
          {/* Plus button */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 p-2.5 rounded-full hover:bg-secondary transition-colors"
            aria-label="Attach file"
          >
            <Plus className="w-5 h-5 text-muted-foreground" />
          </motion.button>

          {/* Input area */}
          <div className="flex-1 relative flex items-center">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={placeholder}
              disabled={isLoading}
              rows={1}
              className={cn(
                "w-full resize-none bg-transparent py-2.5 px-1",
                "text-foreground text-base placeholder:text-muted-foreground",
                "focus:outline-none",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
              style={{ maxHeight: "120px" }}
            />
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {/* Voice button */}
            <motion.button
              type="button"
              onClick={toggleListening}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "relative p-2.5 rounded-full transition-all",
                isListening
                  ? "bg-foreground text-background"
                  : "hover:bg-secondary text-muted-foreground"
              )}
              aria-label={isListening ? "Stop listening" : "Start voice input"}
            >
              {isListening && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-foreground voice-pulse"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                />
              )}
              {isListening ? (
                <AudioLines className="w-5 h-5 relative z-10" />
              ) : (
                <Mic className="w-5 h-5" />
              )}
            </motion.button>

            {/* Send button */}
            <AnimatePresence mode="wait">
              <motion.button
                key="send"
                type="submit"
                disabled={isLoading || !message.trim()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "p-2.5 rounded-full transition-all",
                  message.trim()
                    ? "bg-accent text-accent-foreground hover:opacity-90"
                    : "bg-secondary text-muted-foreground cursor-not-allowed"
                )}
                aria-label="Send message"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
