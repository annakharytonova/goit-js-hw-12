import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '47381737-77b313e1304caa98d6d0e16f2';
const BASE_URL = 'https://pixabay.com/api/';

export async function searchImages(searchWord, page, per_page = 15) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page,
    per_page,
  });

  try {
    const response = await axios.get(BASE_URL, { params });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
    iziToast.error({
      title: 'Error',
      position: 'topRight',
      backgroundColor: '#cd0d0d',
      message: `${error.message}`,
    });
  }
}
