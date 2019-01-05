const tpl = `<template>
  <div class="test">
    本模板已经支持elementUI
    <el-button type="primary" class="btn">按钮</el-button>

    <p class="btn">测试</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        
      }
    },
    methods: {
      
    },
    mounted () {
      
    }
  }
</script>
<style lang="scss" type="text/css">

.test {
    color:red;
    .btn {
        border:1px solid;
    }
}
</style>`;

exports.tpl = tpl