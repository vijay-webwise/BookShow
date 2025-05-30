import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const BuyPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const location = useLocation();
  const showDetails = location.state?.showDetails;
  const show = {
    id: 2,
    imageUrl: showDetails?.imageUrl,
    title: showDetails?.title,
    year: showDetails?.year || "2024",
    languages: showDetails?.languages || "Mumbai",
    logoUrl:
      "https://in.bookmyshow.com/events/go-watch-manoj-live-ft-manoj-prabakar/ET00398271",
    tags: showDetails?.tags || ["Stand Up", "Fun", "Comedy"],
    ua: showDetails?.ua || "18+",
    description:
      showDetails?.description ||
      "After the great success of his previous show Bas kar bassi, Anubhav Singh Bassi is coming back to perform live on stage. This time, he will bring a whole new set of funny stories and jokes that will keep you entertained. Get ready to enjoy an exciting and hilarious performance that will make you laugh uncontrollably and leave you in high spirits.",
    tickets: showDetails?.tickets || [],
  };

  const [cart, setCart] = useState<Cart>({});

  console.log(cart);

  interface CartItem {
    quantity: number;
    price: number;
  }

  type Cart = Record<string, CartItem>;

  const updateCart = (type: string, price: number, change: number) => {
    setCart((prev: Cart) => {
      const quantity = (prev[type]?.quantity || 0) + change;
      if (quantity <= 0) {
        const { [type]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [type]: { quantity, price } };
    });
  };

  const totalAmount = Object.values(cart).reduce<number>(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <img
          src={show.imageUrl}
          alt={show.title}
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-8 md:px-24 bg-gradient-to-r from-black via-black/70 to-transparent">
          <p className="uppercase text-sm text-rose-500 tracking-widest mb-2">
            Oriole Entertainment Presents
          </p>
          <h1 className="text-5xl font-extrabold mb-2">{show.title}</h1>
          <p className="text-lg text-gray-300 max-w-xl mb-4">
            {show.description}
          </p>
          <div className="flex gap-3 flex-wrap mb-4">
            {show.tags.map((tag: any) => (
              <span
                key={tag}
                className="bg-gray-800 px-3 py-1 rounded-full text-sm border border-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-5xl mx-auto px-6">
        {/* Ticket Selection */}
        <div className="position-absolute z-10 bg-gray-900 rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Select Tickets</h2>
          <p className="text-gray-400 text-sm mb-6">
            You can add up to 10 tickets only
          </p>
          <div className="space-y-4">
            {show.tickets.map((ticket: any) => {
              const quantity = cart[ticket.type]?.quantity || 0;
              return (
                <div
                  key={ticket.type}
                  className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded-lg"
                >
                  <div>
                    <p className="text-lg font-medium">{ticket.type}</p>
                    <p className="text-sm text-gray-400">
                      ₹{ticket.price.toLocaleString()}
                    </p>
                  </div>
                  {quantity > 0 ? (
                    <div className="flex items-center gap-2">
                      <button
                        className="w-8 h-8 bg-rose-600 text-white rounded"
                        onClick={() =>
                          updateCart(ticket.type, ticket.price, -1)
                        }
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        className="w-8 h-8 bg-rose-600 text-white rounded"
                        onClick={() => updateCart(ticket.type, ticket.price, 1)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="px-4 py-1 bg-rose-600 text-white rounded"
                      onClick={() => updateCart(ticket.type, ticket.price, 1)}
                    >
                      Add
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Checkout */}
      {totalAmount > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-900 border-t border-gray-800 px-6 py-4 flex justify-between items-center z-50">
          <div className="text-white">
            <p className="text-lg font-medium">
              ₹{totalAmount.toLocaleString()}
            </p>
            <p className="text-sm text-gray-400">
              {Object.values(cart).reduce((sum, i) => sum + i.quantity, 0)}{" "}
              Tickets
            </p>
          </div>
          <button
            className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 px-6 rounded"
            onClick={() =>
              navigate("/checkout", { state: { totalAmount, cart } })
            }
          >
            Proceed
          </button>
        </div>
      )}
    </div>
  );
};

export default BuyPage;
