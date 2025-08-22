"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // Sign in using credentials provider
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      setError(result.error);
    } else {
      // Redirect to products page after successful login
      router.push("/products");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-200 via-white to-amber-200 px-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-amber-600 text-center mb-5">
          Please Login
        </h1>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-xl font-medium hover:from-amber-500 hover:to-amber-600 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center text-gray-500 text-sm">Or login with</div>

        <div className="flex justify-center gap-3 mt-3">
          <button className="p-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition text-sm">
            Google
          </button>
          <button className="p-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition text-sm">
            Facebook
          </button>
        </div>

        <p className="mt-4 text-center text-gray-500 text-sm">
          Don’t have an account?{" "}
          <Link href="/register" className="text-amber-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
