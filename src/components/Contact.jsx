import { useState } from "react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    // 1. WhatsApp Message Formatting (Clean & Bold)
    const text =
      `*🏨 HOTEL MOONVILLE ENQUIRY*\n` +
      `--------------------------------\n` +
      `👤 *Name:* ${data.name}\n` +
      `📞 *Phone:* ${data.phone}\n` +
      `📧 *Email:* ${data.email}\n` +
      `💬 *Message:* ${data.message}\n` +
      `--------------------------------\n` +
      `_Sent via Moonville Web Portal_`;

    const whatsappUrl = `https://wa.me/919910199814?text=${encodeURIComponent(text)}`;

    // 2. Open WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSending(false);
      setShowSuccess(true);
      e.target.reset();

      // Reset success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }, 800); // Small delay for "sending" feel
  };

  return (
    <section id="contact" className="py-24 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-semibold tracking-[0.3em] uppercase text-xs mb-2">
            Connect With Us
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900 italic">
            Get In Touch
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* FORM SIDE */}
          <div className="relative bg-white p-8 md:p-12 shadow-xl rounded-sm border-t-4 border-amber-600">
            {/* Success Overlay */}
            {showSuccess && (
              <div className="absolute inset-0 bg-white/95 z-20 flex flex-col items-center justify-center text-center p-6 animate-fade-in">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-2xl">
                  ✓
                </div>
                <h4 className="text-xl font-serif">Message Prepared!</h4>
                <p className="text-gray-500 text-sm mt-2">
                  WhatsApp has been opened in a new tab to complete your
                  enquiry.
                </p>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="mt-6 text-amber-600 font-bold text-xs uppercase tracking-widest"
                >
                  Send Another
                </button>
              </div>
            )}

            <h4 className="text-2xl font-serif mb-8 text-gray-800">
              Send an Enquiry
            </h4>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="border-b border-gray-300 py-2 focus:border-amber-600 outline-none transition-colors bg-transparent text-gray-800"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    pattern="[0-9]{10,12}"
                    title="Please enter a valid phone number"
                    className="border-b border-gray-300 py-2 focus:border-amber-600 outline-none transition-colors bg-transparent text-gray-800"
                    placeholder="10 digit mobile number"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="border-b border-gray-300 py-2 focus:border-amber-600 outline-none transition-colors bg-transparent text-gray-800"
                  placeholder="email@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="border-b border-gray-300 py-2 focus:border-amber-600 outline-none transition-colors bg-transparent text-gray-800 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                disabled={isSending}
                className={`w-full py-4 mt-4 tracking-[0.2em] font-bold text-xs uppercase transition-all duration-300 shadow-lg flex items-center justify-center gap-3
                  ${isSending ? "bg-gray-400 cursor-not-allowed" : "bg-neutral-900 text-white hover:bg-amber-600"}`}
              >
                {isSending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Processing...
                  </>
                ) : (
                  "Send via WhatsApp"
                )}
              </button>
            </form>
          </div>

          {/* INFO SIDE (Same as before but cleaned up) */}
          <div className="flex flex-col justify-between">
            <div className="grid sm:grid-cols-2 gap-12">
              <div>
                <h5 className="font-serif text-amber-700 text-xl mb-3">
                  Our Location
                </h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  SK-31, Sector-116, Gate No. 6<br />
                  Noida, UP 201301
                </p>
              </div>
              <div>
                <h5 className="font-serif text-amber-700 text-xl mb-3">
                  Booking Desk
                </h5>
                <p className="text-gray-600 text-sm">
                  +91 99101 99814
                  <br />
                  primrosehotel116@gmail.com
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="mt-12 h-80 rounded-sm overflow-hidden shadow-md grayscale hover:grayscale-0 transition-all duration-1000">
              <iframe
                title="Hotel Moonville Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.0098466443426!2d77.3983229394414!3d28.56857997205528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefc4b78d14db%3A0x58bee2a9c38897ea!2sHotel%20Moonville!5e0!3m2!1sen!2sin!4v1776927891884!5m2!1sen!2sin"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
