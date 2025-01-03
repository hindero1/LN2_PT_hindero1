import db from "$lib/db.js";

export async function load() {
  return {
    events: await db.getEvents()
  };
}

export const actions = {
  addToEventlist: async ({request}) => {
    let data = await request.formData();
    let id = data.get("id");
    let event = { 
      _id: id,
      eventlist: true
    } 
    await db.updateEvent(event);
  },
  removeFromEventlist: async ({request}) => {
    let data = await request.formData();
    let id = data.get("id");
    let event = { 
      _id: id,
      eventlist: false
    } 
    await db.updateEvent(event);
  }
}
