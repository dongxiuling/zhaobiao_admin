<template>
  <div class="app-container">
    <el-button
      type="primary"
      style="margin-bottom:20px"
      size="mini"
      @click="$router.push('/company/add')"
    >添加资质</el-button>
    <el-table
      style="width: 100%"
      border
      :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
    >
      <el-table-column label="公司资质" prop="title"></el-table-column>
      <el-table-column label="时间" prop="time"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="editHandle(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteHandle(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getQua, deleteQua } from "@/api/company.js";
export default {
  data() {
    return {
      tableData: [],
      search: ''
    };
  },
  methods: {
    getData() {
      getQua().then(res => {
        this.tableData = res.data;
      });
    },
    editHandle(id) {
      this.$router.push({
        path: "/company/add",
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
          deleteQua(data).then(res => {
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