const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-[#0d0d0d] to-black text-white min-h-screen py-16 px-6 sm:px-10 lg:px-28">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl font-extrabold text-center text-white border-b border-gray-700 pb-6">
          Privacy Policy
        </h1>

        {/* Section Template */}
        <section>
          <h2 className="text-2xl font-semibold text-rose-500 mb-2">
            1. Introduction
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Events By Everrise is a ticketing and event platform operated by{" "}
            <strong>Everrise Entertainment Private Limited</strong> ("we",
            "our", or "us"). We are committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, and safeguard your
            personal information when you interact with our platform or
            services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-rose-500 mb-2">
            2. Information We Collect
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>
              Personal details such as name, email address, and phone number
            </li>
            <li>Payment information for ticket purchases</li>
            <li>Location and device data for optimization</li>
            <li>Event preferences and browsing behavior</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-rose-500 mb-2">
            3. How We Use Your Data
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>To process your bookings and payments</li>
            <li>To send event confirmations and reminders</li>
            <li>To enhance user experience and platform performance</li>
            <li>To offer personalized promotions (with opt-out)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-rose-500 mb-2">
            4. Data Sharing & Security
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            We do not sell your data. Information is only shared with secure,
            trusted payment processors and service providers under strict
            confidentiality agreements. Data is encrypted and securely stored.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-rose-500 mb-2">
            5. Your Rights
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Request access or correction of your data</li>
            <li>Delete your personal information</li>
            <li>Opt-out of promotional emails</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-rose-500 mb-2">
            6. Cookies
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We use cookies to enhance functionality and track usage. You can
            manage cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-rose-500 mb-2">
            7. Updates to Policy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            This Privacy Policy may be updated periodically. We encourage users
            to check this page regularly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-rose-500 mb-2">
            8. Contact Us
          </h2>
          <p className="text-gray-300">
            If you have any questions, feel free to email us at{" "}
            <a
              href="mailto:support@eventsbyeverrise.com"
              className="underline text-blue-400"
            >
              support@eventsbyeverrise.com
            </a>
          </p>
        </section>

        <p className="text-sm text-gray-500 text-center pt-6 border-t border-gray-700">
          Last updated: May 30, 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
