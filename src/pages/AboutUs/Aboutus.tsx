// src/pages/AboutUs.tsx
import { useEffect } from "react";

const AboutUs = () => {
   useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white px-4 sm:px-10 lg:px-24 py-16">
      <div className="max-w-screen-xl mx-auto space-y-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold border-b border-gray-700 pb-6 text-center">
          About Us
        </h1>

        <section className="space-y-4">
          <p className="text-lg md:text-xl leading-relaxed">
            <span className="font-bold text-pink-500">EventsByEverrise</span> is
            a flagship event-ticketing and live entertainment platform developed
            by
            <span className="font-bold">
              {" "}
              Everrise Entertainment Private Limited
            </span>
            . We’re GST certified (10AAGCE8098K1ZC) and headquartered in Patna,
            Bihar.
          </p>
          <p className="text-gray-400 text-base">
            Our mission? Empower communities, creators, and performers across
            India with accessible, tech-powered, cultural event experiences.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-400 mb-4">
            ✨ Who We Are
          </h2>
          <p className="text-base text-gray-300">
            Founded in 2025, Everrise Entertainment is a next-gen company
            transforming how India discovers, attends, and enjoys live
            events—seamless, secure, and creative.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold text-green-400 mb-4">
            🎭 What We Do
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Stand-up comedy specials</li>
            <li>Regional & cultural events</li>
            <li>Music concerts, DJ nights</li>
            <li>College fests & private gigs</li>
            <li>Community-driven art & theatre</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold text-red-400 mb-4">
            💡 Why Choose Us
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>
              <span className="font-semibold text-white">
                🔐 Digitally Secured:
              </span>{" "}
              Govt-authorized GST compliance
            </li>
            <li>
              <span className="font-semibold text-white">
                📍 Built for India:
              </span>{" "}
              Geo-targeted regional discovery
            </li>
            <li>
              <span className="font-semibold text-white">
                ⚡ Smooth Experience:
              </span>{" "}
              M-ticketing, fast checkouts
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold text-purple-400 mb-2">
            🌟 Our Vision
          </h2>
          <p className="text-base text-gray-300">
            To make live entertainment accessible to all—zero friction, full
            freedom—for artists, organizers, and audiences alike.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-2">
            📍 Our Headquarters
          </h2>
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Everrise Entertainment Pvt. Ltd. — Patna, Bihar, India
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
