<script>
    import EventCard from "$lib/components/EventCard.svelte";
    export let data;
    let kategorie = data.kategorie;
    let events = data.events;
    $: events = data.events;
  </script>
<!-- Hero -->  
<div class="hero">
  <a href="/kategorien" class="back-button">Zurück zu Kategorien</a>
  <h1>{kategorie.name}</h1>
</div>
<!-- Auflistung aller Events einer Kategorie -->
<h2>Alle Events dieser Kategorie</h2>
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