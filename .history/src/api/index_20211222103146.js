import axios from 'axios';
const URL =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '2e15914016msh1e1c7180c956f84p159051jsnad3028e27021',
  },
};

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// params: {
//   bl_latitude: sw.lat,
//   tr_latitude: ne.lat,
//   bl_longitude: sw.lng,
//   tr_longitude: ne.lng,
// }
