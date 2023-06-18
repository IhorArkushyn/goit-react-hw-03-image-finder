import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '35667188-6e941f88d5c46bed3c473b87c';

export async function fetchPictures(query, page, perPage) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page: page,
  });
  const response = await axios.get(`?${params}`);
  return response;
}

// import axios from 'axios';

// const searchParams = new URLSearchParams({
//   key: '35523628-8ab67868a338e2d72f9e83665',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: 'true',
//   per_page: 12,
//   min_height: '180',
// });

// export async function fetchPictures(searchQuery, page) {
//   const response = await axios.get(
//     `https://pixabay.com/api/?${searchParams}&page=${page}&q=${searchQuery}`
//   );
//   return response;
// }
