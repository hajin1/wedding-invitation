import '../scss/style.scss';
import mainImgSrc from '../../images/main_image.jpg';
import storyImg1Src from '../../images/story1.jpeg';
import storyImg2Src from '../../images/story2.jpeg';
import storyImg3Src from '../../images/story3.jpeg';
import storyImg4Src from '../../images/story4.jpeg';

export default class App {
    constructor() {
        this.init();
    }

    init() {
        const mainImg = document.getElementById('mainImg');
        mainImg.src = mainImgSrc;

        const storyImg1 = document.getElementById('story-img1');
        storyImg1.src = storyImg1Src;
        const storyImg2 = document.getElementById('story-img2');
        storyImg2.src = storyImg2Src;
        const storyImg3 = document.getElementById('story-img3');
        storyImg3.src = storyImg3Src;
        const storyImg4 = document.getElementById('story-img4');
        storyImg4.src = storyImg4Src;

        // const sections = document.getElementsByClassName('section');
        // console.log(window.innerHeight);
        // sections[0].style.height = `${window.innerHeight}px`;
        // sections[1].style.height = `${window.innerHeight}px`;

    }

}

