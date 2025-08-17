import { getImagesByQuery } from "./js/pixabay-api";
import {
    clearGallery,
    createGallery,
    hideLoader,
    showLoader,
    showLoadMoreButton,
    hideLoadMoreButton,
} from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formElem = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");

let query = "";
let page = 1;
let totalHits = 0;

formElem.addEventListener("submit", async (e) => {
e.preventDefault();
query = e.target.elements.searchText.value.trim();

if (!query) return;

page = 1;
clearGallery();
hideLoadMoreButton();
showLoader();

try {
    const data = await getImagesByQuery(query, page);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
    iziToast.error({
        message:
        "Sorry, there are no images matching your search query. Please try again!",
    });
    return;
    }

    createGallery(data.hits);
    if (page * 15 < totalHits) {
        showLoadMoreButton();
    }
} catch (error) {
    iziToast.error({
        message: "An error occurred while fetching images. Please try again.",
    });
} finally {
    hideLoader();
}
    });

loadMoreBtn.addEventListener("click", async () => {
page += 1;
showLoader();
hideLoadMoreButton();

    try {
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);

    smoothScroll();

    if (page * 15 >= totalHits) {
        iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        });
        hideLoadMoreButton();
    } else {
        showLoadMoreButton();
    }
} catch (error) {
    iziToast.error({
        message: "An error occurred while fetching images. Please try again.",
    });
} finally {
    hideLoader();
}
    });

function smoothScroll() {
    const { height: cardHeight } = document
    .querySelector(".gallery")
    .firstElementChild.getBoundingClientRect();

window.scrollBy({
    top: cardHeight * 2,
    behavior: "smooth",
    });
}

