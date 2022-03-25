const getImagen = async () => {
    try {
        const apiKey = '62wEnViP0SO3P7MDkX6bXA4gIFyC8p7E';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.warn('Ocurrio un error');
    }
}

getImagen();