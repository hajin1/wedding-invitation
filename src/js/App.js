import '../scss/style.scss';
import introImg from '../../images/intro_image.png';
import storyBackgroundImg from '../../images/story_background.jpeg'
import Marquee from './Marquee';
import 'bootstrap';

export default class App {
    constructor() {
        // this.init();
        this.bindSmoothEffect();
        this.marquee = new Marquee();

        this.initImg();
    }

    bindSmoothEffect() {
        const elements = document.querySelectorAll('[data-smooth]');

        let options = {
            rootMargin: '0px',
            threshold: 0.1
        }

        elements.forEach((element) => {
            let observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    } else {
                        entry.target.classList.remove('show');
                    }
                })
            }, options);
            observer.observe(element);
        });
    }

    init() {

    }

    initImg() {
        const img = document.getElementById('story_background')
        img.src = storyBackgroundImg;
    }
}

