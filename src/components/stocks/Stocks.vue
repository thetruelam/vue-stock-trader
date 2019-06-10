<template lang="pug">
  .row
    app-stock(v-for="stock in stocks" :stock="stock")
</template>

<script>
import appStock from './Stock';
import { mapGetters } from 'vuex';

export default {
  // data() {
  //   return {
  //     loading: true
  //   }
  // },
  components: {
    appStock,
  },
  computed: {
    ...mapGetters({
      stocks: 'stocks/stocks'
    })
  }
}
</script>

<style scoped>

</style>


