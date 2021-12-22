import axios from 'axios';
const URL =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
const options = {
  params: {
    bl_latitude: '-34.901799509566445',
    tr_latitude: ' -34.88677479227196',
    bl_longitude: '138.664218196863',
    tr_longitude: '138.68499953180836',
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
