import { useState } from "react";

const LazyMap = () => {
  const [loadMap, setLoadMap] = useState(false);

  return (
    <div className="w-full h-48 rounded-md overflow-hidden border bg-gray-100 relative">
      {!loadMap ? (
        <button
          onClick={() => setLoadMap(true)}
          className="absolute inset-0 flex flex-col items-center justify-center
          text-sm text-blue-700 font-medium bg-white/90 hover:bg-white transition"
        >
          <span className="text-2xl mb-1">📍</span>
          Tap to load map
        </button>
      ) : (
        <iframe
          title="Kanvi Child Care Hospital Location"
          src="https://www.google.com/maps/embed?pb=!4v1771147592650!6m8!1m7!1sYU9jGZh-c-z9pzgHbs_N2g!2m2!1d19.84554521567468!2d75.92011920926485!3f237.63!4f-10.739999999999995!5f0.4000000000000002"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  );
};

export default LazyMap;
