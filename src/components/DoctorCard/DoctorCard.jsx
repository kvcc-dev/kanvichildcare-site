import RevealOnScroll from "../RevealOnScroll/RevealOnScroll";

const DoctorCard = ({
  name,
  speciality,
  registration,
  qualifications,
  experience,
  interests,
  image,
}) => {
  return (
    <RevealOnScroll delay={100}>
      <div
        className="
          group
          flex flex-col md:flex-row items-center gap-8
          bg-white/80 backdrop-blur-md
          rounded-3xl p-8
          shadow-sm hover:shadow-lg
          transition-all duration-300
          border border-white/60
        "
      >
        {/* Doctor Image */}
        <div className="flex-shrink-0 relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-200 to-blue-200 blur-xl opacity-40" />

          <img
            src={image}
            alt={name}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/assets/doctors/placeholder-dr.png";
            }}
            className="
              relative
              w-40 h-40 md:w-48 md:h-48
              rounded-full object-cover
              border-4 border-white
              shadow-md
              group-hover:scale-105
              transition-transform duration-300
            "
          />
        </div>

        {/* Doctor Details */}
        <div className="text-center md:text-left">

          <h3 className="text-xl md:text-2xl font-semibold text-blue-700">
            {name}
          </h3>

          <p className="text-sm md:text-base text-teal-600 font-medium mt-1">
            {speciality}
          </p>

          <div className="mt-3 space-y-1">
            {registration && (
              <p className="text-xs md:text-sm text-gray-500">
                Registration No:
                <span className="font-medium text-gray-700 ml-1">
                  {registration}
                </span>
              </p>
            )}

            <p className="text-sm text-gray-700 font-medium">
              {qualifications}
            </p>
          </div>

          <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
            {experience}
          </p>

          {interests?.length > 0 && (
            <div className="mt-5">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Special Interests
              </p>

              <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
                {interests.map((interest, idx) => (
                  <li
                    key={idx}
                    className="
                      text-xs md:text-sm
                      px-3 py-1 rounded-full
                      bg-teal-50 text-teal-700
                      border border-teal-100
                    "
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </RevealOnScroll>
  );
};

export default DoctorCard;
