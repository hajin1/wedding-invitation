import '../scss/style.scss';
import storyBackgroundImg from '../../images/story_background.jpeg'
import Marquee from './Marquee';
import 'bootstrap';


export default class App {
    constructor() {

        this.bindSmoothEffect();
        this.marquee = new Marquee();

        this.initImg();

        this.init();
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
        const section = document.getElementById("canvas_section"); //document.documentElement

        const canvas = document.getElementById("hero-lightpass");
        const context = canvas.getContext("2d");

        const frameCount = 148;
        const currentFrame = index => (
            `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
        )

        const preloadImages = () => {
            for (let i = 1; i < frameCount; i++) {
                const img = new Image();
                img.src = currentFrame(i);
            }
        };

        const img = new Image()
        img.src = currentFrame(1);
        canvas.width = 1158;
        canvas.height = 770;
        img.onload = function () {
            context.drawImage(img, 0, 0);
        }

        const updateImage = index => {
            img.src = currentFrame(index);
            context.drawImage(img, 0, 0);
        }

        window.addEventListener('scroll', () => {
            const scrollFraction = section.scrollTop / (section.scrollHeight - window.innerHeight);
            console.log(scrollFraction)

            const frameIndex = Math.min(
                frameCount - 1,
                Math.ceil(scrollFraction * frameCount)
            );

            requestAnimationFrame(() => updateImage(frameIndex + 1))
        });

        preloadImages()

    }

    initImg() {
        const img = document.getElementById('story_background')
        img.src = storyBackgroundImg;
    }
}

