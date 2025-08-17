import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = new SimpleLightbox(".gallery a");

export function createGallery(images) {
    const galleryElem = document.querySelector('.gallery');  
    const markup = images
        .map((image) => 
            `<li class="gallery-item">
                <a class="gallery-link" href="${image.largeImageURL}">
                    <img
                        class="gallery-image"
                        src="${image.webformatURL}"
                        data-source="${image.largeImageURL}"
                        alt="${image.tags}"
                    />
                    <div class="gallery-box">
                        <p class="gallery-box-text">Likes <span class="gallery-box-span">${image.likes}</span></p>
                        <p class="gallery-box-text">Views <span class="gallery-box-span">${image.views}</span></p>
                        <p class="gallery-box-text">Comments <span class="gallery-box-span">${image.comments}</span></p>
                        <p class="gallery-box-text">Downloads <span class="gallery-box-span">${image.downloads}</span></p>
                    </div>
                </a>
            </li>`)
        .join('');

    galleryElem.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}

export function clearGallery() {
    const galleryElem = document.querySelector('.gallery');  
    galleryElem.innerHTML = '';
}

export function showLoader() {
    document.querySelector('.loader').classList.remove('is-hidden');
}

export function hideLoader() {
    document.querySelector('.loader').classList.add('is-hidden');
}
