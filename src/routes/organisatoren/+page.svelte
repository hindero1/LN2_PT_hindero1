<script>
  import OrganisatorCard from "$lib/components/OrganisatorCard.svelte";
  export let data;

  // Organisatoren werden aus den geladenen Daten genommen
  let organisatoren = data.organisatoren;
</script>

<div class="hero">
  <h1>Organisatoren</h1>
</div>

<div class="row mt-3">
  {#each organisatoren as organisator}
    <div class="col-12 col-md-4 mb-3">
      <OrganisatorCard {organisator}></OrganisatorCard>
    </div>
  {/each}
</div>
