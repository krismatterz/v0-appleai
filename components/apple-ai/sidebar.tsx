"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Plus,
  ChevronLeft,
  Settings,
  Laptop,
  Watch,
  Headphones,
  Tv,
  Phone,
  Tablet,
  Home,
  CreditCard,
  HelpCircle,
  Search,
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
  { icon: Watch, label: "Watch", category: "watch" },
  { icon: Headphones, label: "AirPods", category: "airpods" },
  { icon: Tv, label: "TV", category: "tv" },
  { icon: Home, label: "Home", category: "home" },
  { icon: CreditCard, label: "Card", category: "card" },
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
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            onClick={onToggle}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isOpen ? 300 : 0,
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
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9">
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
            <span className="font-semibold text-sidebar-foreground tracking-tight">Apple AI</span>
          </div>
          <button
            onClick={onToggle}
            className="p-2 rounded-xl hover:bg-sidebar-accent transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-sidebar-foreground" />
          </button>
        </div>

        {/* New Chat Button */}
        <div className="p-3">
          <motion.button
            onClick={onNewConversation}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-foreground text-background font-medium transition-all hover:opacity-90"
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm">New conversation</span>
          </motion.button>
        </div>

        {/* Search */}
        <div className="px-3 pb-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-sidebar-accent/50 border border-sidebar-border/50 text-sm text-sidebar-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent/40 transition-colors"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="px-3 py-3 border-b border-sidebar-border">
          <p className="text-[11px] font-medium text-muted-foreground px-2 mb-2.5 uppercase tracking-wider">
            Products
          </p>
          <div className="grid grid-cols-4 gap-1.5">
            {quickLinks.map((link) => (
              <motion.button
                key={link.category}
                onMouseEnter={() => setHoveredLink(link.category)}
                onMouseLeave={() => setHoveredLink(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "flex flex-col items-center gap-1 p-2.5 rounded-xl transition-all",
                  hoveredLink === link.category
                    ? "bg-sidebar-accent"
                    : "hover:bg-sidebar-accent/50"
                )}
              >
                <link.icon className="w-5 h-5 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground font-medium">
                  {link.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto px-3 py-3">
          <p className="text-[11px] font-medium text-muted-foreground px-2 mb-2.5 uppercase tracking-wider">
            History
          </p>
          <div className="space-y-1">
            {filteredConversations.map((conv) => (
              <motion.button
                key={conv.id}
                onClick={() => onSelectConversation(conv.id)}
                whileHover={{ x: 2 }}
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
                    <p className="text-[10px] text-muted-foreground/50 mt-1.5 font-medium">
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
            <button className="flex-1 flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-sidebar-accent transition-colors">
              <Settings className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Settings</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-sidebar-accent transition-colors">
              <HelpCircle className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
