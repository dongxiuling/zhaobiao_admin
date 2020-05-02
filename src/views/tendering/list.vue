<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="招标公示公告" name="1">
        <el-button
          type="primary"
          style="margin-bottom:20px"
          size="mini"
          @click="$router.push({
            path:'/tendering/add',
            query:{
              typeId:activeName
            }
          })"
        >添加</el-button>
        <el-table style="width: 100%" border :data="list">
          <el-table-column label="名称" prop="title"></el-table-column>
          <el-table-column label="时间" prop="time"></el-table-column>
          <el-table-column >
             <template slot="header" slot-scope="scope">
              <el-input v-model="search" size="mini" placeholder="输入关键字搜索" @keyup.enter.native="getData()" />
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
      </el-tab-pane>
      <el-tab-pane label="中标公示公告" name="2">
        <el-button
          type="primary"
          style="margin-bottom:20px"
          size="mini"
          @click="$router.push({
            path:'/tendering/add',
            query:{
              typeId:activeName
            }
          })"
        >添加</el-button>
        <el-table style="width: 100%" border :data="list">
          <el-table-column label="名称" prop="title"></el-table-column>
          <el-table-column label="时间" prop="time"></el-table-column>
          <el-table-column >
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
      </el-tab-pane>
      <el-tab-pane label="更改公告" name="3">
        <el-button
          type="primary"
          style="margin-bottom:20px"
          size="mini"
          @click="$router.push({
            path:'/tendering/add',
            query:{
              typeId:activeName
            }
          })"
        >添加</el-button>
        <el-table style="width: 100%" border :data="list">
          <el-table-column label="名称" prop="title"></el-table-column>
          <el-table-column label="时间" prop="time"></el-table-column>
          <el-table-column >
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
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getList, deleteEle } from "@/api/tendering.js";
import { formData } from "@/utils/formData.js";
export default {
  data() {
    return {
      activeName: "1",
      total: 0,
      current: 1,
      pageSize: 10,
      list: [],
      search:""
    };
  },
  methods: {
    getData() {
      let data = formData({
        current: this.current - 1,
        size: this.pageSize,
        key: this.search, //搜索
        type: this.activeName
      });

      getList(data).then(res => {
        this.list = res.data.list;
        this.total = res.data.total;
      });
    },
    editHandle(id) {
      this.$router.push({
        path: "/tendering/add",
        query: {
          typeId: this.activeName,
          id: id
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
          let data = formData({ id: id });
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
    handleClick(tab, event) {
      // console.log(tab, event);
      this.search = ""
      this.getData();
    },
    handleCurrentChange(value) {
      this.current = value;
      this.getData();
    }
  },
  created() {
    this.getData();
    if(this.$route.query.id){
      this.activeName = this.$route.query.id;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>