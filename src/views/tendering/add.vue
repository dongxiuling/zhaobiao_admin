<template>
  <div class="app-container">
    <el-form :model="form">
      <el-form-item label="名称：" label-width="60px">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item>
        <VueUeditorWrap :config="myConfig" v-model="form.content" />
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
import { getData, addEle, editEle ,getById} from "@/api/tendering.js";
import { formData } from "@/utils/formData.js";
export default {
  data() {
    return {
      form: {
        title: "",
        content: "",
        typeId: this.$route.query.typeId
      },
      id: this.$route.query.id,
      myConfig: {
        elementPathEnabled: false,
        wordCount: false, //是否开启字数统计
        // 初始容器高度
        initialFrameHeight: 280,
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
      getById({
        id: this.id
      }).then(res => {
        this.form.title = res.data.title;
        this.form.content = res.data.content;
      });
    },
    submitHandle() {
      let data = formData(this.form);
      addEle(data).then(res => {
        this.$message({
          message: "添加成功",
          type: "success"
        });
        this.$router.push({
          path: "/tendering/list",
          query:{
            id:this.form.typeId
          }
        });
      });
    },
    // 编辑处理函数
    editHandle() {
      let data = formData({
          id:this.id,
          typeId:this.form.typeId,
          content:this.form.content,
          title:this.form.title,
      })

      editEle(data).then(res => {
        this.$message({
          message: "编辑成功",
          type: "success"
        });
        this.$router.push({
          path: "/tendering/list",
          query:{
            id:this.form.typeId
          }
        });
      });
    },
    cancelHandle(){
      this.getData();
    }
  },
  created() {
    // this.getData();
    if (this.form.typeId && this.id) {
        this.getData();
    }
  }
};
</script>

<style scoped>
</style>