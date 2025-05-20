export function showLoader() {
  const loader = document.querySelector('.loader');
  if (loader) loader.classList.remove('hidden');
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) loader.classList.add('hidden');
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  if (gallery) gallery.innerHTML = '';
}

export function createGallery(images) {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;

  const markup = images
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          <div class="info">
            <p><b>Likes:</b> ${likes}</p>
            <p><b>Views:</b> ${views}</p>
            <p><b>Comments:</b> ${comments}</p>
            <p><b>Downloads:</b> ${downloads}</p>
          </div>
        </a>
      </li>
    `)
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}

