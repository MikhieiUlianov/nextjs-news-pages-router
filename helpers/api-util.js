export async function getAllEvents() {
  const response = await fetch("http://firebase-url/events.json");
  if (!response.ok) throw new Error("fetchinf all events error");

  const data = await response.json();
  const events = [];

  for (const key in res) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}
export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
