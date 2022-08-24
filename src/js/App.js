import '../scss/style.scss';
import { ACCOUNT_INFO, GALLERY_SRC, galleryResponsive } from './const';

export default class App {
	constructor() {
		this.init();
	}

	init() {
		this.renderAccountInfo();
		this.renderGallery();
		this.bindButtonClickEvent();

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

	renderGallery() {
		const galleryElm = document.getElementById('gallery');
		GALLERY_SRC.map(src => {
			const elm = document.createElement('a');
			elm.setAttribute('href', src.replace('/upload', `/upload/${galleryResponsive.md}`));
			elm.classList.add('img-wrapper');
			const imgElm = document.createElement('img');
			imgElm.setAttribute('loading', 'lazy');
			imgElm.setAttribute('src', src.replace('/upload', `/upload/${galleryResponsive.sm}`));
			elm.append(imgElm);
			galleryElm.append(elm);
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

	bindButtonClickEvent() {
		const button = document.getElementById('insta-button');
		button.addEventListener('click', () => {
			window.open('https://www.instagram.com/jin_hiking_s2/');
		});

		const naverButton = document.getElementById('naver-map-button');
		naverButton.addEventListener('click', () => {
			window.open('https://map.naver.com/v5/directions/-/14141468.151074853,4506638.338950755,엘블레스,37688101,PLACE_POI/-/transit?c=14141002.3740654,4506638.3529793,15,0,0,0,dh');
		});

		const kakaoButton = document.getElementById('kakao-map-button');
		kakaoButton.addEventListener('click', () => {
			window.open('https://map.kakao.com/link/to/엘블레스,37.48281604699608,127.03482927733398');
		});

		const clipboard = new ClipboardJS('#copy-link-button');
		clipboard.on('success', () => {
			window.alert(`주소가 복사되었습니다!`);
		});

		const buttonElm = document.getElementById('google-calendar-button');
		buttonElm.addEventListener('click', () => {
			const url =
				'https://calendar.google.com/calendar/render?action=TEMPLATE&text=성수와 하진이의 결혼식&dates=20221002T123000/20221002T143000&details=❤︎&location=엘블레스, 대한민국 서울특별시 서초구 강남대로';
			window.open(url);
		});
	}
}
