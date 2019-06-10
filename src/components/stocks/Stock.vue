<template lang="pug">
  .col-sm-6.col-md-4.py-2
    .card
      .card-header.bg-light-green.text-success
          h3.card-title 
           | {{ stock.name }}
           small (Price: {{ stock.price }})
      .card-body
        .float-left
          input.form-control(type="number" placeholder="Quantity" v-model="quantity" :class="{danger: insufficientFunds}")
        .float-right
          b-button(variant="success" @click="buyStock" :disabled="quantity <= 0 || insufficientFunds")
            | {{ insufficientFunds ? 'Insufficient' : 'Buy' }}
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
    funds() {
      return this.$store.getters['portfolio/funds'];
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      // console.log(order);
      this.$store.dispatch('portfolio/buyStock', order);
      this.quantity = 0;
    }
  }
}
</script>

<style scoped>
.bg-light-green {
  background-color: lightgreen;
}
small {
  font-size: 50%;
}
.danger {
  border: 1px solid red;
}
</style>


