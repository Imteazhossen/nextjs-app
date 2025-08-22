"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Home, Package, PlusCircle } from "lucide-react";

export default function Dashboard() {
  const IsLoggedIn = true;
  const router = useRouter();

  const handleAddProduct = () => {
    if (IsLoggedIn) {
      router.push("/dashboard/add-product");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-b from-amber-200 via-white to-amber-200">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-white shadow-lg p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-amber-600 mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-100 transition"
          >
            <Home className="w-5 h-5 text-amber-600" /> Home
          </Link>
          <Link
            href="/products"
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-100 transition"
          >
            <Package className="w-5 h-5 text-amber-600" /> Products
          </Link>
          <Link
            href="/dashboard/add-product"
            className="flex items-center gap-2 p-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition"
          >
            <PlusCircle className="w-5 h-5" /> Add Product
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to the Dashboard</h1>
          <button
            onClick={handleAddProduct}
            className="px-5 py-2 bg-amber-500 text-white rounded-lg shadow hover:bg-amber-600 transition"
          >
            + Add Product
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Total Products</h3>
            <p className="text-gray-600 text-lg">120</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Pending Orders</h3>
            <p className="text-gray-600 text-lg">15</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Stock Alerts</h3>
            <p className="text-gray-600 text-lg">8</p>
          </div>
        </div>

        {/* Optional Section */}
        <div className="mt-8 p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={handleAddProduct}
              className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
            >
              Add New Product
            </button>
            <Link
              href="/products"
              className="px-4 py-2 bg-white border border-amber-500 text-amber-600 rounded-lg hover:bg-amber-100 transition"
            >
              View All Products
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
