export default function Amenities() {
  const amenities = [
    {
      title: "Unmarried Couples Allowed",
      subtitle: "Privacy & respect guaranteed",
      icon: "💑",
    },
    {
      title: "Couple Friendly",
      subtitle: "Safe & welcoming environment",
      icon: "❤️",
    },
    {
      title: "24/7 Operations",
      subtitle: "Round-the-clock assistance",
      icon: "🕒",
    },
    {
      title: "High-Speed Wi-Fi",
      subtitle: "Stay connected always",
      icon: "📶",
    },
    {
      title: "Fine Dining Service",
      subtitle: "In-room",
      icon: "🍽️",
    },
    {
      title: "Premium AC & TV",
      subtitle: "Climate control & entertainment",
      icon: "❄️",
    },
    {
      title: "Secure Parking",
      subtitle: "Private space for your vehicle",
      icon: "🚗",
    },
  ];

  return (
    <section
      id="amenities"
      className="py-24 bg-neutral-900 text-white overflow-hidden relative"
    >
      {/* Decorative Moon Glow Effect */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-amber-500/10 rounded-full blur-[120px] z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-amber-500 font-semibold tracking-[0.3em] uppercase text-xs mb-3">
            World-Class Comfort
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif">
            Amenities & Features
          </h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-light">
            Designed for convenience, curated for luxury. We ensure every aspect
            of your stay is seamless.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, i) => (
            <div
              key={i}
              className="group p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-amber-500/50 transition-all duration-500"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 bg-amber-600/20 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-amber-600/40 transition-all">
                {item.icon}
              </div>

              <h4 className="text-lg font-semibold mb-2 group-hover:text-amber-500 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          ))}

          {/* Special "Call to Action" Card */}
          {/* <div className="p-8 bg-amber-600 rounded-xl flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-amber-700 transition-colors">
            <h4 className="text-xl font-bold mb-2">Need More?</h4>
            <p className="text-amber-100 text-sm mb-4 italic">
              Special requests are always welcome at Moonville.
            </p>
            <button className="text-white border-b border-white pb-1 text-xs font-bold tracking-widest uppercase">
              Contact Concierge
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
