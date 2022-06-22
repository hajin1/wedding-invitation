import '../scss/style.scss';
import mainImgSrc from '../../resources/main_image.jpg';
import storyImg1Src from '../../resources/story1.jpeg';
import storyImg2Src from '../../resources/story2.jpeg';
import storyImg3Src from '../../resources/story3.jpeg';
import storyImg4Src from '../../resources/story4.jpeg';
import googleCalendarIcon from '../../resources/google-calendar-icon.png';

export default class App {
    constructor() {
        this.init();
    }

    init() {
        // const mainImg = document.getElementById('main-img');
        // mainImg.src = mainImgSrc;

        const storyImg1 = document.getElementById('story-img1');
        storyImg1.src = storyImg1Src;
        const storyImg2 = document.getElementById('story-img2');
        storyImg2.src = storyImg2Src;
        const storyImg3 = document.getElementById('story-img3');
        storyImg3.src = storyImg3Src;
        const storyImg4 = document.getElementById('story-img4');
        storyImg4.src = storyImg4Src;

        this.createGoogleCalendarButton();
        // this.bindInviteVideoLink();
        // const sections = document.getElementsByClassName('section');
        // console.log(window.innerHeight);
        // sections[0].style.height = `${window.innerHeight}px`;
        // sections[1].style.height = `${window.innerHeight}px`;

    }

    createGoogleCalendarButton() {
        const buttonElm = document.getElementById('google-calendar-button');
        buttonElm.addEventListener('click', () => {
            const url = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=성수와 하진이의 결혼식&dates=20221002T123000/20221002T143000&details=❤︎&location=엘블레스, 대한민국 서울특별시 서초구 강남대로";
            window.open(url);
        });
        const iconElm = document.createElement('img');
        iconElm.src = googleCalendarIcon;
        console.log(iconElm);
        console.log(buttonElm);
        buttonElm.append(iconElm);
    }

    bindInviteVideoLink() {
        const elm = document.getElementById('invite-video');
        elm.addEventListener('click', () => {
            window.open('https://youtu.be/WUaBlwl4X3M');
        })
    }

}

