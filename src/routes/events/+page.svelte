<script>
  import EventCard from "$lib/components/EventCard.svelte";
  let { data } = $props(); // $props() gibt die Daten zurück, die von page.server übergeben werden
  let events = $derived(data.events); // $derived ändert die Ansicht auf der Page, beispielsweise bei Eventlist hinzufügen
</script>

<!-- Hero -->
<div class="hero">
  <h1>Alle Events</h1>
</div>
<!-- Button um Event hinzuzufügen -->
<div>
  <a href="/events/create" class="btn btn-primary">Event hinzufügen</a>
</div>
<!-- Auflistung aller Events -->
<div class="row mt-3">
  {#each events as event}
    <div class="col-12 col-sm-6 col-md-4 mb-3">
      <EventCard {event}></EventCard>
    </div>
  {/each}
</div>
