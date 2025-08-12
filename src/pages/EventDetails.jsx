import React from "react";
import { useParams } from "react-router-dom";
import events from "../data/events";

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find(e => e.id.toString() === id);

  if (!event) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-4 animate-pulse">Event not found</h2>
          <p className="text-gray-400">Please check the event URL and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8 md:p-12">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.01]">
        <div className="relative">
          <img
            src={event.image || "https://via.placeholder.com/1200x600/1e293b/d1d5db?text=Event+Image"}
            alt={event.title}
            className="w-full h-64 object-cover rounded-t-xl opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent p-6 sm:p-10 flex items-end">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
              {event.title}
            </h1>
          </div>
        </div>

        <div className="p-6 sm:p-10 space-y-8">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-purple-400">Date & Time</h2>
              <p className="text-lg text-gray-300">📅 {event.date}</p>
              <p className="text-lg text-gray-300">⏰ {event.time}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 text-purple-400">Venue</h2>
              <p className="text-lg text-gray-300">📍 {event.venue.name}</p>
              <p className="text-md text-gray-400">{event.venue.address}</p>
              <a href={event.venue.mapsLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                View on Google Maps
              </a>
            </div>
          </section>

          <hr className="border-gray-700" />

          <section>
            <h2 className="text-3xl font-bold mb-4 text-purple-400">About the Event</h2>
            <p className="text-gray-300 leading-relaxed text-lg">{event.description}</p>
          </section>

          <hr className="border-gray-700" />

          {event.guests && event.guests.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold mb-4 text-purple-400">Guest Speakers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {event.guests.map((guest, index) => (
                  <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-lg flex items-center space-x-4 transition-transform hover:scale-105">
                    <img src={guest.photo || "https://via.placeholder.com/80"} alt={guest.name} className="w-16 h-16 rounded-full object-cover border-2 border-purple-500" />
                    <div>
                      <h3 className="text-xl font-bold">{guest.name}</h3>
                      <p className="text-sm text-gray-400">{guest.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <hr className="border-gray-700" />

          <section>
            <h2 className="text-3xl font-bold mb-4 text-purple-400">Activities & Agenda</h2>
            <ul className="space-y-4">
              {event.activities.map((activity, index) => (
                <li key={index} className="bg-gray-700 p-4 rounded-lg shadow-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold">{activity.title}</h3>
                  <p className="text-sm text-gray-400">{activity.time}</p>
                  <p className="text-gray-300 mt-2">{activity.description}</p>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-gray-700" />

          <section>
            <h2 className="text-3xl font-bold mb-4 text-purple-400">Organized By</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {event.organizers.map((organizer, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-lg flex items-center space-x-4 transition-transform hover:scale-105">
                  <img src={organizer.logo || "https://via.placeholder.com/64"} alt={organizer.name} className="w-12 h-12 rounded-full object-contain" />
                  <div>
                    <h3 className="text-xl font-bold">{organizer.name}</h3>
                    <a href={organizer.website} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline">
                      Visit Website
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}