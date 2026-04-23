import aboutImg from "../assets/about.jpeg";

export default function About() {
  const aboutVisual =
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop";

  return (
    <section id="about" className="py-24 bg-[#fdfcfb]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-medium tracking-widest uppercase text-sm mb-2">
            Our Story
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900">
            About
          </h3>
          <div className="w-20 h-1 bg-amber-200 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE BOX WITH FLOATING EFFECT */}
          <div className="relative group">
            {/* Background Decorative Box */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-amber-200 z-0 hidden md:block transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500"></div>

            <div className="relative z-10 overflow-hidden shadow-2xl">
              <img
                src={aboutImg}
                alt="Hotel Moonville Experience"
                className="w-full h-150 object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>

            {/* Experience Badge */}
            {/* <div className="absolute top-8 left-8 z-20 bg-white/90 backdrop-blur-sm p-6 shadow-xl hidden lg:block">
              <p className="text-3xl font-serif text-amber-600">30+</p>
              <p className="text-xs uppercase tracking-tighter text-gray-500 font-bold">
                Years of Excellence
              </p>
            </div> */}
          </div>

          {/* TEXT CONTENT */}
          <div className="space-y-6">
            <h4 className="text-3xl font-serif text-gray-800 leading-snug">
              A Celestial Experience <br />{" "}
              <span className="italic text-amber-700">Awaits Your Arrival</span>
            </h4>

            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Nestled in the heart of the city, Hotel Moonville offers an
                unparalleled blend of modern luxury and timeless elegance. Since
                our inception, we have been the sanctuary for those who seek
                more than just a stay.
              </p>
              <p className="font-light italic">
                "We don't just provide a room; we curate a memory under the
                moon."
              </p>
              <p>
                With stunning architecture and world-class amenities, our
                mission is to create unforgettable experiences that linger long
                after you check out.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <div>
                <span className="block font-bold text-gray-900 text-sm tracking-widest uppercase">
                  Location
                </span>
                <p className="text-gray-500 text-sm">Noida, Uttar Pradesh</p>
              </div>
              {/* <div>
                <span className="block font-bold text-gray-900 text-sm tracking-widest uppercase">
                  Rewards
                </span>
                <p className="text-gray-500 text-sm">Best Luxury Hotel 2025</p>
              </div> */}
            </div>

            {/* <button className="inline-block mt-4 border-b-2 border-amber-600 pb-1 font-bold text-amber-600 hover:text-amber-700 transition-all tracking-widest uppercase text-xs">
              Read Our Full Philosophy
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
