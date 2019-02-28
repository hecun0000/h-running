const tpl = `<template>
  <div class="demo">
    <p class='info'>本模板已经支持elementUI</p>

    <el-button type="primary" class="btn" size=small>开始吧！</el-button>
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
<style>
.demo {
    margin-top:60px;
    text-align:center;
}

.info {
    font-size:14px;
    color: #666;
}

.btn {
  margin-top: 20px;
}
</style>`;

exports.tpl = tpl