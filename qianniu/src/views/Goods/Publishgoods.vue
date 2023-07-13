<template>
    <div>
        <div class="order-title">
            <el-input class="order-search" v-model="search" size="large" placeholder="搜索宝贝名称" suffix-icon="Search" />
            <el-divider direction="vertical" />
            <el-radio-group v-model="type" size="large">
                <el-radio-button label="所有宝贝" />
                <el-radio-button label="待出售宝贝" />
                <el-radio-button label="出售中宝贝" />
            </el-radio-group>
        </div>
        <el-table :data="pageDataRef" stripe border>
            <el-table-column prop="user" label="产品类型" />
            <el-table-column prop="date" label="上架日期" />
            <el-table-column prop="name" label="宝贝名称" />
            <el-table-column prop="address" label="发货地址" />
            <el-table-column prop="info" label="宝贝备注" />
            <el-table-column prop="status" label="宝贝状态" />
        </el-table>
        <el-button @click="handleclick0">添加</el-button>
        <el-button @click="handleclick">删除</el-button>
        <el-pagination background layout="prev, pager, next" :total="tableDataRef.length" :page-size="pageNumber"
            @current-change="handleChange" />
    </div>
</template>
  
<script setup>
import { ref, computed, onUpdated } from 'vue';

const initType = '所有宝贝'
const pageNumber = ref(10)
const pageIndex = ref(0)
const search = ref('')
const type = ref(initType)
const tableDataRef = computed(() => {
    return tableData.value.filter((item) => item.name.includes(search.value)).filter((item) => item.status === type.value || initType === type.value)
})
const pageDataRef = computed(() => {
    return tableDataRef.value.slice(pageIndex.value * pageNumber.value, (pageIndex.value + 1) * pageNumber.value)
})
const handleChange = (index) => {
    pageIndex.value = index - 1
}

const handleclick = () => {
    tableData.value.splice(0, 1)
}
const handleclick0 = () => {
    tableData.value.splice(0, 0, tableData.value[parseInt(Math.random()*(tableData.value.length-1)+1)])
}


const tableData = ref([
    {
        user: 'DIY电脑',
        data: '2023-05-03',
        name: '坑德基123',
        address: '大连设计城905',
        info: 'xxxxxx',
        status: '待出售宝贝'
    },
    {
        user: 'DIY电脑',
        data: '2023-05-03',
        name: '坑德基234',
        address: '大连设计城905',
        info: 'xxxxxx',
        status: '出售中宝贝'
    },
    {
        user: 'DIY电脑',
        data: '2023-05-03',
        name: '坑德基345',
        address: '大连设计城905',
        info: 'xxxxxx',
        status: '待出售宝贝'
    },
    {
        user: 'DIY电脑',
        data: '2023-05-03',
        name: '坑德基456',
        address: '大连设计城905',
        info: 'xxxxxx',
        status: '出售中宝贝'
    },
    {
        user: 'DIY电脑',
        data: '2023-05-03',
        name: '坑德基567',
        address: '大连设计城905',
        info: 'xxxxxx',
        status: '待出售宝贝'
    },
    {
        user: 'DIY电脑',
        data: '2023-05-03',
        name: '坑德基678',
        address: '大连设计城905',
        info: 'xxxxxx',
        status: '出售中宝贝'
    },
    {
        user: 'DIY电脑',
        data: '2023-05-03',
        name: '坑德基789',
        address: '大连设计城905',
        info: 'xxxxxx',
        status: '待出售宝贝'
    },
    {
        user: 'DIY电脑',
        data: '2023-05-03',
        name: '坑德基987',
        address: '大连设计城905',
        info: 'xxxxxx',
        status: '出售中宝贝'
    },
    {
        user: 'DIY电脑',
        data: '2023-05-03',
        name: '坑德基546',
        address: '大连设计城905',
        info: 'xxxxxx',
        status: '待出售宝贝'
    },

])


</script>
  
<style scoped>
.order-title {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 30px;
}

.order-search {
    width: 250px;
}

.el-pagination {
    float: right;
    margin-top: 20px;
}

.el-table {
    margin: 20px;
    width: calc(100% - 40px);
}
</style>