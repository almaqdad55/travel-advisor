import axios from 'axios';
const URL =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: '-34.948120191818994',
        tr_latitude: '-34.8793486916967',
        bl_longitude: '138.56261991924134',
        tr_longitude: '138.6461409888868',
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '2e15914016msh1e1c7180c956f84p159051jsnad3028e27021',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};