"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Zap, Clock, Users } from "lucide-react";

export default function AboutUs() {
  const [selectedProduct, setSelectedProduct] = useState("tryOn");

  const products = {
    tryOn: {
      title: "Virtual Try-On",
      description:
        "AI-driven virtual try-ons that let customers see how your designs look on models with different body types and skin tones.",
      image: "/placeholder.svg?height=300&width=400&text=Virtual+Try-On",
    },
    photoshoot: {
      title: "AI-Powered Photoshoot",
      description:
        "Create professional images of your designs on customizable models and backgrounds, eliminating the need for traditional photoshoots.",
      image: "/placeholder.svg?height=300&width=400&text=AI+Photoshoot",
    },
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white text-gray-800">
      <main className="container mx-auto px-4">
        <motion.section className="py-20 text-center" {...fadeIn}>
          <h1 className="tracking-tight text-balance mb-6 font-bold !leading-tight text-gray-900 text-5xl">
            Revolutionizing Fashion with AI
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 mb-8">
            At FashionAI, we're transforming the industry with cutting-edge
            technology. Create virtual try-ons and professional photoshoots
            without physical models or expensive setups.
          </p>
          <Button className="background: linear-gradient(177.9deg, rgb(58, 62, 88) 3.6%, rgb(119, 127, 148) 105.8%); text-white text-lg py-6 px-8 rounded-full hover:shadow-lg transition-shadow duration-300">
            Elevate Your Brand Now <ChevronRight className="ml-2" />
          </Button>
        </motion.section>

        <motion.section className="py-16" {...fadeIn}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We empower fashion brands with AI solutions that simplify and
                elevate their digital presence. From virtual fittings to
                high-quality AI-generated photoshoots, we're making fashion more
                accessible, interactive, and engaging for everyone.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Zap, text: "Cutting-edge AI technology" },
                  { icon: Clock, text: "Time-saving solutions" },
                  { icon: Users, text: "Enhanced customer experience" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <item.icon className="text-gray-900 mr-2" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=AI+Fashion+Showcase"
                alt="AI Fashion Showcase"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                <p className="text-gray-600 font-bold">100+ Brands</p>
                <p className="text-sm text-gray-600">Trust Our Technology</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section className="py-16" {...fadeIn}>
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(products).map(([key, product]) => (
              <Card
                key={key}
                className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
                onClick={() => setSelectedProduct(key)}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="w-full object-cover h-48"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="py-16 bg-gray-900 text-white rounded-2xl"
          {...fadeIn}
        >
          <div className="text-center px-4">
            <h2 className="text-3xl font-bold mb-6">Why Choose FashionAI?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Cost-Effective",
                  description: "Save on traditional photoshoot expenses",
                },
                {
                  title: "Time-Saving",
                  description: "Generate images and try-ons instantly with AI",
                },
                {
                  title: "Personalized",
                  description: "Tailor virtual try-ons to individual customers",
                },
              ].map((item, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section className="py-20 text-center" {...fadeIn}>
          <h2 className="text-4xl font-bold mb-6">
            Ready to Elevate Your Fashion Brand?
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-8">
            Experience the future of fashion technology. Try our demo and see
            how our AI can transform your brand's digital presence.
          </p>
          <Button
            size="lg"
            className="background: linear-gradient(177.9deg, rgb(58, 62, 88) 3.6%, rgb(119, 127, 148) 105.8%); text-white text-lg py-6 px-8 rounded-full hover:shadow-lg transition-shadow duration-300"
          >
            Start Your Free Trial
          </Button>
        </motion.section>
      </main>
    </div>
  );
}
