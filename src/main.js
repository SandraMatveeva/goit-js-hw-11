// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createGalleryCardTemplate } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loader = document.querySelector('.gallery-load');

// console.log(searchFormEl); шукаємо форму на сторінці

const onSearchFormSubmit = event => {
  event.preventDefault();

  //   console.log('Summit!'); перевіряю чи прослуховується форма
  //   //   console.dir(event.currentTarget.elements.user_gallery.value); зчитуємо
  //     значення яке введено корстувачем і записуємо його в const

  const searchInputQuery =
    event.currentTarget.elements.user_gallery.value.trim(); // ввод значенія
  galleryEl.innerHTML = ''; //  очищаємо форму
  searchFormEl.reset();

  // loader показываю загрузку
  const showLoader = () => {
    loader.classList.remove('hidden');
  };
  showLoader();
  console.log('показываю загрузку');

  fetchPhotosByQuery(searchInputQuery)
    .then(data => {
      const stopLoader = () => {
        loader.classList.add('hidden');
      };
      stopLoader();
      console.log('заканч загрузку');
      // loader скрываю загрузку

      const galleryTemplate = data.hits
        .map(el => createGalleryCardTemplate(el))
        .join('');

      galleryEl.innerHTML = galleryTemplate;

      console.log(data);

      if (data.hits.length === 0) {
        iziToast.show({
          message: `❌ Sorry, there are no images matching your search query. Please, try again!`,
          color: 'red',
          position: 'topRight',
        });
      }

      //   //   console.log(galleryTemplate);
      //   //   console.log(createGalleryCardTemplate(data.hits[0]));
      //   // дивимось і перебераємо елемент масива

      // Оновлення SimpleLightbox
      lightbox.refresh();
    })
    .catch(err => {
      iziToast.show({
        message: `❌ Something went wrong: ${err.message}`,
        color: 'red',
        position: 'topRight',
      });
    });
};
searchFormEl.addEventListener('submit', onSearchFormSubmit);

// Ініціалізація SimpleLightbox
let lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});
