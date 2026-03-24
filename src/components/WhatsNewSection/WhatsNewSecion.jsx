import { Sparkles, Smartphone, ShieldPlus } from "lucide-react";
import RevealOnScroll from "../RevealOnScroll/RevealOnScroll";

const WhatsNewSection = () => {
    const items = [
        {
            icon: Sparkles,
            title: "Super Speciality Care",
            description:
                "Unique paediatric super speciality clinic supported by experienced pediatricians and renowned super specialists.",
        },
        {
            icon: Smartphone,
            title: "Digital Health Records",
            description:
                "App-based patient data where every parent gets access to their child’s health records anytime via the Kanvi Child Care app.",
        },
        {
            icon: ShieldPlus,
            title: "Preventive Care Focus",
            description:
                "Extensive guidance and tips to prevent easily avoidable physical and mental health issues in children.",
        },
    ];

    return (
        <section
            id="whats-new"
            className="relative py-16 bg-gradient-to-b from-blue-50/40 to-white"
        >
            <RevealOnScroll delay={50}>
                <div className="max-w-6xl mx-auto px-4">

                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-blue-700">
                        What’s New at KCC
                    </h2>

                    {/* Cards */}
                    <div className="grid gap-6 md:grid-cols-3">
                        {items.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="group bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    {/* Icon */}
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-4 group-hover:scale-110 transition">
                                        <Icon size={22} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default WhatsNewSection;