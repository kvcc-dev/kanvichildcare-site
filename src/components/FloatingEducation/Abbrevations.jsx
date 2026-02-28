import React from "react";

const ABBREVIATIONS = {
    BCG: "Bacillus Calmette–Guérin (Tuberculosis)",
    DTwP: "Diphtheria, Tetanus, whole-cell Pertussis",
    DTaP: "Diphtheria, Tetanus, acellular Pertussis (Painless)",
    IPV: "Inactivated Poliovirus Vaccine",
    OPV: "Oral Poliovirus Vaccine",
    PCV: "Pneumococcal Conjugate Vaccine",
    Hib: "Haemophilus Influenzae Type B",
    MMR: "Measles, Mumps, Rubella",
    HPV: "Human Papillomavirus",
    Tdap: "Tetanus, reduced Diphtheria, acellular Pertussis",
    Td: "Tetanus and Diphtheria"
};

const Abbr = ({ text }) => {
    const meaning = ABBREVIATIONS[text];
    const [open, setOpen] = React.useState(false);

    return (
        <span
            className="relative inline-block mx-0.5"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onClick={() => setOpen(!open)}
        >
            <span className="cursor-help font-semibold text-blue-700 border-b border-dotted border-blue-400">
                {text}
            </span>

            {open && (
                <span className="absolute z-50 left-1/2 -translate-x-1/2 top-full mt-2
                         rounded-lg bg-gray-900 px-3 py-2 text-xs text-white shadow-lg">
                    {meaning}
                </span>
            )}
        </span>
    );
};

export default Abbr;