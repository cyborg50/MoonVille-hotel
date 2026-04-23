import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import pic4 from "../assets/pic4.jpeg";

const rooms = [
  {
    name: "Deluxe Room",
    price: "₹ 500",
    img: pic1,
    desc: "A perfect blend of comfort and style for a relaxing stay.",
  },
  {
    name: "Executive Suite",
    price: "₹ 600",
    img: pic2,
    desc: "Spacious living areas with premium city views.",
  },
  {
    name: "Presidential Suite",
    price: "₹ 800",
    img: pic3,
    desc: "The pinnacle of luxury with world-class amenities.",
  },
  {
    name: "Moonville Villa",
    price: "₹ 1200",
    img: pic4,
    desc: "Private sanctuary with a personal pool and butler service.",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-amber-600 font-semibold tracking-[0.2em] uppercase text-xs mb-2">
              Accommodation
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-gray-900">
              Our Rooms & Suites
            </h3>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room, i) => (
            <div
              key={i}
              className="group cursor-pointer bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-75 overflow-hidden">
                <img
                  src={room.img}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Price Tag Overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-sm shadow-md">
                  <span className="text-gray-900 font-bold">{room.price}</span>
                  <span className="text-[10px] text-gray-500 uppercase ml-1">
                    / Night
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 border border-t-0 border-gray-100">
                <h4 className="text-xl font-serif text-gray-800 group-hover:text-amber-600 transition-colors">
                  {room.name}
                </h4>
                <p className="text-gray-500 text-sm mt-2 mb-6 line-clamp-2">
                  {room.desc}
                </p>

                {/* Action Link */}
                {/* <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className="text-xs font-bold tracking-widest text-gray-400 group-hover:text-amber-600 transition-all">
                    VIEW DETAILS
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:translate-x-2 transition-transform group-hover:text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
