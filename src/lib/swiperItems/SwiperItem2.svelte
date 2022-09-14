<div>
  <Swiper
    modules='{[EffectCards]}'
    effect='cards'
    class='swiper-3d'
  >
    <SwiperSlide>
      <div>
        Card 1
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
        Card 2
      </div>
    </SwiperSlide>
  </Swiper>
</div>

<script lang='ts'>
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import { EffectCards } from 'swiper';
  import 'swiper/css/effect-cards';
</script>

<style>

</style>