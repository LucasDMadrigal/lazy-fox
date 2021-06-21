import { registerImage } from './lazy.js'

const baseURL = 'https://randomfox.ca/images/';

const appNode = document.getElementById('app')
const main = document.createElement('main')

const images = [];

const createImageNode = (id) => {

    //creacion del contenedor de imagenes
    const figure = document.createElement('figure');
    figure.classList.add('fox_image--container')


    const image = document.createElement('img');
    image.classList.add('fox_image')
    image.dataset.src = `${baseURL}${id}.jpg`;

    figure.append(image)

    return figure;

}

for (let i = 1; i < 122; i++) {
    const imageNode = createImageNode(i);
    images.push(imageNode);
    registerImage(imageNode);
}

main.append(...images);
appNode.append(main);
