export const getActorId = async (slug) => {

  const rawResponse = await fetch(
    `https://api.themoviedb.org/3/person/${slug}?api_key=e70366b2637b3709a898c38f0bc5bfab&language=es`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response = await rawResponse.json();
  return response;
};

export const getActorMovies = async (slug) => {
   
  const rawResponse = await fetch(
    `
    https://api.themoviedb.org/3/person/${slug}/movie_credits?api_key=e70366b2637b3709a898c38f0bc5bfab&language=es`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response = await rawResponse.json();
  return response;
};

export const getActorSerie = async (slug) => {

  const rawResponse = await fetch(
    `
    https://api.themoviedb.org/3/person/${slug}/tv_credits?api_key=e70366b2637b3709a898c38f0bc5bfab&language=es`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response = await rawResponse.json();
  return response;
};
