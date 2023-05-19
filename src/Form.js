import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    numberofe: "",
    description: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    numberofe: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "" ? "This field is required." : "",
      email: name === "email" && !validateEmail(value) ? "Invalid email." : "",
      numberofe:
        name === "numberofe" && !validateNumberofe(value)
          ? "The number of employees must be between 1 and 100."
          : "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, numberofe} = formData;

    const updatedErrors = {
      name: name.trim() === "" ? "This field is must be fill in ." : "",
      email: email.trim() === "" ? "This field is must be fill in." : !validateEmail(email) ? "Invalid email." : "",
      numberofe:
        numberofe.trim() === "" ? "This field is must be fill in." : !validateNumberofe(numberofe)
          ? "The number of employees must be between 1 and 100."
          : "",
    };

    setFormErrors(updatedErrors);

    if (Object.values(updatedErrors).every((error) => error === "")) {
      const jsonData = JSON.stringify(formData);
      console.log(jsonData);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateNumberofe = (numberofe) => {
    const numberofeValue = parseInt(numberofe);
    return (
      !isNaN(numberofeValue) && numberofeValue >= 1 && numberofeValue <= 100
    );
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="input-container">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`block w-full border ${
              formErrors.name ? "border-red-500" : "border-gray-300"
            } rounded p-1 mb-1`}
          />
        </label>
        {formErrors.name && (
          <p className="error-message">{formErrors.name}</p>
        )}
      </div>
      <div className="input-container">
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`block w-full border ${
              formErrors.email ? "border-red-500" : "border-gray-300"
            } rounded p-1 mb-1`}
          />
        </label>
        {formErrors.email && (
          <p className="error-message">{formErrors.email}</p>
        )}
      </div>
      <div className="input-container">
        <label>
          Numbers of Employees:
          <input
            type="number"
            name="numberofe"
            value={formData.numberofe}
            onChange={handleChange}
            className={`block w-full border ${
              formErrors.numberofe ? "border-red-500" : "border-gray-300"
            } rounded p-1 mb-1`}
          />
        </label>
        {formErrors.numberofe && (
          <p className="error-message">{formErrors.numberofe}</p>
        )}
      </div>
      <div className="input-container">
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-1 mb-1"
          />
        </label>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="submit-button bg-blue-500 text-white px-2 py-1 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
