<script setup lang="ts">
import Header from './components/Header/index.vue'
import Sidebar from './components/Sidebar/index.vue'
import Content from './components/Content/index.vue'
</script>

<template class="layout">
  <NSpace vertical size="large">
    <NLayout has-sider>
      <Sidebar/>
      <n-layout>
        <Header/>
        <Content/>
      </n-layout>
    </NLayout>
  </NSpace>
</template>

<style scoped>

</style>