<template>
  <div class="app-container">
    <el-table style="width: 100%" border :data="tableData">
      <el-table-column label="标题" prop="title"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="邮箱" prop="email"></el-table-column>
      <el-table-column label="电话" prop="phone"></el-table-column>
      <el-table-column label="地址" prop="address"></el-table-column>
      <el-table-column>
        <template slot="header" >
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"
            @keyup.enter.native="getData()"
          />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" :type="scope.row.status == '1'?'info':'success'"  plain @click="detailHandle(scope.row.id)">查看详情</el-button>
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
import { getList } from "@/api/message.js";
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
    },
    detailHandle(id){
      this.$router.push({
        path:'detail',
        query:{
          id
        }
      })
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
</style>