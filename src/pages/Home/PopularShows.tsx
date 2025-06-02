import SunburnGoa from "/weeknd.avif";
import OpenMic from "/openMic.jpg";
import CapMania from "/capMania.avif";
import Sagar from "/sagar.jpeg";
import Blessed from "/gaurav.jpg";
import LilPump from "/LimPump.avif";
import marcb from "/chetas.avif";
import { useNavigate } from "react-router-dom";

const shows = [
  {
    id: 1,
    title: "Kisi Ko Batana Mat",
    year: "Sat 7 June | 7:30PM",
    languages: "Delhi NCR",
    imageUrl:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-kisi-ko-batana-mat-ft-anubhav-singh-bassi-0-2025-3-9-t-8-12-52.jpg",

    ua: "18+",
    tags: ["Stand Up", "Fun", "Comedy"],
    tickets: [
      { type: "SILVER", price: 799 },
      { type: "GOLD", price: 999 },
      { type: "PLATINUM", price: 1499 },
      { type: "DIAMOND", price: 1999 },
    ],
    description:
      "After the great success of his previous show Bas kar bassi, Anubhav Singh Bassi is coming back to perform live on stage. This time, he will bring a whole new set of funny stories and jokes that will keep you entertained. Get ready to enjoy an exciting and hilarious performance that will make you laugh uncontrollably and leave you in high spirits.",
  },
  {
    id: 2,
    title: "Afterverse - A The Weeknd Themed Fan Event",
    imageUrl: SunburnGoa,
    year: "Saturday 16 August | 5:00 PM",
    languages: "Goa",
    ua: "16+",
    tags: ["Music", "EDM", "Festival"],
    tickets: [
      { type: "General Access Pass", price: 499 },
      { type: "Couple Entry Pass", price: 899 },
      { type: "VIP Pass (include merch)", price: 1499 },
    ],
    description:"We’re so excited to bring you Afterverse Nights – a brand new Weeknd-themed experience with Blinding Lights energy, dark pop vibes, red neon glow, and back-to-back hits from every era: house of Balloons, Kiss Land, Beauty Behind the Madness, Starboy, After Hours, and Dawn FM.It’s your chance to dress up, lose yourself in the music, and sing every word with a room full of people who feel like they’re floating through the After Hours too."
  },
  {
    id: 3,
    title: "Cap Mania Tour",
    imageUrl: CapMania,
    year: "Saturday 19 July",
    languages: "Delhi",
    ua: "5+",
    tags: ["Rap", "Hip-Hop", "Live"],
    tickets: [
      { type: "STANDARD", price: 1499 },
      { type: "FRONT ROW", price: 2999 },
    ],
    description:
      "Get into the groove with Cap Mania’s electrifying beats on his first-ever India tour. Feel the rhythm, feel the rage.",
  },
  {
    id: 4,
    title: "Open Mic Patna",
    imageUrl: OpenMic,
    year: "Every Friday",
    languages: "Patna",
    ua: "All Ages",
    tags: ["Talent", "Local", "Open Mic"],
    tickets: [{ type: "ENTRY", price: 99 }],
    description:
      "Showcase your talent or enjoy others' at Patna’s most vibrant open mic night! Comedy, poetry, music – all welcome.",
  },
  {
    id: 5,
    title: "DJ Chetas Live : Birch Goa",
    imageUrl: marcb,
    year: "Saturday 7 June | 9:30PM",
    languages: "Birch By Romeo Lane Goa",
    ua: "16+",
    tags: ["DJ", "Hip-Hop", "Live"],
    tickets: [
      { type: "EARLY BIRD", price: 1499 },
      { type: "Male Phase 2", price: 2999 },
      { type: "Couple Phase 2", price: 3999 },
      { type: "Table Full Cover 5Pax", price: 50000 },
    ],
    description:
      "One of India’s top DJs, has made a significant mark in the music industry with his energetic performances and unique style. Known for his remixing skills, he has a talent for blending Bollywood music with international beats, creating a vibrant and high-energy atmosphere at clubs and events. His popularity soared as he became a go-to DJ for big events and parties, especially within the Bollywood music scene.",
  },
  {
    id: 6,
    title: "Sagar Wali Qawwali",
    imageUrl: Sagar,
    year: "Sunday 8 June",
    languages: "Delhi",
    ua: "10+",
    tags: ["Qawwali", "Devotional", "Sufi"],
    tickets: [
      { type: "SILVER", price: 999 },
      { type: "GOLD", price: 1999 },
    ],
    description:
      "A soulful qawwali night with Sagar Wali Qawwali – where devotion meets rhythm in a spiritual musical experience.",
  },
  {
    id: 7,
    title: "Blessed By Gaurav Kapoor",
    imageUrl: Blessed,
    year: "Sunday 29 June | 4:00 PM",
    languages: "Indore",
    ua: "18+",
    tags: ["Comedy", "Stand Up", "Observational"],
    tickets: [
      { type: "STANDARD", price: 899 },
      { type: "VIP", price: 1499 },
    ],
    description:
      "Gaurav Kapoor’s sharp wit and laid-back delivery will have you rolling with laughter in his brand-new live show.",
  },
  {
    id: 8,
    title: "Room XO Lil Pump",
    imageUrl: LilPump,
    year: "June 6 | 9PM",
    languages: "Mumbai",
    ua: "16+",
    tags: ["Rap", "International", "Concert"],
    tickets: [
      { type: "GENERAL", price: 2999 },
      { type: "DIAMOND", price: 5999 },
    ],
    description:
      "American rapper Lil Pump drops into Mumbai with full energy and wild vibes. Limited seats. Get pumped!",
  },
];

const PopularShows = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#0e0e0e] px-4 sm:px-6 lg:px-16 py-10">
      {/* Two full rows for 8 items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-5">
        {shows.map((show) => (
          <div
            onClick={() =>
              navigate(`/events/${show.title}`, { state: { movie: show } })
            }
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
