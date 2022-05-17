
<template>

  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-500 h-screen">
    <div class="max-w-md w-full space-y-8 shadow-md p-4 bg-white">
      <div>
        <img class="mx-auto h-12 w-auto" src="@/assets/logo.png" alt="Workflow" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">SSLS图书馆</h2>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">电子邮箱</label>
            <input id="email-address" v-model="loginForm.email" name="email" type="email" autocomplete="email"  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="电子邮箱" />
          </div>
          <div>
            <label for="password" class="sr-only">密码</label>
            <input id="password" name="password" v-model="loginForm.loginPwd" type="password" autocomplete="current-password"  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="密码" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"> 记住我 </label>
          </div>
          <p class="text-red-500 p-1">{{msg}}</p>
        </div>

        <div>
          <button type="button" @click="login()" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-blue-300 group-hover:text-blue-400" aria-hidden="true" />
            </span>
            登录
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'
import { LockClosedIcon } from '@heroicons/vue/solid'
import { reactive, ref } from 'vue'
import router from '@/routers/main'
import { useReaderStore } from '@/store/readerState'
import { Reader } from '@/api/types/reader'
import { ElMessageBox } from 'element-plus'
const msg = ref('')
interface ILogin{
  email:string
  loginPwd:string
}
const reader = useReaderStore()
const loginForm = reactive<ILogin>({
  email: '',
  loginPwd: ''
})
function login () {
  request.post('/api/login', {
    loginEmail: loginForm.email,
    loginPwd: loginForm.loginPwd
  }).then(successRes => {
    if (successRes.data.code === 200) {
      ElMessageBox.alert('欢迎，' + successRes.data.data.name, '登录成功')
      router.push('/')
      reader.update(successRes.data.data as Reader)
    } else {
      msg.value = successRes.data.msg
    }
  }).catch(failRes => {
    msg.value = failRes.data.msg
  })
}

</script>
