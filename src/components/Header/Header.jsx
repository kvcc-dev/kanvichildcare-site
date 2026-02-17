import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Why Us", href: "#kanvi" },
    { label: "Preventive Care", href: "#preventive-care" },
    { label: "Departments", href: "#department" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Our Doctors", href: "#doctors" },
    { label: "Parent Education", href: "#education" },

  ];

  return (
    <header className=" bg-gradient-to-l from-teal-50 via-white to-teal-50
  border-b border-teal-100
  sticky top-0 z-40">
      <div className="flex items-center">

        {/* Logo */}
        {/* Logo */}
        <div className="pl-4 md:pl-8">
          <a href="#home" className="inline-block">
            <img
              src="/assets/headerlogo.png"
              alt="Kanvi Child Care Hospital"
              className="h-14 md:h-16 w-auto object-contain p-1 cursor-pointer"
            />
          </a>
        </div>


        {/* Header Content */}
        <div className="flex-1">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

            <h1 className="text-lg md:text-xl font-semibold text-blue-700">
              Kanvi Child Care
            </h1>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2 text-sm">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="
        relative px-3 py-2 rounded-lg
        text-gray-700 font-medium
        transition-all duration-200
        hover:text-teal-700
        hover:bg-teal-100/60
        group
      "
                >
                  {l.label}

                  {/* Hover underline */}
                  <span
                    className="
          absolute left-3 right-3 -bottom-1 h-[2px]
          bg-teal-600
          scale-x-0 group-hover:scale-x-100
          transition-transform origin-left
        "
                  />
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>

          </div>
        </div>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* FLOATING MENU */}
      {open && (
        <div
          className="
            fixed top-20 right-4 z-50 w-72
            bg-white/95 backdrop-blur
            rounded-2xl shadow-xl
            border border-gray-100
            animate-[fadeScale_200ms_ease-out]
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <span className="font-semibold text-blue-700">Menu</span>
            <button onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <nav className="p-3 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="
                  group flex items-center justify-between
                  px-4 py-3 rounded-xl text-sm
                  transition-all duration-200
                  hover:bg-blue-50 hover:pl-5
                "
              >
                <span className="text-gray-700 group-hover:text-blue-700">
                  {l.label}
                </span>
                <ChevronRight
                  size={16}
                  className="text-gray-300 group-hover:text-blue-600"
                />
              </a>
            ))}
            <a
              href="tel:+919529952129"
              className="block mt-3 mx-3 bg-blue-600 text-white text-center py-3 rounded-xl text-sm font-medium"
            >
              📞 Call Clinic
            </a>

          </nav>
        </div>
      )}

      {/* Animation */}
      <style>
        {`
          @keyframes fadeScale {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
