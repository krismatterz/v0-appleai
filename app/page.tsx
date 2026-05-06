"use client";

import { useState, useCallback } from "react";
import { Sidebar } from "@/components/apple-ai/sidebar";
import { Header } from "@/components/apple-ai/header";
import { ChatContainer } from "@/components/apple-ai/chat-container";
import { ChatInput } from "@/components/apple-ai/chat-input";
import { Message } from "@/components/apple-ai/chat-message";
import { Product } from "@/components/apple-ai/product-card";
import { ProductModal } from "@/components/apple-ai/product-modal";
import { VoiceOverlay } from "@/components/apple-ai/voice-overlay";
import { conversations as mockConversations, getAIResponse } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function AppleAIChat() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeConversation, setActiveConversation] = useState<string | null>(null);
  const [conversations, setConversations] = useState(mockConversations);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  const handleSendMessage = useCallback(async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Get AI response based on message content
    const aiResponseData = getAIResponse(content);

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: aiResponseData.content,
      timestamp: new Date(),
      products: aiResponseData.products,
      quickReplies: aiResponseData.quickReplies,
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsLoading(false);
  }, []);

  const handleQuickReply = useCallback((reply: string) => {
    handleSendMessage(reply);
  }, [handleSendMessage]);

  const handleProductLearnMore = useCallback((product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  }, []);

  const handleProductModalClose = useCallback(() => {
    setIsProductModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  }, []);

  const handleAskAboutProduct = useCallback((query: string) => {
    handleSendMessage(query);
  }, [handleSendMessage]);

  const handleNewConversation = useCallback(() => {
    setMessages([]);
    setActiveConversation(null);
    setSidebarOpen(false);
  }, []);

  const handleSelectConversation = useCallback((id: string) => {
    setActiveConversation(id);
    // In a real app, this would load the conversation history
    setMessages([]);
    setSidebarOpen(false);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        conversations={conversations}
        activeConversation={activeConversation}
        onSelectConversation={handleSelectConversation}
        onNewConversation={handleNewConversation}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <Header
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          isSidebarOpen={sidebarOpen}
        />

        {/* Chat area */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <ChatContainer
            messages={messages}
            isLoading={isLoading}
            onSuggestionClick={handleSendMessage}
            onQuickReply={handleQuickReply}
            onProductLearnMore={handleProductLearnMore}
          />

          {/* Input area */}
          <div className={cn(
            "border-t border-border bg-background/80 backdrop-blur-xl",
            "py-4"
          )}>
            <ChatInput
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
            />
          </div>
        </main>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={handleProductModalClose}
        onAskAbout={handleAskAboutProduct}
      />

      {/* Voice Overlay */}
      <VoiceOverlay
        isActive={isVoiceActive}
        onClose={() => setIsVoiceActive(false)}
      />
    </div>
  );
}
