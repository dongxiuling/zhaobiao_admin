<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="项目代建" name="1">
        <el-button
          type="primary"
          style="margin-bottom:20px"
          size="mini"
          @click="$router.push({
            path:'/achievement/add',
            query:{
              typeId:activeName
            }
          })"
        >添加</el-button>
        <el-table style="width: 100%" border :data="list">
          <el-table-column label="名称" prop="title"></el-table-column>
          <el-table-column label="时间" prop="time"></el-table-column>
          <el-table-column label="操作">
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
      <el-tab-pane label="全过程咨询" name="2">
         <el-button
          type="primary"
          style="margin-bottom:20px"
          size="mini"
          @click="$router.push({
            path:'/achievement/add',
            query:{
              typeId:activeName
            }
          })"
        >添加</el-button>
        <el-table style="width: 100%" border :data="list">
          <el-table-column label="名称" prop="title"></el-table-column>
          <el-table-column label="时间" prop="time"></el-table-column>
          <el-table-column label="操作">
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
      <el-tab-pane label="招标代理" name="3">
         <el-button
          type="primary"
          style="margin-bottom:20px"
          size="mini"
          @click="$router.push({
            path:'/achievement/add',
            query:{
              typeId:activeName
            }
          })"
        >添加</el-button>
        <el-table style="width: 100%" border :data="list">
          <el-table-column label="名称" prop="title"></el-table-column>
          <el-table-column label="时间" prop="time"></el-table-column>
          <el-table-column label="操作">
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
      <el-tab-pane label="造价咨询" name="4">
         <el-button
          type="primary"
          style="margin-bottom:20px"
          size="mini"
          @click="$router.push({
            path:'/achievement/add',
            query:{
              typeId:activeName
            }
          })"
        >添加</el-button>
        <el-table style="width: 100%" border :data="list">
          <el-table-column label="名称" prop="title"></el-table-column>
          <el-table-column label="时间" prop="time"></el-table-column>
          <el-table-column label="操作">
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
      <el-tab-pane label="工程咨询" name="5">
         <el-button
          type="primary"
          style="margin-bottom:20px"
          size="mini"
          @click="$router.push({
            path:'/achievement/add',
            query:{
              typeId:activeName
            }
          })"
        >添加</el-button>
        <el-table style="width: 100%" border :data="list">
          <el-table-column label="名称" prop="title"></el-table-column>
          <el-table-column label="时间" prop="time"></el-table-column>
          <el-table-column label="操作">
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
      <el-tab-pane label="工程监理" name="6">
         <el-button
          type="primary"
          style="margin-bottom:20px"
          size="mini"
          @click="$router.push({
            path:'/achievement/add',
            query:{
              typeId:activeName
            }
          })"
        >添加</el-button>
        <el-table style="width: 100%" border :data="list">
          <el-table-column label="名称" prop="title"></el-table-column>
          <el-table-column label="时间" prop="time"></el-table-column>
          <el-table-column label="操作">
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
      <el-tab-pane label="项目管理" name="7">
         <el-button
          type="primary"
          style="margin-bottom:20px"
          size="mini"
          @click="$router.push({
            path:'/achievement/add',
            query:{
              typeId:activeName
            }
          })"
        >添加</el-button>
        <el-table style="width: 100%" border :data="list">
          <el-table-column label="名称" prop="title"></el-table-column>
          <el-table-column label="时间" prop="time"></el-table-column>
          <el-table-column label="操作">
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
import { getData, deletePer } from "@/api/achievement.js";
import { formData } from "@/utils/formData.js";
export default {
  data() {
    return {
      activeName: "1",
      total: 0,
      current: 1,
      pageSize: 10,
      list: []
    };
  },
  methods: {
    getData() {
      let data = formData({
        current: this.current - 1,
        size: this.pageSize,
        key: "", //搜索
        type: this.activeName
      });

      getData(data).then(res => {
        this.list = res.data.list;
        this.total = res.data.total;
      });
    },
    editHandle(id) {
      this.$router.push({
        path: "/achievement/add",
        query: {
          typeId:this.activeName,
          id:id
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
          let data =  formData({id:id});
          deletePer(data).then(res => {
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
      this.getData();
    },
    handleCurrentChange(value) {
      this.current = value;
      this.getData();
    }
  },
  created() {
     if (this.$route.query.id) {
      this.activeName = this.$route.query.id;
      this.getData();
    }
    // this.getData();
  }
};
</script>

<style lang="scss" scoped>
</style>