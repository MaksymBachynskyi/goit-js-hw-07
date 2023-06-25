import { galleryItems } from './gallery-items.js';
// Change code below this line
const galerryMarkup2 = galleryItems
	.map(({ preview, original, description } = item) => {
		return `
		<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
	})
	.join('');
const ulGalleryListEl2 = document.querySelector('ul.gallery');
ulGalleryListEl2.insertAdjacentHTML('beforeend', galerryMarkup2);
let modal = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: '250ms',
});
