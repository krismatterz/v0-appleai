"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Plus,
  ChevronLeft,
  Settings,
  Sparkles,
  Laptop,
  Watch,
  Headphones,
  Tv,
  Phone,
  Tablet,
  Home,
  CreditCard,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Conversation {
  id: string;
  title: string;
  timestamp: string;
  preview: string;
}

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  conversations: Conversation[];
  activeConversation: string | null;
  onSelectConversation: (id: string) => void;
  onNewConversation: () => void;
}

const quickLinks = [
  { icon: Phone, label: "iPhone", category: "iphone" },
  { icon: Laptop, label: "Mac", category: "mac" },
  { icon: Tablet, label: "iPad", category: "ipad" },
  { icon: Watch, label: "Apple Watch", category: "watch" },
  { icon: Headphones, label: "AirPods", category: "airpods" },
  { icon: Tv, label: "Apple TV", category: "tv" },
  { icon: Home, label: "Home", category: "home" },
  { icon: CreditCard, label: "Apple Card", category: "card" },
];

export function Sidebar({
  isOpen,
  onToggle,
  conversations,
  activeConversation,
  onSelectConversation,
  onNewConversation,
}: SidebarProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={onToggle}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isOpen ? 280 : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={cn(
          "fixed left-0 top-0 z-50 h-full bg-sidebar border-r border-sidebar-border",
          "flex flex-col overflow-hidden",
          "lg:relative lg:z-auto"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-sidebar-foreground">Apple AI</span>
          </div>
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-sidebar-foreground" />
          </button>
        </div>

        {/* New Chat Button */}
        <div className="p-3">
          <button
            onClick={onNewConversation}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-all group"
          >
            <Plus className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              New conversation
            </span>
          </button>
        </div>

        {/* Quick Links */}
        <div className="px-3 py-2">
          <p className="text-xs font-medium text-muted-foreground px-3 mb-2">
            Explore Products
          </p>
          <div className="grid grid-cols-4 gap-2">
            {quickLinks.map((link) => (
              <button
                key={link.category}
                onMouseEnter={() => setHoveredLink(link.category)}
                onMouseLeave={() => setHoveredLink(null)}
                className={cn(
                  "flex flex-col items-center gap-1 p-2 rounded-xl transition-all",
                  hoveredLink === link.category
                    ? "bg-sidebar-accent"
                    : "hover:bg-sidebar-accent/50"
                )}
              >
                <link.icon className="w-5 h-5 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">
                  {link.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto px-3 py-2">
          <p className="text-xs font-medium text-muted-foreground px-3 mb-2">
            Recent Conversations
          </p>
          <div className="space-y-1">
            {conversations.map((conv) => (
              <motion.button
                key={conv.id}
                onClick={() => onSelectConversation(conv.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={cn(
                  "w-full text-left px-3 py-3 rounded-xl transition-all",
                  activeConversation === conv.id
                    ? "bg-sidebar-accent"
                    : "hover:bg-sidebar-accent/50"
                )}
              >
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-sidebar-foreground truncate">
                      {conv.title}
                    </p>
                    <p className="text-xs text-muted-foreground truncate mt-0.5">
                      {conv.preview}
                    </p>
                    <p className="text-[10px] text-muted-foreground/60 mt-1">
                      {conv.timestamp}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-sidebar-border">
          <div className="flex items-center gap-2">
            <button className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-sidebar-accent transition-colors">
              <Settings className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Settings</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-sidebar-accent transition-colors">
              <HelpCircle className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
