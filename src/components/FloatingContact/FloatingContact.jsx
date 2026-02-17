import { useEffect, useState } from "react";
import { Phone, Mail, Copy, Check } from "lucide-react";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("location");
  const [copied, setCopied] = useState(null);
  // Body scroll lock (this is a valid effect use)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      {/* Floating Chip */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg text-sm
          flex gap-3 items-center hover:bg-blue-700 hover:scale-105
          transition-transform duration-200"
        >
          📍 Location | 📞 Contact
        </button>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center px-4
          transition-opacity duration-200
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/40"
        />

        {/* Modal Card */}
        <div
          className={`relative bg-white w-full max-w-md rounded-xl shadow-xl overflow-hidden
            transform transition-all duration-200
            ${open
              ? "scale-100 translate-y-0"
              : "scale-95 translate-y-4"}
          `}
        >
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <h2 className="font-semibold text-lg">
              {tab === "location" ? "Our Location" : "Contact Us"}
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="text-xl hover:text-gray-600"
            >
              ×
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b text-sm">
            <button
              onClick={() => setTab("location")}
              className={`flex-1 py-2
                ${tab === "location"
                  ? "border-b-2 border-blue-600 font-medium"
                  : "text-gray-500"}
              `}
            >
              📍 Location
            </button>
            <button
              onClick={() => setTab("contact")}
              className={`flex-1 py-2
                ${tab === "contact"
                  ? "border-b-2 border-blue-600 font-medium"
                  : "text-gray-500"}
              `}
            >
              📞 Contact
            </button>
          </div>

          {/* Content */}
          <div key={tab} className="p-4 text-sm text-gray-700 animate-fadeIn">
            {tab === "location" && (
              <div className="space-y-4">
                <div className="w-full h-48 rounded-md overflow-hidden">
                  {tab === "location" && (
                    <iframe
                      title="Kanvi Child Care Hospital Location"
                      src="https://www.google.com/maps/embed?pb=!4v1771147592650!6m8!1m7!1sYU9jGZh-c-z9pzgHbs_N2g!2m2!1d19.84554521567468!2d75.92011920926485!3f237.63!4f-10.739999999999995!5f0.4000000000000002"
                      className="w-full h-full border-0"
                      loading="lazy"
                      allowFullScreen
                    />
                  )}

                  {/* <LazyMap/> */}
                </div>

                <div className="space-y-3">
                  <p className="text-base font-semibold">Kanvi Child Care Super Speciality Clinic</p>
                  <p className="text-sm">
                    <strong>Timings:</strong> 11:00 AM – 7:00 PM
                  </p>

                  <div className="border-t" />

                  <div className="text-sm text-gray-600">
                    <p>Kanvi Child Care</p>
                    <p>Krishna Square Complex</p>
                    <p>Bypass Road,</p>
                    <p>Beside Santkrupa Hospital</p>
                    <p>Mantha Chaufully, Jalna</p>
                    <p>431203</p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=19.84554521567468,75.92011920926485"
                  target="_blank"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Get Directions →
                </a>
              </div>
            )}

            {tab === "contact" && (() => {

              const handleCopy = (text, type) => {
                navigator.clipboard.writeText(text);
                setCopied(type);
                setTimeout(() => setCopied(null), 1500);
              };

              return (
                <div className="space-y-4">

                  {/* Phone */}
                  <div className="flex items-center justify-between bg-blue-50 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <Phone className="text-blue-600" size={20} />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium text-gray-800">
                          +91 9529952129
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Copy */}
                      <button
                        onClick={() => handleCopy("+919529952129", "phone")}
                        className="p-2 rounded-lg hover:bg-blue-100 transition"
                        title="Copy phone number"
                      >
                        {copied === "phone" ? (
                          <Check size={18} className="text-green-600" />
                        ) : (
                          <Copy size={18} className="text-blue-600" />
                        )}
                      </button>

                      {/* Call */}
                      <a
                        href="tel:+919529952129"
                        className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition"
                      >
                        Call
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center justify-between bg-blue-50 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <Mail className="text-blue-600" size={20} />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium text-gray-800">
                          kanvichildcare@gmail.com
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleCopy("kanvichildcare@gmail.com", "email")}
                      className="p-2 rounded-lg hover:bg-blue-100 transition"
                      title="Copy email"
                    >
                      {copied === "email" ? (
                        <Check size={18} className="text-green-600" />
                      ) : (
                        <Copy size={18} className="text-blue-600" />
                      )}
                    </button>
                  </div>

                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingContact;
