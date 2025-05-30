import SunburnGoa from "/sunburnGoa.webp";
import OpenMic from "/openMic.jpg";
import CapMania from "/capMania.avif";
import Sagar from "/sagar.jpeg";
import Blessed from "/gaurav.jpg";
import LilPump from "/LimPump.avif";
import marcb from "/marcb.webp";
import { useNavigate } from "react-router-dom";

const shows = [
  {
    id: 1,
    title: "Anubhav Singh Bassi Live",
    imageUrl: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-kisi-ko-batana-mat-ft-anubhav-singh-bassi-0-2025-3-9-t-8-12-52.jpg",
    year: "2025",
    languages: "Mumbai",
    ua: "18+",
    tags: ["Comedy", "Stand Up", "Live"],
    tickets: [
      { type: "SILVER", price: 799 },
      { type: "GOLD", price: 1199 },
    ],
    description: "Anubhav Singh Bassi returns with all-new content. A rib-tickling journey through daily life and hilariously honest observations.",
  },
  {
    id: 2,
    title: "Sunburn Goa 2025",
    imageUrl: SunburnGoa,
    year: "2025",
    languages: "Goa",
    ua: "16+",
    tags: ["Music", "EDM", "Festival"],
    tickets: [
      { type: "GENERAL", price: 2499 },
      { type: "VIP", price: 4999 },
    ],
    description: "Asia's largest EDM festival featuring international artists, mind-blowing visuals, and non-stop music under the Goan sky.",
  },
  {
    id: 3,
    title: "Cap Mania Tour",
    imageUrl: CapMania,
    year: "2025",
    languages: "Delhi",
    ua: "12+",
    tags: ["Rap", "Hip-Hop", "Live"],
    tickets: [
      { type: "STANDARD", price: 1499 },
      { type: "FRONT ROW", price: 2999 },
    ],
    description: "Get into the groove with Cap Mania’s electrifying beats on his first-ever India tour. Feel the rhythm, feel the rage.",
  },
  {
    id: 4,
    title: "Open Mic Patna",
    imageUrl: OpenMic,
    year: "Every Friday",
    languages: "Patna",
    ua: "All Ages",
    tags: ["Talent", "Local", "Open Mic"],
    tickets: [
      { type: "ENTRY", price: 99 },
    ],
    description: "Showcase your talent or enjoy others' at Patna’s most vibrant open mic night! Comedy, poetry, music – all welcome.",
  },
  {
    id: 5,
    title: "Marc B – The Official DJ of 21 Savage",
    imageUrl: marcb,
    year: "2025",
    languages: "Mumbai",
    ua: "16+",
    tags: ["DJ", "Hip-Hop", "Live"],
    tickets: [
      { type: "EARLY BIRD", price: 1499 },
      { type: "PLATINUM", price: 2999 },
    ],
    description: "Straight from the global stage to Mumbai – Marc B sets the deck on fire as 21 Savage’s official DJ.",
  },
  {
    id: 6,
    title: "Sagar Wali Qawwali",
    imageUrl: Sagar,
    year: "2025",
    languages: "Delhi",
    ua: "10+",
    tags: ["Qawwali", "Devotional", "Sufi"],
    tickets: [
      { type: "SILVER", price: 499 },
      { type: "GOLD", price: 999 },
    ],
    description: "A soulful qawwali night with Sagar Wali Qawwali – where devotion meets rhythm in a spiritual musical experience.",
  },
  {
    id: 7,
    title: "Blessed By Gaurav Kapoor",
    imageUrl: Blessed,
    year: "2025",
    languages: "Bangalore",
    ua: "18+",
    tags: ["Comedy", "Stand Up", "Observational"],
    tickets: [
      { type: "STANDARD", price: 899 },
      { type: "VIP", price: 1499 },
    ],
    description: "Gaurav Kapoor’s sharp wit and laid-back delivery will have you rolling with laughter in his brand-new live show.",
  },
  {
    id: 8,
    title: "Room XO Lil Pump",
    imageUrl: LilPump,
    year: "2025",
    languages: "Mumbai",
    ua: "16+",
    tags: ["Rap", "International", "Concert"],
    tickets: [
      { type: "GENERAL", price: 2999 },
      { type: "DIAMOND", price: 5999 },
    ],
    description: "American rapper Lil Pump drops into Mumbai with full energy and wild vibes. Limited seats. Get pumped!",
  },
];


const PopularShows = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full bg-[#0e0e0e] px-4 sm:px-6 lg:px-16 py-10">
      {/* Two full rows for 8 items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-5">
        {shows.map((show) => (
          <div
            onClick={() => navigate(`/events/${show.title}`, { state: { movie: show } })}
            key={show.id}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <img
              src={show.imageUrl}
              alt={show.title}
              className="w-full h-40 sm:h-44 md:h-48 object-cover"
            />
            <div className="text-white text-sm md:text-base font-semibold text-center py-3 px-2 truncate">
              {show.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularShows;
