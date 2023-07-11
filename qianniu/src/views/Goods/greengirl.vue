<template>
    <el-main>
        <p class="header-top">您还没有商品,你可以</p>
        <div class="header0">
            <router-link to="/goods/publishgoods">
                <div class="header"><img src="../../assets/微信图片_20230710105457_03.jpg">发布的商品</div>
            </router-link>
            <router-link to="/goods/newfoods">
            <div class="header"><img src="../../assets/微信图片_20230710105457_05.jpg">挑选值得卖商品</div>
            </router-link>
            <router-link to="/goods/newfoods">
                <div class="header"><img src="../../assets/20211202113803_9ba69.png" width="50"
                        style="border-radius: 15px;">发布新商品</div>
            </router-link>
        </div>
        <div class="tuijian">
            <div>
                <p class="tuijianp">值得卖商品推荐</p>
            </div>
            <div>
                <el-checkbox label="1" size="large"> 使用<span class="span_one">什么值得卖</span>服务, 代表您已阅读及同意<span
                        class="span_two">相关服务及法律声明</span></el-checkbox>
            </div>
        </div>
        <div class="tupian">
            <img src="../../assets/biejing.png">
        </div>
        <div class="button_shuju">
            <router-link to="/Goods/Man">
                <div class="aaa" @click="man">男装</div>
            </router-link>
            <router-link to="/Goods/girl">
                <div class="aaa" @click="girl">女装</div>
            </router-link>
            <router-link to="/Goods/bra">
                <div class="aaa" @click="bra">内衣配件</div>
            </router-link>
            <router-link to="/Goods/bag">
                <div class="aaa" @click="bag">箱包/珠宝</div>
            </router-link>
            <router-link to="/Goods/renyao">
                <div class="aaa" @click="renyao">男女鞋</div>
            </router-link>
            <router-link to="/Goods/sport">
                <div class="aaa" @click="sport">运动户外</div>
            </router-link>
            <router-link to="/Goods/foodss">
                <div class="aaa" @click="foodss">食品生鲜</div>
            </router-link>
            <router-link to="/Goods/mo">
                <div class="aaa" @click="mo">母婴</div>
            </router-link>
            <router-link to="/Goods/greengirl">
                <div class="aaa" @click="greengirl">美妆洗护</div>
            </router-link>
            <router-link to="/Goods/family_z">
                <div class="aaa" @click="family_z">家装</div>
            </router-link>
            <router-link to="/Goods/pay">
                <div class="aaa" @click="pay">宠物</div>
            </router-link>
        </div>
    </el-main>
    <el-main>
        <div class="shuju">
            <ul class="shuju1">
                <li><img src="../../assets/shujutu.png" alt=""></li>
               
                    <li v-for="item in list.goodslist" :key="item.itemId" @click="handleClick(item.filmId)">
                        <!-- {{ item.image }} -->
                        <img :src="item.image" alt="" width="210" height="250">
                        <p>{{ item.title }}</p>
                        <p>价格：{{ item.price }}</p>
                        <p>{{ item.keyWord }}</p>
                        <p>重量：{{ item.monthSearch.ratio }}</p>
                        <p>分类：{{ item.cateName }}</p>
                    </li>
    
            </ul>
        </div>
        <router-View></router-View>
    </el-main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'
import package2 from '../../../greengirl.json'

const router = useRouter()  
const list = ref(package2)


</script>

<style scoped>
.shuju {
    margin-top: 20px;
}

.shuju1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}

.shuju1 li {
    width: 15%;
    height: 357px;
    text-align: center;
    margin-top: 25px;
    border-radius: 15px;
}

.shuju1 li img {
    border-radius: 15px;

}

.button_shuju {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}

.aaa {
    width: 100px;
    height: 55px;
    margin-right: 15px;
    font-size: 18px;
    background-color: #f2f4f7;
    border-radius: 10px;
    line-height: 55px;
    text-align: center;
    border: white 1px solid;
    color: black;

}

.button_shuju div:hover {
    transition: border 0.8s;
    border: blue 1px solid;
    cursor: pointer;
}

.tupian {
    width: 100%;
}

.tupian img {
    width: 100%;
}

.span_one {
    font-size: 16px;
    font-weight: bolder;
}

.span_two {
    font-size: 16px;
    color: blue;
}

.tuijian {
    display: flex;
    align-items: center;
}

.tuijianp {
    padding-right: 5px;
    font-size: 25px;
}

.header-top {
    font-size: 22px;
    margin-bottom: 5px;
}

.header0 {
    display: flex;
    width: 645px;
    justify-content: space-between;
    align-items: center;
}

.header0 .header img {
    padding-right: 15px;
}

.header {
    width: 315px;
    height: 80px;
    line-height: 80px;
    border-radius: 10px;
    background-color: #f7f8fa;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
}</style>