import '../scss/style.scss';
import googleCalendarIcon from '../../resources/img/google-calendar-icon.png';
import kakaoMapIcon from '../../resources/img/kakaomap_icon.png';
import naverMapIcon from '../../resources/img/navermap_icon.png';
import copyLinkIcon from '../../resources/img/copylink_icon.png';
import unfoldIcon from '../../resources/img/unfold.png';
import { ACCOUNT_INFO } from './const';

export default class App {
	constructor() {
		this.init();
	}

	init() {
		this.renderAccountInfo();
		this.createGoogleCalendarButton();
		this.bindMapButton();
		this.bindInstaButton();

		const coverElm = document.getElementById('cover');
		coverElm.addEventListener('animationend', () => {
			coverElm.classList.add('hidden');

			const contentLayerElm = document.getElementById('content-layer');
			if (contentLayerElm.classList.contains('hidden')) {
				contentLayerElm.classList.remove('hidden');
				contentLayerElm.classList.add('show');
			}
		});
	}

	createAccountItem(account) {
		const elm = document.createElement('div');
		elm.classList.add('account-item');
		const bankElm = document.createElement('div');
		bankElm.innerHTML = `${account.bank} ${account.holder}<br />${account.number}`;
		const buttonElm = document.createElement('button');
		buttonElm.setAttribute('data-clipboard-text', `${account.bank} ${account.number.replaceAll('-', '')}`);

		buttonElm.textContent = '복사하기';
		buttonElm.classList.add('copy-btn');

		elm.append(bankElm);
		elm.append(buttonElm);

		return elm;
	}

	renderAccountInfo() {
		const groomListElm = document.getElementById('groom-account-list');
		ACCOUNT_INFO.groom.map(account => {
			const elm = this.createAccountItem(account);
			groomListElm.append(elm);
		});

		const brideListElm = document.getElementById('bride-account-list');
		ACCOUNT_INFO.bride.map(account => {
			const elm = this.createAccountItem(account);
			brideListElm.append(elm);
		});

		const clipboard = new ClipboardJS('.copy-btn');
		clipboard.on('success', e => {
			window.alert(`계좌번호(${e.text})가 복사되었습니다. 필요한 곳에 붙여넣기 하세요`);
		});

		this.bindAccountToggle();
	}

	bindAccountToggle() {
		const elms = document.getElementsByClassName('account-title');

		Array.from(elms).map(elm => {
			elm.querySelector('img').src = unfoldIcon;

			const listElm = elm.parentElement.querySelector('.account-list');
			listElm.setAttribute('style', `height: ${listElm.childElementCount * 50}px`);
			elm.addEventListener('click', () => {
				if (listElm.classList.contains('hide')) {
					listElm.classList.remove('hide');
					elm.querySelector('img').classList.add('rotate');
				} else {
					listElm.classList.add('hide');
					elm.querySelector('img').classList.remove('rotate');
				}
			});
		});
	}

	bindInstaButton() {
		const button = document.getElementById('insta-button');
		button.addEventListener('click', () => {
			window.open('https://www.instagram.com/jin_hiking_s2/');
		});
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
			navigator.clipboard.writeText('서울 서초구 강남대로 213 스포타임 지하1층 엘블레스').then(() => {
				window.alert('주소가 복사되었습니다!');
			});
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
			const url =
				'https://calendar.google.com/calendar/render?action=TEMPLATE&text=성수와 하진이의 결혼식&dates=20221002T123000/20221002T143000&details=❤︎&location=엘블레스, 대한민국 서울특별시 서초구 강남대로';
			window.open(url);
		});
		const iconElm = document.createElement('img');
		iconElm.src = googleCalendarIcon;
		buttonElm.prepend(iconElm);
	}
}
