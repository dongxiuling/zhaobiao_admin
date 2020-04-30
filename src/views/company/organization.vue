<template>
   <div class="app-container">
    <el-form >
      <el-form-item>
           <VueUeditorWrap :config="myConfig" v-model="msg" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" size="mini">确定</el-button>
        <el-button @click="onCancel" size="mini">取消</el-button>
      </el-form-item>
    </el-form>
   </div>
</template>

<script>
import VueUeditorWrap from "vue-ueditor-wrap";
export default {
  data() {
    return {
      msg:
        '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',
      myConfig: {
        elementPathEnabled : false,
        wordCount:false,      //是否开启字数统计
        // 初始容器高度
        initialFrameHeight: 380,
        // 初始容器宽度
        initialFrameWidth: "100%",
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        serverUrl: "http://35.201.165.105:8000/controller.php",
        // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
        UEDITOR_HOME_URL: process.env.BASE_URL + 'UEditor/',
      }
    };
  },
  components: {
    VueUeditorWrap
  }
};
</script>

<style lang="scss" scoped>
</style>