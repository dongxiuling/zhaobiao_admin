<template>
  <div class="app-container">
    <el-form ref="form" label-width="100px" size="medium">
      <el-form-item label="标题：">{{message.title}}</el-form-item>
      <el-form-item label="姓名：">{{message.name}}</el-form-item>
      <el-form-item label="E-mail：">{{message.email}}</el-form-item>
      <el-form-item label="电话：">{{message.phone}}</el-form-item>
      <el-form-item label="传真：">{{message.fax}}</el-form-item>
      <el-form-item label="联系地址：">{{message.address}}</el-form-item>
      <el-form-item label="内容：">{{message.content}}</el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getById } from "@/api/message.js";
export default {
  data() {
    return {
      id:this.$route.query.id,
      message:{}
    };
  },
  methods: {
    getDetail() {
      getById({
        id: this.id,
      }).then(res => {
       this.message = res.data
      });
    }
  },
  created() {
    this.getDetail();
  }
};
</script>

<style lang="scss" scoped>
.page-box {
  text-align: right;
  margin-top: 20px;
}
</style>