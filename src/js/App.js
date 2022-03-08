import '../scss/style.scss';
import introImg from '../../images/intro_image.png';
import Marquee from './Marquee';
import 'bootstrap';

export default class App {
    constructor() {
        // this.init();
        this.bindSmoothEffect();
        this.marquee = new Marquee();
        this.marquee.renderMarquee();
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
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function () {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }


}

