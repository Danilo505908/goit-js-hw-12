import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = new SimpleLightbox(".gallery a");

export function createGallery(images) {
    const galleryElem = document.querySelector(".gallery");
    const markup = images
    .map(
    (image) => `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
            <img
                class="gallery-image"
                src="${image.webformatURL}"
                alt="${image.tags}"
            />
            <div class="gallery-box">
                <p>Likes <span>${image.likes}</span></p>
                <p>Views <span>${image.views}</span></p>
                <p>Comments <span>${image.comments}</span></p>
                <p>Downloads <span>${image.downloads}</span></p>
            </div>
        </a>
    </li>`
    )
    .join("");

    galleryElem.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
}

export function clearGallery() {
    document.querySelector(".gallery").innerHTML = "";
}

export function showLoader() {
    document.querySelector(".loader").classList.remove("is-hidden");
}

export function hideLoader() {
    document.querySelector(".loader").classList.add("is-hidden");
}

export function showLoadMoreButton() {
    document.querySelector(".load-more").classList.remove("is-hidden");
}

export function hideLoadMoreButton() {
    document.querySelector(".load-more").classList.add("is-hidden");
}
