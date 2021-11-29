import axios from 'axios';


export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '2bda857433mshf7286d0c521ee04p1b6f93jsn012e15c57ecd',
        },

    });
    return data;
}