import { PlayCircle } from "lucide-react";
import { useState } from "react";
import EducationModal from "./EducationModal";

const FloatingEducation = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-24 right-6 z-50
                   flex items-center gap-2
                   bg-teal-600 text-white
                   px-4 py-3 rounded-full shadow-lg
                   hover:bg-teal-700 transition"
            >
                <PlayCircle size={18} />
                <span className="text-sm font-medium">Parent Education</span>
            </button>

            <EducationModal isOpen={open} onClose={() => setOpen(false)} />
        </>
    );
};

export default FloatingEducation;
