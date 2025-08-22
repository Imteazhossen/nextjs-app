"use client";
import React from "react";
import { ShoppingBag, ShieldCheck, Truck, Star } from "lucide-react";

export default function ProductHighlights() {
  const highlights = [
    {
      icon: <ShoppingBag className="w-10 h-10 text-amber-500" />,
      title: "Premium Quality",
      desc: "Carefully curated products made with the highest standards to ensure lasting quality.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-amber-500" />,
      title: "Secure Shopping",
      desc: "Shop with confidence knowing your transactions are safe and secure.",
    },
    {
      icon: <Truck className="w-10 h-10 text-amber-500" />,
      title: "Fast Delivery",
      desc: "Get your orders delivered quickly and reliably right to your doorstep.",
    },
    {
      icon: <Star className="w-10 h-10 text-amber-500" />,
      title: "Customer Satisfaction",
      desc: "Thousands of happy customers trust us for our quality and service.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Shop With Us?
          </h2>
          <p className="text-lg text-gray-600">
            Discover the key features that make us the best choice for your shopping needs.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 text-center transition transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
