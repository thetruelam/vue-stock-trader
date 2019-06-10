import Vue from 'vue';

export default {
  namespaced: true,
  
  state: {
    stocks: [],
    loading: true
  },

  mutations: {
    setStocks(state, stocks) {
      state.stocks = stocks;
    },
    randStocks(state) {
      state.stocks.forEach(stock => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
      });
    },
    setLoading(state, payload) {
      state.loading = payload;
    }
  },

  actions: {
    initStock({ commit }) {
      Vue.http.post('http://5cfa3a34f26e8c00146d0402.mockapi.io/stock-trader/stocks')
      .then(res => {
        // console.log(res.body);
        commit('setStocks', res.body);
        commit('setLoading', false);
      })
      .catch(err => {
        throw(err);
      });
    },
    // buyStock({ commit }, order) {
    //   commit();
    // },
    randomizeStocks({ commit }) {
      commit('randStocks');
    }
  },

  getters: {
    stocks(state) {
      return state.stocks;
    },
    loading(state) {
      return state.loading
    }
  }
}