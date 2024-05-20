<script setup lang="ts">
import {ref} from 'vue';

import {useRouter} from "vue-router";
import {useAuthStore} from "@/store/modules/auth";
import {useMessage} from 'naive-ui';
import {getUserInfo} from '@/utils/auth'

const message = useMessage()

const authStore = useAuthStore();

const router = useRouter();

const loginForm = ref({
  username: '',
  password: '',
});

const handleSubmit = async () => {
    const boolean = await authStore.doLogin(loginForm.value.username, loginForm.value.password);
    if (boolean) {
      const {username} = getUserInfo();
      message.success(`欢迎回来, ${username}`)
        await router.push('/');
    } else {
      message.error('登录失败!')
    }

};
</script>

<template>
  <NCard class="login-card">
    <h2 class="login-title">登录</h2>
    <NForm :model="loginForm">
      <NFormItem label="Username" path="username">
        <NInput v-model:value="loginForm.username" placeholder="请输入用户名"/>
      </NFormItem>
      <NFormItem label="Password" path="password">
        <n-input v-model:value="loginForm.password" type="password" placeholder="请输入密码"/>
      </NFormItem>
      <NFormItem>
        <NButton type="primary" @click="handleSubmit">登录</NButton>
      </NFormItem>
    </NForm>
  </NCard>
</template>

<style scoped>
.login-card {
  width: 300px;
  margin: 50px auto;
}

.login-title {
  text-align: center;
  margin-bottom: 20px;
}
</style>