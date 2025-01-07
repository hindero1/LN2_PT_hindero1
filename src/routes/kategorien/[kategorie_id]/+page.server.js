import db from "$lib/db.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {

  const  kategorie = await db.getKategorie(params.kategorie_id);
  const events = await db.getKategorieWithEvents(params.kategorie_id);


  if (!kategorie) {
    throw error(404, `Kategorie mit der ID ${params.kategorie_id} nicht gefunden`);
  }

  return {
    kategorie,
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