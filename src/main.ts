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
      'hideMenuItems',
    ] // 必填，需要使用的 JS 接口列表
  });

  wx.ready(function () {
    //需在用户可能点击分享按钮前就先调用
    wx.updateAppMessageShareData({ 
      title: 'test 分享 哈喽', // 分享标题
      desc: '描述', // 分享描述
      link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
      imgUrl: 'http://local.xunziheng.top/share_icon.png', // 分享图标
      success: function () {
        // 设置成功
        console.log('设置成功')
      }
    });
    wx.updateTimelineShareData({ 
      title: 'test朋友圈', // 分享标题
      link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
      imgUrl: 'http://local.xunziheng.top/share_icon.png', // 分享图标
      success: function () {
        // 设置成功
        console.log('设置成功')
      }
    })
  });

  wx.error(function(res){
    // config信息验证失败会执行 error 函数，如签名过期导致验证失败，具体错误信息可以打开 config 的debug模式查看，也可以在返回的 res 参数中查看，对于 SPA 可以在这里更新签名。
    console.log('微信API失败：', res)
  });  
})

const app = new App({
  target: document.getElementById('app')
})

export default app
