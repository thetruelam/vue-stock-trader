export default {
  namespaced: true,

  state: {
    funds: 10000,
    stocks: []
  },

  mutations: {
    setPortfolio(state, portfolio) {
      state.funds = portfolio.funds;
      state.stocks = portfolio.stocks ? portfolio.stocks : [];
    },
    buyStock(state, { stockId, quantity, stockPrice }) {
      const record = state.stocks.find(e => e.id == stockId);
      if (record) {
        record.quantity += quantity;
      } else {
        state.stocks.push({
          id: stockId,
          quantity
        })
      }
      state.funds -= stockPrice * quantity;
    },
    sellStock(state, { stockId, quantity, stockPrice }) {
      const record = state.stocks.find(e => e.id == stockId);
      if (record.quantity > quantity) {
        record.quantity -= quantity;
      } else {
        state.stocks.splice(state.stocks.indexOf(record), 1);
      }
      state.funds += stockPrice * quantity;
    }
  },

  actions: {
    buyStock({ commit }, order) {
      commit('buyStock', order);
    },
    sellStock({ commit }, order) {
      commit('sellStock', order);
    }
  },

  getters: {
    stocks(state, getters, rootState, rootGetters) {
      return state.stocks.map(stock => {
        const record = rootGetters['stocks/stocks'].find(e => e.id == stock.id);
        return {
          id: stock.id,
          quantity: stock.quantity,
          name: record.name,
          price: record.price
        }
      });
    },
    funds(state) {
      return state.funds;
    }
  }
}