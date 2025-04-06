"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const outfits = [
  "/model/model-a.png",
  "/model/model-b.png",
  "/model/model-c.png",
  "/model/model-d.png",
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
                <Link href="https://www.fiverr.com/imthe_ai/do-realistic-ai-photoshoots-create-ai-models-for-your-fashion-clothing-brand" passHref>
                  <Button className="text-primary-foreground w-auto px-4 py-2 flex items-center gap-1"> 
                    <span className="align-baseline">Connect us on</span>
                    <Image
                      src="/fiverr_transparent.png"
                      alt="Fiverr"
                      width={45} // Adjusted size to prevent overflow
                      height={8}
                      className="mb-0.5 object-contain"
                    />
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
                  <a href="/#Home" className="text-sm hover:text-gray-900">
                    Home
                  </a>
                </li>
                {/* <li>
                  <Link
                    href="/#pricing"
                    className="text-sm hover:text-gray-900"
                  >
                    Pricing
                  </Link>
                </li> */}
                <li>
                  <a href="/about" className="text-sm hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#tally-open=w7vAoZ&tally-layout=modal&tally-emoji-animation=wave"
                    className="text-sm hover:text-gray-900"
                  >
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
              <p className="text-sm">Guwahati, Assam, INDIA</p>
              <p className="text-sm">
                Email:
                <a href="mailto:info.imthe.ai@gmail.com">
                  {" "}
                  info.imthe.ai@gmail.com
                </a>
              </p>
              <p className="text-sm">Phone: +916002920374</p>
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
                <Link
                  href="https://www.instagram.com/_imthe.ai?igsh=MXEwZHZjM2Q5YXpxaQ=="
                  passHref
                >
                  <Button variant="ghost" size="icon" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/i-m-the-ai/"
                  passHref
                >
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://www.youtube.com/@imthe-ai" passHref>
                  <Button variant="ghost" size="icon" aria-label="Youtube">
                    <Youtube className="h-5 w-5" />
                  </Button>
                </Link>
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
