import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function UpdatedPrivacyPolicy() {
  return (
    <div className="min-h-screen text-black">
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p>
            At ImThe.Ai, we prioritize your privacy and are committed to
            protecting your personal data. This policy outlines how we collect,
            use, and safeguard your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email, and
            uploaded design files when you use our services. We also gather data
            through cookies to improve our website experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside">
            <li>
              To provide and enhance our AI services, including virtual try-ons
              and photoshoots.
            </li>
            <li>To communicate updates or respond to queries.</li>
            <li>For analytics to improve website performance.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Data Sharing</h2>
          <p>
            We do not sell or share your personal information with third
            parties, except when necessary to fulfill our services or comply
            with legal obligations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
          <p>
            We implement advanced security measures to protect your data against
            unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
          <p>
            You have the right to access, modify, or request deletion of your
            personal data. You can contact us at{" "}
            <a href="mailto:info.imthe.ai@gmail.com">
              {" "}
              info.imthe.ai@gmail.com
            </a>{" "}
            for any privacy-related queries.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes
            will be reflected on this page, so please review it periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
          <p>
            For questions or concerns about your privacy, feel free to reach out
            at
            <a href="mailto:info.imthe.ai@gmail.com">
              {" "}
              info.imthe.ai@gmail.com.
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
