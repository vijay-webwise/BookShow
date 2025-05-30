import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BuyPage = () => {
    const navigate = useNavigate();
  const event = {
    id: 2,
    imageUrl:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-kisi-ko-batana-mat-ft-anubhav-singh-bassi-0-2025-3-9-t-8-12-52.jpg",
    title: "Brahmastra",
    year: 2022,
    languages: "Mumbai",
    logoUrl:
      "https://in.bookmyshow.com/events/go-watch-manoj-live-ft-manoj-prabakar/ET00398271",
    tags: ["Fantasy", "Action", "Mystery", "Adventure"],
    ua: "16+",
    description:
      "An orphan soldier, Lieutenant Ram's life changes, after he gets a letter from a girl named Sita. ",
    tickets: [
      { type: "SILVER", price: 799 },
      { type: "GOLD", price: 999 },
      { type: "PLATINUM", price: 1499 },
      { type: "DIAMOND", price: 1999 },
    ],
  };

  const [cart, setCart] = useState<Cart>({});

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
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-8 md:px-24 bg-gradient-to-r from-black via-black/70 to-transparent">
          <p className="uppercase text-sm text-rose-500 tracking-widest mb-2">
            Oriole Entertainment Presents
          </p>
          <h1 className="text-5xl font-extrabold mb-2">{event.title}</h1>
          <p className="text-lg text-gray-300 max-w-xl mb-4">
            {event.description}
          </p>
          <div className="flex gap-3 flex-wrap mb-4">
            {event.tags.map((tag) => (
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
            {event.tickets.map((ticket) => {
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
          <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 px-6 rounded" onClick={() => navigate("/checkout")}>
            Proceed
          </button>
        </div>
      )}
    </div>
  );
};

export default BuyPage;
