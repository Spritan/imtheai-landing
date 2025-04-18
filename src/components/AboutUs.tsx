"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Zap, Clock, Users } from "lucide-react";

export default function AboutUs() {
  const products = {
    tryOn: {
      title: "Virtual Try-On",
      description:
        "We offer AI-driven virtual try-ons that let customers see how your designs look on models with different body types and skin tones. This technology helps shoppers make confident purchasing decisions.",
      image: "/virtual.png",
    },
    photoshoot: {
      title: "AI-Powered Photoshoot",
      description:
        "Our virtual photoshoot service uses AI to create professional images of your designs on customizable models and backgrounds, eliminating the need for traditional photoshoots.",
      image: "/photoshot.png",
    },
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen text-gray-800">
      <main className="container mx-auto lg:w-3/5">
        <motion.section className="py-8" {...fadeIn}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="tracking-tight text-balance mb-6 font-bold !leading-tight text-gray-900 text-5xl">
                Who We Are
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                At ImThe.Ai, we are transforming the fashion industry with
                cutting-edge AI technology. Our platform allows fashion brands
                to create virtual try-ons and professional photoshoots without
                the need for physical models or expensive setups. We make it
                simple to showcase your designs online, giving customers a
                personalized, interactive experience.
              </p>
              <Link href="https://www.fiverr.com/imthe_ai/do-realistic-ai-photoshoots-create-ai-models-for-your-fashion-clothing-brand" passHref>
                <Button className="bg-gradient-to-r from-gray-700 to-gray-900 text-white text-lg py-6 px-8 rounded-full hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-1"> {/* Added gap between text and image */}
                    <span className="align-baseline">Connect us on</span>
                    <Image
                      src="/fiverr_transparent.png"
                      alt="Fiverr"
                      width={70}
                      height={10}
                      className="mb-0.5" // Slight adjustment to align with text baseline
                    />
                  </div>
                <ChevronRight className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/Who we r.png"
                alt="AI Fashion Showcase"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </motion.section>

        <motion.section className="py-16" {...fadeIn}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/Our Mission.png"
                alt="AI Fashion Showcase"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h1 className="tracking-tight text-balance mb-4 font-bold !leading-tight text-gray-900 text-5xl">
                Our Mission
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                We aim to empower fashion brands by offering AI solutions that
                simplify and elevate their digital presence. From virtual
                fittings to high-quality AI-generated photoshoots, we strive to
                make fashion more accessible, interactive, and engaging for
                everyone.
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
          </div>
        </motion.section>

        <motion.section className="py-16" {...fadeIn}>
          <h1 className="tracking-tight text-balance text-center mb-12 font-bold !leading-tight text-gray-900 text-5xl">
            Our Vision
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 mb-8 text-center">
            Our vision is to lead the way in making the fashion industry more
            digital, personalized, and efficient. With our AI-powered tools, we
            want to create a future where every brand can offer realistic
            try-ons and stunning photos with minimal effort.
          </p>
        </motion.section>

        <motion.section className="py-16" {...fadeIn}>
          <h1 className="tracking-tight text-balance text-center mb-12 font-bold !leading-tight text-gray-900 text-5xl">
            Our Products
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(products).map(([key, product]) => (
              <Card
                key={key}
                className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="w-full object-cover pt-5"
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
            <h2 className="text-3xl font-bold mb-6">Why Choose ImThe.Ai?</h2>
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
          <h1 className="tracking-tight text-balance mb-6 font-bold !leading-tight text-gray-900 text-5xl">
            Ready to Elevate Your Fashion Brand?
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-8">
            Start using our AI tools today! Try the demo to see how our
            technology can work for you.
          </p>
          <Link href="https://www.fiverr.com/imthe_ai/do-realistic-ai-photoshoots-create-ai-models-for-your-fashion-clothing-brand" passHref>
            <Button
              size="lg"
              className="bg-gradient-to-r from-gray-700 to-gray-900 text-white text-lg py-6 px-8 rounded-full hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-1"> {/* Added gap between text and image */}
                    <span className="align-baseline">Connect us on</span>
                    <Image
                      src="/fiverr_transparent.png"
                      alt="Fiverr"
                      width={70}
                      height={10}
                      className="mb-0.5" // Slight adjustment to align with text baseline
                    />
                  </div>
            </Button>
          </Link>
        </motion.section>
      </main>
    </div>
  );
}
