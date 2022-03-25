// https://developer.mozilla.org/es/docs/Web/API/Fetch_API

const apiKey = '62wEnViP0SO3P7MDkX6bXA4gIFyC8p7E';

const httpCode = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

httpCode.then(resp => resp.json(resp))
    .then(({data}) => {
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);