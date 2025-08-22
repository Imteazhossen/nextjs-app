"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";

export default function ProductHighlights2() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/items");
        const data = await res.json();
        setProducts(data.data || data); // API may return { data: [...] } or directly array
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Loading featured products...</p>
      </div>
    );
  }

  // Show first 6 products
  const featured = products.slice(0, 6);

  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Product Highlights
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <article
              key={p._id}
              className="rounded-2xl border border-gray-100 bg-gray-50 shadow-sm overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <img
                  src={Array.isArray(p.images) ? p.images[0] : p.images}
                  alt={p.name}
                  className="w-full h-56 object-cover rounded-t-2xl"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-1 mb-1">
                  {p.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{p.brand}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.round(p.rating || 0)
                          ? "text-amber-500 fill-amber-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="text-sm text-gray-500">
                    {(p.rating || 0).toFixed(1)} · {p.reviewsCount || 0}
                  </span>
                </div>

                <p className="text-gray-700 text-sm line-clamp-2 mb-4">
                  {p.shortDescription}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-amber-600">
                    ${p.price}
                  </span>

                  {/* Link to details page */}
                  <Link href={`/products/${p._id}`}>
                    <button className="px-3 py-2 rounded-lg bg-amber-500 text-white font-medium hover:bg-amber-600 transition duration-300">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
