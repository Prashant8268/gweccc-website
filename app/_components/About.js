"use client";
import { useState, useEffect, useRef } from "react";
import { FaWater, FaBolt, FaLeaf } from "react-icons/fa";

export default function About() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Toggle answer visibility
  const toggleQuestion = (questionIndex) => {
    setOpenQuestion(openQuestion === questionIndex ? null : questionIndex);
  };

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth", 
            block: "start", 
          });
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`max-w-5xl mx-auto py-20 px-6 transition-transform duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      id="about"
    >
      <h2 className="text-4xl font-heading font-semibold text-center mb-12 text-emerald-500">
        About GWECCC
      </h2>
      <div className="space-y-8 text-lg text-gray-800 leading-relaxed">
        {/* FAQ Item 1 */}
        <div className="border-b border-gray-300 pb-4">
          <button
            onClick={() => toggleQuestion(1)}
            className="flex items-center text-left w-full font-semibold text-emerald-700 hover:text-emerald-600"
          >
            <FaWater className="inline text-secondary mr-2 text-emerald-500" />
            What is the Global Water, Energy and Climate Change Congress?
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              openQuestion === 1 ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="mt-2 text-gray-600 pl-6">
              Global Water, Energy and Climate Change Congress is a water &
              energy centric event addressing the environmental impact of
              resource consumption and climate change.
            </p>
          </div>
        </div>

        {/* FAQ Item 2 */}
        <div className="border-b border-gray-300 pb-4">
          <button
            onClick={() => toggleQuestion(2)}
            className="flex items-center text-left w-full font-semibold text-emerald-700 hover:text-emerald-600"
          >
            <FaBolt className="inline text-secondary mr-2 text-emerald-500" />
            What is the goal of this congress?
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              openQuestion === 2 ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="mt-2 text-gray-600 pl-6">
              It serves as a platform to promote sustainable development,
              regional and international strategies, and solutions for
              integrated management of water & energy.
            </p>
          </div>
        </div>

        {/* FAQ Item 3 */}
        <div className="border-b border-gray-300 pb-4">
          <button
            onClick={() => toggleQuestion(3)}
            className="flex items-center text-left w-full font-semibold text-emerald-700 hover:text-emerald-600"
          >
            <FaLeaf className="inline text-secondary mr-2 text-emerald-500" />
            Who participates in GWECCC?
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              openQuestion === 3 ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="mt-2 text-gray-600 pl-6">
              GWECCC brings together global leaders, experts, and policymakers
              to explore, innovate, and sustain natural resources, addressing
              scarcity and preservation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
