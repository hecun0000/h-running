<template>
  <div>
    <!-- <p>
      <el-button type="success" icon="el-icon-check" circle @click="RunResult"></el-button>
      <span class="theme" style="float:right">
        <el-select v-model="theme" size="mini" @change="themeChange" placeholder="请选择主题">
          <el-option
            v-for="item in themeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </span>
    </p>-->
    <div id="container" ref="container"></div>
  </div>
</template>

<script>
import * as monaco from "monaco-editor";
import { tpl } from "../utils/vueBasicTpl.js";
export default {
  props: {
    codes: {
      type: String,
      default: tpl
    },
    language: {
      type: String,
      default: "html"
    },
    editorOptions: {
      type: Object,
      default: function() {
        return {
          selectOnLineNumbers: true,
          roundedSelection: false,
          readOnly: false, // 只读
          cursorStyle: "line", //光标样式
          automaticLayout: false, //自动布局
          glyphMargin: true, //字形边缘
          useTabStops: false,
          fontSize: 18, //字体大小
          autoIndent: true, //自动布局
          quickSuggestionsDelay: 500 //代码提示延时
    
        };
      }
    }
  },
  data() {
    return {
      themeOption: [
        {
          value: "vs",
          label: "默认"
        },
        {
          value: "hc-black",
          label: "高亮"
        },
        {
          value: "vs-dark",
          label: "深色"
        }
      ],
      theme: "monokai",
      codesCopy: null //内容备份
    };
  },
  mounted() {
    console.log(tpl);

    this.initEditor();
  },
  methods: {
    initEditor() {
      let self = this;
      self.$refs.container.innerHTML = "";
      import("../utils/theme.json").then(data => {
        console.log(data);

        monaco.editor.defineTheme("monokai", data);

        self.monacoEditor = monaco.editor.create(self.$refs.container, {
          value: self.codesCopy || self.codes,
          language: self.language,
          theme: self.theme, //vs, hc-black, or vs-dark
          editorOptions: self.editorOptions,
          minimap: {
            enabled: false
          }
        });

        self.$emit("onMounted", self.monacoEditor); //编辑器创建完成回调
        self.monacoEditor.onDidChangeModelContent(function(event) {
          //编辑器内容changge事件
          self.codesCopy = self.monacoEditor.getValue();
          self.$emit("onCodeChange", self.monacoEditor.getValue(), event);
        });
        //编辑器随窗口自适应
        window.addEventListener("resize", function() {
          self.initEditor();
        });
      });
    },
    RunResult() {
      console.log(this.monacoEditor.getValue());
    },
    themeChange(val) {
      this.initEditor();
    }
  }
};
</script>

<style scoped>
</style>



