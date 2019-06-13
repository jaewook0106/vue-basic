<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/slot">Slot</router-link> |
      <router-link to="/dynamic">Dynamic</router-link> |
      <router-link to="/tree">Tree Menu</router-link> |
      <router-link to="/params/1">Params</router-link> |
      <router-link to="/nested">Nested</router-link> |
      <router-link to="/factorial">Factorial</router-link> |
      <router-link to="/store">Store</router-link> |
      <router-link to="/store2">Store2</router-link> |
      <router-link to="/closure">Closure</router-link> 

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border:5px solid pink
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
