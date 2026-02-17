import { HeartPulse, Eye, ShieldCheck } from "lucide-react";
import PreventiveCareSection from "../../components/PreventiveCareSection/PreventiveCareSection";
import PreventiveCareCard from "../../components/PreventiveCareSection/PreventiveCareCard";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import { useState } from "react";
import AppointmentModal from "../../components/AppointmentModal/AppointmentModal";
import doctors from "../../data/doctors";
import RevealOnScroll from "../../components/RevealOnScroll/RevealOnScroll";
import WhyKanviSection from "../../components/WhyKanviSection/WhyKanviSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import DepartmentsSection from "../../components/DepartmentsSection/DepartmentsSection";
import EducationAccordion from "../../components/FloatingEducation/EducationAccordian";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>

      {/* HERO SECTION */}
      <section id="home" className=" relative overflow-hidden
  bg-transparent">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <div className="flex justify-center mb-3">
            <img
              src="/assets/headerlogo.png"
              alt="Kanvi Child Care"
              className="h-80 w-auto"
            />
          </div>
          {/* Hospital Name */}
          <h1 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4">
            Kanvi Child Care<br />
            Super Speciality Clinic
          </h1>



          {/* Care Philosophy */}
          <div
            className="
    max-w-4xl mx-auto mb-8 px-6 py-6 rounded-3xl
    bg-white/80 backdrop-blur-md
    border border-blue-100
    shadow-[0_10px_30px_rgba(0,0,0,0.05)]
  "
          >
            <p className="text-lg md:text-xl font-semibold text-blue-700 tracking-wide">
              Care <span className="text-blue-400 mx-2">•</span>
              Synergize <span className="text-blue-400 mx-2">•</span>
              Cure
            </p>

            <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-base md:text-lg leading-relaxed">
              Our approach combines compassionate care, close collaboration with families,
              and evidence-based treatment to ensure complete child well-being.
            </p>
          </div>




          {/* CTA */}
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-xl text-sm font-medium
                 hover:bg-blue-700 transition
                 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            onClick={() => setIsModalOpen(true)}
          >
            Book an Appointment
          </button>

        </div>
      </section>
      {/*Why Kanvi Section */}
      <section id="kanvi" className=" relative overflow-hidden
  bg-transparent
  ">
        <RevealOnScroll delay={50} >
          <WhyKanviSection />
        </RevealOnScroll>
      </section>
      {/* Preventive Care SECTION */}
      <section id="preventive-care" className="relative overflow-hidden
  bg-transparent
  ">
        <RevealOnScroll delay={50}>
          <PreventiveCareSection />
        </RevealOnScroll>
      </section>


      {/**Departments Section */}
      <section id="department" className="relative overflow-hidden
  bg-transparent
  ">
        <RevealOnScroll delay={50}>
          <DepartmentsSection />
        </RevealOnScroll>
      </section>


      {/**Services Section */}
      <section id="services" className="relative overflow-hidden
  bg-transparent
  ">
        <RevealOnScroll delay={50}>
          <ServicesSection />
        </RevealOnScroll>
      </section>

      {/* ABOUT SECTION */}
      <RevealOnScroll delay={50}>
        <section className="relative overflow-hidden
  bg-transparent mb-10
  " id="about">
          <div className="max-w-6xl mx-auto px-4">

            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
              About Us
            </h2>

            {/* Cards */}
            <div className="grid gap-8 md:grid-cols-3">

              <PreventiveCareCard
                icon={HeartPulse}
                title="Our Mission"
                description="To provide safe, ethical, and compassionate medical care
        tailored specifically for children."
              />

              <PreventiveCareCard
                icon={Eye}
                title="Our Vision"
                description="To be a trusted pediatric healthcare center known for
        excellence, empathy, and innovation."
              />

              <PreventiveCareCard
                icon={ShieldCheck}
                title="Our Values"
                description="Child-first care, transparency, medical integrity,
        and strong family involvement."
              />

            </div>
          </div>
        </section>
      </RevealOnScroll>

      <section
        id="education"
        className="relative py-20 bg-gradient-to-b from-blue-50/40 to-white border-y border-blue-100"
      >
        <RevealOnScroll delay={50}>
          <EducationAccordion />

        </RevealOnScroll>
      </section>
      {/* ABOUT DOCTORS SECTION */}

      <section className="relative overflow-hidden
  bg-transparent
  " id="doctors">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-2xl md:text-3xl font-semibold text-center m-6">
            Our Doctors
          </h2>

          <div className="space-y-12">
            {doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                name={doctor.name}
                speciality={doctor.speciality}
                registration={doctor.registration}
                qualifications={doctor.qualifications}
                experience={doctor.experience}
                interests={doctor.interests}
                image={doctor.image}
              />
            ))}
          </div>

        </div>
      </section>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>

  );
};

export default Home;
