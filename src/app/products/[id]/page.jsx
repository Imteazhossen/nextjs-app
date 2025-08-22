"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProductDetails() {
  const { id } = useParams(); // get MongoDB _id from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetch all products
        const res = await fetch("http://localhost:3000/api/items");
        const data = await res.json();

        // API may return { data: [...] } or directly array
        const productsArray = data.data || data;

        // Find product with matching _id
        const foundProduct = productsArray.find((p) => p._id === id);
        setProduct(foundProduct || null);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-10 text-amber-500">Loading product...</p>;

  if (!product)
    return (
      <div className="text-center mt-10">
        <p className="text-red-600 text-lg font-semibold">Product not found.</p>
        <Link href="/products" className="text-amber-600 underline">
          ← Back to Products
        </Link>
      </div>
    );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Link href="/products" className="text-amber-600 underline font-medium">
        ← Back to Products
      </Link>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Images / Gallery */}
        <div>
          <img
            src={Array.isArray(product.images) ? product.images[0] : product.images}
            alt={product.name}
            className="w-full h-80 object-cover rounded-2xl border"
          />
          {Array.isArray(product.images) && product.images.length > 1 && (
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
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
            <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">{product.brand}</span>
            <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">{product.category}</span>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <span className="text-3xl font-extrabold">${product.price}</span>
            {product.stock > 0 ? (
              <span className="text-sm px-2 py-1 rounded-full bg-green-100 text-green-700">
                In stock: {product.stock}
              </span>
            ) : (
              <span className="text-sm px-2 py-1 rounded-full bg-red-100 text-red-700">Out of stock</span>
            )}
          </div>

          {product.shortDescription && (
            <p className="mt-4 text-gray-700 text-sm">{product.shortDescription}</p>
          )}

          {product.description && (
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>
          )}

          {product.specs && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Specifications</h2>
              <div className="overflow-hidden rounded-xl border">
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(product.specs).map(([key, value]) => (
                      <tr key={key} className="odd:bg-gray-50">
                        <td className="w-1/3 px-4 py-2 font-medium text-gray-700">{key}</td>
                        <td className="px-4 py-2 text-gray-800">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="mt-6 flex gap-3 flex-wrap">
            <button className="rounded-xl bg-amber-500 px-4 py-2 text-white font-medium hover:bg-amber-600 transition">
              Add to Cart
            </button>
            <button className="rounded-xl border px-4 py-2 font-medium hover:bg-gray-50 transition">
              Save for Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
