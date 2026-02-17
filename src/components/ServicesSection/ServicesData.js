import {
    Stethoscope,
    Syringe,
    Pill,
    CalendarClock,
    Smartphone,
    Brain,
    HeartPulse,
} from "lucide-react";

const servicesData = [
    {
        title: "OPD Services",
        description:
            "Comprehensive outpatient pediatric consultations with experienced doctors for everyday and specialized child healthcare needs.",
        icon: Stethoscope,
    },
    {
        title: "Day Care",
        description:
            "Safe and comfortable daycare facilities for short-term observation, treatment, and recovery under medical supervision.",
        icon: CalendarClock,
    },
    {
        title: "Vaccination",
        description:
            "Complete immunization services following national and international vaccination schedules to keep children protected.",
        icon: Syringe,
    },
    {
        title: "Pharmacy Store",
        description:
            "In-house pharmacy providing easy access to prescribed medicines and pediatric healthcare essentials.",
        icon: Pill,
    },
    {
        title: "App-based Patient Data & Prescriptions",
        description:
            "Digital access to patient records and prescriptions, ensuring continuity of care and convenience for parents.",
        icon: Smartphone,
    },
    {
        title: "Paediatric Super Specialty OPD",
        description:
            "Visiting paediatric super-specialists offering expert consultations across multiple child health disciplines.",
        icon: HeartPulse,
    },
    {
        title: "Nutrition & Psychological Counseling",
        description:
            "Holistic support through child nutrition guidance and psychological counseling for overall growth and mental well-being.",
        icon: Brain,
    },
];

export default servicesData;