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

  function onInit (e) {
    const [swiper, progress] = e.detail;
    window.swiperAni.swiperAnimateCache(swiper);
    window.swiperAni.swiperAnimate(swiper);
  }

  function onSlideChangeTransitionEnd (e) {
    const [swiper, progress] = e.detail;
    window.swiperAni.swiperAnimate(swiper);
  }
</script>

<style>
</style>