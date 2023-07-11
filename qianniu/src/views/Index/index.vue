<template>
    <el-container>
        <el-aside width="180px">
            <p style="text-align: center; margin-top: 10px;"><img src="../../assets/微信图片_20230706173220_03.jpg" alt=""></p>
            <p style="text-align: center;">阳光欧巴的小店{{ username }}</p>

            <ul class="aside_left" style="height: 1500px;">
                <li title="商品"><span class="iconfont">&#xe64f;</span>商品
                    <ul class="aside_left_two" style="z-index: 10000;">
                        <router-link to="/goods/mygoods">
                            <li>我的宝贝</li>
                        </router-link>
                        <router-link to="/goods/publishgoods">
                            <li>发布宝贝</li>
                        </router-link>
                        <li>商品装修</li>
                        <li>商品素材</li>
                        <li>图片空间</li>
                        <li>视频空间</li>
                        <li>仓库储存</li>
                    </ul>
                </li>
                <li title="交易"><span class="iconfont">&#xe636;</span>交易
                    <ul class="aside_left_two" style="z-index: 10000;">
                        <router-link to="/trade/completedorders">
                            <li>已完成订单</li>
                        </router-link>
                        <router-link to="/trade/uncompletedorders">
                            <li>未完成订单</li>
                        </router-link>
                        <router-link to="/trade/allorders">
                            <li>全部订单</li>
                        </router-link>
                        <li>退款管理</li>
                        <li>评价管理</li>
                        <li>物流服务</li>
                        <li>物流工具</li>
                        <li>发货</li>
                        <li>打单</li>
                        <li>我要投诉</li>
                    </ul>
                </li>
                <li title="内容"><span class="iconfont">&#xf00eb;</span>内容
                    <ul class="aside_left_two" style="z-index: 10000;">
                        <li>内容中心</li>
                        <li>内容创作</li>
                        <li>内容管理</li>
                        <li>创作灵感</li>
                        <li>作品效果</li>
                        <li>观众画像</li>
                        <li>效果分析</li>
                    </ul>
                </li>
                <li title="店铺"><span class="iconfont">&#xe61f;</span>店铺
                    <ul class="aside_left_two" style="z-index: 10000;">
                        <li>店铺管理</li>
                        <li>综合体验分</li>
                        <li>店铺信息</li>
                        <li>子账号管理</li>
                        <li>店铺素材</li>
                        <li>隐私保护</li>
                        <li>店铺装修</li>
                        <li>手机店铺装修</li>
                        <li>pc店铺装修</li>
                        <li>装修管理</li>
                        <li>更多</li>
                    </ul>
                </li>
                <li title="营销"><span class="iconfont">&#xe64f;</span>营销
                    <ul class="aside_left_two" style="z-index: 10000;">
                        <li>营销活动</li>
                        <li>活动报名</li>
                        <li>活动动态</li>
                        <li>已报活动</li>
                        <li>已报商品</li>
                        <li>营销工具</li>
                        <li>营销素材</li>
                        <li>营销费用</li>
                        <li>优惠风险</li>
                        <li>聚换算</li>
                        <li>天天特卖</li>
                        <li>八亿补贴</li>
                        <li>淘金币</li>
                    </ul>
                </li>
                <li title="推广"><span class="iconfont">&#xe60f;</span>推广
                    <ul class="aside_left_two" style="z-index: 10000;">
                        <li>推广中心</li>
                        <li>推广服务</li>
                        <li>直通车</li>
                        <li>引力魔方</li>
                        <li>急速推</li>
                        <li>万相台</li>
                        <li>淘宝联盟</li>
                        <li>超级互动城</li>
                        <li>创意制作</li>
                        <li>品牌新享</li>
                    </ul>
                </li>
                <li title="用户"><span class="iconfont">&#xe63f;</span>用户
                    <ul class="aside_left_two" style="z-index: 10000;">
                        <li>用户运营</li>
                        <li>人群管理</li>
                        <li>会员运营</li>
                        <li>老客运营</li>
                        <li>自定义运营</li>
                        <li>触达通道</li>
                        <li>淘宝群</li>
                        <li>策略效果</li>
                    </ul>
                </li>
                <li title="客服"><span class="iconfont">&#xe88f;</span>客服
                    <ul class="aside_left_two" style="z-index: 10000;">
                        <li>客服总览</li>
                        <li>客服数据</li>
                        <li>接待数据</li>
                        <li>数据概览</li>
                        <li>接待管理</li>
                        <li>现场管理</li>
                        <li>客服分流</li>
                        <li>接待工具</li>
                        <li>跟单工具</li>
                        <li>售后管理</li>
                        <li>售后任务</li>
                    </ul>
                </li>
                <li title="财务"><span class="iconfont">&#xe74a;</span>财务
                    <ul class="aside_left_two" style="z-index: 10000;">
                        <li>总览</li>
                        <li>资金管理</li>
                        <li>对账管理</li>
                        <li>发票管理</li>
                        <li>保证金</li>
                        <li>淘宝融金</li>
                        <li>金融服务</li>
                    </ul>
                </li>
                <hr>
                <li title="数据"><span class="iconfont">&#xec66;</span>数据
                    <router-link to="/goods/mygoods"></router-link>
                </li>
                <li title="服务"><span class="iconfont">&#xe661;</span>服务
                    <ul class="aside_left_two" style="z-index: 10000;">
                        <li>服务</li>
                        <li>已购服务</li>
                        <li>服务市场</li>
                    </ul>
                </li>
                <li title="应用"><span class="iconfont">&#xe65a;</span>应用
                    <ul class="aside_left_two" style="z-index: 10000;">
                        <li>应用</li>
                        <li>精选应用</li>
                        <li>全部应用</li>
                        <li>经营工具</li>
                        <li>购物小程序</li>
                        <li>我的订单</li>
                        <li>应用数据</li>
                        <li>智能应用</li>
                        <li>快搭建</li>
                        <li>自动化</li>
                    </ul>
                </li>
            </ul>
        </el-aside>
        <el-container>
            <el-header>
                <router-link to="/main"><h2 class="header_handle" >淘宝管理平台</h2></router-link>
                <div class="index-user">
                    <el-dropdown>
                        <span style="outline: none;" class="el-header-span">
                            欢迎：{{ username }}
                            <el-icon class="el-icon--right">
                                <arrow-down />
                            </el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>个人中心</el-dropdown-item>
                                <el-dropdown-item @click="handelLogout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </el-header>
            <router-view></router-view>
        </el-container>
    </el-container>
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
.header_handle{
    cursor: pointer;
    text-decoration: none;
    color: black;
}
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