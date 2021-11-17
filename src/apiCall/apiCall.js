const apiCall = async (page) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const data = await response.json();
    return data.results;
  } catch (e) {
    console.error(e);
  }
};
export default apiCall;
