import { useState } from "react";
import showsDetals from "@/constants/standUpShows";
import { useNavigate, useParams } from "react-router-dom";
import theatreShows from "@/constants/theatreShows";
import musicShows from "@/constants/musicShows";
import kidsandfamily from "@/constants/kidsandfamily";
import { useEffect } from "react";
import artAndCulture from "@/constants/artAndCulture";

// const shows = [
//   {
//     id: 1,
//     title: "Abijit Ganguly Live",
//     image: "https://yt3.googleusercontent.com/B_oMXLRlPM1nYMMUeo74At5kUQy6a7985ptLTVHS6xeKYE2B-X6m1K-3yR_MC-xlIRrLKRXUEOc=s900-c-k-c0x00ffffff-no-rj",
//     date: "March 22, 2025",
//     location: "Mishty Studio, Ahmedabad",
//   },
//   {
//     id: 2,
//     title: "Standup Test Drive by Harshil Pandya",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3OuBJYf-tqYjM_iXbimxUa7mBA3Ghdw_3pw&s",
//     date: "March 23, 2025",
//     location: "Youcomedy Club, Ahmedabad",
//   },
//   {
//     id: 4,
//     title: "Who Are You by Rahul Subramanian",
//     image: "https://in.bmscdn.com/events/moviecard/ET00384155.jpg",
//     date: "March 25, 2025",
//     location: "H.K. Hall, Ahmedabad",
//   },
//   {
//     id: 5,
//     title: "Master Peace - Trial Solo By Madhur Virli",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJdV2y7iomdTinqVe9YpD9j3_GVsJEFly1rw&s",
//     date: "March 26, 2025",
//     location: "HK Hall, Ellisbridge, Ahmedabad",
//   },
//   {
//     id: 6,
//     title: "Sensitive Content - Adult Comedy Show",
//     image: "/images/show1.jpg",
//     date: "March 27, 2025",
//     location: "Sip Of Hope - The Coffee House, Ahmedabad",
//   },
//   {
//     id: 7,
//     title: "Kal ki Chinta Nahi Karta ft. Ravi Gupta",
//     image: "/images/show2.jpg",
//     date: "March 28, 2025",
//     location: "HK Hall, Ahmedabad",
//   },
//   {
//     id: 8,
//     title: "Gaurav Gupta Live - India Tour",
//     image: "/images/show3.jpg",
//     date: "March 29, 2025",
//     location: "HK Hall, Ellisbridge, Ahmedabad",
//   },
//   {
//     id: 9,
//     title: "PS - I Love You By Pranav Sharma",
//     image: "/images/show4.jpg",
//     date: "March 30, 2025",
//     location: "Mehendi Navaz Jung Hall, Ahmedabad",
//   },
//   {
//     id: 10,
//     title: "Best of Ahmedabad - Curated Standup Comedy Show",
//     image: "/images/show5.jpg",
//     date: "March 31, 2025",
//     location: "Youcomedy Club, Ahmedabad",
//   },
// ];
const ITEMS_PER_PAGE = 20;
const CategoryShows = () => {
  const navigate = useNavigate();
  const { title } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [title]);
  let shows: any = showsDetals;
  if (title === "Theatre and Drama") {
    shows = theatreShows;
  }
  if (title === "Comedy") {
    shows = showsDetals;
  }
  if (title === "Concerts") {
    shows = musicShows;
  }
  if (title === "Kids and Family") {
    shows = kidsandfamily;
  }
  if (title === "Art and Culture") {
    shows = artAndCulture;
  }
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(shows.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentShows = shows.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const handlePageChange = (page: any) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };
  return (
    <div className="min-h-screen bg-[#121212] text-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 border-b border-gray-700 pb-2">
          {title} {title === "Concerts" ? "" : "Shows"}
        </h1>
        {/* Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentShows.map((show: any) => (
            <div
              key={show.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
            >
              <img
                src={show.imageUrl}
                alt={show.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{show.title}</h3>
                <p className="text-sm text-gray-400 mb-1">{show.date}</p>
                <p className="text-sm text-gray-400">{show.location}</p>
                <button
                  onClick={() =>
                    navigate(`/events/${show.title}`, {
                      state: { movie: show },
                    })
                  }
                  className="mt-4 w-full bg-[#00FFC2] text-black font-semibold py-2 rounded-xl hover:bg-[#00e6af] transition"
                >
                  Book Ticket
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-[#00FFC2] text-black font-bold"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default CategoryShows;
