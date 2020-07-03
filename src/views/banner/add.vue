<template>
  <div class="app-container">
    <el-page-header @back="$router.go(-1)" content="" style="margin-bottom:20px;"></el-page-header>

    <el-form :model="form">
      <el-form-item label="名称：" label-width="60px">
        <el-input v-model="form.content" />
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
        <el-button type="primary" @click="submitHandle()" size="mini">确定</el-button>
        <el-button size="mini" @click="cancelHandle()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getData, addEle, editEle, getById } from "@/api/banner.js";
import { formData } from "@/utils/formData.js";
export default {
  data() {
    return {
      form: {
        url: "",
        content: ""
      },
      imageUrl: ""
    };
  },
  methods: {
    submitHandle() {
      let data = formData(this.form);
      addEle(data).then(res => {
        this.$message({
          message: "添加成功",
          type: "success"
        });
        this.$router.push({
          path: "/banner/list"
        });
      });
    },
    cancelHandle() {
      this.$router.push({
        path: "/banner/list"
      });
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
  border:1px dashed #8c939d;

}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>