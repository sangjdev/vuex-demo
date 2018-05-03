<template>
  <div>
      <hr>
      <!-- Child counter : {{passedCounter}} <br> -->
      Child counter : {{this.$store.state.counter}} <br>
      <!-- 코드간략화 -->
      Child counter : {{childCounter}} <br>
      <button @click="addCounter">+</button>
      <button @click="addCounter2">-</button>
      <button @click="asyncIncrement">++</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  props: ["passedCounter"],
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    addCounter() {
      this.$store.state.counter++;
    },
    // mutationd을 호출할때는 state를 호출할때 처럼 $store.state가 아니라
    // commit을 이용하여 mutation이벤트를 호출해야한다.
    addCounter2() {
      this.$store.commit('addCounter');
    },
    asyncIncrement() {
      this.$store.dispatch('asyncIncrement');
    }
    // mapGetters와 같이 Vuex의 내장함수이고,
    // Mutation으로 간략하게 된 methods를 더 직관적이게 작성가능하다.
    // 앞 addCounter는 해당 컴포넌트에서의 메서드를, 뒤 addCounter는 
    // Vuex의 Mutations을 의미함.
    // ,
    // ...mapMutations({
    //   addCounter: 'addCounter'
    // })
  },
  // computed속성의 장점은 caching이다.
  // 여러컴포넌트에서 같은로직을 중복사용하게 되는걸 Vuex의 getter을
  // 이용해 해소한다.

  // computed 안에 넣으면 사용할 수있다.
  //   childCounter() {
  //         return this.$store.getters.getCounter;
  //       }

  // mapGetters는 Vuex의 내장함수이다.
  // Getter로 가독성이 올라간 코드를 더 직관적이게 작성가능하다.
  computed: mapGetters({
      childCounter : 'getCounter'
  })
};
</script>

<style>

</style>

