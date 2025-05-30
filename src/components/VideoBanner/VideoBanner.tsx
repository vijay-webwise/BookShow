import { FC, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./VideoBanner.module.css";
import { Modal } from "../Modal/Modal";

interface Video {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
}

const videos: Video[] = [
  {
    id: 3,
    title: "THE DARK BEAUTY",
    description: `Shadow Blitzstrike is a dynamic and elusive move executed with lightning-fast precision. The user channels dark`,
    videoUrl:
      "https://res.cloudinary.com/dy9evkddw/video/upload/v1748591254/etovqgbe2unuydheqkzk.mp4",
  },
  {
    id: 3,
    title: "THE DARK BEAUTY",
    description: `Shadow Blitzstrike is a dynamic and elusive move executed with lightning-fast precision. The user channels dark`,
    videoUrl:
      "https://res.cloudinary.com/dy9evkddw/video/upload/v1748591254/etovqgbe2unuydheqkzk.mp4",
  },
  {
    id: 3,
    title: "THE DARK BEAUTY",
    description: `Shadow Blitzstrike is a dynamic and elusive move executed with lightning-fast precision. The user channels dark`,
    videoUrl:
      "https://res.cloudinary.com/dy9evkddw/video/upload/v1748591254/etovqgbe2unuydheqkzk.mp4",
  },
];

const VideoBanner: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 5000,
  };
  const handleMovieClick = (): void => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.videoContainer}>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <Slider {...settings}>
        {videos.map((video) => (
          <div key={video.id} className={styles.videoFrame}>
            <video className={styles.videoBackground} autoPlay loop muted>
              <source src={video.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={styles.overlay}>
              <div className={styles.textContent}>
                <div className={styles.videoTags}>
                  <img src="/01.png" alt="logo" />
                  <img src="/02.png" alt="logo" />
                  <img src="/03.png" alt="logo" />
                </div>
                <h1 className={styles.title}>{video.title}</h1>
                <p className={styles.description}>{video.description}</p>
                <div className={styles.buttonSection}>
                  <span
                    style={{ cursor: "arrow" }}
                    className={styles.watchButton}
                    onClick={handleMovieClick}
                  >
                    Sponsored
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoBanner;
