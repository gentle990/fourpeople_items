<template>
    <div class="box1">
        <div class="order-title">
            <el-input class="order-search" v-model="ListId" size="large" placeholder="订单编号" suffix-icon="Search" />
            <el-input class="order-search" v-model="searcch" size="large" placeholder="物流单号" suffix-icon="Search" />
            <el-select v-model="goods" placeholder="订单状态（全部）" class="order-search">
                <el-option v-for="item in goodsstatus" :key="item.good" :label="item.label" :value="item.good" />
            </el-select>
            <el-select v-model="good" placeholder="预售状态（全部）" class="order-search">
                <el-option v-for="item in options" :key="item.good" :label="item.label" :value="item.good" />
            </el-select>
            <el-select v-model="good" placeholder="售后服务（全部）" class="order-search">
                <el-option v-for="item in options" :key="item.good" :label="item.label" :value="item.good" />
            </el-select>
        </div>
        <div class="line">
            <el-input class="order-search" v-model="searrch" size="large" placeholder="商品ID" suffix-icon="Search" />
            <el-input class="order-search" v-model="searchh" size="large" placeholder="宝贝名称" suffix-icon="Search" />
            <el-input class="order-search" v-model="seaarch" size="large" placeholder="卖家昵称" suffix-icon="Search" />
            <el-select v-model="good" placeholder="催发货订单（全部）" class="order-search">
                <el-option v-for="item in options" :key="item.good" :label="item.label" :value="item.good" />
            </el-select>
        </div>
        <div class="third row demo-date-picker">
            <el-input class="order-search" v-model="seearch" size="large" placeholder="创建时间 起始日期" suffix-icon="Search" />
            <el-date-picker v-model="value" type="date" placeholder="结束日期" format="YYYY/MM/DD" value-format="YYYY-MM-DD">
                <template #default="cell">
                    <div class="cell" :class="{ current: cell.isCurrent }">
                        <span class="text">{{ cell.text }}</span>
                        <span v-if="isHoliday(cell)" class="holiday" />
                    </div>
                </template>
            </el-date-picker>
            <el-input class="order-search" v-model="ssearch" size="large" placeholder="付款时间 起始日期" suffix-icon="Search" />
            <el-date-picker v-model="value" type="date" placeholder="结束日期" format="YYYY/MM/DD" value-format="YYYY-MM-DD">
                <template #default="cell">
                    <div class="cell" :class="{ current: cell.isCurrent }">
                        <span class="text">{{ cell.text }}</span>
                        <span v-if="isHoliday(cell)" class="holiday" />
                    </div>
                </template>
            </el-date-picker>
            <el-select v-model="good" placeholder="评价状态（全部）" class="order-search">
                <el-option v-for="item in options" :key="item.good" :label="item.label" :value="item.good" />
            </el-select>
        </div>
        <div class="final">
            <el-select v-model="good" placeholder="物流服务（全部）" class="order-search">
                <el-option v-for="item in options" :key="item.good" :label="item.label" :value="item.good" />
            </el-select>
            <el-select v-model="good" placeholder="交易类型（所有类型）" class="order-search">
                <el-option v-for="item in options" :key="item.good" :label="item.label" :value="item.good" />
            </el-select>
            <el-select v-model="search" placeholder="订单类型（全部）" class="order-search">
                <el-option v-for="item in options" :key="item.good" :label="item.label" :value="item.good" />
            </el-select>
        </div>
    </div>
    <div class="box2">
        <el-button type="primary" round @click="onSearch">搜索订单</el-button>
        <el-button type="success" round>批量导出</el-button>
        <el-link :icon="Edit">清除条件</el-link>
        <el-link :icon="Star">优差评级</el-link>
    </div>
    <div class="box3">
        <el-tabs v-model="activeName" class="demo-tabs">
            <el-tab-pane label="近三个月订单" name="first">近三个月订单</el-tab-pane>
            <el-tab-pane label="等待买家付款" name="second">等待买家付款</el-tab-pane>
            <el-tab-pane label="等待发货" name="third">等待发货</el-tab-pane>
            <el-tab-pane label="已发货" name="fourth">已发货</el-tab-pane>
            <el-tab-pane label="退款中" name="fifth">退款中</el-tab-pane>
            <el-tab-pane label="需要评价" name="sixth">需要评价</el-tab-pane>
            <el-tab-pane label="成功的订单" name="seventh">成功的订单</el-tab-pane>
            <el-tab-pane label="关闭的订单" name="eighth">关闭的订单</el-tab-pane>
        </el-tabs>
    </div>
    <div class="box4">
        <p>
            快捷筛选：
            <el-select v-model="good" placeholder="卖家备注（全部）" class="order-search">
                <el-option v-for="item in options" :key="item.good" :label="item.label" :value="item.good" />
            </el-select>
            <el-checkbox v-model="notshow">不显示已关闭的订单</el-checkbox>
        </p>
        <p>
            共查询到 0 个订单
            <el-button round>批量发货</el-button>
            <el-button type="warning" round>批量标记</el-button>
            <el-button type="danger" round>批量免运费</el-button>
        </p>
    </div>
    <hr>
    <div class="box5">
        <el-checkbox v-model="notshow">宝贝</el-checkbox>

        <a href="#">单价</a>
        <a href="#">数量</a>
        <a href="#">售后</a>
        <a href="#">交易状态</a>
        <a href="#">实收款</a>
        <a href="#">评价</a>


        <div class="demo-pagination-block" style="float: right;">
            <div class="demonstration">Total item count123123123</div>
            <el-pagination
                           v-model:current-page="currentPage1"
                           v-model:page-size="pageSize3"
                           :page-sizes="[100, 200, 300, 400]"
                           background="background"
                           layout="prev, pager, next,jumper"
                           :total="100"
                           @size-change="handleSizeChange"
                           @current-change="handleCurrentChange" />
        </div>
    </div>
    <p class="over">没有符合条件的宝贝，请尝试其他搜索条件。</p>
    <el-table :data="tableDataRef" stripe style="width: 100%">
        <el-table-column prop="data" label="日期" width="180" />
        <el-table-column prop="user_id" label="用户 ID" width="180" />
        <el-table-column prop="pay_status" label="支付状态" width="180" />
        <el-table-column prop="is_send" label="是否发货" width="180" />
        <el-table-column prop="order_fapiao_title" label="发票内容" width="180" />
        <el-table-column prop="consignee_addr" label="收货地址" width="180" />

        <el-table-column prop="address" label="地址" />
    </el-table>

    <!-- -------------------------------------------------------- -->
    <hr class="my-4" />
