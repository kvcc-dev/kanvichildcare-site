import PreventiveCareCard from "../PreventiveCareSection/PreventiveCareCard";
import servicesData from "./ServicesData";

const ServicesSection = () => {
    return (
        <section className="py-16  bg-transparent">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
                        Services at Kanvi Child Care
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        Comprehensive pediatric services designed to support your child’s
                        health, growth, and well-being at every stage.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {servicesData.map((service, index) => (
                        <PreventiveCareCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
