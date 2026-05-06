"use client";

import { motion } from "framer-motion";
import { Menu, Search, ShoppingBag, User, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
}

const navItems = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Home",
  "Support",
];

export function Header({ onMenuClick, isSidebarOpen }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-30 w-full"
    >
      <div className="glass border-b border-border/40">
        <div className="flex items-center justify-between h-12 px-4 max-w-7xl mx-auto">
          {/* Left section */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className={cn(
                "p-2 -ml-2 rounded-xl hover:bg-secondary/60 transition-colors",
                isSidebarOpen && "lg:hidden"
              )}
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5 text-foreground" />
            </button>

            {/* Apple Logo */}
            <a href="#" className="flex items-center">
              <svg
                viewBox="0 0 17 20"
                className="w-4 h-5 fill-foreground"
                aria-label="Apple"
              >
                <path d="M15.5 14.5c-.5 1.2-1.1 2.3-2 3.3-.8.9-1.6 1.4-2.4 1.4-.5 0-1.2-.2-2-.5-.8-.3-1.5-.5-2.1-.5-.6 0-1.3.2-2 .5-.8.3-1.4.5-1.9.5-.9 0-1.8-.5-2.7-1.5C-.5 16.3 0 14.3 0 12c0-1.2.3-2.3.8-3.3.7-1.2 1.6-2 2.7-2.3.5-.2 1.2-.3 2-.3.7 0 1.5.2 2.4.6.9.4 1.4.6 1.7.6.2 0 .8-.2 1.8-.7.9-.4 1.7-.6 2.3-.6 1.7.1 3 1 3.9 2.5-1.6.9-2.3 2.2-2.3 3.8 0 1.2.4 2.3 1.3 3.2.4.4.8.7 1.3.9-.2.4-.3.7-.4 1.1zM11.4.3c0 .9-.3 1.8-1 2.6-.8 1-1.8 1.5-2.9 1.5 0-1 .4-1.9 1-2.6.4-.4.8-.8 1.3-1 .5-.3 1-.4 1.5-.5 0 0 .1 0 .1 0z" />
              </svg>
            </a>
          </div>

          {/* Center - Navigation (hidden on mobile) */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                className="px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/40"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Center - Model selector (visible on tablet) */}
          <div className="hidden md:flex lg:hidden items-center">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-secondary/40 transition-colors">
              <span className="text-sm font-medium text-foreground">Apple AI</span>
              <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
            </button>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-0.5">
            <button
              className="p-2 rounded-xl hover:bg-secondary/60 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-muted-foreground" />
            </button>
            <button
              className="p-2 rounded-xl hover:bg-secondary/60 transition-colors"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5 text-muted-foreground" />
            </button>
            <button
              className="p-2 rounded-xl hover:bg-secondary/60 transition-colors hidden sm:flex"
              aria-label="Account"
            >
              <User className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
