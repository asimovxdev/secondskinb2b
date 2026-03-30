export interface SportCategory {
  id: string;
  name: string;
  title: string;
  img: string;
  products: string[];
  customization: string[];
}

export const sportsData: SportCategory[] = [
  { 
    id: "cricket", 
    name: "CRICKET", 
    title: "Custom Cricket Kits",
    img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2000&auto=format&fit=crop&grayscale=true", 
    products: ["Jerseys", "Pants", "Training shirts", "Sleeveless jerseys", "Tracksuits"],
    customization: ["Team logo", "Player names", "Numbers", "Sponsor logos", "Custom colors"]
  },
  { 
    id: "soccer", 
    name: "SOCCER", 
    title: "Custom Soccer Uniforms",
    img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2000&auto=format&fit=crop&grayscale=true", 
    products: ["Jerseys", "Shorts", "Training kits", "Tracksuits"],
    customization: ["Club logo", "Numbers", "Sponsor branding", "Custom patterns"]
  },
  { 
    id: "running", 
    name: "RUNNING CLUBS", 
    title: "Running & Marathon Apparel",
    img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2000&auto=format&fit=crop&grayscale=true", 
    products: ["Running shirts", "Tank tops", "Sleeveless shirts", "Shorts"],
    customization: ["Event branding", "Club logos", "Sponsor printing"]
  },
  { 
    id: "custom", 
    name: "CUSTOM SPORTSWEAR", 
    title: "Custom Athletic Gear",
    img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2000&auto=format&fit=crop&grayscale=true", 
    products: ["Full sublimated kits", "Polos", "Compression wear", "Performance tees"],
    customization: ["100% Custom designs", "Premium fabrics", "Exact Pantone matching"]
  },
  { 
    id: "volleyball", 
    name: "VOLLEYBALL", 
    title: "Custom Volleyball Kits",
    img: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2000&auto=format&fit=crop&grayscale=true", 
    products: ["Jerseys", "Shorts", "Sleeveless jerseys"],
    customization: ["Team logo", "Numbers", "Custom colors"]
  },
  { 
    id: "more", 
    name: "MORE SPORTS", 
    title: "Multi-Discipline Sports",
    img: "https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?q=80&w=2000&auto=format&fit=crop&grayscale=true", 
    products: ["Basketball uniforms", "Cycling kits", "Fitness wear", "Tennis gear"],
    customization: ["End-to-end branding", "Various fit profiles", "Technical embellishments"]
  }
];
