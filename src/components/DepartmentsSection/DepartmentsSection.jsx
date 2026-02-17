import PreventiveCareCard from "../PreventiveCareSection/PreventiveCareCard";
import departmentsData from "./DepartmentsData";

const DepartmentsSection = () => {
    return (
        <section className="py-16  bg-transparent">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
                        Departments at Kanvi Child Care
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        A comprehensive range of pediatric specialties delivering expert
                        care across every stage of childhood.
                    </p>
                </div>

                {/* Departments Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {departmentsData.map((dept, index) => (
                        <PreventiveCareCard
                            key={index}
                            title={dept.title}
                            description={dept.description}
                            icon={dept.icon}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default DepartmentsSection;
