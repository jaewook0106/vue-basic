<template>
  <div>
    <h1>vuex 페이지입니다.</h1>
    <input type="text" v-model="inputValue" />
    <button @click="updateState">업데이트</button>

    <span>{{this.$store.state.user}}</span>
    <hr>
    <input type="text" v-model="phoneNumber1" /> - 
    <input type="text" v-model="phoneNumber2" /> - 
    <input type="text" v-model="phoneNumber3" />
    <button @click="updatePhoneNumber">업데이트</button>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex'


export default {
  data(){
    return{
      inputValue:'',
      phoneNumber1:'000',
      phoneNumber2:'0000',
      phoneNumber3:'0000',

    }
  },
  created() {    
    // let arr = this.$store.state.phoneNumber.split('-');
    this.phoneNumber1 = this.getPhoneNumber1
    this.phoneNumber2 = this.getPhoneNumber2
    this.phoneNumber3 = this.getPhoneNumber3

    // store에 mutation 하는 방법
    this.$store.commit('increment')
    console.log(this.$store);
    // b라는 모듈 store에 acyncIncrement 실행
    this.$store.dispatch('b/acyncIncrement');

    // b라는 모듈에서 getter참조
    let doubleCount = this.$store.getters['b/doubleCount']
    console.log(doubleCount)
  },
  computed:{
    ...mapState(['user']),
    ...mapGetters(['getPhoneNumber1','getPhoneNumber2','getPhoneNumber3']),


    totalPhoneNumber(){
      return `${this.phoneNumber1}-${this.phoneNumber2}-${this.phoneNumber3}`
    }
  },
  methods: {
    updateState(){
      // this.$store.commit('updateUser',this.inputValue)
      this.$store.dispatch('updateUser',this.inputValue)
      
      console.log(this.$store.state);
    },
    updatePhoneNumber(){
      this.$store.commit('updatePhoneNumber',this.totalPhoneNumber)
      
      console.log(this.$store.state)
      console.log(this.$store.getters.getPhoneNumber1)
    }
  },

}
</script>

<style>

</style>
