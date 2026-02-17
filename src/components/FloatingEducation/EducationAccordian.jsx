import { useState } from "react";
import {
    ChevronDown,
    Video,
    Presentation,
    Download,
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

                    {/* <div className="mt-4">
                        <a
                            href="https://docs.google.com/presentation/d/19hLAJPx-tIKhj5geCI_hJdenh6hzBejO/export/pptx"
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

            </div>
        </div>
    );
};

export default EducationAccordion;
