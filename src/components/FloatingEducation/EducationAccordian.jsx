import { useState } from "react";
import {
    ChevronDown,
    Video,
    Presentation,
    Download,
    AlertTriangle,
    FileText,
    ExternalLink,
    Baby,
    Syringe,
} from "lucide-react";

const AccordionItem = ({ title, icon: Icon, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="group border border-blue-100 rounded-2xl bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            {/* Header */}
            <button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className="w-full flex items-center justify-between px-6 py-5 text-left
                hover:bg-blue-50/50 transition-colors duration-200"
            >
                <div className="flex items-center gap-3">
                    {Icon && <Icon className="text-blue-600" size={22} />}
                    <h4 className="text-base md:text-lg font-semibold text-slate-800">
                        {title}
                    </h4>
                </div>

                <ChevronDown
                    className={`transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Content */}
            {open && (
                <div className="px-6 pb-6 pt-4 text-slate-600 text-sm md:text-base border-t border-blue-50">
                    {children}
                </div>
            )}
        </div>
    );
};

const EducationAccordion = () => {
    return (
        <div className="max-w-5xl mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-14">
                <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-600 bg-blue-100 px-4 py-1 rounded-full mb-4">
                    Parent Education
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
                    Child Health Resources
                </h2>

                <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Trusted guidance from Kanvi Child Care to support your child’s
                    healthy growth and overall well-being.
                </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-5">

                {/* VIDEO 1 */}
                <AccordionItem
                    title="What not to do in Infant Care"
                    icon={Video}
                >
                    <p className="mb-4">
                        Common mistakes in infant care can affect a baby’s health.
                        Watch this expert-guided video to understand what to avoid
                        during early infancy.
                    </p>

                    <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                        <iframe
                            src="https://www.youtube.com/embed/DUI6gVJwHGc"
                            className="w-full h-full"
                            allowFullScreen
                            title="What Not To Do in Infant Care"
                        />
                    </div>
                </AccordionItem>

                {/* VIDEO 2 */}
                <AccordionItem
                    title="Understanding Thalassemia in Children"
                    icon={Video}
                >
                    <p className="mb-4">
                        Thalassemia is a genetic blood disorder that affects children from
                        an early age. This video explains what thalassemia is, how it is
                        diagnosed, and the importance of early medical care and follow-up.
                    </p>

                    <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                        <iframe
                            src="https://www.youtube.com/embed/SYTH2FC415Y"
                            className="w-full h-full"
                            allowFullScreen
                            title="Understanding Thalassemia in Children"
                        />
                    </div>
                </AccordionItem>

                {/* VIDEO Virtual Autism */}
                <AccordionItem
                    title="Is Screen Time Affecting Your Child's Development?"
                    icon={Video}
                >
                    <p className="mb-4">
                        Early and uncontrolled exposure to screens can significantly impact a child's brain development,
                        behavior, and communication skills.
                        Learn how excessive screen time may contribute to virtual autism-like symptoms
                        and what parents can do to protect their child's developmental health.
                    </p>

                    <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                        <iframe
                            src="https://www.youtube.com/embed/02DTPGfzclk"
                            className="w-full h-full"
                            allowFullScreen
                            title="Understanding Thalassemia in Children"
                        />
                    </div>
                </AccordionItem>

                {/* PPT - WEANING */}
                <AccordionItem title="Weaning" icon={Presentation}>
                    <p className="mb-3">
                        This presentation explains when and how to start weaning in infants,
                        including the right time to introduce solid foods, recommended food choices,
                        and tips to ensure proper nutrition and healthy growth.
                    </p>

                    <p className="text-xs text-gray-500 mb-3">
                        Click on the slide to move to the next page.
                    </p>

                    <div className="aspect-video rounded-xl overflow-hidden shadow-md border">
                        <iframe
                            src="https://docs.google.com/presentation/d/e/2PACX-1vQ0sQJ5UHHAzk50Afe1uRVwU85KZfQBF4avTUzS2L5ewIbGfi9RtRzIj23M7pYFPA/pubembed?start=false&loop=true&delayms=3000"
                            className="w-full h-full"
                            allowFullScreen
                            title="Weaning Presentation"
                        />
                    </div>
                </AccordionItem>

                {/* PPT - BENEFITS OF BREASTFEEDING */}
                <AccordionItem title="Benefits of Breastfeeding" icon={Presentation}>
                    <p className="mb-3">
                        This presentation highlights the importance of breastfeeding, its benefits
                        for both baby and mother, and how it supports healthy growth, immunity,
                        and overall development in early life.
                    </p>

                    <p className="text-xs text-gray-500 mb-3">
                        Click on the slide to move to the next page.
                    </p>

                    <div className="aspect-video rounded-xl overflow-hidden shadow-md border">
                        <iframe
                            src="https://docs.google.com/presentation/d/e/2PACX-1vQaD374xz7b9oO0vrlmgGdquejeEGJNWJRgyXch3hBaGssKgi8CLAA0oEGuzWcnew/pubembed?start=false&loop=true&delayms=3000"
                            className="w-full h-full"
                            allowFullScreen
                            title="Benefits of Breastfeeding Presentation"
                        />
                    </div>
                </AccordionItem>
                {/* PPT - THALASSEMIA */}
                <AccordionItem title="Thalassemia" icon={Presentation}>
                    <p className="mb-3">
                        This presentation covers what thalassemia is, how it affects children,
                        common warning signs, and the treatment and care required for long-term health.
                    </p>

                    <p className="text-xs text-gray-500 mb-3">
                        Click on the slide to move to the next page.
                    </p>

                    <div className="aspect-video rounded-xl overflow-hidden shadow-md border">
                        <iframe
                            src="https://docs.google.com/presentation/d/e/2PACX-1vQa_LLZRtgby3K_5r5DyuXztoFwfY3U71MEkz9dRchm_WHvbLgTjiVR-kAZvCfGwQ/pubembed?start=false&loop=false&delayms=3000"
                            className="w-full h-full"
                            allowFullScreen
                            title="Thalassemia Presentation"
                        />
                    </div>

                    {/* <div className="mt-4">
                        <a
                            href="https://docs.google.com/presentation/d/1YSS6tzxbcfoabVMkwh1orqx9h-Vzih2Y/export/pptx"
                            className="inline-flex items-center gap-2 bg-green-600 text-white
                            px-5 py-2.5 rounded-lg text-sm font-medium
                            hover:bg-green-700 transition
                            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                            <Download size={18} />
                            Download Presentation
                        </a>
                    </div> */}
                </AccordionItem>

                {/* PPT - CHILD NUTRITION */}
                <AccordionItem
                    title="Child Parenting"
                    icon={Presentation}
                >
                    <p className="mb-4">
                        This presentation covers the fundamentals of child nutrition,
                        healthy growth patterns, and practical guidance for parents.
                    </p>

                    <p className="text-xs text-gray-500 mb-3">
                        Click on the slide to move to the next page.
                    </p>

                    <div className="aspect-video rounded-xl overflow-hidden shadow-md border">
                        <iframe
                            src="https://docs.google.com/presentation/d/e/2PACX-1vSFKMeSkYv1dvVgSjldiIkOrt9Bn5ujzpuDMWA3eY7N_bAGwMcqauM2ysR3HXyRdg/pubembed?start=false&loop=false&delayms=3000"
                            className="w-full h-full"
                            allowFullScreen
                            title="Child Parenting"
                        />
                    </div>

                    {/* <div className="mt-4">
                        <a
                            href="https://docs.google.com/presentation/d/1m2zhRAY7kxDlWYh-strzVpcQI99VGkuZ/export/pptx"
                            className="inline-flex items-center gap-2 bg-green-600 text-white
                            px-5 py-2.5 rounded-lg text-sm font-medium
                            hover:bg-green-700 transition
                            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                            <Download size={18} />
                            Download Presentation
                        </a>
                    </div> */}
                </AccordionItem>

                {/* PPT - ANEMIA */}
                <AccordionItem title="Anemia" icon={Presentation}>
                    <p className="mb-3">
                        This presentation covers what anemia is, why it happens in children,
                        its warning signs, and how it can be treated. It also provides
                        guidance on diet and care to support better health.
                    </p>

                    <p className="text-xs text-gray-500 mb-3">
                        Click on the slide to move to the next page.
                    </p>

                    <div className="aspect-video rounded-xl overflow-hidden shadow-md border">
                        <iframe
                            src="https://docs.google.com/presentation/d/e/2PACX-1vSsN5xzoHj3RbTSTB7GFPeCUB_h0ZtSFp6jr-zmJCOFr_wx5s0EeRuhUnbcORD27g/pubembed?start=false&loop=false&delayms=3000"
                            className="w-full h-full"
                            allowFullScreen
                            title="Anemia Presentation"
                        />
                    </div>


                </AccordionItem>

                {/* Accordian Data - Red FLags of Child Development */}
                <AccordionItem title="Red Flag Signs in Child Development" icon={AlertTriangle}>
                    <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                        <p className="font-medium text-blue-700">
                            When to Consult a Pediatrician
                        </p>

                        <p>
                            Child development follows certain milestone windows. If a child misses
                            these key milestones, an early developmental assessment is strongly
                            recommended.
                        </p>

                        <ul className="space-y-3 list-disc list-inside">
                            <li>
                                <span className="font-semibold">By 3 Months:</span>{" "}
                                Does not follow moving objects with eyes or does not smile at people.
                            </li>

                            <li>
                                <span className="font-semibold">By 6–7 Months:</span>{" "}
                                Does not sit with support or does not respond to sounds.
                            </li>

                            <li>
                                <span className="font-semibold">By 12 Months:</span>{" "}
                                Does not crawl or does not say single words like “Mama” or “Papa”.
                            </li>

                            <li>
                                <span className="font-semibold">By 18 Months:</span>{" "}
                                Does not walk independently.
                            </li>

                            <li>
                                <span className="font-semibold">At Any Age:</span>{" "}
                                Sudden loss of previously acquired skills (Regression).
                            </li>
                        </ul>

                        <div className="mt-4 rounded-xl bg-blue-50 border border-blue-100 p-4">
                            <p className="font-medium text-blue-700">
                                Early identification leads to better outcomes.
                            </p>
                            <p className="text-gray-600 mt-1">
                                If you notice any of these signs, timely consultation can help guide
                                appropriate evaluation and support.
                            </p>
                        </div>
                    </div>


                </AccordionItem>

                {/* PDF - IAP Immunisation schedule */}
                <AccordionItem title="Developmental Milestones (2 Months – 4 Years)" icon={Baby}>
                    <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">

                        <p className="font-medium text-blue-700">
                            Age-wise Developmental Milestones
                        </p>

                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
                                <thead className="bg-blue-50">
                                    <tr className="text-left text-blue-700">
                                        <th className="p-3 border">Age</th>
                                        <th className="p-3 border">Gross Motor</th>
                                        <th className="p-3 border">Fine Motor</th>
                                        <th className="p-3 border">Language</th>
                                        <th className="p-3 border">Social / Emotional</th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white">

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-3 border font-semibold">2 Months</td>
                                        <td className="p-3 border">Holds head up when prone</td>
                                        <td className="p-3 border">Follows objects past midline</td>
                                        <td className="p-3 border">Coos; turns head to sound</td>
                                        <td className="p-3 border">Social smile</td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-3 border font-semibold">4 Months</td>
                                        <td className="p-3 border">Rolls front to back; no head lag</td>
                                        <td className="p-3 border">Reaches for objects</td>
                                        <td className="p-3 border">Laughs; squeals</td>
                                        <td className="p-3 border">Imitates expressions</td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-3 border font-semibold">6 Months</td>
                                        <td className="p-3 border">Sits with support; rolls back to front</td>
                                        <td className="p-3 border">Transfers objects hand-to-hand</td>
                                        <td className="p-3 border">Babbles (consonants)</td>
                                        <td className="p-3 border">Recognizes familiar faces</td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-3 border font-semibold">9 Months</td>
                                        <td className="p-3 border">Crawls; pulls to stand</td>
                                        <td className="p-3 border">Pincer grasp (thumb/finger)</td>
                                        <td className="p-3 border">Understands “No”; says “Dada/Mama” (non-specific)</td>
                                        <td className="p-3 border">Stranger anxiety; plays pat-a-cake</td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-3 border font-semibold">12 Months</td>
                                        <td className="p-3 border">Stands alone; walks with one hand held</td>
                                        <td className="p-3 border">Puts objects into container</td>
                                        <td className="p-3 border">1–3 clear words; “Mama/Dada” (specific)</td>
                                        <td className="p-3 border">Points to show interest; gives book to be read</td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-3 border font-semibold">18 Months</td>
                                        <td className="p-3 border">Walks up steps; runs stiffly</td>
                                        <td className="p-3 border">Builds tower of 3–4 blocks; uses spoon</td>
                                        <td className="p-3 border">10–25 words; identifies body parts</td>
                                        <td className="p-3 border">Finger feeds; copies chores</td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-3 border font-semibold">2 Years</td>
                                        <td className="p-3 border">Kicks ball; jumps with both feet</td>
                                        <td className="p-3 border">Builds tower of 6 blocks; turns single pages</td>
                                        <td className="p-3 border">50+ words; 2-word phrases</td>
                                        <td className="p-3 border">Parallel play</td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-3 border font-semibold">3 Years</td>
                                        <td className="p-3 border">Pedals tricycle; balances on one foot</td>
                                        <td className="p-3 border">Copies a circle; undresses self</td>
                                        <td className="p-3 border">3-word sentences; 75% intelligible</td>
                                        <td className="p-3 border">Cooperative play; shares/takes turns</td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-3 border font-semibold">4 Years</td>
                                        <td className="p-3 border">Hops on one foot; catches bounced ball</td>
                                        <td className="p-3 border">Copies a cross (+); uses scissors</td>
                                        <td className="p-3 border">Tells stories; 100% intelligible</td>
                                        <td className="p-3 border">Prefers playing with others; role-play</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <div className="mt-4 rounded-xl bg-blue-50 border border-blue-100 p-4">
                            <p className="font-medium text-blue-700">
                                Note:
                            </p>
                            <p className="text-gray-600 mt-1">
                                Minor variation in development is normal. Persistent delays across multiple domains
                                should be evaluated by a pediatrician.
                            </p>
                        </div>

                    </div>
                </AccordionItem>
                <AccordionItem title="IAP Immunization Schedule (Birth to 16 Years)" icon={Syringe}>
                    <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">

                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200 rounded-2xl overflow-hidden">

                                <thead className="bg-gray-100">
                                    <tr className="text-left text-gray-800">
                                        <th className="p-4 border font-semibold">Age</th>
                                        <th className="p-4 border font-semibold">Recommended Vaccines</th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white">

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 border font-semibold">Birth</td>
                                        <td className="p-4 border">BCG, Hepatitis B (1st dose), OPV (0 dose)</td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 border font-semibold">6 Weeks</td>
                                        <td className="p-4 border">
                                            Hexavalent (DTwP/DTaP, IPV, Hib, Hep B), Rotavirus, PCV
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 border font-semibold">10 Weeks</td>
                                        <td className="p-4 border">
                                            Pentavalent (DTwP/DTaP, IPV, Hib), Rotavirus, PCV
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 border font-semibold">14 Weeks</td>
                                        <td className="p-4 border">
                                            Hexavalent (DTwP/DTaP, IPV, Hib, Hep B), Rotavirus, PCV
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 border font-semibold">6 Months</td>
                                        <td className="p-4 border">
                                            Influenza (1st dose), OPV-1
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 border font-semibold">7 Months</td>
                                        <td className="p-4 border">
                                            Influenza (2nd dose)
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 border font-semibold">6–9 Months</td>
                                        <td className="p-4 border">
                                            Typhoid Conjugate Vaccine (TCV)
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 border font-semibold">9 Months</td>
                                        <td className="p-4 border">
                                            MMR-1 (Measles, Mumps, Rubella)
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 border font-semibold">12 Months</td>
                                        <td className="p-4 border">
                                            Hepatitis A (1st dose)
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 border font-semibold">15 Months</td>
                                        <td className="p-4 border">
                                            MMR-2, Varicella-1 (Chickenpox), PCV Booster
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 border font-semibold">16–18 Months</td>
                                        <td className="p-4 border">
                                            DTwP/DTaP Booster-1, IPV Booster, Hib Booster
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 border font-semibold">18–19 Months</td>
                                        <td className="p-4 border">
                                            Hepatitis A (2nd dose), Varicella-2
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 border font-semibold">4–6 Years</td>
                                        <td className="p-4 border">
                                            DTwP/DTaP Booster-2, IPV Booster, MMR-3, Varicella-2 (if missed)
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 border font-semibold">9–14 Years</td>
                                        <td className="p-4 border">
                                            HPV (Cervical Cancer Vaccine – 2 doses for girls and boys)
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 border font-semibold">10–12 Years</td>
                                        <td className="p-4 border">
                                            Tdap (Tetanus, reduced Diphtheria, acellular Pertussis)
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 border font-semibold">16 Years</td>
                                        <td className="p-4 border">
                                            Td (Tetanus & Diphtheria) Booster
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <div className="mt-4 rounded-xl bg-blue-50 border border-blue-100 p-4">
                            <p className="font-medium text-blue-700">
                                Important Note
                            </p>
                            <p className="text-gray-600 mt-1">
                                Vaccination schedules may vary slightly based on individual health conditions
                                and pediatrician recommendations. Always consult your pediatrician before vaccination.
                            </p>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                                Key Abbreviations for Your Reference
                            </h3>

                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-gray-200 rounded-2xl overflow-hidden text-sm md:text-base">

                                    <thead className="bg-gray-100">
                                        <tr className="text-left text-gray-800">
                                            <th className="p-4 border font-semibold w-1/4">Abbreviation</th>
                                            <th className="p-4 border font-semibold">Description</th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-white text-gray-700">

                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 border font-semibold">BCG</td>
                                            <td className="p-4 border">Against Tuberculosis.</td>
                                        </tr>

                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 border font-semibold">DTwP / DTaP</td>
                                            <td className="p-4 border">
                                                Against Diphtheria, Tetanus, and Pertussis (Whooping Cough).
                                                <span className="block text-sm text-gray-500 mt-1">
                                                    Note: DTaP is the "painless" version.
                                                </span>
                                            </td>
                                        </tr>

                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 border font-semibold">IPV / OPV</td>
                                            <td className="p-4 border">
                                                Injectable and Oral Polio Vaccines.
                                            </td>
                                        </tr>

                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 border font-semibold">PCV</td>
                                            <td className="p-4 border">
                                                Pneumococcal Conjugate Vaccine (against Pneumonia).
                                            </td>
                                        </tr>

                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 border font-semibold">Hib</td>
                                            <td className="p-4 border">
                                                Haemophilus Influenzae Type B (against Meningitis).
                                            </td>
                                        </tr>

                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 border font-semibold">MMR</td>
                                            <td className="p-4 border">
                                                Measles, Mumps, and Rubella.
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </AccordionItem>


            </div>
        </div>
    );
};

export default EducationAccordion;
