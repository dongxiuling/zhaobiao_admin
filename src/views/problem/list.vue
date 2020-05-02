<template>
  <div class="app-container">
    <el-button
      type="primary"
      style="margin-bottom:20px"
      size="mini"
      @click="$router.push('/policy/problemadd')"
    >添加常见问题</el-button>
    <el-table style="width: 100%" border :data="tableData">
      <el-table-column label="标题" prop="title"></el-table-column>
      <!-- <el-table-column label="时间" prop="time"></el-table-column> -->
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索"  @keyup.enter.native="getData()" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="editHandle(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteHandle(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: right;margin-top: 20px;">
      <el-pagination
        style="width: 100%; float:right; "
        background
        layout="prev, pager, next"
        :total="total"
        :current-page.sync="current"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { formData } from "@/utils/formData.js";
import { getList, deleteEle } from "@/api/problem.js";
export default {
  data() {
    return {
      current: 1,
      pageSize: 10,
      total: 0,
      tableData: [],
      search: ""
    };
  },
  methods: {
    getData() {
      let data = formData({
        current: this.current-1,
        size: this.pageSize,
        key: this.search
      });
      getList(data).then(res => {
        this.tableData = res.data.list;
      });
    },
    editHandle(id) {
      this.$router.push({
        path: "/policy/problemadd",
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
    },
    handleCurrentChange(value) {
      this.current = value;
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