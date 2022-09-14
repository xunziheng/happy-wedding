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
</Swiper>

<script lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import SwiperItem1 from './swiperItems/SwiperItem1.svelte';
  import SwiperItem2 from './swiperItems/SwiperItem2.svelte';
  import { start, stop } from '../app'

  function onInit (e) {
    const [swiper, progress] = e.detail;
    window.swiperAni.swiperAnimateCache(swiper);
    window.swiperAni.swiperAnimate(swiper);
  }

  function onSlideChangeTransitionEnd (e) {
    const [swiper, progress] = e.detail;
    window.swiperAni.swiperAnimate(swiper);

    const activeIndex = swiper.activeIndex;
    /** 滑动到特定页面开始下落表情 */
    if (activeIndex === 1) {
      start();
    } else {
      stop();
    }
  }
</script>

<style>
</style>