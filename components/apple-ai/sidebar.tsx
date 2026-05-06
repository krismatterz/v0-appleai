"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Plus,
  PanelLeftClose,
  Settings,
  Laptop,
  Watch,
  Headphones,
  Phone,
  Tablet,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { appleLogoUrl } from "@/lib/mock-data";
import Image from "next/image";

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
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
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
        <div className="flex items-center justify-between p-3 border-b border-sidebar-border">
          <div className="flex items-center gap-2.5">
            <div className="relative w-7 h-7 flex items-center justify-center">
              <Image
                src={appleLogoUrl}
                alt="Apple"
                width={18}
                height={22}
                className="w-auto h-auto max-w-[18px] max-h-[22px] object-contain"
              />
            </div>
            <span className="font-semibold text-sidebar-foreground text-sm tracking-tight">Apple</span>
          </div>
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors"
          >
            <PanelLeftClose className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* New Chat Button */}
        <div className="p-3">
          <motion.button
            onClick={onNewConversation}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg border border-border hover:bg-sidebar-accent font-medium transition-all text-sm text-sidebar-foreground"
          >
            <Plus className="w-4 h-4" />
            <span>New chat</span>
          </motion.button>
        </div>

        {/* Search */}
        <div className="px-3 pb-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-sidebar-accent/50 border-0 text-sm text-sidebar-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring/30 transition-all"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="px-3 py-2">
          <div className="flex flex-wrap gap-1.5">
            {quickLinks.map((link) => (
              <motion.button
                key={link.category}
                onMouseEnter={() => setHoveredLink(link.category)}
                onMouseLeave={() => setHoveredLink(null)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all text-xs",
                  hoveredLink === link.category
                    ? "bg-sidebar-accent text-sidebar-foreground"
                    : "text-muted-foreground hover:bg-sidebar-accent/50"
                )}
              >
                <link.icon className="w-3.5 h-3.5" />
                <span>{link.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto px-3 py-2">
          <p className="text-[11px] font-medium text-muted-foreground px-2 mb-2 uppercase tracking-wider">
            Recent
          </p>
          <div className="space-y-0.5">
            {filteredConversations.map((conv) => (
              <motion.button
                key={conv.id}
                onClick={() => onSelectConversation(conv.id)}
                whileTap={{ scale: 0.99 }}
                className={cn(
                  "w-full text-left px-3 py-2.5 rounded-lg transition-all",
                  activeConversation === conv.id
                    ? "bg-sidebar-accent"
                    : "hover:bg-sidebar-accent/50"
                )}
              >
                <div className="flex items-start gap-2.5">
                  <MessageSquare className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-sidebar-foreground truncate">
                      {conv.title}
                    </p>
                    <p className="text-xs text-muted-foreground truncate mt-0.5">
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
          <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-sidebar-accent transition-colors">
            <Settings className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Settings</span>
          </button>
        </div>
      </motion.aside>
    </>
  );
}
