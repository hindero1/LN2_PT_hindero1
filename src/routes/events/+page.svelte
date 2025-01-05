<script>
  import EventCard from "$lib/components/EventCard.svelte";
  let { data, filterByEventlist = false } = $props();

  //let events = $derived(data.events);

  let events = $derived.by(() => {
    if (filterByEventlist) {
      let eventsFiltered = data.events.filter((event) => event.eventlist);
      return eventsFiltered;
    }
    return data.events;
  });
</script>

<div class="hero">
  <h1>Alle Events</h1>
</div>

<div>
  <a href="/events/create" class="btn btn-primary">Event hinzufügen</a>
</div>
<!-- See https://getbootstrap.com/docs/5.0/forms/checks-radios/ -->
<div class="row mt-3">
  {#each events as event}
    <div class="col-12 col-sm-6 col-md-4  mb-3">
      <EventCard {event}></EventCard>
    </div>
  {/each}
</div>
