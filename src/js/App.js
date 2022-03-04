import '../scss/style.scss';
import introImg from '../../images/intro_image.png';
// import img1 from '../../images/marquee_1.jpeg';
// import img2 from '../../images/marquee_2.jpeg';
// import img3 from '../../images/marquee_3.jpeg';
// import img4 from '../../images/marquee_4.jpeg';

export default class App {
    constructor() {
        const img = introImg;




        this.init();

    }


    init() {
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");

            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 5;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
            }
        }

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

        window.addEventListener("scroll", reveal);

        window.addEventListener('load', scrollAnimationFunction);
        window.addEventListener('scroll', scrollAnimationFunction);
    }


}

