import db from "$lib/db.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {

  const  organisator = await db.getOrganisator(params.organisator_id);
  const events = await db.getOrganisatorWithEvents(params.organisator_id);

  if (!organisator) {
    throw error(404, `Organisator mit der ID ${params.organisator_id} nicht gefunden`);
  }

  return {
    organisator,
    events
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