import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createMarkup } from './js/render-functions';
import { searchImages } from './js/pixabay-api';
import axios from 'axios';

const form = document.querySelector('form');
const input = form.querySelector('input');

const gallery = document.querySelector('.gallery-list');
const loader = document.querySelector('.loader');
const buttonLoadMore = document.querySelector('button.button-load-more');
buttonLoadMore.classList.add('button-is-hidden');

form.addEventListener('submit', handleSubmit);
buttonLoadMore.addEventListener('click', handleClick);
let page = 1;
const per_page = 15;
let searchWord = '';

async function handleSubmit(event) {
  event.preventDefault();
  clearGallery();
  searchWord = input.value.trim();

  if (!searchWord.trim()) {
    iziToast.warning({
      title: 'Caution',
      position: 'topRight',
      backgroundColor: '#FF0000',
      message: 'Please enter a search word!',
    });
    return;
  }
  page = 1;
  buttonLoadMore.classList.remove('button-is-hidden');
  await serviceImage();
}

async function handleClick() {
  await serviceImage();
  const heightImg = gallery
    .querySelector('.gallery-item')
    .getBoundingClientRect().height;

  window.scrollBy({
    top: heightImg * 2,
    behavior: 'smooth',
  });
}

async function serviceImage() {
  try {
    showLoading();
    const data = await searchImages(searchWord, page, per_page);

    if (data.hits.length === 0) {
      iziToast.show({
        title: 'No results',
        position: 'topRight',
        backgroundColor: '#cd0d0d',
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
      });
      return;
    }

    createMarkup(data.hits);

    initializeLightbox();

    const totalImagesLoaded = page * per_page;
    if (totalImagesLoaded >= data.totalHits) {
      buttonLoadMore.classList.add('button-is-hidden');
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        backgroundColor: '#2196F3',
      });
    } else {
      buttonLoadMore.classList.remove('button-is-hidden');
    }
    page += 1;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load images. Please try again later.',
      position: 'topRight',
      backgroundColor: '#cd0d0d',
    });
  } finally {
    hideLoading();
  }
}

function showLoading() {
  if (gallery) {
    loader.classList.remove('is-hidden');
  }
}

function initializeLightbox() {
  let lightbox = new SimpleLightbox('.gallery-list a', {
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.8,
  });
}

function hideLoading() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('is-hidden');
  }
}

function clearGallery() {
  if (gallery) {
    gallery.innerHTML = '';
  }
}
