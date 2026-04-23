import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* BRAND SECTION */}
          <div className="space-y-6">
            <div className="text-2xl font-serif tracking-widest uppercase">
              Hotel <span className="text-amber-500 font-bold">Moonville</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
              Experience an unparalleled blend of modern luxury and timeless
              elegance in the heart of Noida. Your celestial sanctuary awaits.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://wa.me/919910199814"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 transition-all duration-300"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="https://www.facebook.com/people/Hotel-Moonvillle/61587524547880/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 transition-all duration-300"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://www.instagram.com/hotelmoonville"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-amber-500">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Rooms", "Amenities"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO BRIEF */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-amber-500">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-amber-600" />
                <span>
                  SK-31, Sector-116, Gate No. 6, <br />
                  Noida, 201301
                </span>
              </li>
              <li>+91 99101 99814</li>
              <li className="break-all">primrosehotel116@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[11px] uppercase tracking-widest">
            © {currentYear} Hotel Moonville. Crafted for Excellence.
          </p>
          {/* <div className="flex space-x-8 text-[11px] uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
