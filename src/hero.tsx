import React from "react";

function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-blue-800">
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="relative z-10 text-white">
            <h1 className="text-4xl font-bold mb-4">
              Scan your receipt with ease
            </h1>
            <p className="text-lg mb-6">
              Get an itemized list of your purchases in seconds with our receipt
              scanner.
            </p>
            <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200">
              Get started
            </button>
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0">
            <img
              src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
              alt="Receipt"
              className="h-full w-full object-cover object-center absolute inset-0 z-0"
            />
            <div className="bg-gradient-to-t from-blue-800 to-transparent absolute bottom-0 left-0 right-0 h-32 z-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

