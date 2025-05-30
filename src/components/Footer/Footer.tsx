import styles from "./Footer.module.css";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.footerMain}>
        <div className={styles.socialMedias}>
          <div className={styles.logoMain}>
            <img src="/EventsByEverrise.png" alt="logo" width={50} />{" "}
            <span>Events By Everrise</span>
          </div>
          <h5>Connect With Us</h5>
          <div className={styles.socialMediaIcons}>
            <FaFacebookSquare />
            <FaSquareXTwitter />
            <FaInstagramSquare />
            <FaSquareYoutube />
          </div>
        </div>
        <div className={styles.categories}>
          <div className={styles.categoryTitle}>Browse Categories</div>
          <div className={styles.categoriesList}>
            <p onClick={()=>navigate("/category/Comedy")}>Stand Up</p>
            <p onClick={()=>navigate("/category/Theatre and Drama")}>Theatre And Drama</p>
          </div>
        </div>
        <div className={styles.helpSection}>
          <div className={styles.helpTitle}>HELP</div>
          <p onClick={()=>navigate("/about-us")}>About Us</p>
          {/* <p>Pricing Plan</p>
          <p>Faq Page</p>
          <p>Account & Billing</p>
          <p>Privacy Policy</p> */}
        </div>
        {/* <div className={styles.downloadApp}>
          <div className={styles.downloadTitle}>
            DOWNLOAD THE APP FOR STREAMING.
          </div>
          <div className={styles.downloadButtons}>
            <img
              src="/playStore.png"
              alt="play-store"
              width={100}
              height={50}
              className={styles.play}
            />
            <img
              src="/appStore.png"
              alt="app-store"
              width={100}
              height={50}
              className={styles.app}
            />
          </div>
        </div> */}
      </div>
      <div className={styles.footerBottom}>
        <div>© Events By Everrise 2025, Designed by Everrise Entertainments</div>
        {/* <div style={{cursor: 'pointer'}}>Privacy Policy</div> */}
      </div>
    </>
  );
};

export default Footer;
