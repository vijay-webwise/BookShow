import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import movieDetails from "../../constants/movieDetails";
import styles from "./BannerPage.module.css";
import { useNavigate } from "react-router-dom";

const BannerPage: FC = () => {
  // useEffect(() => {
  //     fetchEmployees();
  // }, []);

  // const fetchEmployees = async () => {
  //     try {
  //         const response = await api.get('/employees');
  //         console.log(response.data.data);
  //     } catch (error) {
  //         console.error('Error fetching employees:', error);
  //     }
  // };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const navigate = useNavigate();

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {movieDetails?.map((movie) => (
          <div key={movie.id} className={styles.carouselItem}>
            <img
              src={movie.imageUrl}
              alt={movie.title}
              className={styles.carouselImage}
            />
            <div className={styles.gradientOverlay}></div>
            <div className={styles.carouselCaption}>
              <p className={styles.carouselLogo}>{movie.title}</p>
              <div className={styles.movieDetailsLine}>
                <p>Timings</p>
                <p>{movie.year}</p>
                <p>{movie.languages}</p>
              </div>
              <div className={styles.movieDescription}>{movie.description}</div>
              <div className={styles.tags}>
                {movie.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.watchButton}>
                <button
                  onClick={() =>
                    navigate(`/events/${movie.title}`, { state: { movie } })
                  }
                  className={styles.button}
                >
                  Buy Tickets
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerPage;
