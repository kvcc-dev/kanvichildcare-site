import { UserRound } from "lucide-react";

import { useState, useMemo } from "react";

import Modal from "../Modal/Modal";
import doctors from "../../data/doctors";

const AppointmentModal = ({ isOpen, onClose }) => {
  const [selectedSpeciality, setSelectedSpeciality] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  /* ------------------ SPECIALITIES ------------------ */
  const specialities = useMemo(() => {
    return ["All", ...new Set(doctors.map((doc) => doc.speciality))];
  }, []);

  /* ------------------ FILTERED DOCTORS ------------------ */
  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      const matchesSpeciality =
        selectedSpeciality === "All" ||
        doc.speciality === selectedSpeciality;

      const matchesSearch =
        doc.name.toLowerCase().includes(searchText.toLowerCase()) ||
        doc.speciality.toLowerCase().includes(searchText.toLowerCase());

      return matchesSpeciality && matchesSearch;
    });
  }, [selectedSpeciality, searchText]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {!selectedDoctor ? (
        <>
          {/* ------------------ HEADER ------------------ */}
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Book an Appointment
          </h3>

          {/* ------------------ SEARCH ------------------ */}
          <input
            type="text"
            placeholder="Search doctor by name or speciality"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full mb-4 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* ------------------ SPECIALITY FILTER ------------------ */}
          <select
            value={selectedSpeciality}
            onChange={(e) => setSelectedSpeciality(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {specialities.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>

          {/* ------------------ DOCTORS GRID ------------------ */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[55vh] overflow-y-auto pr-1">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="border rounded-xl p-3 text-center hover:shadow-md transition bg-white"
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/assets/doctors/placeholder-dr.png";
                    }}
                    className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                  />



                  <p className="font-medium text-gray-800 text-sm">
                    {doctor.name}
                  </p>
                  <p className="text-xs text-gray-600 mb-3">
                    {doctor.speciality}
                  </p>

                  <button
                    onClick={() => setSelectedDoctor(doctor)}
                    className="text-xs bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Book
                  </button>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-sm text-gray-500">
                No doctors found
              </p>
            )}
          </div>
        </>
      ) : (
        /* ------------------ CONTACT INFO VIEW ------------------ */
        <div className="text-center">

          <img
            src={selectedDoctor.image}
            alt={selectedDoctor.name}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/assets/doctors/placeholder-dr.png";
            }}
            className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
          />


          <h4 className="text-lg font-semibold text-blue-700">
            {selectedDoctor.name}
          </h4>

          <p className="text-sm text-gray-600 mb-4">
            {selectedDoctor.speciality}
          </p>

          <p className="text-sm text-gray-700 mb-6">
            Please contact us at{" "}
            <span className="font-medium">+91 9529952129</span>
            <br />
            and mention{" "}
            <span className="font-medium">
              {selectedDoctor.name}
            </span>{" "}
            along with your details.
          </p>

          {/* Call Button */}
          <a
            href="tel:+919529952129"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-green-700 transition"
          >
            📞 Call Now
          </a>

          {/* Back */}
          <button
            onClick={() => setSelectedDoctor(null)}
            className="block mx-auto mt-4 text-sm text-blue-600 hover:underline"
          >
            ← Back to doctors
          </button>
        </div>
      )}
    </Modal>
  );
};

export default AppointmentModal;
