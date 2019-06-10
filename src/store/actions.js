import Vue from 'vue';

export const loadData = ({ commit }) => {
  Vue.http
    .get('data.json')
    .then(res => res.json())
    .then(data => {
      if (data) {
        const { stocks, funds, stockPortfolio } = data;
        
        const portfolio = {
          stocks: stockPortfolio,
          funds
        }

        commit('stocks/setStocks', stocks);
        commit('portfolio/setPortfolio', portfolio);
      }
    })
    .catch(err => {
      throw (err);
    });
};