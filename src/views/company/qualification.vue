<template>
  <div class="app-container">
    <el-button type="primary" style="margin-bottom:20px" size="mini" @click="$router.push('/company/add')">添加资质</el-button>
    <el-table
      style="width: 100%"
      border
      :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
    >
      <el-table-column label="公司资质" prop="title"></el-table-column>
      <el-table-column label="时间" prop="date"></el-table-column>
      <el-table-column align="right">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          title: "王小虎"
        },
        {
          date: "2016-05-04",
          title: "王小虎"
        },
        {
          date: "2016-05-01",
          title: "张小虎"
        },
        {
          date: "2016-05-03",
          title: "王小虎"
        }
      ],
      search: ""
    };
  }
};
</script>

<style lang="scss" scoped>
</style>