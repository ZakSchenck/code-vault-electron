<script setup>
import FolderContainer from "./components/FolderContainer.vue"
import FileContainer from "./components/FileContainer.vue"
import { onMounted } from "vue";
import { useMyStore } from './store.js';

const store = useMyStore();

onMounted(() => {
  store.saveToLocalStorage();
})
</script>

<template>
  <div>
    <div class="app__wrapper">
    <FolderContainer />
    <FileContainer v-if="store.getShowFolderContent" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .app__wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>
