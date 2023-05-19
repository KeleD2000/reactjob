import React, { useState } from "react";
import "./EForm.css";

const EForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    jobTitle: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleJobTitleSelect = (selectedJobTitle) => {
    setFormData((prevData) => ({
      ...prevData,
      jobTitle: selectedJobTitle,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
  };

  const jobTitleOptions = ["Accountant", "Software Developer", "Software Tester", "Manager"];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectJobTitle = (jobTitle) => {
    handleJobTitleSelect(jobTitle);
    setIsDropdownOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto relative">
      <div className="input-container">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-1 mb-1"
            required
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-1 mb-1"
            required
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-1 mb-1"
            required
          />
        </label>
      </div>
      <div className={`input-container ${isDropdownOpen ? 'mb-10' : ''}`}>
        <label>
          Job title:
          <div className="relative inline-block">
            <button
              onClick={toggleDropdown}
              className={`text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center ${isDropdownOpen ? 'rounded-b-none' : ''}`}
            >
              {formData.jobTitle ? formData.jobTitle : "Select Job Title"}
              <svg
                className={`w-4 h-4 ml-1 transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9-7"></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-36 bg-white border border-gray-300 divide-y divide-gray-100 rounded-lg shadow">
                {jobTitleOptions.map((jobTitle) => (
                  <button
                    key={jobTitle}
                    onClick={() => selectJobTitle(jobTitle)}
                    className="block w-full px-3 py-1 hover:bg-gray-100 text-gray-700 text-left"
                  >
                    {jobTitle}
                  </button>
                ))}
              </div>
            )}
          </div>
        </label>
      </div>
      <div className="input-container">
        <label>
          CV_field:
          <input
            type="file"
            name="CV_field"
            value={formData.CV_field}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-1 mb-1"
            required
          />
        </label>
      </div>
      <div className="flex justify-center">
        <button type="submit" className={`submit-button bg-blue-500 text-white px-2 py-1 rounded ${isDropdownOpen ? 'hidden' : 'block'}`}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default EForm;
