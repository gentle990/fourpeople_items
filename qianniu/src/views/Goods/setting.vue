<template>
    <div>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" status-icon>
            <el-form-item label="宝贝名称" prop="name">
                <el-input v-model="ruleForm.name" />
            </el-form-item>
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
            <el-form-item label="宝贝分类">
                <div>
                    <el-input v-if="inputVisible" ref="InputRef" v-model="inputValue" class="tags-input"
                        @keyup.enter="handleInputConfirm" />
                    <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput"> + 添加 </el-button>
                    <div style="margin-top: 20px;">
                        <el-space>
                            <el-tag v-for="item, index in ruleForm.dynamictags" :key="item.title" closable
                                @close="handleClose(index)">{{ item.title }}</el-tag>
                        </el-space>
                    </div>
                </div>
            </el-form-item>
            <el-form-item label="地址" prop="address">
                <!-- <el-input v-model="ruleForm.address" /> -->
                <div style="border: 1px solid #ccc">
                    <Toolbar style="width: 600px; border-bottom: 1px solid #ccc" :editor="editorRef"
                        :defaultConfig="toolbarConfig" :mode="mode" />
                    <Editor style="height: 200px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig"
                        :mode="mode" @onCreated="handleCreated" />
                </div>
            </el-form-item>
            <el-form-item label="电话" prop="telephone">
                <el-input v-model="ruleForm.telephone" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    更新宝贝
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
  
<script setup>
import { ref, shallowRef, reactive, nextTick, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { useUsersStore } from '../../stores/users'
import { updateShop, findShop } from '../../api/shops'

import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'



/* const a = shallowRef({ name: { age: 20 } })
const b = ref({ name: { age: 20 } })
b.value.name.age = 30   // 会响应式
a.value.name.age = 30   // 不会响应式的 -> 浅层
a.value = { name: { age: 30 } }   // 会响应式 */


const usersStore = useUsersStore()

// 富文本
const editorRef = shallowRef()
const valueHtml = ref('<p><br></p>')
const mode = ref('default')
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }
const handleCreated = (editor) => {
    editorRef.value = editor // 记录 editor 实例，重要！
}
watch(valueHtml, (newVal) => {
    ruleForm.address = newVal
})


// 菜单项
const inputVisible = ref(false)
const InputRef = ref(null)
const inputValue = ref('')
const showInput = () => {
    inputVisible.value = true
    nextTick(() => {
        InputRef.value.focus()
    })
}
const handleInputConfirm = () => {
    const now = ruleForm.dynamictags.find((item) => item.title === inputValue.value)
    if (now) {
        ElMessage.error('已存在分类！')
    }
    else {
        ruleForm.dynamictags.push({ title: inputValue.value, list: [] })
    }
    inputValue.value = ''
    inputVisible.value = false
}
const handleClose = (index) => {
    ruleForm.dynamictags.splice(index, 1)
}

// 表单提交
const ruleFormRef = ref(null)
const ruleForm = reactive({
    name: '',
    fileurl: '',
    dynamictags: [],
    address: '',
    telephone: '',
    username: usersStore.username
})
const rules = reactive({
    name: [{ required: true, message: '宝贝名称不能为空', trigger: 'blur' }],
    title: [{ required: true, message: '宝贝分类不能为空', trigger: 'blur' }],
    url: [{ required: true, message: '宝贝图片不能为空', trigger: 'blur' }],
    price: [{ required: true, message: '宝贝金额不能为空', trigger: 'blur' }],
    info: [{ required: true, message: '宝贝描述不能为空', trigger: 'blur' }],
})
const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid, fields) => {
        if (valid) {
            updateShop(ruleForm).then((res) => {
                if (res.data.errcode === 0) {
                    ElMessage.success('更新成功')
                }
                else {
                    ElMessage.error('更新失败')
                }
            })
        } else {
            console.log('error submit!', fields)
        }
    })
}

// 上传
const imageUrl = ref('')
const handleAvatarSuccess = (data) => {
    imageUrl.value = 'http://www.tangxiaoyang.vip:8888/' + data.data.tmp_path  // 做预览
    ruleForm.fileurl = data.data.url  // 给表单收集的
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
//回显店铺
findShop({ username: usersStore.username }).then((res) => {

    if (res.data) {
        for (let attr in res.data) {
            imageUrl.value = res.data.fileurl
            valueHtml.value = res.data.address
            ruleForm[attr] = res.data[attr]
        }
    }
})


</script>
  
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.el-form {
    width: 500px;
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
    width: 178px;
    height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    object-fit: cover;
}

.tags-input {
    width: 80px;
}
</style>