<template>
  <Swiper
    modules='{[EffectCards]}'
    effect='cards'
    autoHeight
  >
    <SwiperSlide>
      <div class='bg-blue-400 h-100 w-50'>
        Card 1
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class='bg-green-400 h-100'>
        Card 2
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script lang='ts'>
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import { EffectCards } from 'swiper';
  import 'swiper/css/effect-cards';
</script>