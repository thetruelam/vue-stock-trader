<template lang="pug">
  .col-sm-6.col-md-4.py-2
    .card
      .card-header.bg-info.text-white
          h3.card-title 
           | {{ stock.name }}
           small (Price: {{ stock.price }} | Quantity: {{ stock.quantity }})
      .card-body
        .float-left
          input.form-control(type="number" placeholder="Quantity" v-model="quantity" :class="{danger: insufficientQuantity}")
        .float-right
          b-button(variant="info" @click="sellStock" :disabled="quantity <= 0 || insufficientQuantity")
            | {{ insufficientQuantity ? 'NotEnough' : 'Sell'}}
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    } 
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'portfolio/sellStock'
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
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
