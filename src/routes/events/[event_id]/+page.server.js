import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {

  const event = await db.getEvent(params.event_id);
  const organisator = await db.getEventsWithOrganisator(event);
  const kategorie = await db.getEventsWithKategorie(event);
  return {
 //   event: await db.getEvent(params.event_id),
    event,
    organisator,
    kategorie
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();

    await db.deleteEvent(data.get("id"));
    redirect(303, "/events");
  },
};
