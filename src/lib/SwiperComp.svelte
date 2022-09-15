<Swiper
  class='main-swiper'
  direction='vertical'
  width={window.innerWidth}
  height={window.innerHeight}
  on:init={onInit}
  on:slideChangeTransitionEnd={onSlideChangeTransitionEnd}
>
  <SwiperSlide>
    <SwiperItem1 />
  </SwiperSlide>
  <SwiperSlide>
    <SwiperItem2 />
  </SwiperSlide>
  <SwiperSlide>
    <SwiperItem3 />
  </SwiperSlide>
</Swiper>
<audio id="bgAudio" autoplay loop>
  <source src={bgAudio} type="audio/mpeg">
</audio>

<script lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import SwiperItem1 from './swiperItems/SwiperItem1.svelte';
  import SwiperItem2 from './swiperItems/SwiperItem2.svelte';
  import SwiperItem3 from './swiperItems/SwiperItem3.svelte';
  import { start, stop } from '../app'
  import { onMount } from 'svelte';
  import bgAudio from '../assets/audio/bg-audio.mp3'

  function onInit(e) {
    const [swiper, progress] = e.detail;
    window.swiperAni.swiperAnimateCache(swiper);
    window.swiperAni.swiperAnimate(swiper);

    const activeIndex = swiper.activeIndex;
    toggleAnimationState(activeIndex);
  }

  function onSlideChangeTransitionEnd(e) {
    const [swiper, progress] = e.detail;
    window.swiperAni.swiperAnimate(swiper);

    const activeIndex = swiper.activeIndex;
    toggleAnimationState(activeIndex);
  }

  function toggleAnimationState(activeIndex) {
    /** 滑动到特定页面开始下落表情 */
    if (activeIndex === 0) {
      start();
    } else {
      stop();
    }
  }

  let audio, timer, second = 10;
  function palyAudio() {
    audio = document.getElementById("bgAudio");
    // audio.src = bgAudio;
    let playPromise; 
    playPromise = audio.play();
    if (playPromise) {
      playPromise.then(() => {
        // 音频加载成功
        // 音频的播放需要耗时
        timer = setInterval(() => {
          second--;
          if (second <= 0) {
            audio.pause()
            clearInterval(timer);
          }
        }, 1000);
      }).catch((e) => {
        // 音频加载失败
        console.error(e);
      });
    }
  }

  onMount(() => {
    // palyAudio();
  })
</script>

<style>
</style>