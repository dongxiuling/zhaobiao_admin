<template>
  <div class="app-container">
    <el-button
      type="primary"
      style="margin-bottom:20px"
      size="mini"
      @click="$router.push('/user/add')"
    >添加用户</el-button>
    <el-table style="width: 100%" border :data="tableData">
      <el-table-column label="用户名" prop="name"></el-table-column>
      <el-table-column label="密码" prop="password"></el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="editHandle(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteHandle(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { formData } from "@/utils/formData.js";
import { getList, deleteEle } from "@/api/user.js";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    getData() {
      getList().then(res => {
        this.tableData = res.data;
      });
    },
    editHandle(id) {
      this.$router.push({
        path: "/user/add",
        query: {
          id
        }
      });
    },
    deleteHandle(id) {
      this.$confirm("此操作将永久资质且无法恢复, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let data = new FormData();
          data.append("id", id);
          deleteEle(data).then(res => {
            this.$message({
              message: "删除成功",
              type: "success"
            });
            this.getData();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
</style>