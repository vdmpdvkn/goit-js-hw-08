// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', createGalleryImage(galleryItems));

function createGalleryImage(images) {
  return images
    .map(
      ({
        preview,
        original,
        description,
      }) => `<div><a class="gallery__item" href = "${original}" ><img class = "gallery__image lazyload" src = "${preview}" alt = "${description}">
    </a></div>`
    )
    .join('');
}
const libGallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionsDelay: 250,
});
