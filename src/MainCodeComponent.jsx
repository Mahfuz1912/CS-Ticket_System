import React, { useEffect, useState } from "react";
import Bannar from "./component/Bannar";

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
  };

  const handleComplete = (ticketId) => {
    setTicket((prev) => prev.filter(ticket => ticket.id !== ticketId.id));
    setInProgress((prev) => prev - 1);
    setResolved((prev) => prev + 1);
    setResolvedTicket((prev) => [...prev, ticketId]);
  };

  return (
    <>
      <Bannar inProgress={inProgress} resolved={resolved} />
      <div className="w-11/12 mx-auto mt-12 flex ">
        <div className="flex-2 border-2">
          <h1>Customer Tickets</h1>
          <div className="p-4">
            {data.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => handelAdd({ ticket })}
                className="border p-2 m-2"
              >
                <h2>{ticket.title}</h2>
                <p>{ticket.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 border-2">
          <div>
            Task Status
            {ticket.map((ticket) => (
              <div key={ticket.id} className=" p-2  shadow-2xl">
                <h2>{ticket.title}</h2>
                <button onClick={() => handleComplete(ticket)} className="bg-green-500 btn">Complete</button>
              </div>
            ))}
          </div>
          <div>Resolve Tickets</div>
          {resolvedTicket.map((ticket) => (
            <div key={ticket.id} className=" p-2  shadow-2xl">
              <h2>{ticket.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainCodeComponent;
