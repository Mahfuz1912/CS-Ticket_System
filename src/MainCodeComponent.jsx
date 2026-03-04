import React, { useEffect, useState } from "react";
import Bannar from "./component/Bannar";
import { toast } from "react-toastify";

const MainCodeComponent = () => {
  const [data, setData] = useState([]); //All tickets
  const [inProgress, setInProgress] = useState(0); //In Progress Tickets
  const [ticket, setTicket] = useState([]); //In Progress Tickets with details
  const [resolved, setResolved] = useState(0); //Resolved Tickets
  const [resolvedTicket, setResolvedTicket] = useState([]); //Resolved Tickets with details

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handelAdd = ({ ticket }) => {
    setInProgress((prev) => prev + 1);
    setTicket((prev) => [...prev, ticket]);
    toast.success("Ticket Added to In-Progress", {
      position: "top-center",
      autoClose: 1500,
    });
  };

  const handleComplete = (comticket) => {
    setTicket((prev) => prev.filter((ticket) => ticket.id !== comticket.id));
    setInProgress((prev) => prev - 1);
    setResolved((prev) => prev + 1);
    setResolvedTicket((prev) => [...prev, comticket]);
    toast.success("Ticket Marked As Resolved", {
      position: "top-center",
      autoClose: 1500,
    });
  };

  const statusColors = {
    open: "bg-green-100 text-green-600",
    "in-progress": "bg-amber-100 text-amber-600",
    resolved: "bg-blue-100 text-blue-600",
  };

  const priorityColors = {
    high: "text-red-500 bg-red-50",
    critical: "text-rose-600 bg-rose-50",
    medium: "text-amber-500 bg-amber-50",
    low: "text-emerald-500 bg-emerald-50",
  };

  return (
    <div className="min-h-screen bg-[url('/vector2.png')] bg-no-repeat bg-cover bg-fixed">
      <Bannar inProgress={inProgress} resolved={resolved} />
      <div className="w-11/12 mx-auto py-8 md:py-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl p-4 md:p-6">
          <h1 className="font-bold text-xl md:text-2xl text-gray-800 mb-4 md:mb-6 flex items-center gap-2">
            <span className="w-2 h-5 md:h-6 bg-purple-500 rounded-full"></span>
            Customer Tickets
            <span className="ml-auto text-sm font-normal text-gray-400">
              {data.length} total
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {data.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => handelAdd({ ticket })}
                className="cursor-pointer group"
              >
                <div className="bg-gray-50/80 backdrop-blur-sm border border-gray-100 p-4 md:p-5 rounded-xl shadow-sm hover:shadow-lg hover:border-purple-200 hover:bg-white transition-all duration-300">
                  <div className="flex justify-between items-start mb-2 md:mb-3">
                    <h4 className="font-bold text-sm md:text-base text-gray-800 flex-1 pr-2 group-hover:text-purple-600 transition-colors line-clamp-1">
                      {ticket.title}
                    </h4>
                    <span
                      className={`${statusColors[ticket.status]} px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-bold flex items-center gap-1 whitespace-nowrap`}
                    >
                      <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-current"></span>
                      <span className="hidden sm:inline">{ticket.status}</span>
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4 line-clamp-2 leading-relaxed">
                    {ticket.description}
                  </p>
                  <div className="flex flex-wrap justify-between items-center gap-2 text-[10px] md:text-xs font-medium">
                    <div className="flex gap-2">
                      <span className="text-gray-400 bg-gray-100 px-2 py-1 rounded">
                        #{ticket.id}
                      </span>
                      <span
                        className={`${priorityColors[ticket.priority]} px-2 py-1 rounded`}
                      >
                        {ticket.priority}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-3 h-3 md:w-4 md:h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span>{ticket.customer}</span>
                      </span>
                      <span className="text-gray-300">|</span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-3 h-3 md:w-4 md:h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>
                          {ticket.createdAt}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1 space-y-4 md:space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-4 md:p-6">
            <h1 className="font-bold text-lg md:text-xl text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
              <span className="w-2 h-4 md:h-5 bg-amber-500 rounded-full"></span>
              Task Status
            </h1>
            {inProgress === 0 ? (
              <div className="text-center py-6 md:py-8">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <p className="text-gray-400 text-xs md:text-sm">
                  No in-progress tickets yet.
                </p>
                <p className="text-gray-300 text-[10px] md:text-xs mt-1">
                  Click a ticket to start working
                </p>
              </div>
            ) : (
              <div className="space-y-2 md:space-y-3 max-h-75 md:max-h-100 overflow-y-auto pr-1">
                {ticket.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="bg-linear-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-3 md:p-4 hover:shadow-md hover:border-amber-200 transition-all duration-200"
                  >
                    <h2 className="font-semibold text-sm md:text-base text-gray-800 mb-2 md:mb-3 line-clamp-2">
                      {ticket.title}
                    </h2>
                    <button
                      className="w-full btn btn-sm md:btn-md bg-linear-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-none rounded-lg text-xs md:text-sm shadow-sm hover:shadow-md transition-all"
                      onClick={() => handleComplete(ticket)}
                    >
                      ✓ Complete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Resolved Tickets Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-4 md:p-6">
            <h1 className="font-bold text-lg md:text-xl text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
              <span className="w-2 h-4 md:h-5 bg-emerald-500 rounded-full"></span>
              Resolved
            </h1>
            {resolved === 0 ? (
              <div className="text-center py-6 md:py-8">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-400 text-xs md:text-sm">
                  No resolved tickets yet.
                </p>
                <p className="text-gray-300 text-[10px] md:text-xs mt-1">
                  Complete tasks to see them here
                </p>
              </div>
            ) : (
              <div className="space-y-2 md:space-y-3 max-h-62.5 md:max-h-75 overflow-y-auto pr-1">
                {resolvedTicket.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="bg-linear-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl p-3 md:p-4 flex items-center gap-2 md:gap-3 hover:shadow-md hover:border-emerald-200 transition-all duration-200"
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-linear-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h2 className="font-semibold text-xs md:text-sm text-gray-700 line-clamp-1 flex-1">
                      {ticket.title}
                    </h2>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCodeComponent;
