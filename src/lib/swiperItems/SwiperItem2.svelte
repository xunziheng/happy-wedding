<div>
  <Swiper
    modules='{[EffectCards]}'
    effect='cards'
  >
    <SwiperSlide>
      <div class="card-container bg-green">
        Card 1
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="card-container bg-pink">
        Card 2
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="card-container bg-blue">
        Card 3
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
  .card-container {
    height: 450px;
    margin: 50px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }
</style>