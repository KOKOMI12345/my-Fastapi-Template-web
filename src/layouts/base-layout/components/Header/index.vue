<script setup lang="ts">
import {
  DarkTheme20Filled,

} from '@vicons/fluent';
import {useThemeStore} from "@/store/modules/theme";

const themeStore = useThemeStore();
</script>

<template>
  <div class="header">
    <NLayoutHeader has-sider>
      <NFlex justify="space-between" align="center" class="flex-1">
        <!-- 面包屑 -->
        <div>
          <NBreadcrumb>
            <NBreadcrumbItem>
              <NText style="font-size: 18px">首页</NText>
            </NBreadcrumbItem>
          </NBreadcrumb>
        </div>
        <!-- 右侧区域 -->
        <div class="right">
          <!-- 搜索框 -->
          <!-- TODO 搜索框未完成 -->
          <!-- <Search/> -->
          <!-- 主题切换按钮 -->
          <NButton text style="font-size: 24px" @click="themeStore.toggleTheme" class="theme-toggle">
            <NIcon>
              <DarkTheme20Filled/>
            </NIcon>
          </NButton>
          <!-- 卡片组件 -->
          <AvatarCard />
        </div>
      </NFlex>
    </NLayoutHeader>
  </div>
</template>
<style scoped>
.flex-1 {
  padding: 5px;
}
.header {
  padding: 0;
}

.right {
  display: flex;
  align-items: center;
  justify-content: flex-end; /* 确保内容在右侧 */
}

.theme-toggle {
  margin-right: 10px; /* 与卡片保持一定的间距 */
}

/* 如果 AvatarCard 组件有自己的样式，可以在这里添加 */
</style>