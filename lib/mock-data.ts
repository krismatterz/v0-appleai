import { Product } from "@/components/apple-ai/product-card";

export const appleLogoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-logo-kHT9PlmSbtfuVqPQAtsximjLs5C2be.png';

export const products: Record<string, Product[]> = {
  iphone: [
    {
      id: "iphone-17-pro-max",
      name: "iPhone 17 Pro Max",
      category: "iPhone",
      tagline: "The ultimate iPhone.",
      price: "From $1,199",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-WmBQwIlTNP2PmnDjniPCdww1yqnLlz.png",
      colors: ["#E87A4D", "#1C1C1E", "#F5F5F0", "#3B3B3D"],
      isNew: true,
      rating: 4.9,
    },
    {
      id: "iphone-air",
      name: "iPhone Air",
      category: "iPhone",
      tagline: "Light. Years ahead.",
      price: "From $999",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/air-Gy42CQxjwjfq7AgMZYuT1F3uoBcSCK.png",
      colors: ["#B8D4E8", "#1C1C1E", "#F5F5F0", "#E8D4C8"],
      isNew: true,
      rating: 4.8,
    },
  ],
  mac: [
    {
      id: "macbook-neo",
      name: "MacBook Neo",
      category: "Mac",
      tagline: "Hello, everyone.",
      price: "From $599",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/neo-FdkXRogBW5hKBx8zSX2Tbeh6aSl3kS.png",
      colors: ["#E8E88C", "#F5C6D0", "#4A6B8A", "#86868B"],
      isNew: true,
      rating: 4.8,
    },
    {
      id: "macbook-pro-m5",
      name: "MacBook Pro",
      category: "Mac",
      tagline: "Mind-blowing. Head-turning.",
      price: "From $1,999",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mbpro-m5.png-yvFvJrq8pNjVrNJyOV0qw2O30hqwuG.jpeg",
      colors: ["#1C1C1E", "#86868B"],
      isNew: true,
      rating: 4.9,
    },
  ],
  watch: [
    {
      id: "apple-watch-ultra-3",
      name: "Apple Watch Ultra 3",
      category: "Apple Watch",
      tagline: "Adventure awaits.",
      price: "From $899",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uNhiV1uTaYfY4MP3pepZ4ZHiLeOGGE.png",
      isNew: true,
      rating: 4.9,
    },
    {
      id: "apple-watch-series-11",
      name: "Apple Watch Series 11",
      category: "Apple Watch",
      tagline: "Smarter. Brighter. Mightier.",
      price: "From $399",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/series-viVyqq7FI4qKxfAJ2DpfjxBEr65ZGN.png",
      isNew: true,
      rating: 4.8,
    },
  ],
  airpods: [
    {
      id: "airpods-pro-3",
      name: "AirPods Pro 3",
      category: "AirPods",
      tagline: "Rebuilt from the sound up.",
      price: "$279",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1694014871985",
      isNew: true,
      rating: 4.9,
    },
    {
      id: "airpods-max-2",
      name: "AirPods Max 2",
      category: "AirPods",
      tagline: "Immersive audio reimagined.",
      price: "$599",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-hero-select-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604021221000",
      colors: ["#A8B8C8", "#2E3642", "#F5F5F0", "#7FC881", "#F9D1C2"],
      isNew: true,
      rating: 4.8,
    },
  ],
};

export const featuredProducts2026: Product[] = [
  products.iphone[0], // iPhone 17 Pro Max
  products.iphone[1], // iPhone Air
  products.watch[0],  // Apple Watch Ultra 3
  products.watch[1],  // Apple Watch Series 11
  products.mac[0],    // MacBook Neo
  products.mac[1],    // MacBook Pro M5
];

