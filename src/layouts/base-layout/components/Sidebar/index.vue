<script setup lang="ts">
import {Component, h, ref} from 'vue'
import {NIcon} from 'naive-ui'
import type {MenuOption} from 'naive-ui'
import {CaretDownOutline} from '@vicons/ionicons5'
import {DashboardOutlined, GitlabOutlined} from '@vicons/antd'
import {RouterLink} from 'vue-router'

const menuOptions: MenuOption[] = [
  {
    label: '仪表盘',
    key: 'dashboard',
    href: '/dashboard',
    icon: renderIcon(DashboardOutlined)
  },
  {
    label: '关于',
    key: 'about',
    href: '/about',
    icon: renderIcon(GitlabOutlined)
  }
]
const collapsed = ref(true)

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

function renderMenuLabel (option: MenuOption) {
  if ('href' in option) {
    return h(
        RouterLink,
        { to: option.href },
        option.label as string
    )
  }
  return option.label as string
}

function expandIcon() {
  return h(NIcon, null, {default: () => h(CaretDownOutline)})
}
</script>

<template class="menu">
  <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
      style="height: 100vh"
  >
    <n-menu
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        :render-label="renderMenuLabel"
        :expand-icon="expandIcon"
    />
  </n-layout-sider>
</template>

<style>

</style>

