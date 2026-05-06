"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mic, MicOff, Paperclip, Sparkles, Camera, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
  placeholder?: string;
}

export function ChatInput({
  onSendMessage,
  isLoading = false,
  placeholder = "Message Apple Intelligence...",
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
        160
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
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-3xl">
        <motion.form
          onSubmit={handleSubmit}
          initial={false}
          className={cn(
            "relative flex items-end gap-3 p-3 rounded-3xl",
            "bg-card/80 border border-border/60",
            "backdrop-blur-xl",
            "transition-all duration-300",
            isFocused && "border-accent/40 shadow-xl shadow-accent/5 glow-accent"
          )}
        >
          {/* Left actions */}
          <div className="flex items-center gap-1.5 pb-0.5">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-xl hover:bg-secondary/80 transition-colors"
              aria-label="Attach file"
            >
              <Paperclip className="w-5 h-5 text-muted-foreground" />
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-xl hover:bg-secondary/80 transition-colors hidden sm:flex"
              aria-label="Take photo"
            >
              <Camera className="w-5 h-5 text-muted-foreground" />
            </motion.button>
          </div>

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
                "text-foreground text-base placeholder:text-muted-foreground/70",
                "focus:outline-none",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
              style={{ maxHeight: "160px" }}
            />
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 pb-0.5">
            {/* Voice button */}
            <motion.button
              type="button"
              onClick={toggleListening}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "relative p-2.5 rounded-xl transition-all",
                isListening
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-secondary/80 text-muted-foreground"
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "p-2.5 rounded-xl transition-all",
                    "bg-foreground text-background",
                    "hover:opacity-90",
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                  aria-label="Send message"
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              ) : (
                <motion.button
                  key="sparkle"
                  type="button"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl hover:bg-secondary/80 transition-colors"
                  aria-label="AI suggestions"
                >
                  <Sparkles className="w-5 h-5 text-muted-foreground" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.form>

        {/* Hint text */}
        <p className="text-center text-xs text-muted-foreground/60 mt-4 leading-relaxed">
          Apple Intelligence can help you explore products, compare features, and find the perfect device.
        </p>
      </div>
    </div>
  );
}
