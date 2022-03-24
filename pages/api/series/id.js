export const getSerieId = async (slug) => {
    console.log(slug, 'aca')
  const rawResponse = await fetch(
    `https://api.themoviedb.org/3/tv/${slug}?api_key=e70366b2637b3709a898c38f0bc5bfab&language=es-MX`,
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
