const API_KEY = '52408507-9b8d709dfd9c7c83170b7178c';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 40) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Sorry, there are no images matching your search query. Plea ${response.status}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error(
      'Sorry, there are no images matching your search query. Plea',
      error
    );
    throw error;
  }
}
