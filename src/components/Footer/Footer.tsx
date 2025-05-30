import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-white font-sans">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-700">
        {/* Logo & Address */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <img src="/EventsByEverrise.png" alt="logo" width={48} />
            <h2 className="text-xl font-bold uppercase">Events By Everrise</h2>
          </div>
          <p className="text-base text-gray-400 leading-relaxed">
            Address: 2nd Floor, C4, Raj Ghar, Kanti Factory Road, New Colony,
            Ward No. 45, Near Bank of Baroda, Mohalla - Mahatma Gandhi Nagar,
            P.S - Kankarbagh, P.O. - B.H. Colony, Patna, Bihar - 800020
          </p>
          <p className="mt-3 text-base text-gray-400">
            support@eventsbyeverrise.com
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-base text-gray-300 mb-2">
            Got Questions? Call or Email Us 24/7
          </h3>
          <p className="text-3xl font-bold mb-2">9838270835</p>
          <p className="text-base text-gray-400 mb-1">
            support@eventsbyeverrise.com
          </p>
          <p className="text-base text-gray-400">Monday-Sunday: 9:00–20:00</p>

        </div>
        {/* Browse Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3 uppercase">
            Browse Categories
          </h3>
          <ul className="space-y-3 text-base text-gray-300">
            <li
              className="cursor-pointer hover:text-white"
              onClick={() => navigate("/category/Comedy")}
            >
              Stand Up
            </li>
            <li
              className="cursor-pointer hover:text-white"
              onClick={() => navigate("/category/Theatre and Drama")}
            >
              Theatre And Drama
            </li>
            <li
              className="cursor-pointer hover:text-white"
              onClick={() => navigate("/category/Kids and Family")}
            >
              Kids
            </li>
            <li
              className="cursor-pointer hover:text-white"
              onClick={() => navigate("/category/Concerts")}
            >
              Concerts
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 uppercase">Help & Info</h3>
          <ul className="space-y-3 text-base text-gray-300">
            <li
              className="cursor-pointer hover:text-white"
              onClick={() => navigate("/about-us")}
            >
              About Us
            </li>
              <li className="cursor-pointer hover:text-white" onClick={() => navigate("/faqs")}>
             FAQs
            </li>
            <li className="cursor-pointer hover:text-white"  onClick={() => navigate("/refund-policy")}>Refund Policy</li>
            <li className="cursor-pointer hover:text-white"  onClick={() => navigate("/privacy-policy")}>Privacy Policy</li>
            <li className="cursor-pointer hover:text-white" onClick={() => navigate("/terms-and-conditions")}>
              Terms & Conditions
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p className="text-base">
          © Events By Everrise 2025. Designed by Everrise Entertainments.
        </p>
        <div className="flex gap-4">
          <img src="/visa.png" alt="Visa" className="h-6" />
          <img src="/paypal.png" alt="PayPal" className="h-6" />
          <img src="/mastercard.jpeg" alt="MasterCard" className="h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
