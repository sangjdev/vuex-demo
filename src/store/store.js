import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    //컴포넌트 간 공유할 data
    state: {
        counter: 0
    },
    getters: {
        getCounter: function (state) {
            return state.counter;
        }

    },
    // getters 와 Mutations 의 차이는 
    // Mutations는 인자를 받아 Vuex에 넘겨 줄 수있고,
    // computed가 아닌 methods에 등록
    // Mutations의 성격상 안에 정의한 로직들이 순차적으로 일어나야
    // 컴포넌트의 반영여부를 제대로 추적 할 수가 있기 때문이다.
    //=================================
    // Mutations 동기적로직을 정의
    // Actions 비동기적로직을 정의
    mutations: {
        // addCounter: function (state, payload) {
        //     state.counter = payload;
        // },
        addCounter: function (state) {
            state.counter = 10;
        },
        increment: function (state, payload) {  
            state.counter = payload;
        }
    },
    //사용자의 입력에 따라 반응할 methods
    // setTimeout() 이나 http통신 처리 가팅 결과를 받아올 타이밍이 예측되지
    // 않은 로직을 작성

    // actions에서 muation을 호출하고 mutation에서 state를 관리하는 구조로만든다.
    // 이로써 mutationd의 역할 자체가 State관리에 주안점을 둔다.
    actions: {
        addCounter: function (context) {
            return context.commit('addCounter');
        },
        asyncIncrement: function (context, payload) {
            return setTimeout(function () {
                context.commit('increment',payload.by);
            }, payload.duration);
            
        }
    }
})