import Vue from 'vue'
import App from './App.vue'
import Item from './components/Item.vue'
//Vue.component('names',names);

//Vue.component('app-lower',Lower);
new Vue({
  el: '#app',
  render: h => h(App)
})
