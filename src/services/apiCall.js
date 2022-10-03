const apiKey = 'rHkD2c8et1uRnikxkTM0df3UCSAdklcH&q'

function apiCall ({keyword = 'morty'} = {}) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=25&offset=0&rating=g&lang=en`;
    return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            const {data} = response
            const gif = data.map(singleGif => {

                const {images, title, id} = singleGif;
                const { url } = images.downsized_medium

                return {title, id, url}
            })
            return gif
        })
        .catch(error => console.log(error))
}

export default apiCall;