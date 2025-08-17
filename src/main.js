import { getImagesByQuery } from "./js/pixabay-api";
import { clearGallery, createGallery, hideLoader, showLoader } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formElem = document.querySelector('.form');

formElem.addEventListener('submit', async e => {
    e.preventDefault();

    const query = e.target.elements.searchText.value.trim();

    if (!query) {
    return;
}

    clearGallery();
    showLoader();

    try {
        const data = await getImagesByQuery(query);

        if (data.hits.length === 0) {
            iziToast.error({
                message:
                "Sorry, there are no images matching your search query. Please try again!",
            });
        } else {
            createGallery(data.hits);
        }
    } catch (error) {
        iziToast.error({
            message: "An error occurred while fetching images. Please try again.",
        });
    } finally {
        hideLoader();
    }

    
});

