const section = document.querySelector("section");
const pokeApi = "https://pokeapi.co/api/v2/pokemon/125";

const getData = async () => { 
  const response = await fetch(pokeApi);
  const dataPoke = await response.json();
  console.log(dataPoke);
  
  section.innerHTML = `
    <div class="container">
          <p>Nombre: ${dataPoke.name}</p>
          <p>Id: ${dataPoke.id}</p>
          <p>Experiencia base: ${dataPoke.base_experience}</p>
          <p>Altura: ${dataPoke.height}</p>
          <p>Peso: ${dataPoke.weight}</p>
          <p>Lista de los juegos en los que ha aparecido: ${dataPoke.game_indices }</p>

    </div>`;
  

};

getData();

