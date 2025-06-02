import { FC } from "react";
import styles from "./Sidebar.module.css";
// import { CiSearch } from "react-icons/ci";
import { TiHome } from "react-icons/ti";
import { BiSolidCategory } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { FaPeopleLine } from "react-icons/fa6";

const sidebarItems = [
  // { icon: CiSearch, label: "Search", path: "" },
  { icon: TiHome, label: "Home", path: "/" },

  { icon: FaPeopleLine, label: "About Us", path: "/about-us" },
  { icon: BiSolidCategory, label: "Category", path: "/#category" },
];

const Sidebar: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarItem} onClick={() => navigate("/")}>
        <img src="/EventsByEverrise.png" alt="logoSmall" width={30} />
      </div>
      {sidebarItems.map((item, index) => (
        <div
          key={index}
          className={styles.sidebarItem}
          onClick={() => navigate(item.path)}
        >
          <item.icon className={styles.icon} />
          <span className={styles.label}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
