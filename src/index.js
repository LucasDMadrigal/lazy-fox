import { registerImage } from './lazy'

const baseURL = 'https://randomfox.ca/images/';

const appNode = document.getElementById('app')
const main = document.createElement('main')

const images = [];

const createImageNode = (id) => {

    //creacion del contenedor de imagenes
    const figure = document.createElement('figure');
    figure.className = "p-20";


    const image = document.createElement('img');
    image.className = "mx-auto";
    image.width = "320"
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
