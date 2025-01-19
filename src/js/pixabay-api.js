export const fetchPhotosByQuery = searchInputQuery => {
  return fetch(
    `https://pixabay.com/api/?key=48308646-4d458c48d5d2f9bc699dc7008&q=${searchInputQuery}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
