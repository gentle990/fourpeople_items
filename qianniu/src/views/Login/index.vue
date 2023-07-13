<template>
    <div class="login-page">
        <div class="login-left">
            <a href="https://work.taobao.com/download.html?spm=a21dvs.23633998.0.0.52e71359uIqwDp" target="_blank"
                title="点击跳转">
                <img src="https://img.alicdn.com/imgextra/i4/O1CN01bsN2kl202KS1fnXy1_!!6000000006791-2-tps-1240-1800.png"
                    alt="">
                <div class="login-logo">
                    <img src="https://img.alicdn.com/imgextra/i2/O1CN0109BlPd28fGzhhVrYk_!!6000000007959-2-tps-369-126.png"
                        title="脆羊">
                </div>
            </a>

        </div>
        <div class="login-right">
            <a href="https://work.taobao.com?spm=a21dvs.23633998.0.0.52e71359rJEyy2" target="_blank">关于脆羊</a>
            <div>

                <h1 style="margin-bottom: 20px;display: inline-block;font-weight: normal;margin-right: 20px;">欢迎登陆! </h1>
                <span> 做生意上脆羊</span>
                <el-form ref="ruleFormRef" :model="ruleForm" status-icon label-width="" :rules="rules" label-position="top"
                    class="login-box">
                    <h2 style="text-align: center;font-weight: normal;margin-bottom: 15px;">脆羊马马电商平台</h2>
                    <el-form-item label="用户名" prop="username">
                        <el-input type="text" v-model="ruleForm.username" />
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="ruleForm.password" />
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
                        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
                        <el-button @click="PhoneLogin(ruleFormRef)">手机号登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useUsersStore } from '../../stores/users'  //目的是将token存储到pinia中，做本地持久化存储
import { login } from '../../api/users'

const phonerules = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/
const ruleFormRef = ref(null)
const router = useRouter()
const usersStore = useUsersStore()
// 拿到输入框中的输入的响应式数据
const ruleForm = reactive({
    username: '',
    password: ''
})
// 校验 rulse
const rules = reactive({
    username: [
        { required: true, message: '手机号不能为空', trigger: 'blur' },
        // { pattern: phonerules, message: '手机号格式错误', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '密码不能为空', trigger: 'blur' }
    ]
})
const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid, fields) => {
        if (valid) {
            //console.log('submit!', ruleForm)

            login(ruleForm).then((res,error) => {
              console.log(res)
                if (res.data.data.rid === 0) {
                    console.log(res.data)
                    usersStore.updateToken(res.data.data.token)//更新token //目的是将token存储到pinia中，做本地持久化存储
                    usersStore.updateId(res.data.data.id)//更新token //目的是将token存储到pinia中，做本地持久化存储

                    ElMessage.success('登录成功')//提示登录成功
                    router.push('/')//跳转到首页
                }
                else {
                    ElMessage.error('登录失败')
                }
            //     ,catch(error) {
            //     console.log(error)
            // }
            }
            
            )

        } else {
            // console.log('error submit!', fields)
            ElMessage.error('表单验证失败，请检查输入')
        }
    })
}
const resetForm = () => {
    console.log('reset!')
    ruleForm.username = ''
    ruleForm.password = ''
}
const PhoneLogin = () => {
    console.log(1111)
    // user.value.label = '手机号'
    /* axios({
        url: 'http://www.tangxiaoyang.vip:8888/api/v2/login',
        method: 'post',
        data: {
            username: 'admin',
            password: '123456'
        }
    }) */
}
</script>

<style scoped>
.login-page {
    /* background: #aaa; */
    display: flex;
    height: 100vh;
    width: 100vw;
}

.login-left {
    flex: 1.5;
    /* background: rgb(182, 153, 153); */
}

img {
    height: 100%;
    width: 100%;
}

.login-logo {
    position: absolute;
    top: 35px;
    left: 42px;
    display: block;
}

.login-logo img {
    height: 42px;
}

.login-right {
    flex: 2;
    /* background: #b4d88b; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-right a {
    position: absolute;
    top: 20px;
    right: 20px;
    text-decoration: none;
    color: #333;
}

.login-box {
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 30px;
    transition: all 0.8s;
    width: 400px;
    height: 450px;
}

.login-box:hover {
    box-shadow: 1px 3px 8px 1px rgba(0, 0, 0, 0.2);
}
</style>