import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = ({
    phone = "919529952129",
    message = "Hello, I would like to book an appointment.",
}) => {
    const getWhatsAppLink = () => {
        return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    };

    return (
        <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="
        flex items-center gap-2
        bg-green-500 text-white
        p-3 md:px-5 md:py-3
        rounded-full shadow-lg
        hover:bg-green-600
        transition-all duration-200
      "
        >
            <FaWhatsapp size={20} />
            <span className="hidden md:inline text-sm font-medium">
                WhatsApp
            </span>
        </a>
    );
};

export default FloatingWhatsApp;