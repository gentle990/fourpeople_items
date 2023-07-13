<template>
    <div id="allbox">
        <div>
            <div id="one">
                <el-radio-group v-model="radio1">
                    <el-radio-button size="large" label="待发货" />
                    <el-radio-button size="large" label="已发货" />
                </el-radio-group>
            </div>
        </div>
        <div id="two" class="bigsize">
            <div class="two1 ">
                <p><span class="iconfont red">&#xe550;</span>如果您因疫情/自然害等不可抗力原因无法按时发货，可进行<span><a href=""
                            class="blue">[发货报备]</a>
                    </span>延长发货时间，如果您的发货地在免责区域，平台也将在商详情页透出"受物流异常影响”的相关文案表达，降低您的消费者投诉，如果您希望取消免责和相关时效表达，可点击<span><a href=""
                            class="blue">申请恢复正增时效去达</a></span>。
                </p>
            </div>
            <div class="two2 oneline">
                <p class="oneline">类型：</p>
                <!-- <el-button type="primary" plain>Primary</el-button>
                <el-button type="primary" plain>Primary</el-button>
                <el-button type="primary" plain>Primary</el-button> -->
                <div style="margin-top: 40px" class="oneline">
                    <el-radio-group v-model="radio2">
                        <el-radio label="1" border size="large">全部</el-radio>
                        <el-radio label="2" border size="large">虚拟订单</el-radio>
                        <el-radio label="3" border size="large">实物订单</el-radio>
                    </el-radio-group>
                </div>
            </div>

            <div class="two3 oneline">
                <p class="oneline">预警：</p>
                <div style="margin-top: 40px" class="oneline">
                    <el-radio-group v-model="radio3">
                        <el-radio label="1" border size="large">超24小时未发货</el-radio>
                        <el-radio label="2" border size="large">超48小时未发货</el-radio>
                    </el-radio-group>
                </div>
            </div>
            <div class="two4 oneline">
                <el-radio-group v-model="radio4" class="oneline">
                    <el-radio :label="1" size="large">含买家留言</el-radio>
                    <el-radio :label="2" size="large">菜鸟打单</el-radio>
                    <el-radio :label="3" size="large">已协商发货订单</el-radio>
                </el-radio-group>
            </div>
            <div class=" oneline" style="margin-left: 200px;">
                <el-row>
                    <el-button style="margin-right: 20px;" size="large" :icon="Search" circle />
                    <el-button type="danger" size="large" :icon="Delete" circle />
                </el-row>
            </div>
            <div class=" oneline two5">
                <div class="oneline " style="width: 600px;margin-left: 100px;">
                    <el-time-picker size="large" v-model="value2" style="width: 600px;" arrow-control placeholder="支付时间" />
                </div>
                <div class=" oneline boxone">
                    <el-input v-model="input" size="large" placeholder="收件人姓名" />
                </div>
                <div class=" oneline boxone">
                    <el-input v-model="input" size="large" placeholder="收件人手机" />
                </div>
            </div>
            <div class="two5 oneline">
                <div class=" oneline boxtwo">
                    <el-input v-model="input" size="large" placeholder="订单号" />
                </div>
                <div class=" oneline boxtwo">
                    <el-select v-model="value" class="m-2" style="width: 400px;" placeholder="地址" size="large">
                        <el-option v-for="item in options" size="large" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
                <div class=" oneline boxtwo">
                    <el-select v-model="value" style="width: 400px;" class="m-2" placeholder="订单来源 请选择" size="large">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </div>
                <div class=" oneline boxtwo">
                    <el-input v-model="input" size="large" placeholder="宝贝id" />
                </div>
            </div>
            <div class=" oneline  ">

                <div class=" oneline boxtwo">
                    <el-select v-model="value" class="m-2" size="large" style="width: 400px;" placeholder="业务类型 请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </div>
                <!-- <div class=" oneline boxtwo">
                    <el-select v-model="value" class="m-2" size="large" style="width: 400px;" placeholder="发货方式">
                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
                
                <div class=" oneline boxtwo">
                    <el-input v-model="input" size="large" placeholder="运单号" />
                </div>
                <div class=" oneline boxtwo">
                    <el-select v-model="value" class="m-2" size="large" style="width: 400px;" placeholder="订单类型 请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </div> -->
            </div>

        </div>
        <div class="three">
            <div class="three1">
                <div class="example-pagination-block">
                    <div class="example-demonstration"></div>
                    <el-pagination layout="prev, pager, next" :total="50" />
                </div>
            </div>
            <div>
                <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">Check
                    all</el-checkbox>
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in cities" :key="city" :label="city">{{
                        city
                    }}</el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const radio4 = ref(1)
const value = ref('')
const value2 = ref('')
const input = ref('')
const options = [{
    value: 'Option1',
    label: 'Option1',
},
{
    value: 'Option2',
    label: 'Option2',
},
{
    value: 'Option3',
    label: 'Option3',
},
{
    value: 'Option4',
    label: 'Option4',
},
{
    value: 'Option5',
    label: 'Option5',
},]

const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

const handleCheckAllChange = (value) => {
  checkedCities.value = value ? cities : []
  isIndeterminate.value = false
}
const handleCheckedCitiesChange = (value) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === cities.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
}
import {
  Delete,
  Search,
} from '@element-plus/icons-vue'

</script>

<style scoped>
#allbox {
    font-size: larger;
}

#one {
    /* background: palegoldenrod; */
    font-size: larger;
}

#two {
    /* background: palegreen; */
    border-bottom: 1px solid #ccc;
}

.two1 {
    border: 1px solid #ccc;
    /* border-radius: 15%; */
    background-color: rgb(231, 244, 252);
    width: 100%;
    height: 100px;
    line-height: 40px;
    padding: 0 10px;
    padding-top: 20px;
}

.iconfont {
    font-size: larger;
}

.blue {
    color: blue;
    text-decoration: none;
}

.two5 {
    width: 100%;
}

.red {
    color: red;
}

.two2 {
    margin-left: 100px;

}

.oneline {
    display: inline-block;
}

.two2,
.two3 {
    margin-right: 200px;
}

.boxone {
    height: 80px;
    margin-top: 30px;
    margin-left: 100px;
    width: 400px;
}

.boxtwo {
    height: 80px;
    margin-left: 100px;
    width: 400px;
}

.example-pagination-block+.example-pagination-block {
    margin-top: 10px;
    margin: auto;
}

.example-pagination-block {
    display: flex;
    justify-content: center;
}

</style>