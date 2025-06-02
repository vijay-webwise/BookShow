import Voodov from "/voodov.jpg";
import Edenv from "/edenv.jpg";
import LilPump from "/lilpumpv.jpg";
import { useNavigate } from "react-router-dom";

const events = [
  {
    id: 1,
    imageUrl: Edenv,
    title: "Eden of Sounds - Into The Wild Edition",
    year: "June 6 | 2PM ",
    languages:
      "Echor Palm Bliss Riverside Resort & Spa Kasol | Bar & Lounge, Kasol",
    tags: ["Fun", "Adventure"],
    ua: "6+",
    tickets: [
      { type: "Early Bird Pass For 1", price: 2999 },
      { type: "Phase-3 Festival General pass", price: 8000 },
      { type: "Phase-1 GA Festival Pass", price: 4720 },
      { type: "Phase-2 Festival General pass", price: 11999 },
    ],
    description:
      " Eden of Sounds returns for its Summer 2025 edition, inviting you on a journey into the Wild—where music, nature, and community come together in an immersive escape.   Set against the breathtaking backdrop of Echor Palm Bliss, Kasol, this edition features two distinct stages, each offering a carefully curated mix of progressive, melodic, afro-house and beyond. ",
  },
  {
    id: 2,
    imageUrl: Voodov,
    title: "Voodoo Valley 2025",
    year: "June 6 | 1PM",
    languages: "DevLok Himachal, Manali",
    tags: ["Adventure", "Music Shows"],
    ua: "18+",
    tickets: [
      { type: "Phase 1", price: 4500 },
      { type: "Phase 2 Group of 2 (Female)", price: 9000 },
      { type: "3rd pax Stay outside the festival", price: 16000 },
    ],
    description:
      "Tucked between the mystic embrace of the Himalayan peaks, where whispers of ancient spirits dance to melodies of the Himalayan peaks. In its Fourth Edition, the theme Valley Walkthrough beckons adventurers to delve into this enchanting landscape, offering an immersive journey of discovery and wonder",
  },
  {
    id: 3,
    imageUrl: LilPump,
    title: "Lil Pump India Tour | Mumbai",
    year: "June 6 | 9PM",
    languages: "Mumbai",
    tags: ["Concert", "Music Shows"],
    ua: "16+",
    tickets: [
      { type: "Regular Ticket", price: 2499 },
      { type: "Group of 3", price: 5999 },
      { type: "Group of 4", price: 6999 },
    ],
    description:
      " Nicho Experiences brings you the most explosive international tour of the year – Lil Pump is coming to India and it's about to get wild! The global rap icon and viral hitmaker is ready to tear up the stage with raw energy, outrageous vibes, and back-to-back bangers. From “Gucci Gang” to “Esskeetit”, “I Love It” to “D Rose”, get ready for a night where every drop hits harder and every moment turns up the madness.",
  },
];

const IndiaTopEvents = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#0e0e0e] px-4 sm:px-6 lg:px-16 py-10 text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        India’s Top Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {events.map((event) => (
          <div
            onClick={() =>
              navigate(`/events/${event.title}`, { state: { movie: event } })
            }
            key={event.id}
            className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg border border-[#2a2a2a] hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 space-y-1">
              <p className="text-sm text-lime-400 font-semibold">
                {event.year}
              </p>
              <h3 className="text-lg font-bold">{event.title}</h3>
              <p className="text-sm text-gray-400">{event.languages}</p>
              <p className="text-sm text-gray-300">UA: {event.ua}</p>
              <p className="text-sm text-gray-300">
                {event.tickets.length > 0
                  ? `From ₹${event.tickets[0].price} onwards`
                  : "Pricing Info Soon"}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {event.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-700 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndiaTopEvents;
