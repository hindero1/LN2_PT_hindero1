<script>
  import "./styles.css";
  let { children } = $props();
</script>

<nav
  class="navbar navbar-expand-lg bg-secondary navbar-dark"
  data-bs-theme="dark"
>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">MyEvents</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    ><!-- Events und Eventlist -->
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a
            class="nav-link active dropdown-toggle"
            href="/events"
            data-bs-toggle="dropdown"
            aria-current="page">Events</a
          >
          <ul class= "dropdown-menu">
            <li><a class="dropdown-item" href="/events">Alle Events</a></li>
            <li><a class="dropdown-item" href="/events/eventlist">Meine Eventlist</a></li>
          </ul>
        </li>
        <!-- Organisatoren -->
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/organisatoren"
            >Organisatoren</a
              > 
        </li>
        <!-- Kategorien -->
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/kategorien"
            >Kategorien</a
              > 
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/kontakt">Kontakt</a> <!-- Kontakt -->
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/über">Über uns</a> <!-- Über uns -->
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container mt-3">
  {@render children()}
</div>
