<Swiper
  direction='vertical'
  width={window.innerWidth}
  height={window.innerHeight}
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
</script>