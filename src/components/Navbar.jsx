import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // WhatsApp Booking Logic
  const handleBooking = () => {
    const phoneNumber = "919910199814";
    const message =
      "Hello Hotel Moonville! I would like to book a room. Please provide more details.";
    const whatsappUrl = `https://wa.me/919910199814?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  const navLinks = ["home", "about", "rooms", "amenities", "contact"];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 px-6 py-4 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-serif tracking-widest uppercase">
          <span className={scrolled ? "text-gray-900" : "text-white"}>
            Hotel
          </span>
          <span className="text-gold-500 font-bold ml-2 text-amber-600">
            Moonville
          </span>
        </div>

        {/* Desktop Links */}
        <ul
          className={`hidden md:flex space-x-8 items-center font-medium transition-colors ${
            scrolled ? "text-gray-700" : "text-white/90"
          }`}
        >
          {navLinks.map((item) => (
            <li key={item} className="group relative">
              <a
                href={`#${item}`}
                className="hover:text-amber-600 transition-colors uppercase text-sm tracking-loose"
              >
                {item}
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
            </li>
          ))}
          {/* Desktop Button */}
          <button
            onClick={handleBooking}
            className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-all transform hover:scale-105 active:scale-95 shadow-md"
          >
            BOOK NOW
          </button>
        </ul>

        {/* Mobile Toggle */}
        <div
          className="md:hidden cursor-pointer flex flex-col gap-1.5 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`h-0.5 w-6 transition-all ${scrolled || menuOpen ? "bg-gray-800" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`h-0.5 w-6 transition-all ${scrolled || menuOpen ? "bg-gray-800" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`h-0.5 w-6 transition-all ${scrolled || menuOpen ? "bg-gray-800" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8 transition-transform duration-500 z-40 ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        {navLinks.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setMenuOpen(false)}
            className="text-gray-900 text-3xl font-serif hover:text-amber-500"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
        {/* Mobile Button */}
        <button
          onClick={handleBooking}
          className="mt-4 border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full hover:bg-amber-600 hover:text-white transition-all font-bold"
        >
          RESERVATIONS
        </button>
      </div>
    </nav>
  );
}
