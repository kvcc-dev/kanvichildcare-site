import EducationAccordion from "./EducationAccordian";

const EducationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl max-w-3xl w-full p-6 relative">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    ✕
                </button>
                {/* Video */}
                <EducationAccordion />


            </div>
        </div>
    );
};

export default EducationModal;
