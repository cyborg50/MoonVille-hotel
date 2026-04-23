import React from "react";

export default function Hero() {
  const bgImage =
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop";

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* <h2 className="text-amber-500 font-medium tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in-down">
          Est. 1994 — Luxury Escape
        </h2> */}

        <h1 className="text-5xl md:text-8xl text-white font-serif mb-6 leading-tight">
          Seek Your Comfort <br />
          <span className="italic">Under the Moon</span>
        </h1>

        <p className="text-gray-200 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          Discover a sanctuary of elegance and serenity. At Hotel Moonville, we
          redefine the art of hospitality in the heart of the city.
        </p>

        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-sm transition-all duration-300 font-medium tracking-wide w-full sm:w-auto">
            EXPLORE ROOMS
          </button>
          <button className="border border-white/40 hover:border-white text-white px-10 py-4 rounded-sm transition-all duration-300 backdrop-blur-sm w-full sm:w-auto">
            VIEW GALLERY
          </button>
        </div> */}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/50 text-[10px] tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-linear-to-b from-amber-500 to-transparent"></div>
      </div>
    </section>
  );
}
