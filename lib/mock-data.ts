import { Product } from "@/components/apple-ai/product-card";

export const products: Record<string, Product[]> = {
  iphone: [
    {
      id: "iphone-16-pro-max",
      name: "iPhone 16 Pro Max",
      category: "iPhone",
      tagline: "The ultimate iPhone. Powered by A18 Pro.",
      price: "From $1,199",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-model-unselect-gallery-1-202409?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1723843553399",
      colors: ["#1C1C1E", "#F5F5F0", "#C4A77D", "#3B3B3D"],
      isNew: true,
      rating: 4.9,
    },
    {
      id: "iphone-16-pro",
      name: "iPhone 16 Pro",
      category: "iPhone",
      tagline: "Hello, Apple Intelligence.",
      price: "From $999",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-deserttitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1723593807238",
      colors: ["#1C1C1E", "#F5F5F0", "#C4A77D", "#3B3B3D"],
      isNew: true,
      rating: 4.8,
    },
    {
      id: "iphone-16",
      name: "iPhone 16",
      category: "iPhone",
      tagline: "A total powerhouse.",
      price: "From $799",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1723831032867",
      colors: ["#E8E3DC", "#FAE7D6", "#BDE0F1", "#B5C7A3", "#1C1C1E"],
      isNew: true,
      rating: 4.7,
    },
  ],
  mac: [
    {
      id: "macbook-pro-16",
      name: 'MacBook Pro 16"',
      category: "Mac",
      tagline: "Mind-blowing. Head-turning.",
      price: "From $2,499",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200",
      colors: ["#1C1C1E", "#86868B"],
      isNew: true,
      rating: 4.9,
    },
    {
      id: "macbook-air-15",
      name: 'MacBook Air 15"',
      category: "Mac",
      tagline: "Impressively big. Impossibly thin.",
      price: "From $1,299",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684518479433",
      colors: ["#2E3642", "#86868B", "#F5F5F0", "#FFD700"],
      rating: 4.8,
    },
    {
      id: "imac-24",
      name: 'iMac 24"',
      category: "Mac",
      tagline: "Say hello.",
      price: "From $1,299",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697145298233",
      colors: ["#6BA4B8", "#F9D1C2", "#7FC881", "#E8E3DC", "#F5C75B", "#A186B5", "#86868B"],
      rating: 4.7,
    },
  ],
  watch: [
    {
      id: "apple-watch-ultra-2",
      name: "Apple Watch Ultra 2",
      category: "Apple Watch",
      tagline: "Next level adventure.",
      price: "From $799",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra-2-702702?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1693529816158",
      isNew: true,
      rating: 4.9,
    },
    {
      id: "apple-watch-series-10",
      name: "Apple Watch Series 10",
      category: "Apple Watch",
      tagline: "Thinstant classic.",
      price: "From $399",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s10-702702?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724953541865",
      isNew: true,
      rating: 4.8,
    },
    {
      id: "apple-watch-se",
      name: "Apple Watch SE",
      category: "Apple Watch",
      tagline: "A great deal to love.",
      price: "From $249",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-702702?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1693529847614",
      rating: 4.6,
    },
  ],
  airpods: [
    {
      id: "airpods-pro-2",
      name: "AirPods Pro 2",
      category: "AirPods",
      tagline: "Rebuilt from the sound up.",
      price: "$249",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1694014871985",
      isNew: true,
      rating: 4.9,
    },
    {
      id: "airpods-max",
      name: "AirPods Max",
      category: "AirPods",
      tagline: "High-fidelity audio.",
      price: "$549",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-hero-select-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604021221000",
      colors: ["#A8B8C8", "#2E3642", "#F5F5F0", "#7FC881", "#F9D1C2"],
      rating: 4.7,
    },
    {
      id: "airpods-4",
      name: "AirPods 4",
      category: "AirPods",
      tagline: "Rebuilt for an iconic fit.",
      price: "$129",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-hero-select-202409?wid=976&hei=916&fmt=jpeg&qlt=90&.v=1725502959101",
      isNew: true,
      rating: 4.6,
    },
  ],
};

