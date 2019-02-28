<template>
  <div class="display-box">
    <div  ref="display"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import rounderStr from '../utils/roundStr.js'
export default {
  props: {
    code: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      html: "",
      js: "",
      css: "",
      id:rounderStr()
    };
  },
  watch: {
    code() {
      this.destroyCode();
      this.renderCode();
    }
  },
  mounted(){
      this.renderCode();
  },
  beforeDestroy() {
    this.destroyCode();
  },
  methods: {
    destroyCode() {
      const $target = document.getElementById(this.id);
      if ($target) $target.parentNode.removeChild($target);

      if (this.component) {
        this.$refs.display.removeChild(this.component.$el);
        this.component.$destroy();
        this.component = null;
      }
    },
    renderCode() {
      this.splitCode();
    log
      if (this.html !== "" && this.js !== "") {
        const parseStrToFunc = new Function(this.js)();

        parseStrToFunc.template = this.html;
        const Component = Vue.extend(parseStrToFunc);
        this.component = new Component().$mount();

        this.$refs.display.appendChild(this.component.$el);


          if (this.css !== '') {
          const style = document.createElement('style');
          style.type = 'text/css';
          style.id = this.id;
          style.innerHTML = this.css;
          document.getElementsByTagName('head')[0].appendChild(style);
        }
      
      }
    },
    getSource(source, type) {
      const regex = new RegExp(`<${type}[^>]*>`);
      let openingTag = source.match(regex);

      if (!openingTag) return "";
      else openingTag = openingTag[0];

      return source.slice(
        source.indexOf(openingTag) + openingTag.length,
        source.lastIndexOf(`</${type}>`)
      );
    },
    splitCode() {
      const script = this.getSource(this.code, "script").replace(
        /export default/,
        "return "
      );
      const style = this.getSource(this.code, "style");
      const template =
        '<div id="h-app">' + this.getSource(this.code, "template") + "</div>";

      this.js = script;
      this.css = style;
      this.html = template;
    }
  }
};
</script>


