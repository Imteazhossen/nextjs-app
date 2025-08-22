import Link from 'next/link';
import React from 'react';
import { Twitter, Youtube, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-amber-200 via-white to-amber-200 text-gray-800 px-6 py-12">
            <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Quick Links */}
                <div>
                    <h6 className="font-bold text-lg mb-4">Quick Links</h6>
                    <ul className="space-y-2">
                        <li><Link href='/' className="hover:text-amber-600 transition">Home</Link></li>
                        <li><Link href='/products' className="hover:text-amber-600 transition">Products</Link></li>
                        <li><Link href='/dashboard' className="hover:text-amber-600 transition">Dashboard</Link></li>
                        <li><Link href='/login' className="hover:text-amber-600 transition">Login</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h6 className="font-bold text-lg mb-4">Company</h6>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-amber-600 transition">About Us</a></li>
                        <li><a href="#" className="hover:text-amber-600 transition">Contact</a></li>
                        <li><a href="#" className="hover:text-amber-600 transition">Jobs</a></li>
                        <li><a href="#" className="hover:text-amber-600 transition">Press Kit</a></li>
                    </ul>
                </div>

                {/* Social */}

                <div>
                    <h6 className="font-bold text-lg mb-4">Social</h6>
                    <div className="flex space-x-3">
                        {/* Twitter */}
                        <a
                            href="#"
                            aria-label="Twitter"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-amber-200 transition transform hover:scale-110 shadow"
                        >
                            <Twitter className="w-5 h-5 text-amber-600" />
                        </a>

                        {/* YouTube */}
                        <a
                            href="#"
                            aria-label="YouTube"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-amber-200 transition transform hover:scale-110 shadow"
                        >
                            <Youtube className="w-5 h-5 text-amber-600" />
                        </a>

                        {/* Facebook */}
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-amber-200 transition transform hover:scale-110 shadow"
                        >
                            <Facebook className="w-5 h-5 text-amber-600" />
                        </a>
                    </div>
                </div>



                {/* Optional: Newsletter or branding */}
                <div>
                    <h6 className="font-bold text-lg mb-4">About Mr DIY</h6>
                    <p className="text-gray-700 mb-4">
                        Discover high-quality products at the best prices. Stay connected with our latest updates and offers.
                    </p>
                    <span className="text-sm text-gray-600">© 2025 Mr DIY. All rights reserved.</span>
                </div>
            </div>
        </footer>
    )
}
