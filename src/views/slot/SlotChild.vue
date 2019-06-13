<template>
  <div class="child">
    slot child
    <h3>
      <slot name="title" />
    </h3>
    <hr>
      <slot 
      :item="data"
      name="content"
      >
    </slot>
    <hr>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      type:Array,
      required:true
    }
  }
}
</script>

<style scoped>
  .child{
    margin:10px;
    border:5px solid green;
  }
</style>
