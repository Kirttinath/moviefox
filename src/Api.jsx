const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=a454a9c777d8510e1e99ac7c83e1e579'; 

const fetchMovieData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
};

export default fetchMovieData;
