import React, { useState } from 'react';
import arrowRight from '../assets/images/material-symbols_drag-click-rounded.png';
import { FaCheckCircle } from 'react-icons/fa';
import { Zap } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    acceptedTerms: false,
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Booking Form */}
      <div className="max-w-7xl mx-auto px-2 md:px-2 py-12 lg:py-20 text-[#000]">
        <h1 className="text-4xl font-bold text-center">Get In Touch With Us</h1>
        <p className="text-xl text-center text-gray-600 mt-1 mb-8">
          For More Information About Our <span className="font-medium">Services.</span>
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 flex items-center gap-2 ml-0 sm:ml-0 md:ml-0 lg:-ml-10">
  Booking Your Service Today!
  <Zap className="w-8 sm:w-10 h-10 sm:h-12 text-blue-400" />
</h2>

<p className="text-base sm:text-lg text-gray-600 mb-10 max-w-2xl ml-0 sm:ml-0 md:ml-0 lg:-ml-10">
  Whether you’re planning a new project or need emergency support,
  we’re available to provide fast and reliable assistance.
</p>



        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-16 text-left"
        >
          {/* Fields */}
          {[
            { label: 'First name', name: 'firstName', placeholder: 'e.g xxxx' },
            { label: 'Last name', name: 'lastName', placeholder: 'e.g.yyyy' },
            { label: 'Email', name: 'email', placeholder: 'e.g xxxx@gmail.com' },
            { label: 'Phone', name: 'phone', placeholder: 'e.g.12346678' },
            { label: 'Pick the date', name: 'date', placeholder: 'e.g. 05/9/25' },
            { label: 'Choose Your Time', name: 'time', placeholder: 'e.g. 10.00 AM' },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="block text-[#3C5A99] text-xl md:text-3xl font-semibold mb-2">
                {field.label}
              </label>
              <input
                type="text"
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full border border-[#3C5A99] rounded-md px-4 py-6 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          ))}

          {/* Checkbox */}
          <div className="flex items-start gap-3 mt-4 md:col-span-2">
            <input
              type="checkbox"
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              className="w-10 h-10 mt-0 accent-[#3C5A99]"
              required
            />
            <label className="text-sm md:text-base font-medium leading-snug mt-2">
              I have read and accepted terms and Privacy
            </label>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-6">
            <button
              type="submit"
              className="bg-[#3C5A99] text-white flex items-center justify-center gap-2 mx-auto px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition"
            >
              <img src={arrowRight} alt="arrow" className="w-5 h-5" />
              Submit
            </button>
          </div>
        </form>
      </div>

   
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl w-full max-w-xl text-center px-6 py-8 relative shadow-lg">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-4 text-black text-lg font-bold"
            >
              ×
            </button>

            <FaCheckCircle className="text-green-700 text-5xl mx-auto mb-4" />
            <p className="text-lg font-medium mb-6">
              "We've received your inquiry. Our team will contact you soon."
            </p>
            <button
              onClick={handleCloseModal}
              className="bg-[#3C5A99] text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-800 transition"
            >
              Go Back Home
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingForm;
