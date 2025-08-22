import Link from "next/link";
import React from "react";
import { Star, Stars } from "lucide-react";

// Same fake data (in real case, fetch from DB or API)
const products = [
  {
    id: 1,
    slug: "wireless-headphones-pro-x",
    name: "Wireless Headphones Pro X",
    brand: "SoundCore",
    category: "Audio",
    price: 120,
    rating: 4.6,
    reviewsCount: 128,
    stock: 24,
    sku: "HD-PROX-001",
    shortDescription: "ANC headphones with 40h battery and rich bass.",
    description:
      "Experience studio-grade sound with hybrid active noise cancellation, soft protein ear-cups, and 40 hours of playtime. Fast charging gives 4 hours in 10 minutes.",
    features: [
      "Hybrid Active Noise Cancellation",
      "Bluetooth 5.3",
      "40h Battery + Fast Charge",
      "Foldable, travel case included"
    ],
    specs: {
      Driver: "40mm dynamic",
      Weight: "250g",
      Warranty: "12 months",
      Codec: "AAC, SBC"
    },
    images: [
      "https://picsum.photos/seed/headphones1/800/600",
      "https://picsum.photos/seed/headphones2/800/600",
      "https://picsum.photos/seed/headphones3/800/600"
    ]
  },
  {
    id: 2,
    slug: "smart-watch-s3",
    name: "Smart Watch S3",
    brand: "Chrono",
    category: "Wearables",
    price: 90,
    rating: 4.2,
    reviewsCount: 76,
    stock: 50,
    sku: "SW-S3-002",
    shortDescription: "Heart-rate, SpO2, GPS, and 7-day battery.",
    description:
      "Track workouts and health with built-in GPS, 24/7 heart-rate & SpO2 monitoring. 5ATM water resistance with customizable watch faces.",
    features: ["GPS", "SpO2", "5ATM Water Resistant", "7-day Battery"],
    specs: {
      Display: "1.4\" AMOLED",
      Battery: "7 days typical",
      GPS: "Built-in",
      Weight: "36g"
    },
    images: [
      "https://picsum.photos/seed/watch1/800/600",
      "https://picsum.photos/seed/watch2/800/600",
      "https://picsum.photos/seed/watch3/800/600"
    ]
  },
  {
    id: 3,
    slug: "ultra-gaming-laptop-15",
    name: "Ultra Gaming Laptop 15",
    brand: "Zephyr",
    category: "Computers",
    price: 1200,
    rating: 4.7,
    reviewsCount: 201,
    stock: 12,
    sku: "LT-Z15-003",
    shortDescription: "RTX graphics, 16GB RAM, 1TB SSD.",
    description:
      "Designed for high FPS gaming and content creation. Advanced cooling with dual fans and vapor chamber keeps performance consistent.",
    features: ["RTX GPU", "144Hz Display", "1TB NVMe", "Wi‑Fi 6"],
    specs: {
      CPU: "Core i7 13th Gen",
      GPU: "RTX 4060",
      RAM: "16GB DDR5",
      Storage: "1TB NVMe",
      Display: "15.6\" 144Hz FHD"
    },
    images: [
      "https://picsum.photos/seed/laptop1/800/600",
      "https://picsum.photos/seed/laptop2/800/600",
      "https://picsum.photos/seed/laptop3/800/600"
    ]
  },
  {
    id: 4,
    slug: "pocket-bluetooth-speaker-go",
    name: "Pocket Bluetooth Speaker Go",
    brand: "BoomBox",
    category: "Audio",
    price: 50,
    rating: 4.1,
    reviewsCount: 64,
    stock: 60,
    sku: "SPK-GO-004",
    shortDescription: "Compact speaker with punchy bass.",
    description:
      "Small size, big sound. IPX5 splash-proof with 10 hours of playtime. Built-in mic for calls.",
    features: ["IPX5", "10h Battery", "Hands-free Calls"],
    specs: {
      Output: "12W",
      Battery: "2000mAh",
      Connectivity: "BT 5.0, AUX",
      Weight: "340g"
    },
    images: [
      "https://picsum.photos/seed/speaker1/800/600",
      "https://picsum.photos/seed/speaker2/800/600",
      "https://picsum.photos/seed/speaker3/800/600"
    ]
  },
  {
    id: 5,
    slug: "dslr-camera-mark-ii",
    name: "DSLR Camera Mark II",
    brand: "Photon",
    category: "Cameras",
    price: 800,
    rating: 4.4,
    reviewsCount: 95,
    stock: 18,
    sku: "DSLR-MK2-005",
    shortDescription: "24MP sensor with 4K video.",
    description:
      "Capture stunning photos with fast autofocus and crisp 4K video. Interchangeable lenses and hot shoe support.",
    features: ["24MP", "4K/30fps", "Fast AF"],
    specs: {
      Sensor: "APS-C 24MP",
      ISO: "100–25600",
      Video: "4K/30fps",
      Weight: "620g"
    },
    images: [
      "https://picsum.photos/seed/camera1/800/600",
      "https://picsum.photos/seed/camera2/800/600",
      "https://picsum.photos/seed/camera3/800/600"
    ]
  },
  {
    id: 6,
    slug: "nova-smartphone-x",
    name: "Nova Smartphone X",
    brand: "Nova",
    category: "Phones",
    price: 600,
    rating: 4.3,
    reviewsCount: 142,
    stock: 35,
    sku: "PH-NOVA-X-006",
    shortDescription: "AMOLED display with 5000mAh battery.",
    description:
      "A sleek phone with a vibrant AMOLED display, triple camera, and 67W fast charging to keep you powered all day.",
    features: ["AMOLED", "5000mAh", "67W Fast Charge"],
    specs: {
      Chipset: "Octa-core 6nm",
      RAM: "8GB",
      Storage: "256GB",
      Camera: "64MP + 8MP + 2MP"
    },
    images: [
      "https://picsum.photos/seed/phone1/800/600",
      "https://picsum.photos/seed/phone2/800/600",
      "https://picsum.photos/seed/phone3/800/600"
    ]
  },
  {
    id: 7,
    slug: "ergo-wireless-mouse-m7",
    name: "Ergo Wireless Mouse M7",
    brand: "ClickPro",
    category: "Accessories",
    price: 25,
    rating: 4.0,
    reviewsCount: 51,
    stock: 100,
    sku: "MS-M7-007",
    shortDescription: "Ergonomic mouse with silent clicks.",
    description:
      "Comfortable contoured design with adjustable DPI and ultra-silent switches. 12 months battery life.",
    features: ["Silent Switches", "Adjustable DPI", "12m Battery"],
    specs: {
      DPI: "800–2400",
      Battery: "AA x1 (included)",
      Receiver: "2.4GHz USB",
      Weight: "85g"
    },
    images: [
      "https://picsum.photos/seed/mouse1/800/600",
      "https://picsum.photos/seed/mouse2/800/600",
      "https://picsum.photos/seed/mouse3/800/600"
    ]
  },
  {
    id: 8,
    slug: "rgb-mechanical-keyboard-k80",
    name: "RGB Mechanical Keyboard K80",
    brand: "KeyWave",
    category: "Accessories",
    price: 70,
    rating: 4.5,
    reviewsCount: 167,
    stock: 40,
    sku: "KB-K80-008",
    shortDescription: "Hot‑swappable switches with per‑key RGB.",
    description:
      "Compact 75% layout with hot‑swappable sockets, double‑shot PBT keycaps and per‑key RGB lighting.",
    features: ["Hot‑swappable", "PBT Keycaps", "Per‑key RGB"],
    specs: {
      Layout: "75%",
      Switches: "Hot‑swappable",
      Connection: "USB‑C wired",
      Case: "Aluminum"
    },
    images: [
      "https://picsum.photos/seed/keyboard1/800/600",
      "https://picsum.photos/seed/keyboard2/800/600",
      "https://picsum.photos/seed/keyboard3/800/600"
    ]
  },
  {
    id: 9,
    slug: "vivid27-4k-monitor",
    name: "27\" 4K Monitor Vivid27",
    brand: "ViewMax",
    category: "Monitors",
    price: 300,
    rating: 4.3,
    reviewsCount: 73,
    stock: 22,
    sku: "MN-V27-009",
    shortDescription: "Ultra HD with 99% sRGB coverage.",
    description:
      "Crisp 4K resolution with vibrant colors and thin bezels. Eye‑care tech reduces strain on long sessions.",
    features: ["4K UHD", "99% sRGB", "Low Blue Light"],
    specs: {
      Size: "27\"",
      Panel: "IPS",
      Refresh: "60Hz",
      Ports: "2x HDMI, 1x DP"
    },
    images: [
      "https://picsum.photos/seed/monitor1/800/600",
      "https://picsum.photos/seed/monitor2/800/600",
      "https://picsum.photos/seed/monitor3/800/600"
    ]
  },
  {
    id: 10,
    slug: "vr-headset-neo",
    name: "VR Headset Neo",
    brand: "Immersa",
    category: "VR",
    price: 450,
    rating: 4.1,
    reviewsCount: 58,
    stock: 14,
    sku: "VR-NEO-010",
    shortDescription: "Wide FOV and inside‑out tracking.",
    description:
      "Dive into VR with high‑res panels, comfortable straps, and room‑scale tracking without base stations.",
    features: ["Wide FOV", "Inside‑out Tracking", "Hi‑res Panels"],
    specs: {
      Resolution: "1832×1920 per eye",
      FOV: "up to 110°",
      Refresh: "90Hz",
      Tracking: "Inside‑out 6DoF"
    },
    images: [
      "https://picsum.photos/seed/vr1/800/600",
      "https://picsum.photos/seed/vr2/800/600",
      "https://picsum.photos/seed/vr3/800/600"
    ]
  }
];

