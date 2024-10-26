"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const outfits = [
  "/model/model-1.png",
  "/model/model-2.png",
  "/model/model-3.jpeg",
  "/model/model-4.jpeg",
];

export default function Footer() {
  const [currentOutfitIndex, setCurrentOutfitIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOutfitIndex((prevIndex) => (prevIndex + 1) % outfits.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-gray-100 text-gray-600 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Auto-changing Girl Model with CTA */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="relative w-48 h-64 mx-auto overflow-hidden rounded-lg shadow-lg">
              <Image
                src={outfits[currentOutfitIndex]}
                alt={`Girl in outfit ${currentOutfitIndex + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-end justify-center p-4">
                <Link href="https://app.imthe.ai" passHref>
                  <Button className="text-primary-foreground w-full">
                    Get Started For Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Content */}
          <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <a href="" className="text-sm hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="text-sm hover:text-gray-900">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-sm hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="" className="text-sm hover:text-gray-900">
                    Contact Us
                  </a>
                </li>
                <li>
                  <Link
                    href="/PrivacyPolicy"
                    className="text-sm hover:text-gray-900"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/TermsConditions"
                    className="text-sm hover:text-gray-900"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
              <p className="text-sm">123 Main St, Anytown, USA 12345</p>
              <p className="text-sm">Email: info@example.com</p>
              <p className="text-sm">Phone: (123) 456-7890</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm">&copy; 2024 Imthe.Ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
