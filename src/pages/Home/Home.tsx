import { FC } from "react";
import BannerPage from "../../components/BannerPage/BannerPage";
import Suggestions from "../../components/Suggestions/Suggestions";
import useHome from "./useHome";
import Categories from "@/components/Categories/Categories";
import { useLocation } from "react-router-dom";
import VideoBanner from "@/components/VideoBanner/VideoBanner";
import { useEffect } from "react";
import PopularShows from "./PopularShows";
import IndiaTopEvents from "./IndiaTopEvents";

const MovieCarousel: FC = () => {
  const { moviesList } = useHome();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <BannerPage />
      <Suggestions
        Heading={"Latest Release"}
        moviesList={moviesList}
        numberEnabled={true}
      />
      <VideoBanner />
      <Suggestions
        Heading={"Popular Shows"}
        moviesList={moviesList}
        numberEnabled={false}
      />
      {/* <Features /> */}
      <PopularShows />
      <section id="category">
        <Categories />
      </section>
      <IndiaTopEvents />
      {/* <Suggestions
        Heading={"Trending in USA"}
        moviesList={moviesList}
        numberEnabled={false}
      /> */}
    </>
  );
};

export default MovieCarousel;
