const PreventiveCareCard = ({ icon: Icon, title, description }) => {
  return (
    <div
      className="
        bg-white rounded-xl p-6
shadow-[0_4px_20px_rgba(0,0,0,0.06)]
hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
hover:-translate-y-1
transition-all duration-300
text-center

      "
    >
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-blue-50 text-blue-600">
          {Icon && <Icon size={28} strokeWidth={1.8} />}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default PreventiveCareCard;
