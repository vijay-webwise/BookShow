import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import EventDetails from "./pages/EventDetails/EventDetails";
import BuyPage from "./pages/BuyPage/BuyPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";

const App: FC = () => {
  return (
    <>
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/events" element={<EventDetails />} />
          <Route path="/preference" element={<BuyPage />} />
           <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