export default function ProductDetails({ params }) {
  const id = Number(params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <p className="text-red-600">Product not found.</p>
        <Link href="/products" className="text-amber-600 underline">Back to products</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Link href="/products" className="text-amber-600 underline">← Back to products</Link>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gallery */}
        <div>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-80 object-cover rounded-2xl border"
          />
          <div className="mt-3 grid grid-cols-3 gap-3">
            {product.images.slice(1).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${product.name} ${i + 2}`}
                className="w-full h-28 object-cover rounded-xl border"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="mt-2 flex items-center gap-3 text-sm">
            <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">{product.brand}</span>
            <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">{product.category}</span>
            <span className="text-gray-600">SKU: {product.sku}</span>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <Stars value={product.rating} />
            <span className="text-sm text-gray-600">{product.rating} • {product.reviewsCount} reviews</span>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <span className="text-3xl font-extrabold">${product.price}</span>
            {product.stock > 0 ? (
              <span className="text-sm px-2 py-1 rounded-full bg-green-100 text-green-700">In stock: {product.stock}</span>
            ) : (
              <span className="text-sm px-2 py-1 rounded-full bg-red-100 text-red-700">Out of stock</span>
            )}
          </div>

          <p className="mt-4 text-gray-700">{product.description}</p>

          <div className="mt-6">
            <h2 className="text-lg font-semibold">Key Features</h2>
            <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
              {product.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold">Specifications</h2>
            <div className="mt-2 overflow-hidden rounded-xl border">
              <table className="w-full text-sm">
                <tbody>
                  {Object.entries(product.specs).map(([k, v]) => (
                    <tr key={k} className="odd:bg-gray-50">
                      <td className="w-1/3 px-4 py-2 font-medium text-gray-700">{k}</td>
                      <td className="px-4 py-2 text-gray-800">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="rounded-xl bg-amber-500 px-4 py-2 text-white font-medium hover:bg-amber-600">Add to Cart</button>
            <button className="rounded-xl border px-4 py-2 font-medium hover:bg-gray-50">Save for Later</button>
          </div>
        </div>
      </div>
    </div>
  );
}