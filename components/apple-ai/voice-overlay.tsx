"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mic } from "lucide-react";

interface VoiceOverlayProps {
  isActive: boolean;
  onClose: () => void;
  transcript?: string;
}

export function VoiceOverlay({ isActive, onClose, transcript }: VoiceOverlayProps) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative flex flex-col items-center justify-center p-8"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            {/* Voice visualization */}
            <div className="relative mb-8">
              {/* Outer rings */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 w-40 h-40 rounded-full bg-accent/20"
                style={{ transform: "translate(-50%, -50%)", left: "50%", top: "50%" }}
              />
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.2, 0.05, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="absolute inset-0 w-48 h-48 rounded-full bg-accent/10"
                style={{ transform: "translate(-50%, -50%)", left: "50%", top: "50%" }}
              />
              
              {/* Main mic button */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-24 h-24 rounded-full bg-accent flex items-center justify-center shadow-2xl shadow-accent/30"
              >
                <Mic className="w-10 h-10 text-accent-foreground" />
              </motion.div>
            </div>

            {/* Status text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Listening...
              </h3>
              <p className="text-muted-foreground max-w-xs text-center">
                {transcript || "Ask me about any Apple product"}
              </p>
            </motion.div>

            {/* ElevenLabs attribution */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 flex items-center gap-2 text-xs text-muted-foreground"
            >
              <span>Voice powered by</span>
              <span className="font-semibold">ElevenLabs</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
