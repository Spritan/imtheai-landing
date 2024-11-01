import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How does the virtual try-on feature work?",
      answer:
        "Our AI-powered virtual try-on allows users to see how clothing will look on various body shapes and skin tones. Simply upload your product images, and our AI generates realistic try-on visuals.",
    },
    {
      question: "What is the virtual photoshoot service?",
      answer:
        "The virtual photoshoot service provides high-quality, lifelike images of your clothing items without a physical shoot. You can choose models, lighting, and backgrounds to create custom images.",
    },
    {
      question: "Can I use these images on my e-commerce platform?",
      answer:
        "Absolutely! Our high-quality images are optimized for e-commerce, social media, and marketing campaigns.",
    },
    {
      question: "Can I adjust the model poses and expressions?",
      answer:
        "Yes, our virtual photoshoot feature allows flexibility in poses, so you can customize looks to fit your brand style.",
    },
    {
      question: "How customizable are the models and backgrounds?",
      answer:
        "You can choose models of different races, body shapes, and skin tones, and also adjust lighting and backgrounds to match your brand’s style.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
