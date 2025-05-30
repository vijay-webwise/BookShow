import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";

type CartItem = {
  quantity: number;
  price: number;
};

const CheckoutPage = () => {
    useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const location = useLocation();
  const cart: Record<string, CartItem> = location.state?.cart || {};

  const [state, setState] = useState("Maharashtra");

  // Calculate ticket details
  const totalTickets = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const ticketDetails = Object.entries(cart).map(
    ([type, { quantity, price }]) => ({
      type,
      quantity,
      price,
    })
  );

  const ticketTotal = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const bookingFee = parseFloat((ticketTotal * 0.05).toFixed(2)); // 5% booking fee
  const totalAmount = ticketTotal + bookingFee;

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans">
      <h1 className="text-2xl font-semibold mb-8 border-b border-gray-700 pb-2">
        Ticket Options
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Ticket Method */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <p className="mb-4 text-lg font-medium">
            Please select from the following option(s)
          </p>

          <div className="flex items-center gap-3 mb-4">
            <input type="radio" checked readOnly className="accent-rose-600" />
            <div>
              <p className="font-semibold">M-Ticket</p>
              <p className="text-sm text-gray-400">
                Save the planet. Use your phone as a ticket.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg text-sm">
            <p className="font-semibold mb-2">M-Ticket Information</p>
            <ol className="list-decimal list-inside text-gray-300 space-y-1">
              <li>
                Customer(s) can access their ticket(s) from the 'My Profile'
                section on the app/mobile-web.
              </li>
              <li>
                It is mandatory to present the ticket(s) in my profile section
                via app/mobile-web at the venue.
              </li>
              <li>No physical ticket(s) are required to enter the venue.</li>
            </ol>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Your Booking Summary</h2>
            <p className="text-sm text-gray-400">{totalTickets} Ticket(s)</p>
            <p className="text-sm text-gray-400 mt-1">
              {/* Fri, 15 Aug, 2025 - 08:00 PM */}
            </p>
            {/* <p className="text-sm text-gray-400">Venue: HK Hall, Ahmedabad</p> */}
            {ticketDetails.map((ticket) => (
              <p className="text-sm mt-1" key={ticket.type}>
                {ticket.type.toUpperCase()} (₹{ticket.price}): {ticket.quantity}{" "}
                ticket(s)
              </p>
            ))}
          </div>

          <div className="space-y-2 border-t border-gray-700 pt-4">
            <div className="flex justify-between">
              <span>Sub-total</span>
              <span>₹{ticketTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Booking Fee (5%)</span>
              <span>₹{bookingFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg border-t border-gray-700 pt-2">
              <span>Total Amount</span>
              <span>₹{totalAmount.toLocaleString()}</span>
            </div>

            <div className="mt-4">
              <label
                htmlFor="state"
                className="text-sm text-gray-400 mb-1 block"
              >
                Select State
              </label>
              <select
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-2 text-white"
              >
                <option>Maharashtra</option>
                <option>Delhi</option>
                <option>Karnataka</option>
                <option>West Bengal</option>
              </select>
            </div>

            <p className="text-xs text-gray-500 mt-2">
              By proceeding, I express my consent to complete this transaction.
            </p>

            <button className="w-full mt-6 bg-rose-600 hover:bg-rose-700 text-white py-2 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
