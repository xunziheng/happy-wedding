import App from './App.svelte';
import 'amfe-flexible';
import './reset.css';
import 'swiper/css';
import 'swiper/css/navigation';
import './app.css';

import * as swiperAni from './assets/ts/animate';
import './assets/css/animate.min.css'
window.swiperAni = swiperAni;

const app = new App({
  target: document.getElementById('app')
})

export default app
