<script setup lang="ts">
import { ref } from 'vue';
import { SearchOutlined, CloseCircleOutlined} from '@vicons/antd';

const isActive = ref(false); // 控制搜索框的显示

const toggleActive = () => {
  isActive.value = !isActive.value;
};

const handleSearch = () => {
  // 处理搜索逻辑
  console.log("搜索");
};

const clearSearch = () => {
  // 清空搜索框并隐藏
  // 这里可以添加清空搜索输入的逻辑
  isActive.value = false;
};
</script>

<template>
  <div class="search-component" :class="{ 'is-active': isActive }">
    <div class="search-toggle" @click="toggleActive">
      <NIcon size="24"><SearchOutlined /></NIcon>
    </div>
    <div class="search-input" v-show="isActive">
      <input type="text" placeholder="Search..." @input="handleSearch" />
      <NIcon class="close-icon" v-if="isActive" @click="clearSearch">
        <CloseCircleOutlined />
      </NIcon>
    </div>
  </div>
</template>

<style scoped>
.search-component {
  position: relative;
  width: 300px; /* 可根据需要调整 */
}

.search-toggle {
  cursor: pointer;
}

.search-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: scaleY(0);
  transform-origin: top;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.search-input input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.is-active .search-input {
  transform: scaleY(1);
  opacity: 1;
}

.close-icon {
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}
</style>