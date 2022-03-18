import img1 from '../../images/marquee_1.jpeg';
import img2 from '../../images/marquee_2.jpeg';
import img3 from '../../images/marquee_3.jpeg';
import img4 from '../../images/marquee_4.jpeg';
import img5 from '../../images/marquee_5.jpeg';
import img6 from '../../images/marquee_6.jpeg';

import '../scss/style.scss';
const imageSize = ['center-cropped-small', 'center-cropped-middle', 'center-cropped-big']
const previous = 4;

export default class Marquee {
    constructor() {
        this.elMarquee = document.getElementsByClassName('marquee')[0];
        this.elContents = this.elMarquee.querySelector('.content');
        this.elCarousel = this.elMarquee.querySelector('.carousel-inner');
        this.images = [img1, img2, img3, img4, img5, img6];
        this.init();
    }

    init() {
        this.bindEvent();
        this.renderMarquee();
        this.renderCarousel();
    }

    bindEvent() {
        window.onclick = function (event) {
            const modal = document.getElementById("picture_modal");
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }

    }

    renderMarquee() {
        this.images.forEach((src, idx) => {
            const elImage = new Image(idx, src).getElement();
            this.elContents.appendChild(elImage);
        });
    }

    renderCarousel() {
        this.images.forEach((src, idx) => {
            const elImage = new CarouselImage(idx, src).getElement();
            this.elCarousel.appendChild(elImage);
        })
    }
}

class CarouselImage {
    constructor(idx, src) {
        this.idx = idx;
        this.src = src;
    }

    getElement() {
        const element = document.createElement('div');
        const img = document.createElement('img');
        img.setAttribute('src', this.src);
        element.append(img);
        element.classList.add('carousel-item');
        element.setAttribute('data-id', this.idx);
        return element;
    }


}

class Image {
    constructor(idx, src) {
        this.idx = idx;
        this.src = src;
    }

    onClick() {
        const modal = document.getElementById("picture_modal");
        modal.style.display = "block";

        // const carouselImage = document.querySelector(`.carousel-item`);
        console.log(this.idx);
        const carouselImage = document.querySelector(`.carousel-item[data-id="${this.idx}"]`);
        const items = document.querySelectorAll('.carousel-item');
        items.forEach((img) => {
            img.classList.remove('active');
        });

        console.log(carouselImage);
        carouselImage.classList.add('active');
    }

    getElement() {
        const img = document.createElement('img');
        img.setAttribute('src', this.src);

        const random = Math.floor(Math.random() * 3);

        if (previous === random)
            random = (random + 1) % 3;

        img.classList.add(imageSize[random]);
        img.classList.add('modalBtn');
        img.setAttribute('data-id', this.idx);
        img.addEventListener('click', this.onClick.bind(this));

        // previous = random;
        return img;
    }
}