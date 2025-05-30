import { useLocation, useNavigate } from "react-router-dom";

const EventDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const movie = location.state?.movie;

  const showDetails = {
    id: 2,
    imageUrl: movie.imageUrl,

    title: movie.title,
    year: movie.year,
    languages: movie.languages,
    logoUrl:
      "https://in.bookmyshow.com/events/go-watch-manoj-live-ft-manoj-prabakar/ET00398271",
    tags: movie.tags,
    ua: movie.ua,
    description: movie.description,
    tickets: movie.tickets
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <img
          src={showDetails.imageUrl}
          alt={showDetails.title}
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-8 md:px-24 bg-gradient-to-r from-black via-black/70 to-transparent">
          <p className="uppercase text-sm text-rose-500 tracking-widest mb-2">
            Oriole Entertainment Presents
          </p>
          <h1 className="text-5xl font-extrabold mb-2">{showDetails.title}</h1>
          <p className="text-lg text-gray-300 max-w-xl mb-4">
            {showDetails.description}
          </p>
          <div className="flex gap-3 flex-wrap mb-4">
            {showDetails.tags.map((tag: any) => (
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
            onClick={() =>
              navigate("/preference", {
                state: { showDetails },
              })
            }
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
            <p className="text-lg font-medium">{showDetails.year}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Language</p>
            <p className="text-lg font-medium">{showDetails.languages}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Age Restriction</p>
            <p className="text-lg font-medium">{showDetails.ua}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