export const aiResponses: Record<string, {
  content: string;
  products?: Product[];
  quickReplies?: string[];
}> = {
  "iphone": {
    content: "Great choice! The iPhone lineup offers something for everyone. Here are the latest models:",
    products: products.iphone,
    quickReplies: ["Compare iPhone 16 Pro vs Pro Max", "What's new in iPhone 16?", "See iPhone accessories"],
  },
  "mac": {
    content: "Let me show you our Mac lineup. Whether you need portability or power, there's a Mac for you:",
    products: products.mac,
    quickReplies: ["Compare MacBook Pro models", "Best Mac for students", "Mac accessories"],
  },
  "watch": {
    content: "Apple Watch is the ultimate device for a healthy life. Here's our current lineup:",
    products: products.watch,
    quickReplies: ["Compare Watch models", "Health features", "Watch bands"],
  },
  "airpods": {
    content: "Experience amazing audio with AirPods. Here are your options:",
    products: products.airpods,
    quickReplies: ["Compare AirPods models", "AirPods for fitness", "Audio accessories"],
  },
  "compare": {
    content: "I'd be happy to help you compare! The iPhone 16 Pro Max features the largest display at 6.9 inches, the A18 Pro chip, a 48MP camera system with 5x optical zoom, and up to 33 hours of video playback. The iPhone 16 Pro has a 6.3-inch display with the same powerful chip but offers 5x zoom only on Pro Max. Both feature Apple Intelligence, the new Camera Control button, and titanium design.",
    quickReplies: ["Which has better battery?", "Camera comparison", "See pricing options"],
  },
  "photography": {
    content: "For photography enthusiasts, I recommend the iPhone 16 Pro Max. It features:\n\n• 48MP Fusion camera with larger sensor\n• 5x Telephoto with 120mm focal length\n• 48MP Ultra Wide for macro photography\n• Photographic Styles 2.0\n• ProRAW and ProRes video up to 4K 120fps\n• Camera Control button for quick access\n\nThis is our most advanced camera system ever.",
    products: [products.iphone[0]],
    quickReplies: ["See sample photos", "Compare to iPhone 16", "Camera accessories"],
  },
  "default": {
    content: "I'd be happy to help you explore Apple products! What would you like to know about? I can help you with:\n\n• iPhone comparisons and features\n• Mac recommendations for your needs\n• Apple Watch health & fitness tracking\n• AirPods and audio products\n• Apple services and support\n\nJust ask me anything!",
    quickReplies: ["Show me iPhones", "I need a new Mac", "Apple Watch features", "Compare AirPods"],
  },
};

export const conversations = [
  {
    id: "1",
    title: "iPhone 16 Pro comparison",
    timestamp: "Today, 2:30 PM",
    preview: "Comparing the latest iPhone models...",
  },
  {
    id: "2",
    title: "MacBook for development",
    timestamp: "Yesterday",
    preview: "Best Mac for software development...",
  },
  {
    id: "3",
    title: "Apple Watch health features",
    timestamp: "2 days ago",
    preview: "Learning about fitness tracking...",
  },
];

export function getAIResponse(message: string): typeof aiResponses.default {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes("iphone") || lowerMessage.includes("phone")) {
    if (lowerMessage.includes("compare") || lowerMessage.includes("difference")) {
      return aiResponses.compare;
    }
    if (lowerMessage.includes("photo") || lowerMessage.includes("camera")) {
      return aiResponses.photography;
    }
    return aiResponses.iphone;
  }
  
  if (lowerMessage.includes("mac") || lowerMessage.includes("laptop") || lowerMessage.includes("macbook") || lowerMessage.includes("imac")) {
    return aiResponses.mac;
  }
  
  if (lowerMessage.includes("watch") || lowerMessage.includes("fitness") || lowerMessage.includes("health")) {
    return aiResponses.watch;
  }
  
  if (lowerMessage.includes("airpod") || lowerMessage.includes("headphone") || lowerMessage.includes("audio") || lowerMessage.includes("earbuds")) {
    return aiResponses.airpods;
  }
  
  return aiResponses.default;
}
