"use client";

import { motion } from "framer-motion";
import { Menu, Search, ShoppingBag, User, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { appleLogoUrl } from "@/lib/mock-data";
import Image from "next/image";

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
              <Image
                src={appleLogoUrl}
                alt="Apple"
                width={36}
                height={44}
                className="w-auto h-auto max-w-[36px] max-h-[44px] object-contain dark:invert"
              />
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
