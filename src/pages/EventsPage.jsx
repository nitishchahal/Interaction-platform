import React from 'react'
import events from '../data/events'
import EventCard from '../components/EventCard'

export default function EventsPage(){
  const [selected, setSelected] = React.useState(null)
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {events.map(ev => <EventCard key={ev.id} event={ev} onOpen={setSelected} />)}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-xl w-full">
            <h2 className="text-xl font-bold">{selected.title}</h2>
            <p className="text-gray-600">{selected.date}</p>
            <p className="mt-4">{selected.description}</p>
            <div className="mt-4 flex justify-end">
              <button onClick={()=>setSelected(null)} className="px-4 py-2 rounded border">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
