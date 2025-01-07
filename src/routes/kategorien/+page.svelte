<script>
  import KategorieCard from "$lib/components/KategorieCard.svelte";
  export let data;

  // Kategorien werden aus den geladenen Daten genommen
  let kategorien = data.kategorien;
</script>

<!-- Hero -->
<div class="hero">
  <h1>Kategorien</h1>
</div>
<!-- Auflistung aller Kategorien -->
<div class="row mt-3">
  {#each kategorien as kategorie}
    <div class="col-12 col-md-4 mb-4">
      <KategorieCard {kategorie}></KategorieCard>
    </div>
  {/each}
</div>
