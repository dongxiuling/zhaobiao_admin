<template>
  <div class="app-container">
    <el-form>
      <el-form-item>
        <VueUeditorWrap :config="myConfig" v-model="msg" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitHandle()" size="mini">确定</el-button>
         <el-button size="mini" @click="cancelHandle()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import VueUeditorWrap from "vue-ueditor-wrap";
import { getData, setData } from "@/api/company.js";

export default {
  data() {
    return {
      msg: "",
      myConfig: {
        elementPathEnabled: false,
        wordCount: false, //是否开启字数统计
        // 初始容器高度
        initialFrameHeight: 380,
        // 初始容器宽度
        initialFrameWidth: "100%",
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        serverUrl: "http://192.168.1.198:80/tender/ueditor/controller.php",
        // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
        UEDITOR_HOME_URL: process.env.BASE_URL + "UEditor/"
      }
    };
  },
  components: {
    VueUeditorWrap
  },
  methods: {
    getData() {
      getData({
        key: "contact"
      }).then(res => {
        this.msg = res.data.contact;
      });
    },
    submitHandle() {
      let data = new FormData();
      data.append("key", "contact");
      data.append("value", this.msg);
      
      setData(data).then(res => {
        this.$message({
          message: "添加成功",
          type: "success"
        });
      });
    },
    cancelHandle(){
      this.getData();
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
</style>