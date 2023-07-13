<template>
    <div>
        <div class="food-title">
            <el-button type="primary" icon="Plus" @click="handleAddFood">添加宝贝</el-button>
        </div>
        <el-tabs v-model="activeName">
            <el-tab-pane v-for="item, index in dynamictags" :key="item.title" :label="item.title" :name="item.title">
                <el-row :gutter="10">
                    <el-empty
                        image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        v-if="item.list.length === 0" />
                    <el-col v-else v-for="child, index2 in item.list" :xs="8" :sm="6" :md="4" :lg="3"
                        style="margin-bottom: 10px">
                        <el-card>
                            <img :src="child.url" class="image" />
                            <div style="padding: 14px">
                                <div style="margin-bottom: 10px;">{{ child.name }}</div>
                                <div class="content">
                                    <time class="time">价格：{{ child.price }}</time>
                                    <el-popconfirm title="是否要删除当前宝贝?" @confirm="confirmEvent(index, index2)">
                                        <template #reference>
                                            <el-icon>
                                                <Delete />
                                            </el-icon>
                                        </template>
                                    </el-popconfirm>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-tab-pane>
        </el-tabs>
        <div class="food-dialog">
            <el-dialog v-model="dialogVisible" title="添加宝贝" width="400">
                <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="80px" status-icon size="small">
                    <el-form-item label="宝贝名称" prop="name">
                        <el-input v-model="ruleForm.name" />
                    </el-form-item>
                    <!-- <el-form-item label="宝贝分类" prop="title">
              <el-select v-model="ruleForm.title" placeholder="请选择宝贝分类">
                <el-option v-for="item in dynamictags" :key="item.title" :label="item.title" :value="item.title" />
              </el-select>
            </el-form-item> -->
                    <el-form-item label="宝贝图片" prop="url">
                        <el-upload class="avatar-uploader" action="http://www.tangxiaoyang.vip:8888/api/v2/upload"
                            :headers="headerToken" :show-file-list="false" :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                            <el-icon v-else class="avatar-uploader-icon">
                                <Plus />
                            </el-icon>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="价格" prop="price">
                        <el-input v-model="ruleForm.price" />
                    </el-form-item>
                    <el-form-item label="描述" prop="info">
                        <el-input v-model="ruleForm.info" :rows="4" type="textarea" />
                    </el-form-item>
                </el-form>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
                        <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
                    </span>
                </template>
            </el-dialog>
        </div>
        <div v-for="child in ruleForm">
            <p>{{ child }}</p>
            <!-- <img src="child.data.tmp_path" > -->
            <img :src="child.url" class="image" />
        </div>
    </div>
</template>
  
<script setup>
import { ref, reactive, computed } from 'vue'
import { findShop, updateShop } from '../../api/shops'
import { useUsersStore } from '../../stores/users'
import { ElMessage } from 'element-plus'

const usersStore = useUsersStore()

// 标签页切换
const dynamictags = ref([])
const activeName = ref('')
const confirmEvent = (index, index2) => {
    dynamictags.value[index].list.splice(index2, 1)
    updateShop({ username: usersStore.username, dynamictags: dynamictags.value }).then((res) => {
        if (res.data.errcode === 0) {
            ElMessage.success('删除宝贝成功')
        }
        else {
            ElMessage.success('删除宝贝失败')
        }
    })
}

// 弹窗
const dialogVisible = ref(false)
const handleAddFood = () => {
    dialogVisible.value = true
}

// 表单
const ruleFormRef = ref(null)
const ruleForm = reactive({
    name: '',
    title: '',
    url: '',
    price: '',
    info: ''
})
const rules = reactive({
    name: [{ required: true, message: '宝贝名称不能为空', trigger: 'blur' }],
    title: [{ required: true, message: '宝贝分类不能为空', trigger: 'blur' }],
    url: [{ required: true, message: '宝贝图片不能为空', trigger: 'blur' }],
    price: [{ required: true, message: '宝贝金额不能为空', trigger: 'blur' }],
    info: [{ required: true, message: '宝贝描述不能为空', trigger: 'blur' }],
})
const imageUrl = ref('')
const handleAvatarSuccess = (data) => {
    imageUrl.value = 'http://www.tangxiaoyang.vip:8888/' + data.data.tmp_path
    ruleForm.url = data.data.url
    console.log(data)

}
const beforeAvatarUpload = (rawFile) => {
    if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png') {
        ElMessage.error('Avatar picture must be JPG or PNG format!')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('Avatar picture size can not exceed 2MB!')
        return false
    }
    return true
}
const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid, fields) => {
        if (valid) {
            console.log(123)
            // debugger
            //是想从表单拿到数据调用服务器进行新增对吧？dui 这个是啥dynamictags收集数据得
            //已经有表单数据了，应该不用这个，看起来这个是动态标签，宝贝分类得 对的对的搞重复了
            //是哪个api部？找一下对应得api 
            //那个是更新店铺信息得，你这个是新增商品，应该部是一个事儿 我懂了 虎哥 知道哪里写错了
            //还有 ，表单数据 直接是formEl 应该就能拿到，组装城json 发送添加商品得请求 应该就ok了，但是发送所有请求都要携带token //token配置在axios 记得要更新 他有时间限制得 
            //好的 我去尝试更改 有思路了 1111111
            const list = dynamictags.value.find((item) => item.title === ruleForm.title).list

            // 方案1
            list.push({name: ruleForm.name, price: ruleForm.price, info: ruleForm.info, url: ruleForm.url})

           

            updateShop({ username: usersStore.username, ruleForm: ruleForm.value }).then((res) => {
                if (res.data.rid === 0) {
                    ElMessage.success('添加宝贝成功')
                }
                else {
                    ElMessage.error('添加宝贝失败')
                }
                dialogVisible.value = false
                activeName.value = ruleForm.title
                ruleFormRef.value.resetFields()
            })
        } else {
            console.log('error submit!', fields)
        }
    })
}
const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
    imageUrl.value = ''
}

const headerToken = computed(() => {
    console.log(123)
    return { "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUwMCwicmlkIjowLCJpYXQiOjE2ODkxNTEzNjgsImV4cCI6MTY4OTIzNzc2OH0.Aq6nGLsScjVQKbXxgLwoQnjVmbvvMjTofN6EYZI4Tk0' }
})


</script>
  
<style scoped>
.food-title {
    display: flex;
    justify-content: flex-end;
}

.avatar-uploader :deep(.el-upload) {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader :deep(.el-upload:hover) {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    text-align: center;
}

.avatar {
    width: 100px;
    height: 100px;
    object-fit: cover;
}

.el-select {
    width: 100%;
}

.food-dialog :deep(.el-dialog__body) {
    padding-bottom: 0;
}

.el-card {
    min-height: 150px;
}

.el-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.el-card .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.el-empty {
    margin: 100px auto;
}
</style>
  