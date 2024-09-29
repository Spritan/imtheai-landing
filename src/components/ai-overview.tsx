"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ArrowRight, Check, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const models = [
    { id: "1", name: "Girl 1", avatar: "/model/model-1.png" },
    { id: "2", name: "Girl 2", avatar: "/model/model-2.png" },
]

const dresses = [
    { id: "green", name: "Dress 1", image: "/dress/green.webp" },
    { id: "red", name: "Dress 2", image: "/dress/red.webp" },
    { id: "black", name: "Dress 3", image: "/dress/black.webp" },
]

export default function AIGeneratorLanding() {
    const [selectedModel, setSelectedModel] = useState(models[0].id)
    const [selectedDress, setSelectedDress] = useState(dresses[0].id)

    const getImageUrl = (model: string, dress: string) => {
        // Replace this with your actual image URLs or generation logic
        return `/landing/model-${model}-${dress}&width=600&height=800`
    }

    return (
        <>
            <div className="col-span-3">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start"> ,                    
                <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-4xl md:text-5xl lg:text-6xl">
                    See yourself{" "}
                    <span className="bg-slate-600 px-2 text-white">Redefined</span>{" "}
                    By AI
                </h1>
                <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone case.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-slate-600" />
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-slate-600" />5 year
                    print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-slate-600" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user image"
                  />
                  <img
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    alt="user image"
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-slate-600 fill-slate-600" />
                    <Star className="h-4 w-4 text-slate-600 fill-slate-600" />
                    <Star className="h-4 w-4 text-slate-600 fill-slate-600" />
                    <Star className="h-4 w-4 text-slate-600 fill-slate-600" />
                    <Star className="h-4 w-4 text-slate-600 fill-slate-600" />
                  </div>

                  <p>
                    <span className="font-semibold">1.250</span> happy users
                  </p>
                </div>
              </div>
                </div>
            </div>
            <div className="col-span-full lg:col-span-2 ">
                <div className="flex flex-col md:flex-row w-full gap-8 items-center flex-1 ">


                    {/* Generated Image and Dress Selection */}
                    <div className="md:w-2/5 relative flex-1">
                        <div className="flex flex-col items-center flex-1  ">
                            <div className="p-8 mb-8 ">
                                <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Generated Image</h2>
                                <div className="relative max-w-[300px] ">
                                    <AspectRatio ratio={4 / 8}>
                                        <Image
                                            src={`/landing/model-${selectedModel}-${selectedDress}.png`}
                                            alt={`AI-generated ${selectedModel} in ${selectedDress}`}
                                            fill
                                            className="rounded-lg object-cover"
                                        />
                                    </AspectRatio>
                                </div>
                            </div>



                            {/* Dress Selection */}
                            <div className="absolute lg:right-[50px] lg:top-[450px] w-[450px]">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Choose a Dress</h2>
                                <div className=" bg-white/25 backdrop-blur rounded-lg shadow-xl p-4 ">
                                    <div className="flex flex-wrap gap-4">
                                        {dresses.map((dress) => (
                                            <div
                                                key={dress.id}
                                                className={cn(
                                                    "cursor-pointer flex flex-col items-center flex-1 rounded-lg p-1 transition-all ",
                                                    selectedDress === dress.id
                                                        ? " bg-red-500/25 backdrop-blur "
                                                        : "hover:ring-2 hover:ring-slate-300"
                                                )}
                                                onClick={() => setSelectedDress(dress.id)}
                                            >
                                                <AspectRatio ratio={3 / 4} className="">
                                                    <Image
                                                        src={dress.image}
                                                        alt={dress.name}
                                                        width={150}
                                                        height={200}
                                                        className="rounded-lg object-cover"
                                                    />
                                                </AspectRatio>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>



                            {/* Model Selection Sidebar */}
                            <div className="absolute left-[5px] top-[25px] w-[170px]">
                                {/* <div className="space-y-4"> */}
                                {/* <h2 className="text-xl text-center font-bold text-gray-900 mb-4">Choose a Model</h2> */}
                                <div className="bg-white/25 backdrop-blur rounded-lg shadow-xl p-8 mb-8">

                                    {models.map((model) => (
                                        <div
                                            key={model.id}
                                            className={
                                                "cursor-pointer rounded-lg p-2 transition-all flex flex-col items-center"
                                            }
                                            onClick={() => setSelectedModel(model.id)}
                                        >
                                            {/* <Image
                    src={model.avatar}
                    alt={model.name}
                    width={100}
                    height={100}
                    className="rounded-full mx-auto"
                  /> */}
                                            <Avatar className={cn(
                                                "cursor-pointer  transition-all flex flex-col items-center w-20 h-20 ring-offset-4",
                                                selectedModel === model.id
                                                    ? "ring-2 ring-red-500 "
                                                    : "hover:ring-2 hover:ring-slate-300"
                                            )} >
                                                <AvatarImage src={model.avatar} className="object-cover"
                                                    alt={model.name} />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>


                                            {/* <p className="text-center mt-2 font-medium">{model.name}</p> */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}