<template>
  <div class="template_todo">
    <div class="wrap_todo">
      <div class="cont_tit">
        <strong class="tit_item">{{listTitle}}</strong>
      </div>
      <ul class="list_todo">
        <li v-for="(item,idx) in todoListData" :key="idx">
          <span class="txt_info" v-if="item.basicSetting">{{idx + 1}}. {{item.infoText}}</span>
          <input type="text" class="inp_revise" v-if="item.reviseSetting" v-model="item.infoText">
          <button class="btn_revise" v-if="item.basicSetting" @click="clickReviseList(idx)" >수정</button>
          <button class="btn_revise" v-if="item.reviseSetting" @click="clickConfirm(idx)">확인</button>
          <button class="btn_delete" @click="clickDeleteList(idx)"><span class="txt_close">X</span></button>
        </li>
      </ul>
      <div class="box_control">
        <input type="text" class="inp_item" v-model="spaceTextInp">
        <button class="btn_add" @click="clickAddList(spaceTextInp)">추가</button>
      </div>
    </div>
    
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  data(){
    return{
      listTitle:'Space List',
      spaceTextInp:'',
      infoControl:true,
    }
  },
  created(){
    // this.$store.dispatch('TodoListModule/testTest');
    
  },
  mounted(){
    // console.log(this.$store.state.TodoListModule)
    
  },
  computed:{
    ...mapState('TodoListModule',['todoListData','spaceText'])
  },
  watch:{
    todoListData(){
      this.spaceTextInp = ''
    }
  },
  methods:{
    ...mapActions('TodoListModule',['clickAddList','clickDeleteList','clickReviseList','clickConfirm'])
    
  }
}
</script>



<style lang="scss" scoped>
  .template_todo{
    padding:50px 20px;
  }
  .wrap_todo{
    width:600px;
    margin:0 auto;
    // border:1px solid #ddd;
    box-sizing:border-box;
  }
  .cont_tit{
    height:50px;
    .tit_item{
      font-size:20px;
      color:#42b983
    }
  }
  .list_todo{
    border-top:2px solid #666;
    li{
      position:relative;
      height:50px;
      padding:10px 120px 10px 10px;
      border-bottom:1px solid #ddd;
      text-align:left;
      box-sizing:border-box;
    }
    .txt_info{
      display:inline-block;
      font-size:15px;
    }
    .btn_delete{
      position:absolute;
      top:10px;
      right:5px;
      padding:5px;
      font-size:0;
      line-height:1;
      .txt_close{
        font-size:15px;
      }
    }
  }
  .btn_revise{
    position:absolute;
    top:10px;
    right:40px;
    height:30px;
    padding:0 20px;
    border-radius:2px;
    font-size:14px;
    font-weight:bold;
    background-color:#6b930a;
    box-sizing:border-box;
    color:#fff;
  }
  .inp_revise{
    width:100%;
    height:30px;
    padding:5px;
    border:1px solid #42b983;
    border-radius:2px;
    box-sizing:border-box;
  }
  .box_control{
    position:relative;
    padding:10px 100px 10px 10px;
    text-align:left;
    .inp_item{
      width:100%;
      height:40px;
      padding:5px;
      border:1px solid #42b983;
      border-radius:2px;
      box-sizing:border-box;
    }
    .btn_add{
      position:absolute;
      top:10px;
      right:10px;
      height:40px;
      padding:0 20px;
      border-radius:2px;
      font-size:14px;
      font-weight:bold;
      background-color:#6b930a;
      box-sizing:border-box;
      color:#fff;
      

    }
  }
</style>
