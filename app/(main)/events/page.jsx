import { Suspense } from "react";
import { getUserEvents } from "@/actions/events";
import EventCard from "@/components/event-card";
import EventForm from "@/components/event-form";

export default function EventsPage({ searchParams }) {
  const shouldFocus = searchParams?.create === 'true';
  
  return (
    <Suspense fallback={<div>Loading events...</div>}>
      <Events shouldFocus={shouldFocus} />
    </Suspense>
  );
}

async function Events({ shouldFocus }) {
  const { events, username } = await getUserEvents();

  return (
    <div className="container mx-auto h-[calc(100vh-4rem)]">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-6">
        {/* Left side - Event Form */}
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Create New Event</h2>
          <EventForm autoFocus={shouldFocus} />
        </div>

        {/* Right side - Events List with Scroll */}
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Your Events</h2>
          <div className="overflow-y-auto h-[calc(100vh-12rem)]">
            {events.length === 0 ? (
              <p className="text-gray-500 text-center">
                You haven&apos;t created any events yet.
              </p>
            ) : (
              <div className="grid gap-4 grid-cols-1">
                {events?.map((event) => (
                  <EventCard 
                    key={event.id} 
                    event={event} 
                    username={username} 
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
