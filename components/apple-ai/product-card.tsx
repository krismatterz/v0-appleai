"use client";

import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  price: string;
  image: string;
  colors?: string[];
  isNew?: boolean;
  rating?: number;
}

interface ProductCardProps {
  product: Product;
  variant?: "compact" | "expanded" | "featured";
  onLearnMore?: (product: Product) => void;
}

export function ProductCard({
  product,
  variant = "compact",
  onLearnMore,
}: ProductCardProps) {
  if (variant === "featured") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-secondary p-6 md:p-8"
      >
        {product.isNew && (
          <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
            New
          </span>
        )}
        
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm text-accent font-medium mb-2">
              {product.category}
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
              {product.name}
            </h3>
            <p className="text-muted-foreground mb-4">{product.tagline}</p>
            
            {product.rating && (
              <div className="flex items-center gap-1 justify-center md:justify-start mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < Math.floor(product.rating!)
                        ? "fill-accent text-accent"
                        : "text-muted-foreground"
                    )}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-1">
                  {product.rating}
                </span>
              </div>
            )}

            <p className="text-xl font-semibold text-foreground mb-4">
              {product.price}
            </p>

            {product.colors && (
              <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                {product.colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-full border border-border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}

            <button
              onClick={() => onLearnMore?.(product)}
              className="inline-flex items-center gap-1 text-accent hover:gap-2 transition-all"
            >
              Learn more <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-48 h-48 md:w-64 md:h-64 object-contain"
            />
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "expanded") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden rounded-2xl bg-card border border-border p-5"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-secondary flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-contain"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-xs text-accent font-medium">
                  {product.category}
                </p>
                <h4 className="text-base font-semibold text-foreground">
                  {product.name}
                </h4>
              </div>
              {product.isNew && (
                <span className="px-2 py-0.5 text-[10px] font-medium bg-accent text-accent-foreground rounded-full">
                  New
                </span>
              )}
            </div>
            
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {product.tagline}
            </p>
            
            <div className="flex items-center justify-between mt-3">
              <span className="text-sm font-semibold text-foreground">
                {product.price}
              </span>
              <button
                onClick={() => onLearnMore?.(product)}
                className="text-xs text-accent hover:underline"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Compact variant (default)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-2xl bg-card border border-border p-4 cursor-pointer"
      onClick={() => onLearnMore?.(product)}
    >
      <div className="aspect-square rounded-xl bg-secondary mb-3 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <div className="space-y-1">
        {product.isNew && (
          <span className="inline-block px-2 py-0.5 text-[10px] font-medium bg-accent text-accent-foreground rounded-full mb-1">
            New
          </span>
        )}
        <h4 className="text-sm font-semibold text-foreground line-clamp-1">
          {product.name}
        </h4>
        <p className="text-xs text-muted-foreground line-clamp-1">
          {product.tagline}
        </p>
        <p className="text-sm font-medium text-foreground">{product.price}</p>
      </div>
    </motion.div>
  );
}
