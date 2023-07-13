
import { ref, computed } from 'vue'
import { defineStore } from 'pinia' // pinia 的 本地 存储的一个方法

//引入pinia 的本地持久化 //目的是将token存储到pinia中，做本地持久化存储
export const useUsersStore = defineStore('users', () => {//
  const token = ref('')
  const username = ref('')
  const userid = ref('')
  // const password = ref('')
  function updateToken(payload) {
    token.value = payload
  }
  function clearToken() {
    token.value = ''
  }
  function updateUsername(payload) {
    username.value = payload
  }
  function updatepassword(payload) {
    password.value = payload
  }
  function updateId(payload) {
    userid.value = payload
  }
  return {
    token,
    username,
    userid,
    // password,
    updateToken,
    clearToken,
    updateUsername,
    updatepassword,
    updateId
  }
}, {
  persist: {
    // paths: ['token']
    enabled:true
  }
})
