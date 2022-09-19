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
import { get } from './utils/request';

get('/jssdkSignatureGet', {
  url: window.location.href
}).then(res => {
  const { data } = res;
  wx.config({
    debug: true, // 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
    appId: data.appId, // 必填，公众号的唯一标识
    timestamp: data.timestamp, // 必填，生成签名的时间戳
    nonceStr: data.nonceStr, // 必填，生成签名的随机串
    signature: data.signature,// 必填，签名
    jsApiList: [
      'updateAppMessageShareData',
      'updateTimelineShareData',
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'onMenuShareQZone',
      'startRecord',
      'stopRecord',
      'onVoiceRecordEnd',
      'playVoice',
      'pauseVoice',
      'stopVoice',
      'onVoicePlayEnd',
      'uploadVoice',
      'downloadVoice',
      'chooseImage',
      'previewImage',
      'uploadImage',
      'downloadImage',
      'translateVoice',
      'getNetworkType',
      'openLocation',
      'getLocation',
      'hideOptionMenu',
      'showOptionMenu',
      'hideMenuItems',
      'showMenuItems',
      'hideAllNonBaseMenuItem',
      'showAllNonBaseMenuItem',
      'closeWindow',
      'scanQRCode',
      'chooseWXPay',
      'openProductSpecificView',
      'addCard',
      'chooseCard',
      'openCard',
    ] // 必填，需要使用的 JS 接口列表
  });

  wx.ready(function () {
    //需在用户可能点击分享按钮前就先调用
    wx.onMenuShareAppMessage({
      title: 'test 分享', // 分享标题
      desc: '描述', // 分享描述
      link: 'http://local.xunziheng.top', // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
      imgUrl: 'http://local.xunziheng.top/share_icon.png', // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果 type 是music或video，则要提供数据链接，默认为空
      success: function () {
        console.log('设置成功');
        // 用户点击了分享后执行的回调函数
      }
    })
    // 即将废弃的api，不过个人未认证的订阅号只能获取到这个权限
    wx.onMenuShareTimeline({
      title: 'test朋友圈', // 分享标题
      link: 'http://local.xunziheng.top', // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
      imgUrl: 'http://local.xunziheng.top/share_icon.png', // 分享图标
      success: function () {
        // 用户点击了分享后执行的回调函数
        console.log('设置成功');
      }
    });

    // 隐藏基本类按钮
    wx.hideAllNonBaseMenuItem();
  });
})

const app = new App({
  target: document.getElementById('app')
})

export default app
