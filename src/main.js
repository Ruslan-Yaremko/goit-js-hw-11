import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('#loader');
function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

const API_KEY = '50362686-a19d598e286bdc8c634e59341';
const BASE_URL = 'https://pixabay.com/api/';
const lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements['search-text'].value.trim();

  if (!searchQuery) {
    iziToast.warning({ message: 'Please enter a search term' });
    return;
  }

  gallery.innerHTML = '';
  loader.classList.remove('hidden');

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 20,
      },
    });

    const images = response.data.hits;

    if (images.length === 0) {
      iziToast.info({ message: 'No images found. Try another word.' });
      return;
    }

    const markup = images
      .map(
        img => `
      <li>
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" />
        </a>
      </li>`
      )
      .join('');

    gallery.innerHTML = markup;
    lightbox.refresh();
  } catch (error) {
    iziToast.error({ message: 'Something went wrong. Try again later.' });
    console.error(error);
  } finally {
    loader.classList.add('hidden');
  }
});
