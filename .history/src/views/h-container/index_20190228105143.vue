<template>
  <div class="box">
    <div class="top-nav">
        <div class="logo"> 
            h-running
        </div>

    </div>
    <div class="r-main">
    
      <div class="display-container">
           <display :code="code"></display>
      </div>
      
            <editor @onCodeChange="onCodeChange"></editor>
      </div>
     
    </div>
  </div>
</template>

<script>
import editor from "../../components/editor";
import display from "../../components/display";
export default {
  components: {
    editor,display
  },
  data(){
      return {
          code:''
      }
  },
  methods: {
      onCodeChange(code){
          this.code = code;
          
      }
  }
};
</script>
