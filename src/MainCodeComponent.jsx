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
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handelAdd = ({ ticket }) => {
    console.log(ticket);
    setInProgress((prev) => prev + 1);
    setTicket((prev) => [...prev, ticket]);
    toast.success("Ticket added to in-progress", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleComplete = (ticketId) => {
    setTicket((prev) => prev.filter((ticket) => ticket.id !== ticketId.id));
    setInProgress((prev) => prev - 1);
    setResolved((prev) => prev + 1);
    setResolvedTicket((prev) => [...prev, ticketId]);
    toast.success("Ticket marked as resolved", {
      position: "top-right",
      autoClose: 3000,
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
    <div className=" bg-[url('/vector2.png')] bg-no-repeat bg-cover">
      <Bannar inProgress={inProgress} resolved={resolved} />
      <div className="w-11/12 mx-auto mt-12 flex gap-6 ">
        <div className="flex-2  rounded-2xl p-6">
          <h1 className="font-bold text-2xl text-gray-800 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-purple-500 rounded-full"></span>
            Customer Tickets
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => handelAdd({ ticket })}
                className="cursor-pointer group"
              >
                <div className="bg-gray-50 border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-lg hover:border-purple-200 hover:bg-white transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-gray-800 flex-1 pr-4 group-hover:text-purple-600 transition-colors">
                      {ticket.title}
                    </h4>
                    <span
                      className={`${statusColors[ticket.status]} px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1`}
                    >
                      <span className="h-2 w-2 rounded-full bg-current"></span>{" "}
                      {ticket.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                    {ticket.description}
                  </p>
                  <div className="flex justify-between items-center text-xs font-medium">
                    <div className="flex gap-3">
                      <span className="text-gray-400 bg-gray-100 px-2 py-1 rounded">
                        #{ticket.id}
                      </span>
                      <span
                        className={`${priorityColors[ticket.priority]} px-2 py-1 rounded bg-opacity-10`}
                      >
                        {ticket.priority}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
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
                        {ticket.customer}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
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
                        {ticket.createdAt}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div className="rounded-2xl shadow-sm p-6">
            <h1 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-5 bg-amber-500 rounded-full"></span>
              Task Status
              {inProgress > 0 && (
                <span className="ml-auto bg-amber-100 text-amber-600 text-sm px-3 py-1 rounded-full">
                  {inProgress} active
                </span>
              )}
            </h1>
            {inProgress === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-400"
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
                <p className="text-gray-400 text-sm">
                  No in-progress tickets yet.
                </p>
                <p className="text-gray-300 text-xs mt-1">
                  Click a ticket to start working
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {ticket.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-4 hover:shadow-md transition-shadow"
                  >
                    <h2 className="font-semibold text-gray-800 mb-3">
                      {ticket.title}
                    </h2>
                    <button
                      className="w-full btn bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-none rounded-lg"
                      onClick={() => handleComplete(ticket)}
                    >
                      ✓ Mark Complete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className=" rounded-2xl shadow-sm p-6">
            <h1 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-5 bg-emerald-500 rounded-full"></span>
              Resolved Tickets
              {resolved > 0 && (
                <span className="ml-auto bg-emerald-100 text-emerald-600 text-sm px-3 py-1 rounded-full">
                  {resolved} done
                </span>
              )}
            </h1>
            {resolved === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-400"
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
                <p className="text-gray-400 text-sm">
                  No resolved tickets yet.
                </p>
                <p className="text-gray-300 text-xs mt-1">
                  Complete tasks to see them here
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {resolvedTicket.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl p-4 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h2 className="font-semibold text-gray-700">
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
