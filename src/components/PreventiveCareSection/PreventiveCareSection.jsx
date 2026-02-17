import PreventiveCareCard from "./PreventiveCareCard";
import { Apple, HeartHandshake, Syringe } from "lucide-react";


const PreventiveCareSection = () => {
  return (
    <section className=" bg-transparent">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Preventive Child Health
          </h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Supporting your child’s growth through nutrition, guidance,
            and timely care.
          </p>
        </div>

        {/* Cards */}
        <div className="
          grid grid-cols-1
          md:grid-cols-3
          gap-6
        ">
          <PreventiveCareCard
            icon={Apple}
            title="Child Nutrition"
            description="Age-appropriate nutrition guidance to support healthy growth,
            immunity, and overall development."
          />

          <PreventiveCareCard
            icon={HeartHandshake}
            title="Child Parenting"
            description="Practical parenting support focusing on emotional,
            behavioral, and mental well-being."
          />

          <PreventiveCareCard
            icon={Syringe}
            title="Child Vaccination"
            description="Ensuring timely immunization to protect your child
            from preventable diseases."
          />
        </div>
      </div>
    </section>
  );
};

export default PreventiveCareSection;
