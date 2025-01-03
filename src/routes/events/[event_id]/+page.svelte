<script>
  export let data;
  let event = data.event;
  let organisator = data.organisator;
  let kategorie = data.kategorie;
</script>

<a href="/events" class="back-button">Zurück zu Events</a>

<h1>{event.name}</h1>
<div class="row mt-3">
  <div class="col-3">
    <img class="img-fluid" src={event.poster} alt="" />
  </div>
  <div class="col">
    <!-- Datum -->
    <div class="info-item">
    <span>Datum: {event.date}</span>
    </div>
    <!-- Kategorie -->
    <div class="info-item">
      <span class="label">Kategorie: </span>
      <span class="name">
        <a href="/kategorien/{kategorie._id}" class="kategorie-link"
          >{kategorie.name}</a
        >
      </span>
    </div>
    <!-- Organisator -->
    <div class="info-item">
      <span class="label">Organisator: </span>
      <span class="name">
        <a href="/organisatoren/{organisator._id}" class="organisator-link"
          >{organisator.name}</a
        >
      </span>
    </div>
    <!-- Adresse -->
    <div class="info-item">
    <span>Adresse: {event.adresse}</span>
    </div>

    <form method="POST" action="?/delete">
      <input type="hidden" name="id" value={event._id}>
      <button class="btn btn-danger">Delete Event</button>
    </form>
  </div>
</div>

<style>

.info-item {
  margin-bottom: 20px; /* Fügt Abstand nach unten hinzu */
}
.name a{
    color: white;
  }
</style>