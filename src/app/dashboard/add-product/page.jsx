"use client";
import React, { useState } from "react";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    stock: "",
    shortDescription: "",
    description: "",

    weight: "",
    warranty: "",
    codec: "",
    images: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name: formData.name,
      brand: formData.brand,
      category: formData.category,
      price: Number(formData.price),
      stock: Number(formData.stock),
      shortDescription: formData.shortDescription,
      description: formData.description,
      specs: {
        
        Weight: formData.weight,
        Warranty: formData.warranty,
        Codec: formData.codec,
      },
      images: formData.images,
    };

    try {
      const res = await fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (res.ok) {
        alert("✅ Product added successfully!");
        setFormData({
          name: "",
          brand: "",
          category: "",
          price: "",
          stock: "",
          shortDescription: "",
          description: "",
        
          weight: "",
          warranty: "",
          codec: "",
          images: "",
        });
      } else {
        alert("❌ Failed to add product.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Something went wrong.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg my-10">
        <h2 className="text-2xl font-bold text-center text-amber-600 mb-6">
          Add New Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input input-bordered w-full p-3 rounded-lg border"
            />
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              value={formData.brand}
              onChange={handleChange}
              required
              className="input input-bordered w-full p-3 rounded-lg border"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              required
              className="input input-bordered w-full p-3 rounded-lg border"
            />
            <input
              type="number"
              name="price"
              placeholder="Price ($)"
              value={formData.price}
              onChange={handleChange}
              required
              className="input input-bordered w-full p-3 rounded-lg border"
            />
          </div>

          <input
            type="number"
            name="stock"
            placeholder="Stock Quantity"
            value={formData.stock}
            onChange={handleChange}
            required
            className="input input-bordered w-full p-3 rounded-lg border"
          />

          {/* Descriptions */}
          <textarea
            name="shortDescription"
            placeholder="Short Description"
            value={formData.shortDescription}
            onChange={handleChange}
            required
            className="input input-bordered w-full p-3 rounded-lg border"
          />
          <textarea
            name="description"
            placeholder="Full Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="input input-bordered w-full p-3 rounded-lg border"
            rows="3"
          />

          {/* Specs */}
          <h3 className="text-lg font-semibold mt-4">Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
            <input
              type="text"
              name="weight"
              placeholder="Weight"
              value={formData.weight}
              onChange={handleChange}
              className="input input-bordered w-full p-3 rounded-lg border"
            />
            <input
              type="text"
              name="warranty"
              placeholder="Warranty"
              value={formData.warranty}
              onChange={handleChange}
              className="input input-bordered w-full p-3 rounded-lg border"
            />
            <input
              type="text"
              name="codec"
              placeholder="Codec"
              value={formData.codec}
              onChange={handleChange}
              className="input input-bordered w-full p-3 rounded-lg border"
            />
          </div>

          {/* Image */}
          <input
            type="url"
            name="images"
            placeholder="Image URL"
            value={formData.images}
            onChange={handleChange}
            required
            className="input input-bordered w-full p-3 rounded-lg border"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
