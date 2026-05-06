"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Star, ShoppingBag, Heart, Share2, ChevronRight } from "lucide-react";
import { Product } from "./product-card";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAskAbout: (query: string) => void;
}

export function ProductModal({ product, isOpen, onClose, onAskAbout }: ProductModalProps) {
  if (!product) return null;

  const quickQuestions = [
    `What colors does ${product.name} come in?`,
    `Compare ${product.name} to similar products`,
    `What accessories work with ${product.name}?`,
    `Tell me about ${product.name} trade-in options`,
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-4 bottom-4 top-20 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[80vh] z-50 overflow-hidden rounded-3xl bg-card border border-border shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-card/80 backdrop-blur-xl border-b border-border">
              <div>
                <p className="text-xs text-accent font-medium">{product.category}</p>
                <h2 className="text-lg font-semibold text-foreground">{product.name}</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto h-[calc(100%-72px)] p-6">
              {/* Hero Image */}
              <div className="aspect-square max-w-sm mx-auto mb-6 rounded-2xl bg-secondary flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-8"
                />
              </div>

              {/* Product Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">{product.tagline}</p>

                {product.rating && (
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating!)
                            ? "fill-accent text-accent"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">
                      {product.rating}
                    </span>
                  </div>
                )}

                <p className="text-2xl font-bold text-foreground mb-6">
                  {product.price}
                </p>

                {/* Colors */}
                {product.colors && (
                  <div className="flex items-center justify-center gap-3 mb-6">
                    {product.colors.map((color, i) => (
                      <button
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-border hover:border-accent transition-colors"
                        style={{ backgroundColor: color }}
                        aria-label={`Select color ${i + 1}`}
                      />
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-3 mb-8">
                  <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                    <ShoppingBag className="w-4 h-4" />
                    Buy
                  </button>
                  <button className="p-3 rounded-full border border-border hover:bg-secondary transition-colors">
                    <Heart className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <button className="p-3 rounded-full border border-border hover:bg-secondary transition-colors">
                    <Share2 className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Quick Questions */}
              <div className="border-t border-border pt-6">
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  Ask Apple Intelligence about this product
                </p>
                <div className="space-y-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        onAskAbout(question);
                        onClose();
                      }}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors text-left group"
                    >
                      <span className="text-sm text-foreground">{question}</span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
