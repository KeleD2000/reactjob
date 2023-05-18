import React from "react";
import "./Card.css";
import Form from "./Form";

const Card = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl ">
        <div className="flex">
          <div className="max-w-sm rounded overflow-hidden shadow-lg mx-8">
            <div className="px-6">
              <div className="font-bold text-xl mb-2">Company data</div>
              <Form />
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg mx-8">
            <div className="px-6">
              <div className="font-bold text-xl mb-2">Employee data</div>
              <p className="text-gray-700 text-base">segg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
