import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  Copy,
  Check,
  MapPin,
  X
} from "lucide-react";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("location");
  const [copied, setCopied] = useState(null);

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(true)}
          className="
            flex items-center gap-2
            bg-teal-600 text-white
            p-3 md:px-5 md:py-3
            rounded-full shadow-lg
            hover:bg-teal-700
            transition-all duration-200
          "
        >
          <MapPin size={18} />
          <Phone size={18} />

          {/* Show text only on desktop */}
          <span className="hidden md:inline text-sm font-medium">
            Location | Contact
          </span>
        </button>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center px-4
        transition-opacity duration-200
        ${open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/40"
        />

        {/* Modal Card */}
        <div
          className={`relative bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden
          transform transition-all duration-200
          ${open ? "scale-100 translate-y-0" : "scale-95 translate-y-4"}
        `}
        >
          {/* Header */}
          <div className="flex justify-between items-center px-5 py-4 border-b">
            <h2 className="font-semibold text-lg text-gray-800">
              {tab === "location" ? "Our Location" : "Contact Us"}
            </h2>

            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <X size={18} />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b text-sm">
            <button
              onClick={() => setTab("location")}
              className={`flex-1 py-3 flex items-center justify-center gap-2
                ${tab === "location"
                  ? "border-b-2 border-blue-600 font-medium text-blue-700"
                  : "text-gray-500"}
              `}
            >
              <MapPin size={16} />
              Location
            </button>

            <button
              onClick={() => setTab("contact")}
              className={`flex-1 py-3 flex items-center justify-center gap-2
                ${tab === "contact"
                  ? "border-b-2 border-blue-600 font-medium text-blue-700"
                  : "text-gray-500"}
              `}
            >
              <Phone size={16} />
              Contact
            </button>
          </div>

          {/* Content */}
          <div className="p-5 text-sm text-gray-700 space-y-4">
            {tab === "location" && (
              <>
                <div className="w-full h-48 rounded-xl overflow-hidden">
                  <iframe
                    title="Kanvi Child Care Hospital Location"
                    src="https://www.google.com/maps/embed?pb=!4v1771147592650!6m8!1m7!1sYU9jGZh-c-z9pzgHbs_N2g!2m2!1d19.84554521567468!2d75.92011920926485!3f237.63!4f-10.739999999999995!5f0.4000000000000002"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-base font-semibold text-gray-800">
                    Kanvi Child Care Super Speciality Clinic
                  </p>
                  <p>
                    <strong>Timings:</strong> 11:00 AM – 7:00 PM
                  </p>

                  <div className="border-t pt-3 text-gray-600 space-y-1">
                    <p>Krishna Square Complex</p>
                    <p>Bypass Road</p>
                    <p>Beside Santkrupa Hospital</p>
                    <p>Mantha Chaufully, Jalna</p>
                    <p>431203</p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=19.84554521567468,75.92011920926485"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <MapPin size={16} />
                  Get Directions
                </a>
              </>
            )}

            {tab === "contact" && (
              <>
                {/* Phone */}
                <div className="flex items-center justify-between bg-blue-50 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <Phone className="text-blue-600" size={20} />
                    <div>
                      <p className="text-xs text-gray-500">Phone</p>
                      <p className="font-medium text-gray-800">
                        +91 9529952129
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy("+919529952129", "phone")}
                      className="p-2 rounded-lg hover:bg-blue-100 transition"
                    >
                      {copied === "phone" ? (
                        <Check size={18} className="text-green-600" />
                      ) : (
                        <Copy size={18} className="text-blue-600" />
                      )}
                    </button>

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
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="font-medium text-gray-800">
                        kanvichildcare@gmail.com
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      handleCopy(
                        "kanvichildcare@gmail.com",
                        "email"
                      )
                    }
                    className="p-2 rounded-lg hover:bg-blue-100 transition"
                  >
                    {copied === "email" ? (
                      <Check size={18} className="text-green-600" />
                    ) : (
                      <Copy size={18} className="text-blue-600" />
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingContact;
