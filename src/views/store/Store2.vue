<template>
  <div>
    <h1>두번째 Store</h1>
    <p>{{user}}</p>
    <p>{{getPhoneNumber1}} - {{getPhoneNumber2}} - {{getPhoneNumber3}}</p>
    <input type="text" v-model="inputText"  />
    <button @click="updateUser2(inputText)">뮤테이션 업데이트</button>
    <div>
      <input type="text" v-model="inputText2"  />
      <button @click="buttonClick2(inputText2)">액션 업데이트</button>
    </div>
    <hr>
    <p>{{condition}} {{doubleCount}}</p>
    <button @click="increment">모듈 B increment</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  data(){
    return{
      inputText:'',
      inputText2:''
    }
  },
  mounted() {
    
  },
  computed: {

    localComponent(){
      //로컬 컴포넌트용 computed
    },


    ...mapState(['user']),
    ...mapState('b',['condition']),
    ...mapGetters(['getPhoneNumber1','getPhoneNumber2','getPhoneNumber3']),
    ...mapGetters('b',['doubleCount'])
  },
  methods: {
    buttonClick(){
      this.updateUser(this.inputText)
    },
    buttonClick2(){
      this.updateUserAction(this.inputText2)
    },
    ...mapMutations(['updateUser']),
    ...mapMutations('b',['increment']),
    ...mapActions({
      updateUserAction: 'updateUser'
    })
    
  },
}
</script>

<style>

</style>
