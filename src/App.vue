<script setup lang="ts">
import {computed} from "vue";
import {darkTheme} from 'naive-ui';
import {useThemeStore} from "@/store/modules/theme";

const themeStore = useThemeStore();

const theme = computed(() => {
  if (themeStore.theme === 'dark') {
    return darkTheme;
  } else {
    return null;
  }
})

</script>

<template>
  <NConfigProvider :theme="theme">
    <NMessageProvider>
      <RouterView/>
    </NMessageProvider>
  </NConfigProvider>
</template>

<style scoped>

</style>
