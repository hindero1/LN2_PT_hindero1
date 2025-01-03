import db from "$lib/db.js";

export async function load() {
  return {
    kategorien: await db.getKategorien(),
  };
}