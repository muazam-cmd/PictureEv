import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID TgHNUsLFbuwFtxhkoeqSv3BYl66N0wGm0ynG-QPV2RA'
        },
        params: {
            query: 'cars'

        }
    });
    console.log(response);
    return response;
};

export default searchImages;