<script>
  import { enhance } from "$app/forms";

  let { event } = $props();
  console.log("Event in EventCard:", event); // Debugging
</script>

<div class="event-card">
  <div>
    <img class="img-fluid" src={event.poster} alt="" />
  </div>
  <div class="details">
    <div class="name">
      <a href={"/events/" + event._id}>{event.name}</a>
    </div>
    <div>
      Datum: {event.date}
    </div>
    {#if event.eventlist}
    <form method="POST" action="?/removeFromEventlist" use:enhance>
        <input type="hidden" name="id" value={event._id} />
        <button class="btn btn-danger">Von Eventlist entfernen</button>
    </form>
      
    {:else}
    <form method="POST" action="?/addToEventlist" use:enhance>
      <input type="hidden" name="id" value={event._id} />
      <button class="btn btn-success">Auf die Eventlist</button>
    </form>
    {/if}
  </div>
</div>

<style>
  .event-card {
    display: flex; /* Querformat */
    align-items: center; /* Zentriert Bild und Text vertikal */
    justify-content: space-between; /* Abstand zwischen Bild und Text */
    flex-direction: row; /* Bild links, Text rechts */
    border: 5px solid #5f9bf4;
    background-color: #3f4040;
    color: white;
    width: 100%; /* Gleiche Breite für alle */
    height: 250px; /* Gleiche Höhe für alle */
    padding: 1em;
    gap: 1em;
    border-radius: 20px;
  }
  .details {
    flex: 1; /* Textbereich nimmt den restlichen Platz ein */
    display: flex;
    flex-direction: column;
    gap: 0.5em; /* Abstand zwischen Textzeilen */
  }
  .name {
    font-weight: bold;
    font-size: 1.2rem;
  }
  .name a{
    color: white;
  }
  .btn {
    margin-top: 1em;
  }
  .event-card img {
    width: 100%; /* Bild füllt die Breite des Containers */
    height: 200px; /* Einheitliche Höhe für alle Bilder */
    object-fit: cover; /* Schneidet das Bild passend zu, ohne es zu verzerren */
    border-radius: 5px; /* Optional: Abgerundete Ecken */
  }
  .name a:hover {
    color: #5f9bf4; /* Blaue Farbe beim Hover */
    text-decoration: underline; /* Unterstreichung beim Hover */
  }

</style>
