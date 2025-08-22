"use client"
import React from "react";
import Link from "next/link";

// Fake data for 10 products
// const products = [
//     {
//         id: 1,
//         slug: "wireless-headphones-pro-x",
//         name: "Wireless Headphones Pro X",
//         brand: "ViewMax",
//         category: "Monitors",
//         price: 300,
//         rating: 4.3,
//         reviewsCount: 73,
//         stock: 22,
//         sku: "MN-V27-009",
//         shortDescription: "Ultra HD with 99% sRGB coverage.",
//         description:
//             "Crisp 4K resolution with vibrant colors and thin bezels. Eye‑care tech reduces strain on long sessions.",
//         features: ["4K UHD", "99% sRGB", "Low Blue Light"],
//         specs: {
//             Size: "27\"",
//             Panel: "IPS",
//             Refresh: "60Hz",
//             Ports: "2x HDMI, 1x DP"
//         },
//         images: [
//             "https://picsum.photos/seed/monitor1/800/600",
//             "https://picsum.photos/seed/monitor2/800/600",
//             "https://picsum.photos/seed/monitor3/800/600"
//         ]
//     },
//     {
//         id: 10,
//         slug: "vr-headset-neo",
//         name: "VR Headset Neo",
//         brand: "Immersa",
//         category: "VR",
//         price: 450,
//         rating: 4.1,
//         reviewsCount: 58,
//         stock: 14,
//         sku: "VR-NEO-010",
//         shortDescription: "Wide FOV and inside‑out tracking.",
//         description:
//             "Dive into VR with high‑res panels, comfortable straps, and room‑scale tracking without base stations.",
//         features: ["Wide FOV", "Inside‑out Tracking", "Hi‑res Panels"],
//         specs: {
//             Resolution: "1832×1920 per eye",
//             FOV: "up to 110°",
//             Refresh: "90Hz",
//             Tracking: "Inside‑out 6DoF"
//         },
//         images: [
//             "https://picsum.photos/seed/vr1/800/600",
//             "https://picsum.photos/seed/vr2/800/600",
//             "https://picsum.photos/seed/vr3/800/600"
//         ]
//     }
// ];

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




export const getPosts = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}






export default  function Products() {
    // const posts = getPosts(); 
    // console.log(posts);
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               

                {products.map((p) => (
                    <div
                        key={p.id}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
                    >
                        <img
                            src={p.images[0]}
                            alt={p.name}
                            className="w-full h-48 object-cover"
                            loading="lazy"
                        />


                        <div className="p-4">
                            <div className="flex items-center gap-2 text-xs mb-2">
                                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">{p.brand}</span>
                                <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">{p.category}</span>
                            </div>


                            <h2 className="text-lg font-semibold line-clamp-1">{p.name}</h2>
                            <p className="text-sm text-gray-600 line-clamp-2 mt-1">{p.shortDescription}</p>


                            <div className="mt-3 flex items-center justify-between">
                                <span className="text-xl font-bold">${p.price}</span>
                                <span className="text-sm text-gray-600">⭐ {p.rating} ({p.reviewsCount})</span>
                            </div>


                            <Link
                                href={`/products/${p.id}`}
                                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-amber-500 px-4 py-2 text-white font-medium hover:bg-amber-600"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
