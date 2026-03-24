import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const primaryLinks = [

  ];

  const secondaryLinks = [
    { label: "Home", href: "#home" },
    { label: "Why Us", href: "#kanvi" },
    { label: "Departments", href: "#department" },
    { label: "Services", href: "#services" },
    { label: "What’s New", href: "#whats-new" },
    { label: "Preventive Care", href: "#preventive-care" },
    { label: "Founder’s View", href: "#founder" },
    { label: "About Us", href: "#about" },
    { label: "Our Doctors", href: "#doctors" },
    { label: "Parent Education", href: "#education" },
  ];

  const allLinks = [...primaryLinks, ...secondaryLinks];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-teal-100 sticky top-0 z-40">

      {/* PRIMARY HEADER */}
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo + Title */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/assets/headerlogo.png"
            alt="Kanvi Child Care Hospital"
            className="h-12 md:h-14 w-auto object-contain"
          />
          <span className="text-lg md:text-xl font-semibold text-blue-700 whitespace-nowrap">
            Kanvi Child Care
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 text-sm">
          {primaryLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-3 py-2 rounded-lg text-gray-700 font-medium transition-all duration-200 hover:text-teal-700 hover:bg-teal-100/60 group"
            >
              {l.label}
              <span className="absolute left-3 right-3 -bottom-1 h-[2px] bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
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

      {/* CENTERED NAVBAR (Desktop Only) */}
      <div className="hidden md:block border-t border-blue-100 bg-white/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4">

          <nav className="flex justify-center items-center flex-wrap gap-x-6 gap-y-2 py-3 text-sm">

            {secondaryLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-2 py-1 text-gray-600 hover:text-blue-700 font-medium transition group"
              >
                {l.label}

                {/* underline */}
                <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
              </a>
            ))}

          </nav>

        </div>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed top-20 right-4 z-50 w-72 bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-100 animate-[fadeScale_200ms_ease-out]">

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <span className="font-semibold text-blue-700">Menu</span>
            <button onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <nav className="p-3 space-y-1">
            {allLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all duration-200 hover:bg-blue-50 hover:pl-5"
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

            {/* CTA */}
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