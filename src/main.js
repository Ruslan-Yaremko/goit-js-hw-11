import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { showLoader, hideLoader, clearGallery, createGallery } from './render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

const API_KEY = '50362686-a19d598e286bdc8c634e59341';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const searchText = e.target.elements['search-text'].value.trim();
  if (!searchText) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: searchText,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
      },
    });

    const images = response.data.hits;
    if (images.length === 0) {
      iziToast.info({
        title: 'No results',
        message: 'No images found for your search query.',
      });
      hideLoader();
      return;
    }

    createGallery(images);
    lightbox.refresh();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
    });
    console.error(error);
  } finally {
    hideLoader();
  }
});
