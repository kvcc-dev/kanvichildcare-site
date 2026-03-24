import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll/RevealOnScroll";

const FoundersViewSection = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <section
            id="founder"
            className="relative py-16 bg-gradient-to-b from-white to-blue-50/40"
        >
            <RevealOnScroll delay={50}>
                <div className="max-w-6xl mx-auto px-4">

                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-blue-700">
                        Founder’s View
                    </h2>

                    {/* Content */}
                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        {/* Image Section */}
                        <div className="flex justify-center">
                            <div className="relative w-72 h-72 group">

                                {/* Image */}
                                <img
                                    src="/assets/doctors/founder.png"
                                    alt="Dr Satish Mundada"
                                    className="w-full h-full object-cover object-[center_15%] rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                                />

                                {/* Frame */}
                                <div className="absolute inset-0 rounded-2xl border-4 border-white pointer-events-none"></div>

                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-blue-100 space-y-4 text-gray-700 leading-relaxed">

                            {/* Quote */}
                            <div className="relative mb-4">
                                <p className="text-xl md:text-2xl italic text-blue-700 font-medium leading-relaxed">
                                    “I didn’t just see a medical facility; I saw a sanctuary for growing families.”
                                </p>
                                <div className="w-12 h-1 bg-teal-500 mt-3 rounded-full"></div>
                            </div>

                            {/* Always Visible Content */}
                            <div className="text-gray-600 leading-relaxed space-y-4">
                                <p>
                                    As a Pediatrician, healing is about more than prescriptions—it’s about
                                    listening to concerns and celebrating the small milestones that make childhood magical.
                                </p>

                                <p>
                                    At Kanvi Child Care, we combine cutting-edge pediatric super speciality
                                    expertise with a compassionate, child-friendly environment.
                                </p>
                            </div>

                            {/* Expandable Content */}
                            <div
                                className={`transition-all duration-500 ease-in-out origin-top ${expanded
                                        ? "scale-y-100 opacity-100 mt-4"
                                        : "scale-y-0 opacity-0 h-0"
                                    }`}
                            >
                                <div className="text-gray-600 leading-relaxed space-y-4">

                                    <p>
                                        The world of Pediatrics is evolving, and we believe your child's care should too.
                                        Kanvi Child Care is founded on the principle that clinical excellence and a seamless
                                        patient experience go hand-in-hand.
                                    </p>

                                    <p>
                                        From a kid-friendly environment to a complete wellness center, we have reimagined
                                        what a trip to the doctor looks like.
                                    </p>

                                    <p>
                                        Our mission is simple: to provide expert, compassionate preventive pediatric care
                                        that puts your child first. We’ve created a space for health, growth, and a bright future.
                                    </p>

                                    <p className="font-medium text-teal-700">
                                        GUIDED BY PURPOSE • DRIVEN BY CARE
                                    </p>

                                    <p>
                                        Every team member is committed to treating each child as we would our own.
                                        With this blend of skill and warmth, we stand by your family every step of the way,
                                        turning challenges into stories of hope and healing.
                                    </p>
                                    <p>

                                    </p>
                                </div>
                            </div>

                            {/* Toggle Button */}
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="mt-4 inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition"
                            >
                                {expanded ? "Show Less" : "Read Full Message"}
                                <span className={`transition-transform ${expanded ? "rotate-180" : ""}`}>
                                    ↓
                                </span>
                            </button>

                            {/* Signature */}
                            <div className="mt-6 border-t pt-4">
                                <p className="font-semibold text-gray-800">
                                    Dr. Satish Lalchand Mundada
                                </p>
                                <p className="text-sm text-gray-500">
                                    Director – Kanvi Child Care, Jalna
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default FoundersViewSection;