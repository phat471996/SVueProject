import Vue from 'vue'

Vue.directive('sticky', {
  onScroll: (el) => {
    console.log(el)
  }
})