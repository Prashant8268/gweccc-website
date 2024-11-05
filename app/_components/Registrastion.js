"use client";
import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    organization: "",
    delegates: 1,
  });
  const [submitted, setSubmitted] = useState(false); // State to manage submission status
  const [visible, setVisible] = useState(false); // State for visibility of the notification

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can handle the form submission logic, such as sending data to an API
    setSubmitted(true); // Show notification after form submission
    setVisible(true); // Make notification visible

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      contact: "",
      organization: "",
      delegates: 1,
    });

    setTimeout(() => {
      setVisible(false); // Start fade-out effect after 3 seconds
      setTimeout(() => {
        setSubmitted(false); // Hide notification after fade-out
      }, 500); // Match this with your fade-out duration
    }, 3000); // Show notification for 3 seconds
  };

  return (
    <section className="max-w-3xl mx-auto py-20 px-6" id="register">
      <h2 className="text-4xl font-heading font-semibold text-center mb-12 text-emerald-500">
        Register for GWECCC
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white shadow-xl rounded-lg p-10"
      >
        {[
          { label: "Full Name", name: "name", type: "text" },
          { label: "Email Address", name: "email", type: "email" },
          { label: "Contact Number", name: "contact", type: "tel" },
          { label: "Organization", name: "organization", type: "text" },
          {
            label: "Number of Delegates",
            name: "delegates",
            type: "number",
            min: 1,
          },
        ].map((field, idx) => (
          <div key={idx}>
            <label className="block text-lg font-medium text-gray-800 mb-1">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              required
              value={formData[field.name]} // Bind input value to formData
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-emerald-500 transition duration-200"
              min={field.min} // Add min attribute for delegates
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition duration-200"
        >
          Register
        </button>
      </form>

      {/* Notification with slide down and fade effect */}
      {submitted && (
        <div
          className={`mt-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg shadow transition-all duration-500 transform ${
            visible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          Your response has been recorded!
        </div>
      )}
    </section>
  );
}
