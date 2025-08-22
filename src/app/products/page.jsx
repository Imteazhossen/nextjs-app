"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/items");
        const json = await res.json();

        // If your API returns { data: [...] }
        setProducts(json.data || []); 

        // If your API returns directly an array, use:
        // setProducts(json);
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
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-gray-500">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-amber-600">Products</h1>
      {products.length === 0 ? (
        <p className="text-gray-500">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden  transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg "
            >
              <img
                src={Array.isArray(p.images) ? p.images[0] : p.images}
                alt={p.name}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                    {p.brand}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                    {p.category}
                  </span>
                </div>

                <h2 className="text-lg font-semibold line-clamp-1">{p.name}</h2>
                <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                  {p.shortDescription}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xl font-bold">${p.price}</span>
                  {/* Placeholder rating if not available in your API */}
                  <span className="text-sm text-gray-600">⭐ 4.5 (23)</span>
                </div>

                <Link
                  href={`/products/${p._id}`} // <-- MongoDB _id used here
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-amber-500 px-4 py-2 text-white font-medium hover:bg-amber-600"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
