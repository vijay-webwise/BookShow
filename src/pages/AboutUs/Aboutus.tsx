import { useEffect } from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white px-4 sm:px-10 lg:px-24 py-20">
      <div className="max-w-screen-xl mx-auto space-y-20">
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Empowering Events, Enabling Experiences
        </motion.h1>

        <section className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-white">Who We Are</h2>
            <p className="text-lg text-gray-300">
              <strong className="text-white">Events By Everrise</strong> is the flagship ticketing platform developed by <strong className="text-white">Everrise Entertainment Private Limited</strong>, a registered company based in Patna, Bihar (GSTIN: 10AAGCE8098K1ZC).
            </p>
            <p className="text-gray-400">
              Since our inception in 2025, we've been committed to simplifying event access and empowering creators through robust digital infrastructure and community-first experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            <p className="text-lg text-gray-300">
              To be India's most inclusive and reliable event ecosystem—bridging gaps between local creators and global standards with full creative freedom.
            </p>
          </motion.div>
        </section>

        <section className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-lg text-gray-300">
            To enable seamless discovery, booking, and engagement with cultural, entertainment, and community events across India using secure and innovative technologies.
          </p>
        </section>

        <section className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6">What We Offer</h2>
          <div className="grid sm:grid-cols-2 gap-8 text-gray-300 text-base">
            <ul className="list-disc list-inside space-y-2">
              <li>Stand-up comedy specials</li>
              <li>Open mic & poetry slams</li>
              <li>Music festivals & DJ nights</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>College fests & private gigs</li>
              <li>Regional cultural programs</li>
              <li>Community-driven theatre & art shows</li>
            </ul>
          </div>
        </section>

        <section className="space-y-10">
          <h2 className="text-3xl font-bold text-white">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 text-gray-300">
            <div className="p-4 rounded-md bg-[#121212] border border-gray-700">
              <h4 className="font-semibold text-white mb-2">🔐 Digitally Secured</h4>
              <p>Government-authorized with secure payment & user data handling practices.</p>
            </div>
            <div className="p-4 rounded-md bg-[#121212] border border-gray-700">
              <h4 className="font-semibold text-white mb-2">📍 Built for India</h4>
              <p>Localized access with geo-tagged event listings and regional focus.</p>
            </div>
            <div className="p-4 rounded-md bg-[#121212] border border-gray-700">
              <h4 className="font-semibold text-white mb-2">⚡ Seamless Experience</h4>
              <p>Optimized M-ticketing, instant checkouts & event discovery on-the-go.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-4">Our Headquarters</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-400 uppercase tracking-wide">
            <div>
              <p className="font-medium text-white">Everrise Entertainment Pvt. Ltd.</p>
              <p>2nd Floor, C4, Raj Ghar</p>
              <p>Kanti Factory Road, Ward No. 45</p>
            </div>
            <div>
              <p>Landmark: Near Bank of Baroda</p>
              <p>Mohalla - Mahatma Gandhi Nagar</p>
              <p>P.S - Kankarbagh, P.O. - B.H. Colony, Patna - 800020</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
