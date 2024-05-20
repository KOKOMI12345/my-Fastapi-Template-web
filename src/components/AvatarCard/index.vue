<script setup lang="ts">
import {UserOutlined} from '@vicons/antd';
</script>

<template>
  <NFlex align="center">
    <NCard class="rounded-card" size="small">
      <div class="icon-text-container">
        <NIcon size="24">
          <UserOutlined />
        </NIcon>
        <NText class="text-center">
          Admin
        </NText>
      </div>
    </NCard>
  </NFlex>
</template>

<style scoped>
.rounded-card {
  margin: 8px;
  padding: 4px; /* 根据需要调整内边距 */
  border-radius: 12px;
  width: 120px; /* 根据需要设置宽度 */
  text-align: center; /* 卡片内部文本居中 */
}

.icon-text-container {
  display: flex;
  align-items: center; /* 水平和垂直居中图标和文本 */
  justify-content: center; /* 水平居中 */
  flex-direction: row; /* 水平排列 */
}

.text-center {
  margin-left: 8px; /* 图文之间的间距，根据需要调整 */
  white-space: nowrap; /* 防止文本换行 */
}
</style>