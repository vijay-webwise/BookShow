import { useNavigate } from "react-router-dom";

const EventDetailsPage = () => {
    const navigate = useNavigate();
  const event = {
    id: 2,
    imageUrl:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-kisi-ko-batana-mat-ft-anubhav-singh-bassi-0-2025-3-9-t-8-12-52.jpg",
    title: "Brahmastra",
    year: 2022,
    languages: "Mumbai",
    logoUrl:
      "https://in.bookmyshow.com/events/go-watch-manoj-live-ft-manoj-prabakar/ET00398271",
    tags: ["Fantasy", "Action", "Mystery", "Adventure"],
    ua: "16+",
    description:
      "An orphan soldier, Lieutenant Ram's life changes, after he gets a letter from a girl named Sita. ",
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-8 md:px-24 bg-gradient-to-r from-black via-black/70 to-transparent">
          <p className="uppercase text-sm text-rose-500 tracking-widest mb-2">
            Oriole Entertainment Presents
          </p>
          <h1 className="text-5xl font-extrabold mb-2">{event.title}</h1>
          <p className="text-lg text-gray-300 max-w-xl mb-4">
            {event.description}
          </p>
          <div className="flex gap-3 flex-wrap mb-4">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-800 px-3 py-1 rounded-full text-sm border border-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
          <button
            // href={event.logoUrl}
            // target="_blank"
            // rel="noopener noreferrer"
            onClick={() => navigate("/preference")}
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 px-6 rounded"
          >
            Buy Tickets
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-gray-400 text-sm mb-1">Release Year</p>
            <p className="text-lg font-medium">{event.year}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Language</p>
            <p className="text-lg font-medium">{event.languages}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Age Restriction</p>
            <p className="text-lg font-medium">{event.ua}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
