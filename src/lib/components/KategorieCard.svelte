<script>
    export let kategorie;
  </script>
  
  <div class="kategorie-card">
    <div class="details">
      <h5 class="name">
        <a href={`/kategorien/${kategorie._id}`}>
          {kategorie.name}
        </a>
      </h5>
    </div>
  </div>

  <style>
  .kategorie-card {
    display: flex; /* Querformat */
    align-items: center; /* Zentriert den Text vertikal */
    border: 5px solid #5f9bf4; /* Blaue Umrandung */
    background-color: #3f4040; /* Dunkler Hintergrund */
    color: white; /* Weiße Schrift */
    width: 100%; /* Volle Breite */
    height: auto; /* Höhe dynamisch anpassen */
    padding: 1em; /* Innenabstand */
    gap: 1em; /* Abstand zwischen Elementen */
    border-radius: 20px; /* Abgerundete Ecken */
  }
  
  .details {
    flex: 1; /* Textbereich nimmt den restlichen Platz ein */
    display: flex;
    flex-direction: column; /* Text untereinander */
    gap: 0.5em; /* Abstand zwischen Textzeilen */
  }
  
  .name {
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  .name a{
    color: white;
  }
  
  .name a:hover {
    color: #5f9bf4; /* Blaue Farbe beim Hover */
    text-decoration: underline; /* Unterstreichung beim Hover */
  }
  </style>