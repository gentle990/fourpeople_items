<template>
    <div class="title">
        <h2>待发货量<span>0</span></h2>
        <h2 class="one">发货即将超时单量<span>0</span></h2>
    </div>
    <el-tabs v-model="activeName" class="demo-tabs" >
    <el-tab-pane label="近三个月订单" name="first">近三个月订单</el-tab-pane>
    <el-tab-pane label="三个月前订单" name="second">三个月前订单</el-tab-pane>
  </el-tabs>
    <router-View></router-View>
</template>

<script setup>
import { ref } from 'vue'
const activeName = ref('first')
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.title h2{
    display: inline-block;
    padding: 10px;
    margin: 10px;
    margin-bottom: 15px;
}
.one{
    border-left: 3px #ccc solid;
}
.title{
    background: #f7f8fa;
}
</style>