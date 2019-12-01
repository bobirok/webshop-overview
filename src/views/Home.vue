<template>
  <div class="home col s10 l10 m10">
    <div class="wrapper-div utils-slider-main">
      <div class="slider wrapper-div">
        <Slider />
      </div>
      <div class="utils wrapper-div">
        <Utilities />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue'
import Utilities from '@/components/Utilities.vue'

export default {
  name: 'home',
  components: {
    Slider,
    Utilities
  },
  data() {
    return {
    }
  }
}
</script>

<style>
.home .utils-slider-main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: black !important
}

.home .utils-slider-main .utils, .slider{
  height: 100%;
} 
</style>