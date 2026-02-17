import PreventiveCareCard from "../PreventiveCareSection/PreventiveCareCard";
import whyKanviData from "./WhyKanviData";

const WhyKanviSection = () => {
    return (
        <section
            id="kanvi"
            className="
        relative overflow-hidden
        bg-transparent

        py-24
      "
        >
            {/* subtle background glow */}
            <div
                className="
          absolute inset-0
           bg-transparent
          pointer-events-none
        "
            />

            <div className="relative max-w-7xl mx-auto px-4">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
                        Kanvi Child Care
                    </h2>

                    <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                        We combine cutting-edge Paediatric Super Specialist expertise with
                        warmth, compassion, and family-centered care.
                    </p>
                </div>

                {/* Values Cards */}
                <div className="grid gap-8 md:grid-cols-2">
                    {whyKanviData.map((item, index) => (
                        <PreventiveCareCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))}
                </div>

                {/* Our Promise */}
                <div
                    className="
            mt-20
            bg-white/80 backdrop-blur-sm
            rounded-3xl
            p-8 md:p-12
            text-center
            shadow-sm
          "
                >
                    <h3 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-2">
                        Our Promise
                    </h3>

                    <p className="text-teal-600 font-medium mb-4">
                        Guided by Purpose, Driven by Care
                    </p>

                    <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-base md:text-lg">
                        At Kanvi Child Care, every team member is committed to compassionate
                        care, treating each child as we would our own. With this blend of
                        skill and warmth, we stand by your family every step of the way —
                        turning challenges into stories of hope and healing.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default WhyKanviSection;
