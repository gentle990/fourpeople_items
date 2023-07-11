<template>
    
            <el-main>
                <div id="forever">
                    <div id="left_main">
                        <ul class="blue_top">
                            <router-link to="/trade/completedorders">
                                <li class="befor_img">
                                    <p>88</p>
                                    <p>待付款</p>
                                </li>
                            </router-link>
                            <router-link to="/trade/uncompletedorders">
                                <li>
                                    <p>5</p>
                                    <p>待发货</p>
                                </li>
                            </router-link>
                            <router-link to="/trade/completedorders">
                                <li>
                                    <p>188</p>
                                    <p>代售后</p>
                                </li>
                            </router-link>
                            <router-link to="/trade/allorders">
                                <li>
                                    <p>8</p>
                                    <p>待评价</p>
                                </li>
                            </router-link>
                            <router-link to="/trade/allorders">
                                <li>
                                    <p>1</p>
                                    <p>待处理投诉</p>
                                </li>
                            </router-link>
                            <router-link to="/trade/allorders">
                                <li class="after_img">
                                    <p>0</p>
                                    <p>违规</p>
                                </li>
                            </router-link>
                        </ul>
                        <ul class="wite_two">
                            <li>待处理</li>
                            <li>暂无待处理任务，查看全部 >
                                <router-link to="/trade/allorders"></router-link>
                            </li>

                        </ul>
                        <div class="top_main_header">
                            <div>
                                <p>店铺数据</p>
                                <p>数据更新时间：{{ timeInfo.nowDate }} {{ timeInfo.nowTime }}
                                </p>
                            </div>
                            <div>指标 ></div>
                        </div>
                        <div id="grid_20">
                            <el-row :gutter="20" style="z-index: -10000;">
                                <el-col :span="6">
                                    <div class="grid-content ep-bg-purple">
                                        <p>支付金额</p>
                                        <p>1314</p>
                                        <p>昨日 250</p>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content ep-bg-purple">
                                        <p>访客数</p>
                                        <p>2330</p>
                                        <p>昨日 520</p>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content ep-bg-purple">
                                        <p>支付子订单数</p>
                                        <p>111</p>
                                        <p>昨日 74</p>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content ep-bg-purple">
                                        <p>支付转化率</p>
                                        <p>6.12%</p>
                                        <p>昨日 0</p>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20" style="z-index: -10000;">
                                <el-col :span="6">
                                    <div class="grid-content ep-bg-purple">
                                        <p>浏览量</p>
                                        <p>941</p>
                                        <p>昨日 341</p>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content ep-bg-purple">
                                        <p>加购人数</p>
                                        <p>729</p>
                                        <p>昨日 21</p>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content ep-bg-purple">
                                        <p>客单价</p>
                                        <p>612</p>
                                        <p>昨日 518</p>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content ep-bg-purple">
                                        <p>支付买家数</p>
                                        <p>888</p>
                                        <p>昨日 88</p>
                                    </div>
                                </el-col>
                            </el-row>
                            <ul class="wite_two">
                                <li>经营建议根据店铺不同环节表现，提供适合本店发展的相关建议，建议了解并评估，提高效率。</li>
                                <li>暂无 ></li>
                            </ul>
                            <ul class="wite_two">
                                <li>我的应用</li>
                                <li>暂无已订购服务 ></li>
                            </ul>
                        </div>

                    </div>
                    <div class="right_main">
                        <div class="right_1">
                            <div class="right_1_1">
                                <p>阳光欧巴的小店{{ username }}</p>
                                <div>
                                    <img
                                        src="https://gw.alicdn.com/imgextra/i1/O1CN01ZijcyM1ZdtJmxinmq_!!6000000003218-2-tps-36-36.png">
                                    <img
                                        src="https://gw.alicdn.com/imgextra/i4/O1CN01376Uha1buUucoyQWf_!!6000000003525-2-tps-42-28.png">
                                </div>
                            </div>
                            <div class="right_2">
                                <p>综合体验分 -- ></p>
                                <p>店铺保证金 <span>无需缴纳</span> ></p>
                            </div>
                            <div class="right_3">
                                <ul class="right_4">
                                    <li>
                                        <p>描述</p>
                                        <p>5.0 -</p>
                                    </li>
                                    <li>
                                        <p>服务</p>
                                        <p>5.0 -</p>
                                    </li>
                                    <li class="border_li1">
                                        <p>物流</p>
                                        <p>4.9 -</p>
                                    </li>
                                    <li>
                                        <p>信用等级</p>
                                        <div class="orange_text">新开店铺</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="right_5">
                            <p>千牛头条</p>
                            <p>></p>
                        </div>
                        <el-carousel :interval="3000" arrow="always" height="160px">
                            <el-carousel-item v-for="item in urls" :key="item">
                                <img :src="item.url" style="width:100%; height:100%;border-radius: 15px;">
                                <h3 text="2xl" justify="center">{{ item }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                        <div class="right_6">
                            <p><span>短视频</span>2022双11品牌新享：“超级新客加速”详解</p>
                            <p><span>资讯</span>春节七天乐2 | 选品做的好，兔年开门红</p>
                            <p><span>短视频</span>【图文模板广场】免费图文模板，直接套用出图</p>
                            <p><span>资讯</span>淘宝客服互动服务窗-常驻转人工入口将升级！</p>
                        </div>
                        <el-calendar>
                            <template #date-cell="{ data }">
                                <el-row :class="data.isSelected ? 'is-selected' : 'sds'">
                                    {{ data.day.split('-').slice(1).join('-') }}
                                    {{ data.isSelected ? '✔️' : '' }}
                                </el-row>
                                <div v-for="(item, index) in textContent(data.day)" :key="index">
                                </div>
                            </template>
                        </el-calendar>
                    </div>
                </div>
                <Router-view />
            </el-main>
       
</template>

<script setup >
import { ref, reactive, toRefs, onMounted, computed } from "vue";
import { useUsersStore } from '../../stores/counter'
import { ElMessage, ElMessageBox } from "element-plus";
import { storeToRefs } from 'pinia'

const usersStore = useUsersStore()
const { username } = storeToRefs(usersStore)
const urls = ref([
    { url: ('https://qnworkbench.alibaba.com/workbench/oss_3e29c023-f39b-49bd-9cdf-e002fe456572.png') },
    { url: ('https://qnworkbench.alibaba.com/workbench/oss_de0e3647-8536-4f31-9166-6a725515a8eb.png') },
    { url: ('https://qnworkbench.alibaba.com/workbench/oss_3e29c023-f39b-49bd-9cdf-e002fe456572.png') },
    { url: ('https://qnworkbench.alibaba.com/workbench/oss_de0e3647-8536-4f31-9166-6a725515a8eb.png') },
])

const timeInfo = reactive({
    nowDate: "",
    nowTime: "",
});
//第二步：定义获取时间的方法
function setNowTimes() {
    let myDate = new Date();
    let wk = myDate.getDay();
    let yy = String(myDate.getFullYear());
    let mm = myDate.getMonth() + 1;
    let dd = String(
        myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate()
    );
    let hou = String(
        myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours()
    );
    let min = String(
        myDate.getMinutes() < 10
            ? "0" + myDate.getMinutes()
            : myDate.getMinutes()
    );
    let sec = String(
        myDate.getSeconds() < 10
            ? "0" + myDate.getSeconds()
            : myDate.getSeconds()
    );
    timeInfo.nowDate = yy + "-" + mm + "-" + dd + "";
    timeInfo.nowTime = hou + ":" + min;
}

//第三部： 在生命周期中进行调用  定时器setInterval
onMounted(() => {
    timeInfo.setInterval = setInterval(() => {
        timeInfo.value = setNowTimes();
    }, 1000);
});

const state = reactive({
    tableData: [],
    //测试数据
    calendarData: [
        {
            day: "2023-11-04",
            xianyue: 400,
            yiyue: 5,
            sy: 1,
        }
    ],
});
const handelLogout = () => {
    // 目前：状态管理里的一些其他数据，依然是上一个用户的
    //router.push('/login')
    //usersStore.clearToken()
    location.href = '/login'   // 带有刷新的
    usersStore.clearToken()
}
//处理日期获取后台数据动态渲染上去
const textContent = (date) => {
    //当前date是拿到上面日历组件当前的日期值 根据该值去筛选测试数据找到对应各个日期下对应的数据return出去
    return state.calendarData.filter((item) => {
        return date === item.day;
    });
};




</script>

<style scoped>
.top_main_header {
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
}

.top_main_header div:nth-child(1) {
    display: flex;
    align-items: center;
}

.top_main_header div:nth-child(1) p:nth-child(1) {
    font-size: 22px;
    padding-right: 25px;
}

:deep .el-calendar__title {
    font-size: 20px;

}

:deep .el-button--small {
    font-size: 18px;
    padding-left: 15px;
    margin-left: 20px;

}

.el-calendar {
    margin-top: 100px;
}

:deep .el-calendar__body {
    padding: 4px 20px 35px;
}

:deep .el-calendar-table thead th {
    font-weight: bold;
    font-size: 20px;
}

.tag {
    display: flex;
    align-items: center;
    height: 2.5vh;
    justify-content: center;
}

.tag2 {
    display: flex;
    align-items: center;
    height: 2vh;
    justify-content: center;
    font-size: 18px;
}

.aaa .datastyle {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6rem;
    color: #353636;
    font-weight: 600;
}

:deep .el-calendar-table .el-calendar-day:hover {
    background-color: skyblue;
}

:deep .el-calendar {
    --el-calendar-selected-bg-color: #faecd8;
}

.aaa .is-selected .datastyle {
    color: #ffab11;
}

.aaa .prev .datastyle {
    color: #c4c5c8;

}

.aaa .next .datastyle {
    color: #c4c5c8;

}

:deep .el-calendar {
    --el-calendar-cell-width: 50px;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.center2 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffab11;
    margin-left: 5px;
    font-size: 20px;
}

:deep .el-calendar__header {
    justify-content: center;
}

.right_7_span {
    font-size: 25px;
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 100px;
    margin: 0;
    text-align: center;
}

.right_1 {
    width: 540px;
    height: 338px;
    background: linear-gradient(125deg, #2c3e50, #27ae60, #2980b9, #e74c3c, #8e44ad);
    border-radius: 15px;
}

.right_1_1 {
    padding-top: 60px;
    margin-left: 35px;
    display: flex;
    justify-content: space-between;
}

.right_1_1 p {
    color: white;
    font-size: 25px;
}

.right_1_1 img {
    margin-right: 15px;
}

.right_2 {
    display: flex;
    justify-content: space-between;
    color: white;
    padding-top: 60px;
    margin-left: 35px;
    font-size: 18px;
}

.right_2 span {
    color: #31cc98;
}

.right_3 {
    width: 480px;
    height: 108px;
    margin-top: 20px;
    margin-left: 35px;
    border-radius: 15px;
    background-color: #fafbff;

}

.right_4 {
    width: 480px;
    height: 108px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
}

.right_5 {
    width: 540px;
    height: 108px;
    line-height: 108px;
    font-size: 35px;
    display: flex;
    justify-content: space-between;
}

.right_6 {
    width: 540px;
    height: 108px;
    font-size: 20px;
    margin-top: 29px;
}

.right_6 p {
    height: 42px;
    line-height: 32px;
}

.right_6 span {
    color: #2eb9d4;
    background-color: #f0fafc;
    padding-right: 10px;
    font-size: 17px;

}

.right_7 {
    margin-top: 100px;
}

.orange_text {
    text-align: center;
    width: 80px;
    color: white;
    display: inline-block;
    border-radius: 15px;
    background-color: orange;
}

#left_main {
    margin-left: 50px;
    width: 1200px;
}

.right_main {
    width: 615px;
    height: 100%;
}

#forever {
    display: flex;
    justify-content: space-between;
    margin-right: 50px;
}

