<template>
  <div>
    <h1>중첩된 라우터 입니다.</h1>
    <nav>
      <router-link to="/nested/a">A</router-link>
      <router-link :to="rtouteB">B</router-link>
      <!-- <router-link to="/nested/c">C</router-link> -->
      <span @click="goC">C</span>
    </nav>
    <router-view class="router"></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      rtouteB : {name:'router-b'}
    }
  },
  methods: {
    goC(){
      this.$router.push('/nested/c')
    }
  },
}
</script>

<style scoped>
  .router{
    border:5px solid skyblue
  }
</style>
