const isIntersecting = (entry) => {
    return entry.isIntersecting; //boolean
}

const loadImage = entry => {
    const figure = entry.target;

    console.log('img pedida');

    const image = figure.firstChild;
    const url = image.dataset.src;

    image.src = url;
    observer.unobserve(figure)
}


const observer = new IntersectionObserver(entries => {
    entries.filter(isIntersecting).forEach(loadImage)
})

export const registerImage = image => {
    observer.observe(image)
}