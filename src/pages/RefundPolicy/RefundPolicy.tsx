import { useEffect } from "react";

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white px-4 sm:px-10 lg:px-24 py-16">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl font-extrabold text-center border-b border-gray-700 pb-6">
          Refund Policy
        </h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-rose-500">1. General Policy</h2>
          <p className="text-gray-300 leading-relaxed">
            Events By Everrise, a product of <strong>Everrise Entertainment Private Limited</strong>,
            is a platform that facilitates ticket booking for third-party hosted live events including stand-up comedy,
            concerts, cultural shows, and private gigs. All purchases made through our platform are considered final,
            subject to the terms of the event organizer.
          </p>
          <p className="text-gray-400">
            As an intermediary, we are not liable for event cancellations, changes, or disputes unless clearly stated
            in the listing or communicated officially by the organizer.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-rose-500">2. Event Cancellations</h2>
          <p className="text-gray-300">
            In case an event is cancelled by the organizer or venue, full refunds will be processed automatically to
            the original payment method. Refund initiation may take up to 7 business days and appear within 10 working
            days based on your bank/card provider.
          </p>
          <p className="text-gray-400">
            Events By Everrise is not responsible for transportation, accommodation, or incidental expenses incurred
            due to cancellation.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-rose-500">3. Event Postponement or Rescheduling</h2>
          <p className="text-gray-300">
            If an event is rescheduled to a different date or time, your existing ticket remains valid. However, if
            you're unable to attend the rescheduled date, you may request a refund within <strong>48 hours</strong> of
            receiving reschedule notification.
          </p>
          <p className="text-gray-400">
            Requests made after 48 hours may be denied at the sole discretion of the event organizer.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-rose-500">4. Duplicate / Failed Transactions</h2>
          <p className="text-gray-300">
            If you've been charged more than once for the same ticket, or if payment was deducted but booking wasn't
            confirmed, please write to{" "}
            <a
              href="mailto:support@eventsbyeverrise.com"
              className="underline text-blue-400"
            >
              support@eventsbyeverrise.com
            </a>{" "}
            within 48 hours of the transaction. Refunds for such cases are processed within 5–7 business days after validation.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-rose-500">5. Refund Eligibility</h2>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Refunds are applicable only if the event is officially canceled or rescheduled.</li>
            <li>Tickets booked using offers, promo codes, or reward points may not be refundable.</li>
            <li>Tickets partially used, transferred, or shared are not eligible for a refund.</li>
            <li>No refund will be issued for dissatisfaction with the event experience, artists, or venue.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-rose-500">6. Refund Process</h2>
          <p className="text-gray-300">
            Refunds, once approved, are credited back to the original payment source only. No cash or alternate payment
            mode refunds will be issued.
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Credit/Debit Card: 7–10 working days</li>
            <li>UPI/Net Banking: 5–7 working days</li>
            <li>Wallets: 1–3 working days (subject to provider)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-rose-500">7. Dispute Resolution</h2>
          <p className="text-gray-300">
            All refund disputes must be raised within 7 days of the event date. After this period, Events By Everrise
            holds the right to decline any refund claims.
          </p>
          <p className="text-gray-400">
            Any unresolved disputes will be handled as per the laws under jurisdiction of Patna, Bihar.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-rose-500">8. Contact Support</h2>
          <p className="text-gray-300">
            For refund-related assistance, reach out to us at{" "}
            <a
              href="mailto:support@eventsbyeverrise.com"
              className="underline text-blue-400"
            >
              support@eventsbyeverrise.com
            </a>{" "}
            with subject: <strong>"Refund Request - [Event Name]"</strong> and attach your ticket ID, booking date, and
            payment proof.
          </p>
        </section>

        <p className="text-sm text-gray-500 text-center border-t border-gray-700 pt-6">
          Last Updated: May 30, 2025
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
