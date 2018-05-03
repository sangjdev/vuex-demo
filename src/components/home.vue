<template>
  <div>
    <h1>home</h1>
    <button v-on:click="add">+</button>  
    <h3>{{num}}</h3>
    <child v-bind:passedCounter="num"></child>
  </div>
</template>

<script>
import child from './child.vue'
export default {
  data() {
    return {
      num: 1, 
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    add: function() {
      this.num++;
    }
  },
  components: {
    'child': child
  }
};
</script>

<style>

</style>
