const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-24 py-12 font-sans">
      <h1 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">
        About Us
      </h1>

      <p className="text-lg text-gray-300 mb-6">
        <strong>EventsByEverrise</strong> is the flagship event-ticketing and
        entertainment platform powered by
        <strong> Everrise Entertainment Private Limited</strong>, a registered
        private limited company (GSTIN: 10AAGCE8098K1ZC) under the Government of
        India. Headquartered in Patna, Bihar, we are on a mission to empower
        cultural, community, and live event ecosystems by bridging event
        creators with passionate audiences across India.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-rose-500 mb-2">
          Who We Are
        </h2>
        <p className="text-gray-400">
          Incorporated in 2025 and certified under GST REG-06, Everrise
          Entertainment is a technology-first company transforming how India
          books and experiences live shows. From stand-up comedy to regional
          theatre, we offer a seamless and secure ticketing platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-rose-500 mb-2">
          What We Do
        </h2>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          <li>Stand-up comedy specials</li>
          <li>Cultural and regional events</li>
          <li>Music concerts & DJ nights</li>
          <li>College fests & private gatherings</li>
          <li>Community-driven performances</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-rose-500 mb-2">
          Why Choose Us
        </h2>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          <li>
            <strong>Digitally Secured</strong>: Government-authorized GST
            certificate ensuring compliance and trust
          </li>
          <li>
            <strong>Built for India</strong>: Supports regional events with
            geo-targeted discovery
          </li>
          <li>
            <strong>Smooth Experience</strong>: M-ticketing, real-time seat
            selection, secure payments
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-rose-500 mb-2">
          Our Vision
        </h2>
        <p className="text-gray-400">
          To be India’s most inclusive and accessible live event platform,
          enabling creators and entertainers to reach their audiences with zero
          friction and full creative freedom.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-rose-500 mb-2">
          Our Headquarters
        </h2>
        <address className="text-gray-400 not-italic">
          <p>EVERISE ENTERTAINMENT PRIVATE LIMITED</p>
          <p>
            2nd Floor, Raj Ghar, Kanti Factory Road, New Colony, Ward No. 45,
            Near Bank of Baroda,
            <br /> Mahatma Gandhi Nagar, P.S. Kankarbagh,
            <br /> Patna, Bihar - 800020
          </p>
        </address>
      </section>
    </div>
  );
};

export default AboutUsPage;
