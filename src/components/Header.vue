<template lang="pug">
  b-navbar(type="dark" variant="success")
    .container.px-3
      b-navbar-brand(to="/") Stock Trader
      b-navbar-nav
        b-nav-item(to="/portfolio" active-class="active") Portfolio
        b-nav-item(to="/stocks" active-class="active") Stocks


      b-navbar-nav.ml-auto  
        b-nav-item(@click="endDay") End Day
        b-nav-item-dropdown(text="Save & Load" right)
          b-dropdown-item(@click="saveData") Save Data
          b-dropdown-item(@click="loadData") Load Data
        b-nav-text(style={color: '#fff'})
          strong Funds: {{ funds | currency }}
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    funds() {
      return this.$store.getters["portfolio/funds"];
    }
  },
  methods: {
    ...mapActions({
      randStocks: 'stocks/randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      this.randStocks();
    },
    saveData() {
      const data = {
        funds: this.funds,
        stockPortfolio: this.$store.getters['portfolio/stocks'],
        stocks: this.$store.getters['stocks/stocks']
      };

      this.$http.put('data.json', data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>
