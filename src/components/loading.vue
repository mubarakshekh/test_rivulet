<template>
  <div >
 

 <ring-loader :loading="loading" :color="color1" :size="size"></ring-loader>

  </div>
</template>

<script>
import RingLoader from 'vue-spinner/src/RingLoader.vue'

export default {
  name: 'Loading',
   props: ["loading"],
    data () {
    return {
      color1: '#5bc0de',
      size: '45px',
    }
  },
    components: {
    RingLoader,
  }
}
</script>