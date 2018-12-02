function getHeroes(page = 1) {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(response => {
      const heroesList = response.results.map(hero => {
        const {
          id,
          name,
          status,
          species,
          gender,
          origin,
          location,
          image,
          created
        } = hero;

        return {
          id,
          name,
          status,
          species,
          gender,
          origin,
          location,
          image,
          created
        };
      });

      return heroesList;
    });
}

function getHeroById(HeroId) {
  return fetch(`https://rickandmortyapi.com/api/character/${HeroId}`)
    .then(response => response.json())
    .then(character => {
      const {
        id,
        name,
        status,
        species,
        gender,
        origin,
        location,
        image,
        created
      } = character;

      return {
        id,
        name,
        status,
        species,
        gender,
        origin,
        location,
        image,
        created
      };
    })
    .catch(e => {
      console.error(e.message);
    });
}

export {
  getHeroes,
  getHeroById
};
