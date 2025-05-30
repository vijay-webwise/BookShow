import { useEffect, useState } from "react";

const faqs = [
  {
    question: "How can I book a ticket?",
    answer:
      "You can browse shows on our homepage or by category. Once you find an event, click on 'Buy Now', select your ticket type, and proceed to checkout using UPI, card, or wallet.",
  },
  {
    question: "Can I cancel or transfer my ticket?",
    answer:
      "Tickets are non-cancellable and non-transferable unless explicitly mentioned in the event listing. In case of reschedule or cancellation by the organizer, refund will be processed automatically.",
  },
  {
    question: "What happens if the event is cancelled?",
    answer:
      "If an event is cancelled, a full refund will be initiated to your original payment method within 7–10 working days. You’ll be notified via email and SMS.",
  },
  {
    question: "Do I need to print my ticket?",
    answer:
      "No. Events By Everrise uses M-ticketing. Your digital ticket (with QR code) will be sent via email and SMS. You can present it at the venue for entry.",
  },
  {
    question: "Why is my payment failing?",
    answer:
      "Check if your card/UPI is active and has sufficient balance. If the issue persists, try a different payment method or contact support at support@eventsbyeverrise.com.",
  },
  {
    question: "How do I know if my booking is confirmed?",
    answer:
      "After a successful payment, you’ll receive a confirmation email and SMS with ticket details and a QR code. You can also access it from your profile section under 'My Bookings'.",
  },
  {
    question: "Can I buy group tickets?",
    answer:
      "Yes, but the quantity limit per user may vary by event. Some organizers offer group discounts — these are mentioned on the event page if available.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white px-4 sm:px-10 lg:px-24 py-20">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl font-extrabold text-center border-b border-gray-700 pb-6">
          Frequently Asked Questions
        </h1>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-5 flex justify-between items-center bg-[#1a1a1a] hover:bg-[#232323] transition"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="text-2xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-300 border-t border-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}

        <p className="text-sm text-gray-500 text-center pt-10">
          Can’t find your answer?{" "}
          <a
            href="mailto:support@eventsbyeverrise.com"
            className="text-blue-400 underline"
          >
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
};

export default FAQ;
