<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="项目代建" name="1">111</el-tab-pane>
      <el-tab-pane label="全过程咨询" name="2">全过程咨询</el-tab-pane>
      <el-tab-pane label="招标代理" name="3">招标代理</el-tab-pane>
      <el-tab-pane label="造价咨询" name="4">造价咨询</el-tab-pane>
      <el-tab-pane label="工程咨询" name="5">工程咨询</el-tab-pane>
      <el-tab-pane label="工程监理" name="6">工程监理</el-tab-pane>
      <el-tab-pane label="项目管理" name="7">项目管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
        activeName: '1'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
</style>