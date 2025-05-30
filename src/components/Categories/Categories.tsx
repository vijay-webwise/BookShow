import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Categories.module.css";
import KidsAndFun from "../../../public/kidsandfun.jpg";
import Comedy from "../../../public/standupcomedy.jpg";
import Drama from "../../../public/theatreshows.jpg";
import Art from "../../../public/art.jpg";
import Concerts from "../../../public/musicshows.jpg";
import { useNavigate } from "react-router-dom";
interface Category {
  id: number;
  name: string;
  imageUrl: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Kids and Family",
    imageUrl: KidsAndFun,
  },
  {
    id: 4,
    name: "Comedy",
    imageUrl: Comedy,
  },
  {
    id: 5,
    name: "Theatre and Drama",
    imageUrl: Drama,
  },
  {
    id: 6,
    name: "Art and Culture",
    imageUrl: Art,
  },
  {
    id: 7,
    name: "Concerts",
    imageUrl: Concerts,
  },
];

const Categories: FC = () => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.title}>Explore Categories</h2>
      <Slider {...settings}>
        {categories.map((category) => (
          <div
            onClick={() => navigate(`/category/${category.name}`)}
            key={category.id}
            className={styles.carouselItem}
          >
            <div className={styles.categoryCard} >
              <img
                src={category.imageUrl}
                alt={category.name}
                className={styles.categoryImage}
              />
              <div className={styles.overlay}>
                <button className={styles.viewMoreButton}>
                  <FaArrowRight />
                </button>
              </div>
              <div className={styles.categoryName}>{category.name}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Categories;
