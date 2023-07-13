<template>
    <div class="all">
        <!-- <header class="headerbox">
            <div class="headbox "> -->
                <!-- <div class="biglinebox">
                    <div class="linebox ">
                        <p><img src="./小店图片.jpg" alt=""></p>
                    </div>
                    <div class="linebox "></div>
                    <div class="linebox "><span class="iconfont">&#xe61b;</span>上衣爆款</div>
                    <div class="linebox"><span class="iconfont">&#xe615;</span>裤子爆款</div>
                    <div class="linebox"><span class="iconfont">&#xe6fc;</span>短裙爆款</div>
                    <div class="linebox"><span class="iconfont iconfont2">&#xe60c;</span>连衣裙爆款</div>
                    <div class="linebox"><span class="iconfont iconfont1">&#xe625;</span>外套爆款</div>
                </div> -->
            <!-- </div> -->

            <!-- <router-viwe to="../../Index/index">
                <div class="headbox orange"><span class="iconfont">&#xe751;</span>首页</div>
            </router-viwe> 
            <router-viwe to="">
                <div class="headbox orange"><span class="iconfont">&#xe602;</span>全部订单</div>
            </router-viwe> 
            <router-viwe to="">
                <div class="headbox orange"><span class="iconfont iconfont3">&#xe626;</span>已完成订单</div>
            </router-viwe>
            <router-viwe to="">
                <div class="headbox orange"><span class="iconfont">&#xe715;</span>未完成订单</div>
            </router-viwe> -->
            <!-- <Router-viwe />  -->
        <!-- </header> -->
        <div class="threebox">
            <div class="box1">
                <div ref="main1" class="main1"></div>
            </div>
            <div class="twobox">
                <div class="box2">
                    <div ref="main2" class="main2"></div>
                </div>
                <div class="box3">
                    <div ref="main3" class="main3"></div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
const main1 = ref(null)
const main2 = ref(null)
const main3 = ref(null)
onMounted(() => {
    let myChart = echarts.init(main1.value);
    let myLine = echarts.init(main2.value);
    let myCircle = echarts.init(main3.value);
    myCircle.setOption({
        title: {
            text: '未完成订单'
        },
        series: [
            {
                type: 'pie',
                data: [
                    {
                        value: 150,
                        name: '上衣'
                    },
                    {
                        value: 200,
                        name: '裤子'
                    },
                    {
                        value: 360,
                        name: '短裙'
                    },
                    {
                        value: 100,
                        name: '连衣裙'
                    },
                    {
                        value: 80,
                        name: '外套'
                    },
                ],
                roseType: 'area'
            }
        ]
    })
    myLine.setOption({
        title: {
            text: '已完成订单'
        },
        xAxis: {
            data: ['上衣', '裤子', '短裙', '连衣裙', '外套']
        },
        yAxis: {},
        series: [
            {

                data: [15, 20, 36, 10, 8,],
                type: 'line',
                smooth: true
            }
        ]
    })
    myChart.setOption({
        //   title: {
        //     text: '全部订单'
        //   },
        //   tooltip: {},
        //   xAxis: {
        //     data: ['上衣','裤子', '短裙', '连衣裙',  '外套']
        //   },
        //   yAxis: {},
        //   series: [
        //     {
        //       name: '销量',
        //       type: 'bar',
        //       data: [15, 20, 36, 10, 8, ]
        //     },
        //     {
        //       name: '热卖',
        //       type: 'bar',
        //       data: [8, 18, 38, 14, 7, ]
        //     }
        //   ]

        title: {
            text: '全部订单',

        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['销量', '热卖']
        },
        toolbox: {
            show: true,
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                // prettier-ignore
                data: ['上衣', '裤子', '短裙', '连衣裙', '外套']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '销量',
                type: 'bar',
                data: [
                    15, 20, 36, 10, 8,
                ],
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                },
                markLine: {
                    data: [{ type: 'average', name: 'Avg' }]
                }
            },
            {
                name: '热卖',
                type: 'bar',
                data: [
                    8, 18, 38, 14, 7,
                ],
                markPoint: {
                    data: [
                        { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
                        { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
                    ]
                },
                markLine: {
                    data: [{ type: 'average', name: 'Avg' }]
                }
            }
        ]

    });
})

</script>


<style scoped>
/*  */
.all {
    height: 100%;
    width: 100%;


}

* {
    padding: 0;
    margin: 0;
}

/* .headerbox {
    width: 100%;
    display: flex;
    font-size: 20px;
    color: #bbb;

}

.headbox {
    flex: 1 1 auto;
    height: 80px;
    line-height: 80px;
    text-align: center;
    /* border:1px solid #ccc; */
    /* border-radius: 5%; */

    /* background-color: #ddd; */
/* }  */

/* .biglinebox {
    display: flex;
    flex-direction: column;
} */

/* .linebox {
    height: 80px;
    font-size: 20px;
    flex: 1 1 auto;
    line-height: 80px;
    text-align: center;
    border-radius: 5%;
    margin-bottom: 5px;
    background-color: #ddd;
} */

/* .linebox1 {
    border: 0
} */

.box1 {
    margin-top: 100px;
    height: 400px;
}

.main1 {
    width: 900px;
    height: 400px;
    /* border: 1px black solid; */
    margin: 50px auto;
}

.twobox {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    overflow-x: hidden;
    overflow-y: scroll;
    flex: 1;
}

.threebox {
    margin: 50px;
}

.box2 {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;

}

.box3 {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;

}

.main2 {
    width: 600px;
    height: 600px;
}

.main3 {
    width: 600px;
    height: 600px;
}

.iconfont {
    font-size: 50px;
    margin-right: 10px;
}

.iconfont1 {
    font-size: 40px;
}

.iconfont2 {
    margin-right: 0px;
}

.iconfont3 {
    font-size: 70px;
}

/* p {
    background: #e8f0ff;
}

img {
    display: inline-block;
    vertical-align: middle;
}

.orange {
    color: #ff6700;
    background: #e8f0ff;
}*/

</style> 