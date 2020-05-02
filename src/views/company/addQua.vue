<template>
  <div class="app-container">
    <el-form>
      <el-form-item label="资质名称：">
        <el-input v-model="title" />
      </el-form-item>
      <el-form-item>
        <VueUeditorWrap :config="myConfig" v-model="content" />
      </el-form-item>
      <el-form-item>
        <el-button v-if="id" type="primary" @click="editHandle()" size="mini">确定</el-button>
        <el-button v-else type="primary" @click="submitHandle()" size="mini">确定</el-button>
        <el-button size="mini" @click="cancelHandle()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import VueUeditorWrap from "vue-ueditor-wrap";
import { addQua, getQuaById ,editQua} from "@/api/company.js";

export default {
  data() {
    return {
      title: "",
      content: "",
      id: this.$route.query.id,
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
      getQuaById({
        id: this.id
      }).then(res => {
        this.title = res.data.title;
        this.content = res.data.content;
        // console.log(res)
      });
    },
    submitHandle() {
      let data = new FormData();
      data.append("title", this.title);
      data.append("content", this.content);

      addQua(data).then(res => {
        this.$message({
          message: "添加成功",
          type: "success"
        });
        this.$router.push("/company/qualification");
      });
    },
    // 编辑处理函数
    editHandle() {
      let data = new FormData();
      data.append("id",this.id)
      data.append("title", this.title);
      data.append("content", this.content);

      editQua(data).then(res => {
        this.$message({
          message: "编辑成功",
          type: "success"
        });
        this.$router.push("/company/qualification");
      });
    },cancelHandle(){
      this.getData();
    }
  },
  created() {
    if (this.id) {
      this.getData();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>