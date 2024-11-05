import {
  FaCalendarDay,
  FaChalkboardTeacher,
  FaMicrophone,
} from "react-icons/fa";

export default function Schedule() {
  return (
    <section className="bg-gray-50 py-20" id="schedule">
      <div className="max-w-6xl mx-auto px-6 ">
        <h2 className="text-4xl font-heading font-semibold text-center mb-12 text-emerald-500">
          Event Schedule
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center transition-transform transform hover:scale-105 group">
            <div className="absolute inset-0 bg-emerald-500 transform -translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-emerald-500 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 shadow-md"></div>
            <FaCalendarDay className="text-emerald-500 text-4xl mx-auto mb-4 transition-colors duration-300 group-hover:text-white relative z-10" />
            <h3 className="text-xl font-semibold uppercase tracking-wider transition-colors duration-300 group-hover:text-white relative z-10">
              Day 1: Water Sustainability
            </h3>
            <p className="text-gray-800 transition-colors duration-300 group-hover:text-white relative z-10">
              Sessions on water resource management, industrial water usage, and
              sustainable practices.
            </p>
          </div>

          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center transition-transform transform hover:scale-105 group">
            <div className="absolute inset-0 bg-emerald-500 transform -translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-emerald-500 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 shadow-md"></div>
            <FaChalkboardTeacher className="text-emerald-500 text-4xl mx-auto mb-4 transition-colors duration-300 group-hover:text-white relative z-10" />
            <h3 className="text-xl font-semibold uppercase tracking-wider transition-colors duration-300 group-hover:text-white relative z-10">
              Day 2: Energy Efficiency
            </h3>
            <p className="text-gray-800 transition-colors duration-300 group-hover:text-white relative z-10">
              Discussions on renewable energy solutions, efficient technology,
              and industry practices.
            </p>
          </div>

          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center transition-transform transform hover:scale-105 group">
            <div className="absolute inset-0 bg-emerald-500 transform -translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-emerald-500 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 shadow-md"></div>
            <FaMicrophone className="text-emerald-500 text-4xl mx-auto mb-4 transition-colors duration-300 group-hover:text-white relative z-10" />
            <h3 className="text-xl font-semibold uppercase tracking-wider transition-colors duration-300 group-hover:text-white relative z-10">
              Day 3: Climate Action
            </h3>
            <p className="text-gray-800 transition-colors duration-300 group-hover:text-white relative z-10">
              Keynotes and panels on climate change policy, mitigation
              strategies, and innovation in climate tech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
