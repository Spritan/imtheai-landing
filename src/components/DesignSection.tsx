import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DesignSection = () => {
  return (
    <>
      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <section className="py-8 -mt-8">
          <div className="px-4 text-center">
            <h1 className="tracking-tight font-bold text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Upload your{" "}
              <span className="bg-slate-600 px-2 text-white">Design</span>
              <br />
              and see the magic
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
              {/* Virtual Try-On Section */}
              <div className="flex flex-col items-center space-y-4 text-center">
                <h3 className="text-2xl font-bold">Virtual Try-On</h3>
                <Image
                  src="/1.png"
                  alt="Virtual Try-On Image"
                  width={400}
                  height={600}
                  className="object-cover mx-auto"
                />
              </div>

              {/* AI Photoshoot Section */}
              <div className="flex flex-col items-center space-y-4 text-center">
                <h3 className="text-2xl font-bold">AI Photoshoot</h3>
                <Image
                  src="/2.png"
                  alt="AI Photoshoot Image"
                  width={400}
                  height={600}
                  className="object-cover mx-auto"
                />
              </div>
            </div>

            <p className="mt-12 text-lg max-w-prose mx-auto text-gray-700">
              Instantly generate high-quality virtual try-ons with one click and
              experience your designs in real-time.
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              className={buttonVariants({
                size: "lg",
                className: "mx-auto mt-8",
              })}
              href="https://app.imthe.ai"
            >
              Get Started For Free <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default DesignSection;
