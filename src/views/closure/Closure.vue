<template>
  <div>
    <h1>클로져(console 확인)</h1>
    <p>클릭 인덱스{{index}}</p>
    <button ref="button1">버튼1</button>
    <button ref="button2">버튼2</button>
    <button ref="button3">버튼3</button>
    <button ref="button4">버튼4</button>
    <button ref="button5">버튼5</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      index:0
    }
  },
  mounted() {
    for(var i = 1; i < 6; i++){
      var btn = this.$refs[`button${i}`];
      var that = this;
      (function(i){
        var idx = i;
        btn.addEventListener('click', () =>{
          console.log(idx);
          that.clickButton(idx);
        })
        
      })(i)      
    }
    
    //호이스팅 - 스크립트가 최초 실행될때 변수 선언을 스크립트 최상단으로 끌어올린후 실행이된다.
    // console.log(x , y)
    // var x = 1;
    // var y = 2;

    //클로져
    function outerFn(){
      const text = 'outer'
      function innerFn(){
        console.log('reference', text)
      }
      return innerFn
    }

    console.log(outerFn()()) // 커링 함수 

    //클로져 2
    function outerFn2(){
      const text = 'outer2';
      return function(){
        console.log('inner', text);
      }
    }
    outerFn2()()

    //클로져 3
    function makeCake(floavor){
      setTimeout( () =>{
        console.log(`made a '${floavor}' cake`)
      },1000)
    }

    makeCake('banana')
    
    function prepareCake(floavor){
      let gram = '400g'
      return ()=>{
        setTimeout(()=>{
          console.log(`made a '${floavor}' cake ${gram}`)
        },1000)
      }
    }
    const makeCakePre = prepareCake('CHOCO Banana')
    makeCakePre()
    
  },
  methods: {
    clickButton(index){
      this.index = index
    }
  },
}
</script>

<style>

</style>
