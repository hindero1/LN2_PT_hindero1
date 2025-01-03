import db from "$lib/db.js";

export async function load() {
  return {
    organisatoren: await db.getOrganisatoren(),
  };
}