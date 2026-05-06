"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mic, MicOff, Paperclip, Sparkles, Camera } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
  placeholder?: string;
}

export function ChatInput({
  onSendMessage,
  isLoading = false,
  placeholder = "Ask Apple AI anything...",
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
        200
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
    // Voice recognition would be integrated here with ElevenLabs
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={false}
        animate={{
          scale: isFocused ? 1.01 : 1,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "relative flex items-end gap-2 p-2 rounded-2xl",
          "bg-card border border-border",
          "transition-all duration-300",
          isFocused && "border-accent/50 shadow-lg shadow-accent/10"
        )}
      >
        {/* Left actions */}
        <div className="flex items-center gap-1 pb-1">
          <button
            type="button"
            className="p-2 rounded-xl hover:bg-secondary transition-colors"
            aria-label="Attach file"
          >
            <Paperclip className="w-5 h-5 text-muted-foreground" />
          </button>
          <button
            type="button"
            className="p-2 rounded-xl hover:bg-secondary transition-colors"
            aria-label="Take photo"
          >
            <Camera className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Input area */}
        <div className="flex-1 relative">
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
              "w-full resize-none bg-transparent py-3 px-1",
              "text-foreground placeholder:text-muted-foreground",
              "focus:outline-none",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
            style={{ maxHeight: "200px" }}
          />
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-1 pb-1">
          {/* Voice button */}
          <motion.button
            type="button"
            onClick={toggleListening}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "relative p-2 rounded-xl transition-all",
              isListening
                ? "bg-accent text-accent-foreground"
                : "hover:bg-secondary text-muted-foreground"
            )}
            aria-label={isListening ? "Stop listening" : "Start voice input"}
          >
            {isListening && (
              <motion.div
                className="absolute inset-0 rounded-xl bg-accent voice-pulse"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
              />
            )}
            {isListening ? (
              <MicOff className="w-5 h-5 relative z-10" />
            ) : (
              <Mic className="w-5 h-5" />
            )}
          </motion.button>

          {/* Send button */}
          <AnimatePresence mode="wait">
            {message.trim() ? (
              <motion.button
                key="send"
                type="submit"
                disabled={isLoading}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "p-2 rounded-xl transition-all",
                  "bg-primary text-primary-foreground",
                  "hover:opacity-90",
                  "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </motion.button>
            ) : (
              <motion.button
                key="sparkle"
                type="button"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="p-2 rounded-xl hover:bg-secondary transition-colors"
                aria-label="AI suggestions"
              >
                <Sparkles className="w-5 h-5 text-muted-foreground" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.form>

      {/* Hint text */}
      <p className="text-center text-xs text-muted-foreground mt-3">
        Apple AI can help you explore products, compare features, and find the perfect device for you.
      </p>
    </div>
  );
}
