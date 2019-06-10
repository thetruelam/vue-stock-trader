<template lang="pug">
  .row
    app-stock(v-for="stock in stocks" :stock="stock")
</template>

<script>
import { mapGetters } from "vuex";
import appStock from "./Stock";

export default {
  computed: {
    ...mapGetters({
      stocks: "portfolio/stocks"
    })
  },
  components: {
    appStock
  }
};
</script>

