<script setup>
import AddNewFolder from "./AddNewFolder.vue";
import AddNewButtonInput from "./AddNewButtonInput.vue";
import BaseFolders from "./BaseFolders.vue"

import { reactive } from 'vue';
import { useMyStore } from '../store.js';

const store = useMyStore();

const state = reactive({
});
</script>

<template>
  <div class="folder-container__wrapper">
    <AddNewFolder />
    <AddNewButtonInput v-if="store.getShowInput" />
    <BaseFolders />
  </div>
</template>

<style lang="scss" scoped>
.folder-container__wrapper {
  background-color: #444a58;
  width: 300px;
  height: 100vh;
  border-right: 1px solid gray;
}
</style>