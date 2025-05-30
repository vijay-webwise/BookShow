import { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white px-4 sm:px-10 lg:px-24 py-16">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl font-extrabold text-center border-b border-gray-700 pb-6">
          Terms & Conditions
        </h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-rose-500">1. Introduction</h2>
          <p className="text-gray-300 text-base leading-relaxed">
            These Terms and Conditions ("Terms") govern your use of the Events By Everrise
            platform ("Platform"), operated by <strong>Everrise Entertainment Private Limited</strong> ("Company", "we", or "us").
            By accessing or using the Platform, you agree to be bound by these Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-rose-500">2. User Responsibilities</h2>
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            <li>You agree to provide accurate information during registration or ticket booking.</li>
            <li>You are responsible for maintaining the confidentiality of your account.</li>
            <li>You agree not to misuse the platform or engage in fraudulent activities.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-rose-500">3. Ticket Purchases</h2>
          <p className="text-gray-300">
            All ticket purchases are final and non-refundable unless stated otherwise by the event
            organizer. Prices are inclusive of applicable taxes unless explicitly mentioned.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-rose-500">4. Event Cancellations</h2>
          <p className="text-gray-300">
            In case of event cancellation, we will initiate a refund process as directed by the event
            organizer. We are not liable for third-party cancellations or losses incurred as a result.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-rose-500">5. Intellectual Property</h2>
          <p className="text-gray-300">
            All content on the Platform including logos, trademarks, and graphics are the property of
            Everrise Entertainment Pvt. Ltd. or its licensors. Unauthorized use is strictly prohibited.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-rose-500">6. Limitation of Liability</h2>
          <p className="text-gray-300">
            We are not responsible for damages, direct or indirect, arising from the use or inability to
            use the Platform, including loss of data, ticket issues, or event performance.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-rose-500">7. Changes to Terms</h2>
          <p className="text-gray-300">
            Everrise Entertainment Pvt. Ltd. reserves the right to modify these Terms at any time. Changes
            will be effective upon posting. Continued use of the Platform constitutes acceptance.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-rose-500">8. Contact Us</h2>
          <p className="text-gray-300">
            For questions or concerns regarding these Terms, contact us at{" "}
            <a href="mailto:support@eventsbyeverrise.com" className="text-blue-400 underline">
              support@eventsbyeverrise.com
            </a>
            .
          </p>
        </section>

        <p className="text-sm text-gray-500 text-center border-t border-gray-700 pt-6">
          Last Updated: May 30, 2025
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
