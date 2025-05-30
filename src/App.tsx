import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import EventDetails from "./pages/EventDetails/EventDetails";
import BuyPage from "./pages/BuyPage/BuyPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import AboutUsPage from "./pages/AboutUs/Aboutus";
import CategoryShows from "./components/CategoryDetails/CategoryDetails";
import { useEffect } from "react";

const App: FC = () => {
   useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Router>
      <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/events/:title" element={<EventDetails />} />
          <Route path="/preference" element={<BuyPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/category/:title" element={<CategoryShows />} />
        </Routes>
      <Footer />

      </Router>
    </>
  );
};

export default App;
