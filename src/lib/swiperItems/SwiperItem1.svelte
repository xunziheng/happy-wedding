<div class="container">
  <!-- 主题照片 -->
  <div
    class="ani text-center love-time"
    swiper-animate-effect="fadeInUp"
    swiper-animate-duration="1s"
    swiper-animate-delay="0.9s"
  >{loveTime}</div>
  <div class="wedding-text">我们结婚啦~</div>
</div>

<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  let loveTime = '';
  let timer;

  function getTimeDiff() {
    let date1= '2014/05/08 00:00:00';  //开始时间
    let date2 = new Date();    //结束时间
    let date3 = date2.getTime() - new Date(date1).getTime();   //时间差的毫秒数    
    //计算出相差天数
    let days=Math.floor(date3/(24*3600*1000))

    //计算出小时数
    let leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数
    let hours=Math.floor(leave1/(3600*1000))
    //计算相差分钟数
    let leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
    let minutes=Math.floor(leave2/(60*1000))
    //计算相差秒数
    let leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
    let seconds=Math.round(leave3/1000)
    return "相爱第"+days+"天"+hours+"小时"+minutes+"分钟"+seconds+"秒";
  }
  onMount(() => {
    timer = setInterval(() => {
      loveTime = getTimeDiff();
    }, 1000)
  })
  onDestroy(() => {
    clearInterval(timer);
  })
</script>

<style>
  .container {
    width: 100%;
    height: 100%;
  }
  .container::after {
    content: '';
    background-image: url('../../assets/imgs/bg-xi.png');
    background-position: 50% 30%;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.35;
  }
  .love-time {
    color: aliceblue;
    text-shadow: 0 0 5px #ffd45e, 0 0 5px #af5aff;
    font-size: 27px;
    position: absolute;
    bottom: 190px;
    width: 100%;
  }
  .wedding-text {
    width: 100%;
    text-align: center;
    font-size: 35px;
  }
</style>