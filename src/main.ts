import App from './App.svelte';
import 'amfe-flexible';
import './reset.css';
import 'swiper/css';
import 'swiper/css/navigation';
import './app.css';

import * as swiperAni from './assets/ts/animate';
import './assets/css/animate.min.css'
window.swiperAni = swiperAni;

import wx from 'weixin-js-sdk';

wx.config({
  debug: true, // 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
  timestamp: , // 必填，生成签名的时间戳
  nonceStr: '', // 必填，生成签名的随机串
  signature: '',// 必填，签名
  jsApiList: [] // 必填，需要使用的 JS 接口列表
});
//   appId: 'wx6550244a92015fa4', // 必填，公众号的唯一标识

const app = new App({
  target: document.getElementById('app')
})

export default app
