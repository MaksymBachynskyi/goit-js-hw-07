import { galleryItems } from './gallery-items.js';
// Change code below this line

//.........................target=_"blank" rel="noreferrer noopener"...................//
const galerryMarkup = galleryItems
	.map(({ preview, original, description } = item) => {
		return `
		<li class="gallery__item">
			 <a class="gallery__link" href="${original}" >                     
				<img
					class="gallery__image"
					src="${preview}"
					data-source="${original}"
					alt="${description}"
				/>
			</a>
		</li>`;
	})
	.join('');
let visibleModal;
const ulGalleryListEl = document.querySelector('ul.gallery');
ulGalleryListEl.insertAdjacentHTML('beforeend', galerryMarkup);
ulGalleryListEl.addEventListener('click', onOpenModalJpg);
function onOpenModalJpg(evnt) {
	evnt.preventDefault();
	if (evnt.target.classList.contains('gallery__image')) {
		const instance = basicLightbox.create(`
				<img
					src="${evnt.target.dataset.source}"
				/>`);
		instance.show();
		visibleModal = instance.visible();
		window.addEventListener('keydown', onCloseModal);
		function onCloseModal(evnt) {
			if (visibleModal && evnt.code === 'Escape') {
				instance.close();
				window.removeEventListener('keydown', onCloseModal);
				console.log('aa');
			}
		}
	}
}
