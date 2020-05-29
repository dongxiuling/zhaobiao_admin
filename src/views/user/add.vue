<template>
  <div class="app-container">
    <el-page-header @back="$router.go(-1)" content="返回" style="margin-bottom:20px;"></el-page-header>
    <el-form>
      <el-form-item label="用户名：" >
        <el-input v-model="name" />
      </el-form-item>
      <el-form-item label="密码：" >
        <el-input v-model="password" />
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
import { addEle, getById, editEle } from "@/api/user.js";
import { formData } from '../../utils/formData';

export default {
  data() {
    return {
      name: "",
      password: "",
      id: this.$route.query.id,
    };
  },
  methods: {
    getData() {
      getById({
        id: this.id
      }).then(res => {
        this.name = res.data.name;
        this.password = res.data.password;
      });
    },
    submitHandle() {
      let data = formData({
        name:this.name,
        password:this.password
      });

      addEle(data).then(res => {
        this.$message({
          message: "添加成功",
          type: "success"
        });
        this.$router.push("/user/list");
      });
    },
    // 编辑处理函数
    editHandle() {
      let data = formData({
        id:this.id,
        name:this.name,
        password:this.password
      });
      editEle(data).then(res => {
        this.$message({
          message: "编辑成功",
          type: "success"
        });
        this.$router.push("/user/list");
      });
    },
    cancelHandle() {
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