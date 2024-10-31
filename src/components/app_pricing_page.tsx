"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Zap } from "lucide-react";

export default function PricingPage() {
  const [activeService, setActiveService] = useState("virtualTryOn");

  const services = {
    virtualTryOn: {
      name: "Virtual Try-On",
      tiers: [
        {
          name: "Free",
          price: "$0",
          description: "Try our Virtual Try-On features",
          features: [
            "5 Try-Ons/month",
            "Basic clothing items",
            "Community support",
            "Mobile app access",
          ],
        },
        {
          name: "Basic",
          price: "$9",
          description: "Essential Virtual Try-On for individuals",
          features: [
            "50 Try-Ons/month",
            "Extended clothing catalog",
            "Email support",
            "Mobile & web access",
          ],
        },
        {
          name: "Pro",
          price: "$29",
          description: "Advanced Virtual Try-On for professionals",
          features: [
            "Unlimited Try-Ons",
            "Full clothing catalog",
            "Priority support",
            "API access",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          description: "Tailored Virtual Try-On solutions",
          features: [
            "Custom clothing catalog",
            "Dedicated account manager",
            "On-premise deployment",
            "White-label option",
          ],
        },
        {
          name: "TerPrice",
          price: "$99",
          description: "Cutting-edge Virtual Try-On features",
          features: [
            "Unlimited Try-Ons",
            "Exclusive designer items",
            "24/7 priority support",
            "Custom AI model development",
          ],
        },
      ],
    },
    aiPhotoshoot: {
      name: "AI Photoshoot",
      tiers: [
        {
          name: "Free",
          price: "$0",
          description: "Try our AI Photoshoot features",
          features: [
            "3 AI photos/month",
            "Basic backgrounds",
            "Community support",
            "Mobile app access",
          ],
        },
        {
          name: "Basic",
          price: "$12",
          description: "Essential AI Photoshoot for individuals",
          features: [
            "30 AI photos/month",
            "Extended background library",
            "Email support",
            "Mobile & web access",
          ],
        },
        {
          name: "Pro",
          price: "$39",
          description: "Advanced AI Photoshoot for professionals",
          features: [
            "100 AI photos/month",
            "Premium backgrounds",
            "Priority support",
            "Basic editing tools",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          description: "Tailored AI Photoshoot solutions",
          features: [
            "Unlimited AI photos",
            "Custom backgrounds",
            "Dedicated account manager",
            "Advanced editing suite",
          ],
        },
        {
          name: "TerPrice",
          price: "$129",
          description: "Cutting-edge AI Photoshoot features",
          features: [
            "Unlimited AI photos",
            "Exclusive artistic styles",
            "24/7 priority support",
            "Custom AI model development",
          ],
        },
      ],
    },
  };

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Pricing Plans
          </h1>
          <p className="mt-4 text-gray-500 md:text-xl">
            Choose the perfect plan for your AI needs
          </p>
          <div className="flex justify-center mt-8">
            <div className="relative inline-flex items-center p-1 bg-gray-200 rounded-full">
              <motion.div
                layout
                className="absolute h-full top-0 bg-black rounded-full"
                style={{ width: "50%" }}
                animate={{ x: activeService === "virtualTryOn" ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <button
                onClick={() => setActiveService("virtualTryOn")}
                className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                  activeService === "virtualTryOn"
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                Virtual Try-On
              </button>
              <button
                onClick={() => setActiveService("aiPhotoshoot")}
                className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                  activeService === "aiPhotoshoot"
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                AI Photoshoot
              </button>
            </div>
          </div>
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          >
            {services[activeService as keyof typeof services].tiers.map(
              (tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card
                    className={
                      tier.name === "TerPrice"
                        ? "h-full border-black shadow-lg relative overflow-hidden transform transition-all duration-300 hover:scale-105"
                        : index === 2
                        ? "h-full  border-gray-400 shadow-md transform transition-all duration-300 hover:scale-105"
                        : "h-full  transform transition-all duration-300 hover:scale-105"
                    }
                  >
                    {tier.name === "TerPrice" && (
                      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-black text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12">
                        Best Value
                      </div>
                    )}
                    <div className="flex justify-between flex-col h-full">
                      <div>
                        <CardHeader>
                          <CardTitle>{tier.name}</CardTitle>
                          <CardDescription>{tier.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-4xl font-bold">{tier.price}</div>
                          <p className="text-sm text-gray-500">
                            {tier.name !== "Enterprise"
                              ? "per month"
                              : "contact us"}
                          </p>
                          <ul className="mt-4 space-y-2">
                            {tier.features.map((feature) => (
                              <li key={feature} className="flex items-center">
                                <Check className="w-5 h-5 mr-2 text-green-500" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </div>
                      <div>
                        <CardFooter>
                          <button
                            className={`w-full py-2 px-4 rounded-md transition-colors duration-200 ${
                              tier.name === "TerPrice"
                                ? "bg-black text-white hover:bg-gray-800"
                                : tier.name === "Pro"
                                ? "bg-gray-800 text-white hover:bg-gray-700"
                                : "bg-white text-black border border-black hover:bg-gray-100"
                            }`}
                          >
                            {tier.name === "Enterprise"
                              ? "Contact Sales"
                              : "Get Started"}
                            {tier.name === "TerPrice" && (
                              <Zap className="w-4 h-4 ml-2 inline" />
                            )}
                          </button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
