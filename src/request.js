import { API_HOST } from '../src/constants/index';

const handleServerItemsLoad = () => {
    return fetch(API_HOST, {
        method: 'GET'
    })
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .catch(error => {
            console.error(error);
        });
};

export default handleServerItemsLoad;
