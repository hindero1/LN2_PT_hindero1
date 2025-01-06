<script>
  import EventCard from "$lib/components/EventCard.svelte";
  export let data;
  let events = data.events;
  $: events = data.events;
</script>

<!-- Hero -->
<div class="hero">
  <h1>Meine Eventlist</h1>
</div>
<!-- Auflistung aller Events auf der Eventliste-->
<div class="row mt-3">
  {#each events as event}
    <div class="col-12 col-md-4 mb-3">
      <EventCard {event}></EventCard>
    </div>
  {/each}
</div>
