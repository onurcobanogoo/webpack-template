import testImage from '../../images/test-image.jpg'

class AddImage {
    render() {
        const image = document.createElement('img');
        image.alt = 'Library';
        image.width = 600;
        image.src = testImage;
        image.classList.add('o-image')

        const body = document.querySelector('body');
        body?.appendChild(image);
    }
}

export default AddImage;