import React from "react";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center bg-gray-900">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-105 animate-slowZoom"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581093588401-22b94e6f8aa1?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

      {/* Content */}
      <div className="relative text-center text-white max-w-3xl px-6 animate-fadeIn">
        <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Discover Our <span className="text-amber-400">Exclusive</span> Products
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Premium quality, unbeatable prices. Start your journey with us today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/products">
            <button className="px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg shadow-md hover:bg-amber-600 transition">
              Shop Now
            </button>
          </Link>
          <Link href="/products">
            <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