.aside_left {
    width: 155px;
    height: 100%;
    line-height: 50px;
    background-color: #e8f0ff;
    list-style: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    font-size: 18px;

}

.iconfont {
    font-size: 20px;
}

.el-aside {
    background-color: #e8f0ff;
    overflow: hidden;
}

.aside_left li {
    text-align: center;
    width: 180px;
}

.aside_left li:hover {
    color: #628ad3;
}

.aside_left li:hover .aside_left_two {
    display: block;
}

.aside_left li span {
    display: inline-block;
    width: 30px;
    height: 50px;
}

.aside_left li .aside_left_two {
    list-style: none;
    display: none;
    position: fixed;
    left: 180px;
    top: 110px;
    width: 180px;
    height: 100%;
    background-color: white;
    border-radius: 5px;
    font-size: 20px;


}

.aside_left li .aside_left_two li {
    color: black;
    cursor: pointer;
}


#left_main .el-main {
    height: 1200px;
    width: 1375px;

}

.blue_top {
    display: flex;
    height: 100px;
    background-color: #3977f3;
    border-radius: 15px;
    justify-content: space-around;
}

.blue_top li {
    height: 100px;
    line-height: 50px;
    text-align: center;

}

.blue_top li p {
    color: white;
}

.after_img {
    background: url(https://gw.alicdn.com/imgextra/i2/O1CN01XaAdTL1UvgdAPGOwu_!!6000000002580-2-tps-120-80.png) no-repeat;
    background-size: 100px;
}

.befor_img {
    background: url(https://gw.alicdn.com/imgextra/i1/O1CN01TtgwcH1EAwLuNdLsx_!!6000000000312-2-tps-386-130.png) no-repeat;
    background-size: 200px;
}

.wite_two {
    width: 1200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.wite_two li:nth-child(1) {
    font-size: 22px;
}

.wite_two li:nth-child(2) {
    cursor: pointer;
}

.el-row {
    margin-bottom: 40px;

}

.grid-content {
    border-radius: 25px;
    background-color: #f7f8fa;
    height: 175px;
    width: 275px;

}

#grid_20 {
    width: 1200px;

}

.grid-content p:nth-child(1) {
    padding-top: 23px;
    padding-left: 23px;
    font-size: 16px;
    color: #666666;

}

.grid-content p:nth-child(2) {
    padding-top: 23px;
    padding-left: 23px;
    font-size: 36px;
    color: black;
}

.grid-content p:nth-child(3) {
    padding-top: 23px;
    padding-left: 23px;
    font-size: 16px;
    color: #666666;
    word-spacing: 5px;
}

.el-header {
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.el-header-span {
    font-size: 18px;
    color: black;
    font-weight: bolder;
}
</style>