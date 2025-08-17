import axios from "axios";

const instance = axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
        key: '51756879-33acfcb6aa2bec76bd89378fe',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    },
});

export function getImagesByQuery(query) {
    return instance
        .get('', {
            params: { q: query }
        })
        .then(response => response.data);
}

