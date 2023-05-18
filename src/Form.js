import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    numberofe: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const { email, value2 } = e.target;
    const { numberofe, value3 } = e.target;
    const { description, value4 } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      [email]: value2,
      [numberofe]: value3,
      [description]: value4,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="input-container">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2 mb-2"
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
            className="block w-full border border-gray-300 rounded p-2 mb-2"
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Numbers of Employees:
          <input
            type="number"
            name="numberofe"
            value={formData.numberofe}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2 mb-2"
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2 mb-2"
          />
        </label>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="submit-button bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
  
};

export default Form;
