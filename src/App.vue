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
      <router-link to="/closure">Closure</router-link> |
      <router-link to="/todolist">Todolist</router-link>

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,textarea,button{margin:0;padding:0}
  fieldset,img{border:0 none}
  dl,ul,ol,menu,li {list-style:none}
  blockquote, q {quotes:none}
  blockquote:before, blockquote:after,q:before, q:after {content:'';content:none}
  input,select,textarea,button {vertical-align:middle;font-size:100%}
  button {border:0 none;background-color:transparent;cursor:pointer}
  table {border-collapse:collapse;border-spacing:0}
  body{-webkit-text-size-adjust:none} /* 뷰표트 변환시 폰트크기 자동확대 방지. */
  input:checked[type='checkbox'] {background-color:#666; -webkit-appearance:checkbox}
  input[type='text'],input[type='password'],input[type='submit'],input[type='search'],input[type='tel'],input[type='email'],html input[type='button'],input[type='reset'] {-webkit-appearance:none;border-radius:0}
  input[type='search']::-webkit-search-cancel-button {-webkit-appearance:none}
  input::-ms-clear{display:none}
  body {background:#fff}
  body,th,td,input,select,textarea,button {font-size:16px;line-height:1.5;font-family:'SpoqaSansNumber','NotoSansKr',system-ui,-apple-system,AppleSDGothicNeo-Regular,Helvetica,'Malgun Gothic','맑은 고딕',sans-serif;color:#444}

  a {color:#2b2b2b;text-decoration:none}
  a:active, a:hover {text-decoration:underline}
  address,caption,cite,code,dfn,em,var{font-style:normal;font-weight:normal}


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
