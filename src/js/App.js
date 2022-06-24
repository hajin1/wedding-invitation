import '../scss/style.scss';
import googleCalendarIcon from '../../resources/google-calendar-icon.png';
import kakaoMapIcon from '../../resources/kakaomap_icon.png';
import naverMapIcon from '../../resources/navermap_icon.png';
import copyLinkIcon from '../../resources/copylink_icon.png';
import sendIcon from '../../resources/send.png';

export default class App {
    constructor() {
        this.init();
    }

    init() {
        this.createGoogleCalendarButton();
        this.bindMapButton();
        this.bindInstaButton();
        // this.bindInviteVideoLink();
    }

    bindInstaButton() {
        const button = document.getElementById('insta-button');
        button.addEventListener('click', () => {
            window.open('https://www.instagram.com/jin_hiking_s2/');
        });

        const sendIconElm = document.createElement('img');
        sendIconElm.src = sendIcon;
        button.append(sendIconElm);
    }

    bindMapButton() {
        const naverButton = document.getElementById('naver-map-button');
        naverButton.addEventListener('click', () => {
            window.open('https://map.naver.com/v5/directions/-/14141468.151074853,4506638.338950755,엘블레스,37688101,PLACE_POI/-/transit?c=14141002.3740654,4506638.3529793,15,0,0,0,dh');
        });

        const kakaoButton = document.getElementById('kakao-map-button');
        kakaoButton.addEventListener('click', () => {
            window.open('https://map.kakao.com/link/to/엘블레스,37.48281604699608,127.03482927733398');
        });

        const copyButton = document.getElementById('copy-link-button');
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText('서울 서초구 강남대로 213 스포타임 지하1층 엘블레스');
            window.alert('주소가 복사되었습니다!');
        });

        const kakaoIconElm = document.createElement('img');
        kakaoIconElm.src = kakaoMapIcon;
        kakaoButton.prepend(kakaoIconElm);

        const naverIconElm = document.createElement('img');
        naverIconElm.src = naverMapIcon;
        naverButton.prepend(naverIconElm);

        const copyIconElm = document.createElement('img');
        copyIconElm.src = copyLinkIcon;
        copyButton.prepend(copyIconElm);
    }

    createGoogleCalendarButton() {
        const buttonElm = document.getElementById('google-calendar-button');
        buttonElm.addEventListener('click', () => {
            const url = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=성수와 하진이의 결혼식&dates=20221002T123000/20221002T143000&details=❤︎&location=엘블레스, 대한민국 서울특별시 서초구 강남대로";
            window.open(url);
        });
        const iconElm = document.createElement('img');
        iconElm.src = googleCalendarIcon;
        buttonElm.prepend(iconElm);
    }

    // bindInviteVideoLink() {
    //     const elm = document.getElementById('invite-video');
    //     elm.addEventListener('click', () => {
    //         window.open('https://youtu.be/WUaBlwl4X3M');
    //     })
    // }

}

