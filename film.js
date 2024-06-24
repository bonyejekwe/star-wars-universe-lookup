const sp = new URLSearchParams(window.location.search);
const id = sp.get('id');
const baseUrl = `https://swapi2.azurewebsites.net/api`;
const url = `${baseUrl}/films/${id}`


async function fetchFilm(id) {
  const url = `${baseUrl}/films/${id}`;
  const film = await fetch(url).then((res) => res.json());
  return film;
}

async function fetchCharactersInFilm(id) {
  const url = `${baseUrl}/films/${id}/characters`;
  const characters = await fetch(url).then((res) => res.json());
  return characters;
}

async function fetchPlanetsInFilm(id) {
  const url = `${baseUrl}/films/${id}/planets`;
  const planets = await fetch(url).then((res) => res.json());
  return planets;
}

async function getFilmDetails(id) {
  let film;
  try {
    film = await fetchFilm(id);
    characters = await fetchCharactersInFilm(id);
    planets = await fetchPlanetsInFilm(id);
  } catch (ex) {
    console.error(`Error reading character ${id} data.`, ex.message);
  }
}