import img1 from '../../images/marquee_1.jpeg';
import img2 from '../../images/marquee_2.jpeg';
import img3 from '../../images/marquee_3.jpeg';
import img4 from '../../images/marquee_4.jpeg';
import img5 from '../../images/marquee_5.jpeg';
import img6 from '../../images/marquee_6.jpeg';
import '../scss/style.scss';
var imageSize = ['center-cropped-20', 'center-cropped-25', 'center-cropped-30']


export default class Marquee {
    constructor() {
        this.elMarquee = document.getElementsByClassName('marquee')[0];
        this.elContents = this.elMarquee.querySelector('.content');
        this.images = [img1, img2, img3, img4, img5, img6];
    }

    renderMarquee() {
        this.images.forEach((src) => {
            const elImage = new Image(src).getElement();
            this.elContents.appendChild(elImage);
        });
    }
}

class Image {
    constructor(src) {
        this.src = src;
    }

    onClick() {
        console.log('click image');
    }



    getElement() {
        const img = document.createElement('img');
        img.setAttribute('src', this.src);
        img.classList.add(imageSize[Math.floor(Math.random() * 3)]);
        img.classList.add('modalBtn');
        img.addEventListener('click', this.onClick);

        return img;
    }
}