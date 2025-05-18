import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = e.currentTarget.elements['search-text'].value.trim();
  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search term.' });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const images = await getImagesByQuery(query);
    if (images.length === 0) {
      iziToast.info({
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      createGallery(images);
    }
  } catch (error) {
    iziToast.error({ message: 'Failed to fetch images. Try again later.' });
  } finally {
    hideLoader();
  }
});
