<template>
  <router-view></router-view>
</template>

<script>
import home from './components/home.vue'
import login from './components/login.vue'
import mypage from './components/mypage.vue'

export default {
  components: {
    'home' : home,
    'login': login,
    'mypage': mypage
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>

</style>
