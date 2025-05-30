import { FC } from "react";
import BannerPage from "../../components/BannerPage/BannerPage";
import Suggestions from "../../components/Suggestions/Suggestions";
import useHome from "./useHome";
import Categories from "@/components/Categories/Categories";
import { useLocation } from "react-router-dom";
import VideoBanner from "@/components/VideoBanner/VideoBanner";
import { useEffect } from "react";

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

  return (
    <>
      <BannerPage />
      <Suggestions
        Heading={"Latest Release"}
        moviesList={moviesList}
        numberEnabled={true}
      />
      <VideoBanner />
      {/* <Suggestions
        Heading={"Popular Shows"}
        moviesList={moviesList}
        numberEnabled={false}
      /> */}
      {/* <Features /> */}
      <section id="category">
        <Categories />
      </section>
      {/* <Suggestions
        Heading={"Trending in USA"}
        moviesList={moviesList}
        numberEnabled={false}
      /> */}
    </>
  );
};

export default MovieCarousel;
