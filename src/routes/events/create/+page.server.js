import db from "$lib/db.js";

export const load = async () => {
  const organisatoren = await db.getOrganisatoren();
  const kategorien = await db.getKategorien();
  return {
    organisatoren,
    kategorien
  };
};

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    let event = {
      name: data.get("name"),
      date: data.get("date"),
      adresse: data.get("adresse"),
      organisator_id: data.get("organisator_id"),
      kategorie_id: data.get("kategorie_id"),
    };
    await db.createEvent(event);
    return { success: true };
  },
};
