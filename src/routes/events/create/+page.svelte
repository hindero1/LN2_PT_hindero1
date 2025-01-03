<script>
  /** @type {import('./$types').PageData} */
  let { data, form } = $props();
</script>
<!-- Erklärung!!!!!!!! -->

<a href="/events" class="back-button">Zurück zu Events</a>

<h1>Event hinzufügen</h1>
<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="" class="form-label">Name</label>
    <input name="name" class="form-control" type="text" required/>
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Datum</label>
    <input name="date" class="form-control" type="text" required/>
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Adresse</label>
    <input name="adresse" class="form-control" type="text" required/>
  </div>
  <!-- Organisator Dropdown -->
  <div class="mb-3">
    <label for="" class="form-label">Organisator</label>
    <select name="organisator_id" class="form-control" required>
      {#each data.organisatoren as organisator}
        <option value={organisator.id}>{organisator.name}</option>
      {/each}
    </select>
  </div>
  <!-- Kategorie Dropdown -->
  <div class="mb-3">
    <label for="" class="form-label">Kategorie</label>
    <select name="kategorie_id" class="form-control" required>
      {#each data.kategorien as kategorie}
        <option value={kategorie.id}>{kategorie.name}</option>
      {/each}
    </select>
  </div>
  <button type="submit" class="btn btn-primary">Event hinzufügen</button>
</form>

{#if form?.success}
  <p>Event hinzugefügt</p>
{/if}
