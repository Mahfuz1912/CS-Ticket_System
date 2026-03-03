import React from "react";

const Bannar = ({ inProgress, resolved }) => {
  return (
    <div className="w-11/12 mx-auto mt-12">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-12">
        <div className="h-48 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-500 flex flex-col items-center justify-center text-white shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent"></div>
          <img
            src="/vector1.png"
            alt=""
            className="absolute top-0 left-0 h-full"
          />
          <img
            src="/vector1.png"
            alt=""
            className="absolute bottom-0 right-0 h-full scale-x-[-1]"
          />
          <span className="text-xl font-medium mb-2">In-Progress</span>
          <span className="text-6xl font-bold">{inProgress}</span>
        </div>

        <div className="h-48 rounded-2xl bg-linear-to-br from-emerald-400 to-teal-500 flex flex-col items-center justify-center text-white shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent"></div>
          <img
            src="/vector1.png"
            alt=""
            className="absolute top-0 left-0 h-full"
          />
          <img
            src="/vector1.png"
            alt=""
            className="absolute bottom-0 right-0 h-full scale-x-[-1]"
          />
          <span className="text-xl font-medium mb-2">Resolved</span>
          <span className="text-6xl font-bold">{resolved}</span>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
