import React, { useEffect } from "react";
import "./WaveAnimation.css";

const WaveAnimation = () => {
  useEffect(() => {
    const headings = document.querySelectorAll(".animate-wave");
    headings.forEach((heading) => {
      heading.classList.add("animate-pulse", "animation-delay-500");
    });
  }, []);

  return (
    <>
      <div className="flex items-center justify-center h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-l-full rounded-r-full w-3/4 mx-auto">
        <h1 className="text-4xl font-bold text-white animate-wave custom-3d-text">
          Welcome to the
        </h1>
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-white animate-wave mb-2 custom-3d-text">
          resources surveyor
        </h1>
      </div>
    </>
  );
};

export default WaveAnimation;