</template>

<script setup>
import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue'
import { ref, computed } from 'vue';
import { orders } from '@/api/order'
const tableDataRef = ref([])
const notshow = ref(false)
const ListId = ref('')
const searcch = ref('')
const searrch = ref('')
const searchh = ref('')
const seaarch = ref('')
const seearch = ref('')
const ssearch = ref('')
const good = ref('')
const options = [
    {
        good: '审核中',
        label: '审核中',
    },
    {
        good: '未完成',
        label: '未完成',
    }

]
const goodsstatus = [
    {
        good: '未完成',
        label: '已完成'
    }
]
const value = ref('结束日期')
const holidays = [
    '2023-07-01',
    '2023-07-02',
    '2023-07-03',
    '2023-07-04',
    '2023-07-05',
    '2023-07-06',
    '2023-07-07',
]

const isHoliday = ({ dayjs }) => {
    return holidays.includes(dayjs.format('YYYY-MM-DD'))
}

const activeName = ref('first')
const tableData = [
    {
        name: 'all',
        label: '全部订单'
    },
    {
        name: 'unpay',
        label: '待付款'
    }, {
        name: 'deliver',
        label: '待发货'
    }
    , {
        name: 'receive',
        label: '待收货'
    }, {
        name: 'comment',
        label: '待评价'
    },
    {
        name: 'complete',
        label: '已完成'
    },
    {
        name: 'cancel',
        label: '已取消'
    },
]

// const tableDataRef = computed(() => {
//     return
// })
const search = ref([])
const params = ref({
    is_send: 0,
    pagenum: 1,
    pagesize: '',

})
const ordersList = async () => {
    // const res = await orders(params.value)
    ordersList.value = res.data.data
    // console.log(res)
    console.log(1)
}
/*
login(ruleForm).then((res,error) => {
console.log(res)
if (res.data.data.rid === 0) {
    // usersStore.updateToken(res.data.data.token)//更新token //目的是将token存储到pinia中，做本地持久化存储
    ElMessage.success('登录成功')//提示登录成功
    router.push('/')//跳转到首页
}
else {
    ElMessage.error('登录失败')
} */

const onSearch = async () => {
    const res = await orders(params.value)
    tableDataRef.value = res.data.data.goods
    // console.log(res)
}



const currentPage1 = ref(1)
const pageSize3 = ref(5)

const handleSizeChange = (val) => {
    console.log(`${val} items per page`)

}
const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`)
}

</script>

<style scoped>
.order-search
{
    width: 200px;
    height: 32px;
    margin: 5px;
}

.cell
{
    height: 30px;
    padding: 3px 0;
    box-sizing: border-box;
}

.cell .text
{
    width: 24px;
    height: 24px;
    display: block;
    margin: 0 auto;
    line-height: 24px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
}

.cell.current .text
{
    background: #626aef;
    color: #fff;
}

.box2
{
    margin-top: 20px;
}

.el-link
{
    margin: 10px;
    font-size: 15px;
}

.demo-tabs>.el-tabs__content
{
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

a
{
    padding: 20px;
    margin-left: 70px;
    color: #000;
}

a:hover
{
    color: #f60;
}

.over
{
    text-align: center;
    font-size: 15px;
    color: #a0a2ad;
}
</style>