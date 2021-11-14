var axios = require("axios").default;

export const getResults = async searchInput => {
    var options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: {q: searchInput},
        headers: {
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
            'x-rapidapi-key': '7a92460e59msh997732db51ebbdcp1082eejsnb06636de7aeb'
            }
        };  

    try {
      const response = await axios.request(options);
      //console.log(response.data.total);
      return response.data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

//Procura música pelo ID
export const getTrack = async trackID => {
  var options = {
    method: 'GET',
    url: `https://deezerdevs-deezer.p.rapidapi.com/track/${trackID}`,
    headers: {
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': '7a92460e59msh997732db51ebbdcp1082eejsnb06636de7aeb'
    }
  };
  
  try {
    const response = await axios.request(options);
    //console.log(response.data.total);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};