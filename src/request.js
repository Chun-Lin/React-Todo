const handleServerItemsLoad = () => {
    return fetch('http://localhost:3004/todos', {
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
