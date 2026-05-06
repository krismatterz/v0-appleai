"use client";

import { motion } from "framer-motion";
import { Menu, ShoppingBag, ChevronDown, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { appleLogoUrl } from "@/lib/mock-data";
import Image from "next/image";

interface HeaderProps {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
}

export function Header({ onMenuClick, isSidebarOpen }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-30 w-full border-b border-border bg-background/95 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between h-12 px-4 max-w-7xl mx-auto">
        {/* Left section */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className={cn(
              "p-2 -ml-2 rounded-lg hover:bg-secondary transition-colors",
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
              width={20}
              height={24}
              className="w-auto h-auto max-w-[20px] max-h-[24px] object-contain"
            />
          </a>
        </div>

        {/* Center - Model selector */}
        <div className="flex items-center">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-secondary transition-colors">
            <span className="text-sm font-medium text-foreground">Apple Intelligence</span>
            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
          </button>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-1">
          <button
            className="px-3 py-1.5 text-xs font-medium text-foreground bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
          >
            Get Apple One
          </button>
          <button
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Shopping bag"
          >
            <ShoppingBag className="w-5 h-5 text-muted-foreground" />
          </button>
          <button
            className="p-2 rounded-lg hover:bg-secondary transition-colors hidden sm:flex"
            aria-label="Account"
          >
            <User className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
