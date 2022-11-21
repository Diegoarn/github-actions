export const cargarListaRick = async (filter) => {
  const res = await fetch(
    "https://rickandmortyapi.com/api/character/?name=" + filter
  ).then((response) => response.json());
  return res;
};

export const cargarInfo = async (id) => {
  const res = await fetch(
    "https://rickandmortyapi.com/api/character/" + id
  ).then((response) => response.json());

  return res;
};
