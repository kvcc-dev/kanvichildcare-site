import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";

const Footer = () => {
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
    <footer className="bg-gradient-to-b from-blue-800 to-blue-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Clinic Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Kanvi Child Care
            </h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              Compassionate, evidence-based pediatric care dedicated to
              supporting your child’s healthy growth and well-being.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-blue-200">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-white transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-blue-200">
              Connect With Us
            </h4>

            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/share/1DcyqFXsLS/"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/kanvichildcare"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.youtube.com/@KanviChildCare/videos"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>

              <a
                href="https://www.instagram.com/kanvichildcare"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
                aria-label="X"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 mt-12 pt-6 text-center text-sm text-blue-200">
          © {new Date().getFullYear()} Kanvi Child Care Hospital. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