export const aiResponses: Record<string, {
  content: string;
  products?: Product[];
  quickReplies?: string[];
}> = {
  "iphone": {
    content: "Welcome to the 2026 iPhone lineup! The **iPhone 17 Pro Max** features the revolutionary A19 Pro chip and stunning Copper Titanium finish, while the **iPhone Air** is our thinnest iPhone ever at just 5.8mm.",
    products: products.iphone,
    quickReplies: ["Compare iPhone 17 Pro Max vs Air", "What's new in iPhone 17?", "Show me iPhone accessories"],
  },
  "mac": {
    content: "Our 2026 Mac lineup is incredible. The **MacBook Neo** starts at just $599 - our most affordable Mac ever - while the **MacBook Pro with M5** delivers unprecedented professional performance.",
    products: products.mac,
    quickReplies: ["Tell me about M5 chip", "MacBook Neo colors", "Compare Mac models"],
  },
  "watch": {
    content: "The 2026 Apple Watch lineup pushes boundaries. **Apple Watch Ultra 3** offers 72-hour battery life for extreme adventures, while **Series 11** introduces breakthrough blood pressure monitoring.",
    products: products.watch,
    quickReplies: ["Health features in Series 11", "Ultra 3 adventure features", "Compare Watch models"],
  },
  "airpods": {
    content: "Experience next-generation audio with our 2026 AirPods lineup featuring enhanced spatial audio and improved noise cancellation.",
    products: products.airpods,
    quickReplies: ["Compare AirPods models", "AirPods for fitness", "Audio accessories"],
  },
  "compare-iphone": {
    content: "**iPhone 17 Pro Max vs iPhone Air**\n\nThe **iPhone 17 Pro Max** ($1,199) is the ultimate powerhouse with:\n• A19 Pro chip\n• 48MP Fusion camera with 5x optical zoom\n• Titanium design\n• Action button\n\nThe **iPhone Air** ($999) prioritizes portability:\n• Just 5.8mm thin - thinnest iPhone ever\n• A19 chip\n• 48MP camera\n• Impossibly light\n\nChoose Pro Max for maximum capability, or Air for ultimate portability.",
    products: products.iphone,
    quickReplies: ["Which has better camera?", "Battery life comparison", "See all colors"],
  },
  "macbook-neo": {
    content: "**MacBook Neo** - The most affordable Mac ever at just **$599**!\n\n• M4 chip for incredible performance\n• 13.6\" Liquid Retina display\n• 18-hour battery life\n• Available in 4 gorgeous colors: Lime, Pink, Blue, Silver\n• MagSafe charging\n\nPerfect for students, first-time Mac users, and anyone who wants the Apple experience at an accessible price.",
    products: [products.mac[0]],
    quickReplies: ["See all colors", "Compare to MacBook Pro", "Student discount"],
  },
  "macbook-pro": {
    content: "**MacBook Pro with M5** - Mind-blowing professional performance.\n\n• M5 Pro and M5 Max chip options\n• Up to 128GB unified memory\n• Liquid Retina XDR display\n• 22-hour battery life\n• Pro connectivity with Thunderbolt 5\n\nDesigned for developers, creators, and anyone who demands the absolute best.",
    products: [products.mac[1]],
    quickReplies: ["M5 Pro vs M5 Max", "Compare to MacBook Neo", "See configurations"],
  },
  "watch-ultra": {
    content: "**Apple Watch Ultra 3** - Built for the most extreme adventures.\n\n• S10 chip with enhanced performance\n• 72-hour battery life\n• Natural titanium case\n• Precision dual-frequency GPS\n• Depth gauge for diving\n• 100m water resistance\n\nFrom ocean depths to mountain peaks, Ultra 3 is ready for anything.",
    products: [products.watch[0]],
    quickReplies: ["Diving features", "Compare to Series 11", "Adventure bands"],
  },
  "watch-series": {
    content: "**Apple Watch Series 11** - Breakthrough health monitoring.\n\n• S10 chip\n• Blood pressure monitoring (NEW)\n• Sleep apnea detection (NEW)\n• Brightest Always-On display ever\n• Fast charging - 80% in 30 minutes\n• Rose Gold finish with stunning display\n\nYour most powerful health companion yet.",
    products: [products.watch[1]],
    quickReplies: ["Blood pressure feature", "Compare to Ultra 3", "Health features"],
  },
  "default": {
    content: "Welcome to Apple 2026! I can help you explore our revolutionary new lineup:\n\n• **iPhone 17 Pro Max** - The ultimate iPhone with A19 Pro\n• **iPhone Air** - Impossibly thin at just 5.8mm\n• **MacBook Neo** - Mac for everyone at $599\n• **MacBook Pro M5** - Unprecedented performance\n• **Apple Watch Ultra 3** - 72-hour adventure battery\n• **Apple Watch Series 11** - Blood pressure monitoring\n\nWhat would you like to explore?",
    products: featuredProducts2026.slice(0, 4),
    quickReplies: ["Show me iPhones", "Tell me about MacBook Neo", "Apple Watch features", "What's new in 2026?"],
  },
};

export const conversations = [
  {
    id: "1",
    title: "iPhone 17 Pro Max features",
    timestamp: "Today, 2:30 PM",
    preview: "Exploring the A19 Pro chip capabilities...",
  },
  {
    id: "2",
    title: "MacBook Neo at $599",
    timestamp: "Yesterday",
    preview: "The most affordable Mac ever...",
  },
  {
    id: "3",
    title: "Apple Watch health features",
    timestamp: "2 days ago",
    preview: "Blood pressure monitoring in Series 11...",
  },
];

export function getAIResponse(message: string): typeof aiResponses.default {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes("iphone 17") || lowerMessage.includes("pro max")) {
    if (lowerMessage.includes("compare") || lowerMessage.includes("vs") || lowerMessage.includes("air")) {
      return aiResponses["compare-iphone"];
    }
    return aiResponses.iphone;
  }
  
  if (lowerMessage.includes("iphone air") || lowerMessage.includes("thin")) {
    if (lowerMessage.includes("compare") || lowerMessage.includes("vs")) {
      return aiResponses["compare-iphone"];
    }
    return aiResponses.iphone;
  }
  
  if (lowerMessage.includes("iphone") || lowerMessage.includes("phone")) {
    return aiResponses.iphone;
  }
  
  if (lowerMessage.includes("macbook neo") || lowerMessage.includes("$599") || lowerMessage.includes("affordable mac")) {
    return aiResponses["macbook-neo"];
  }
  
  if (lowerMessage.includes("macbook pro") || lowerMessage.includes("m5")) {
    return aiResponses["macbook-pro"];
  }
  
  if (lowerMessage.includes("mac") || lowerMessage.includes("laptop") || lowerMessage.includes("macbook")) {
    return aiResponses.mac;
  }
  
  if (lowerMessage.includes("ultra") || lowerMessage.includes("adventure")) {
    return aiResponses["watch-ultra"];
  }
  
  if (lowerMessage.includes("series 11") || lowerMessage.includes("blood pressure") || lowerMessage.includes("health")) {
    return aiResponses["watch-series"];
  }
  
  if (lowerMessage.includes("watch") || lowerMessage.includes("fitness")) {
    return aiResponses.watch;
  }
  
  if (lowerMessage.includes("airpod") || lowerMessage.includes("headphone") || lowerMessage.includes("audio")) {
    return aiResponses.airpods;
  }
  
  if (lowerMessage.includes("2026") || lowerMessage.includes("new") || lowerMessage.includes("latest")) {
    return aiResponses.default;
  }
  
  return aiResponses.default;
}
