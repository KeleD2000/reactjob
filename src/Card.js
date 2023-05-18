import React from "react";
import "./Card.css";
import Form from "./Form";
import EForm from "./EForm";



const Card = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl ">
        <div className="flex">
          <div className="max-w-sm rounded overflow-hidden shadow-lg mx-8">
            <div className="px-6">
              <div className="font-bold text-xl mb-2 cardtitle">Company data</div>
              <Form />
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg mx-8">
            <div className="px-6">
              <div className="font-bold text-xl mb-2 cardtitle">Employee data</div>
              <EForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
