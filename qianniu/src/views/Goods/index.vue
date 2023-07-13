<template>
    <div>
        <el-menu class="el-menu-demo" mode="horizontal"
                 background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <router-link to="/goods/mygoods">
                <el-menu-item index="1">全部宝贝</el-menu-item>
            </router-link>
            <el-sub-menu index="2">
                <template #title>优质宝贝 </template>
                <el-menu-item index="2-1">一级宝贝</el-menu-item>
                <el-menu-item index="2-2">一级宝贝</el-menu-item>
                <el-menu-item index="2-3">一级宝贝</el-menu-item>
                <el-sub-menu index="2-4">
                    <template #title>一级宝贝</template>
                    <el-menu-item index="2-4-1">二级宝贝</el-menu-item>
                    <el-menu-item index="2-4-2">二级宝贝</el-menu-item>
                    <el-menu-item index="2-4-3">二级宝贝</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="3" disabled>出售中的宝贝</el-menu-item>
            <router-link to="/goods/publishgoods">
                <el-menu-item index="4">仓库中的宝贝</el-menu-item>
            </router-link>
            <el-menu-item index="5">什么值得卖</el-menu-item>

            <el-menu-item index="6" class="end_end">草稿宝贝</el-menu-item>
            <el-menu-item index="7" class="end_end">回收站</el-menu-item>

        </el-menu>
        <router-View></router-View>
    </div>
   
</template>

<script setup>
import { ref } from 'vue'
const activeName = ref('first')
</script>

<style scoped>
*
{
    padding: 0;
    margin: 0;
}

.demo-tabs>.el-tabs__content
{
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.title h2
{
    display: inline-block;
    padding: 10px;
    margin: 10px;
    margin-bottom: 15px;
}

.one
{
    border-left: 3px #ccc solid;
}

.title
{
    background: #f7f8fa;
}</style>