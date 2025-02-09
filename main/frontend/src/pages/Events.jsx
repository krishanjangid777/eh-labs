import React from "react";

const eventsData = [
  {
    id: 1,
    title: "AI & ML Innovations Conference",
    date: "March 15, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Virtual",
    description: "Join industry experts to explore the latest trends in AI and ML.",
    type: "webinar",
  },
  {
    id: 2,
    title: "Tech Startup Bootcamp",
    date: "March 22, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Delhi, India",
    description: "A hands-on workshop for aspiring entrepreneurs in tech.",
    type: "event",
  },
  {
    id: 3,
    title: "Freelancing & Remote Work Strategies",
    date: "March 28, 2025",
    time: "5:00 PM - 7:00 PM",
    location: "Online",
    description: "Learn how to kickstart your freelancing career and work remotely.",
    type: "webinar",
  },
];

const Events = () => {
  return (
    <div className="max-w-7xl bg-slate-800 text-white mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events & Webinars</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsData.map((event) => (
          <div key={event.id} className="bg-transparent shadow-xs shadow-slate-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-gray-300">{event.date} • {event.time}</p>
            <p className="text-gray-200 mt-2">{event.description}</p>
            <span 
              className={`inline-block mt-3 px-3 py-1 text-sm font-medium rounded-full ${
                event.type === "webinar" ? "bg-blue-500 text-white" : "bg-green-500 text-white"
              }`}
            >
              {event.type === "webinar" ? "Webinar" : "Event"}
            </span>
            <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-lg">
              Register Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
