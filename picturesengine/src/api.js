import axios from 'axios';

const API_KEY = 'Client-ID TgHNUsLFbuwFtxhkoeqSv3BYl66N0wGm0ynG-QPV2RA';
const API_URL = 'https://api.unsplash.com/search/photos';

const searchImages = async (term) => {

    const response = await axios.get(API_URL, {
        headers: { Authorization: API_KEY },
        params: {
            query: term
        },
    });
    console.log(response);
    return response.data.results;
};

export default searchImages;