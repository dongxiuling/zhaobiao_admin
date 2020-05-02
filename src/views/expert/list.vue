<template>
  <div class="app-container">
    <el-table style="width: 100%" border :data="tableData">
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="职称" prop="title"></el-table-column>
      <el-table-column label="专业" prop="mazor"></el-table-column>
      <el-table-column label="电话" prop="phone"></el-table-column>
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
import { getList } from "@/api/expert.js";
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
        current: this.current - 1,
        size: this.pageSize,
        key: this.search
      });
      getList(data).then(res => {
        this.tableData = res.data.list;
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