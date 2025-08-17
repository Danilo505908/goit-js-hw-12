import axios from "axios";

const instance = axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
        key: '51756879-33acfcb6aa2bec76bd89378fe',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
    },
});

export async function getImagesByQuery(query, page) {
    const response = await instance.get("", {
        params: { q: query, page },
    })
    return response.data;
}

