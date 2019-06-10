<template lang="pug">
  #app
    app-header
    .container
      .row
        .col-12
          h1 Stock Trader
          hr
          .loading-container(v-if="loading")
            app-loader
          transition(name="slide" mode="out-in")
            router-view(v-if="!loading")
</template>


<script>
import appHeader from './components/Header';
import appLoader from './components/Loader';

export default {
  name: 'app',
  components: {
    appHeader,
    appLoader
  },
  created() {
    this.$store.dispatch('stocks/initStock');
  },
  computed: {
    loading() {
      // return this.$store.getters.loading;
      return this.$store.getters['stocks/loading'];
    }
  }
}
</script>

<style scoped>
.loading-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>

