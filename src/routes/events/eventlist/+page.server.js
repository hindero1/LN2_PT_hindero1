import db from "$lib/db";

export async function load() {
  const events = await db.getEvents();
  return {
    events: events.filter(event => event.eventlist)
  };
}

export const actions = {
  removeFromEventlist: async ({request}) => {
    let data = await request.formData();
    let id = data.get("id");
    let event = { 
      _id: id,
      eventlist: false
    } 
    await db.updateEvent(event);
  }
};