import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

import { get } from "svelte/store";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("PTLN2"); // select database

//////////////////////////////////////////
// Events
//////////////////////////////////////////

// Get all Events
async function getEvents() {
  let events = [];
  try {
    const collection = db.collection("events");

    const query = {};

    // Get all objects that match the query
    events = await collection.find(query).toArray();
    events.forEach((event) => {
      event._id = event._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
  }
  return events;
}

// Get event by id
async function getEvent(id) {
  let event = null;
  try {
    const collection = db.collection("events");
    const query = { _id: new ObjectId(id) }; // filter by id
    event = await collection.findOne(query);

    if (!event) {
      console.log("No event with id " + id);
    } else {
      event._id = event._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    console.log(error.message);
  }
  return event;
}
// Create new Event
async function createEvent(event) {
  event.poster = "/images/placeholder.jpg"; // default poster
  event.watchlist = false; // default value

    //Umwandlung Umwandlung der ID in Integer
    event.kategorie_id = parseInt(event.kategorie_id);
    event.organisator_id = parseInt(event.organisator_id);
    
    console.log("Event vor dem Insert:", event);  // DEBUG
  try {
    const collection = db.collection("events");
    const result = await collection.insertOne(event);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// returns: id of the updated event or null, if event could not be updated
async function updateEvent(event) {
  try {
    let id = event._id;
    delete event._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("events");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: event });

    if (result.matchedCount === 0) {
      console.log("No event with id " + id);
      // TODO: errorhandling
    } else {
      console.log("event with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// delete event by id
// returns: id of the deleted event or null, if event could not be deleted
async function deleteEvent(id) {
  try {
    const collection = db.collection("events");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No event with id " + id);
    } else {
      console.log("event with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}
/////////////////////////////////////////
// EventsWithOrganisator
//////////////////////////////////////////
async function getEventsWithOrganisator(event) {
  let organisator = null;
  try {
    const collection = db.collection("organisatoren");
    const query = { id: event.organisator_id }; // Hier nutzen wir die numerische ID aus dem Spiel
    organisator = await collection.findOne(query);

    if (!organisator) {
      console.log("No organisator with id " + event.organisator_id);
    } else {
      organisator._id = organisator._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    console.log(error.message);
  }
  return organisator;
}
/////////////////////////////////////////
// EventsWithKategorie
//////////////////////////////////////////
async function getEventsWithKategorie(event) {
  let kategorie = null;
  try {
    const collection = db.collection("kategorien");
    const query = { id: event.kategorie_id }; // Hier nutzen wir die numerische ID aus dem Spiel
    kategorie = await collection.findOne(query);

    if (!kategorie) {
      console.log("No kategorie with id " + event.kategorie_id);
    } else {
      kategorie._id = kategorie._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    console.log(error.message);
  }
  return kategorie;
}
//////////////////////////////////////////
// organisatoren
//////////////////////////////////////////

// Get all organisatoren
async function getOrganisatoren() {
  let organisatoren = [];
  try {
    const collection = db.collection("organisatoren");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    organisatoren = await collection.find(query).toArray();
    organisatoren.forEach((organisator) => {
      organisator._id = organisator._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return organisatoren;
}

// Get organisator by id
async function getOrganisator(id) {
  let organisator = null;
  try {
    const collection = db.collection("organisatoren");
    const query = { _id: new ObjectId(id) }; // filter by id
    organisator = await collection.findOne(query);

    if (!organisator) {
      console.log("No event with id " + id);
      // TODO: errorhandling
    } else {
      organisator._id = organisator._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return organisator;
}
/////////////////////////////////////////
// OrganisatorWithEvents
//////////////////////////////////////////
async function getOrganisatorWithEvents(organisator_id) {
  let events = [];
  try {
    // Erst den Publisher holen um seine numerische ID zu bekommen
    const organisator = await db.collection("organisatoren").findOne({ 
      _id: new ObjectId(organisator_id) 
    });
    
    if (organisator) {
      // Mit der numerischen ID nach Games suchen
      const collection = db.collection("events");
      const query = { organisator_id: organisator.id }; // Hier nutzen wir publisher.id
      console.log("Suche nach Games mit query:", query);
      
      events = await collection.find(query).toArray();
      events.forEach((event) => {
        event._id = event._id.toString();
      });
    }
  } catch (error) {
    console.log(error);
  }
  return events;
}
  //////////////////////////////////////////
// kategorien
//////////////////////////////////////////

// Get all kategorien
async function getKategorien() {
  let kategorien = [];
  try {
    const collection = db.collection("kategorien");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    kategorien = await collection.find(query).toArray();
    kategorien.forEach((kategorie) => {
      kategorie._id = kategorie._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return kategorien;
}

// Get kategorie by id
async function getKategorie(id) {
  let kategorie = null;
  try {
    const collection = db.collection("kategorien");
    const query = { _id: new ObjectId(id) }; // filter by id
    kategorie = await collection.findOne(query);

    if (!kategorie) {
      console.log("No kategorie with id " + id);
      // TODO: errorhandling
    } else {
      kategorie._id = kategorie._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return kategorie;
}
/////////////////////////////////////////
// KategorieWithEvents
//////////////////////////////////////////

async function getKategorieWithEvents(kategorie_id) {
  let events = [];
  try {
    // Erst Kategorie holen um seine numerische ID zu bekommen
    const kategorie = await db.collection("kategorien").findOne({ 
      _id: new ObjectId(kategorie_id) 
    });
    
    if (kategorie) {
      // Mit der numerischen ID nach Games suchen
      const collection = db.collection("events");
      const query = { kategorie_id: kategorie.id }; // Hier nutzen wir kategorie.id
      console.log("Suche nach Games mit query:", query);
      
      events = await collection.find(query).toArray();
      events.forEach((event) => {
        event._id = event._id.toString();
      });
    }
  } catch (error) {
    console.log(error);
  }
  return events;
}
// export all functions so that they can be used in other files
export default {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  getOrganisatoren,
  getOrganisator,
  getKategorien,
  getKategorie,
  getOrganisatorWithEvents,
  getKategorieWithEvents,
  getEventsWithKategorie,
  getEventsWithOrganisator,
};

 