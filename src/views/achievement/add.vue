<template>
  <div class="app-container">
    <el-page-header @back="$router.go(-1)" content style="margin-bottom:20px;"></el-page-header>
    <el-form :model="form">
      <el-form-item label="名称：" label-width="60px">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="图片：" label-width="60px">
        <el-upload
          class="avatar-uploader"
          action="http://www.gxxmglzx.com/tender/admin/img_upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
import { getData, setData, editPer, getPerById } from "@/api/achievement.js";
import { formData } from "@/utils/formData.js";
export default {
  data() {
    return {
      form: {
        title: "",
        url: "",
        content: "",
        typeId: this.$route.query.typeId
      },
      id: this.$route.query.id,
      imageUrl: "",
      myConfig: {
        elementPathEnabled: false,
        wordCount: false, //是否开启字数统计
        // 初始容器高度
        initialFrameHeight: 280,
        // 初始容器宽度
        initialFrameWidth: "100%",
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        serverUrl: "http://www.gxxmglzx.com/tender/ueditor/controller.php",
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
      getPerById({
        id: this.id
      }).then(res => {
        this.form.title = res.data.title;
        this.form.content = res.data.content;
        this.imageUrl = process.env.VUE_APP_URL + res.data.img_url;
        this.form.url = res.data.img_url;
      });
    },
    submitHandle() {
      let data = formData(this.form);
      setData(data).then(res => {
        this.$message({
          message: "添加成功",
          type: "success"
        });
        this.$router.push({
          path: "/achievement/index",
          query: {
            id: this.form.typeId
          }
        });
      });
    },
    // 编辑处理函数
    editHandle() {
      let data = formData({
        id: this.id,
        typeId: this.form.typeId,
        content: this.form.content,
        title: this.form.title,
        url: this.form.url
      });

      editPer(data).then(res => {
        this.$message({
          message: "编辑成功",
          type: "success"
        });
        this.$router.push({
          path: "/achievement/index",
          query: {
            id: this.form.typeId
          }
        });
      });
    },
    cancelHandle() {
      this.getData();
    },
    handleAvatarSuccess(res, file) {
      this.form.url = res.pic;
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      // const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error("上传头像图片只能是 JPG 格式!");
      // }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 1px dashed #8c939d;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>