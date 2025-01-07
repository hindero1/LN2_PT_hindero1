<script>
  import EventCard from "$lib/components/EventCard.svelte";
  export let data;
  let organisator = data.organisator;
  let events = data.events;
  $: events = data.events;
</script>
<!-- Hero -->
<div class="hero">
  <a href="/organisatoren" class="back-button">Zurück zu Organisatoren</a>
  <h1>{organisator.name}</h1>
  <p class="subtitle">Email: {organisator.email}</p>
</div>
<!-- Auflistung aller Events eines Organisators -->
<h2>Alle Events von {organisator.name}</h2>
<div class="row">
  {#if events.length > 0}
    {#each events as event}
      <div class="col-md-4 mb-4">
        <EventCard {event} />
      </div>
    {/each}
  {:else}
    <p>Keine Events gefunden.</p>
  {/if}
</div>
