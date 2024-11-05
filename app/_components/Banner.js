"use client";
import { useState, useEffect, useRef } from "react";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  // Intersection Observer to detect when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (bannerRef.current) observer.observe(bannerRef.current);

    return () => {
      if (bannerRef.current) observer.unobserve(bannerRef.current);
    };
  }, []);

  return (
    <section
      ref={bannerRef}
      className={`relative h-[80vh] bg-blue flex items-center justify-center text-center overflow-hidden transition-transform duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {/* Background with gradient and image */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-300 to-green-200"></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>

      {/* Text Content */}
      <div className="relative z-10 p-6 text-white transition duration-700 transform translate-y-10 opacity-0 animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-bold font-heading animate-heading">
          Global Water, Energy, and Climate Change Congress
        </h1>
        <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto">
          Addressing global sustainability through innovative solutions in
          water, energy, and climate change.
        </p>
        <p className="mt-4 text-lg opacity-80">
          March 10-12, 2025 | International Convention Center
        </p>

        {/* Call to Action */}
        <div className="mt-8">
          <a href="#register" className="bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Register Now
          </a>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s forwards;
        }

        @keyframes headingMove {
          0% {
            transform: translateX(-20%);
          }
          50% {
            transform: translateX(20%);
          }
          100% {
            transform: translateX(-20%);
          }
        }

        .animate-heading {
          animation: headingMove 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
