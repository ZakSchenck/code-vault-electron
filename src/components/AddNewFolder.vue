<template>
  <div>
    <button @click="handleShowInput">Folders&nbsp;&nbsp;&nbsp;&nbsp;<span>{{ store.getShowInput === true ? "-" : "+" }}</span></button>
  </div>
</template>

<script setup>
import { useMyStore } from '../store.js';

const store = useMyStore();

const handleShowInput = () => {
    !store.getShowInput ? store.setShowInput(true) : store.setShowInput(false)
}
</script>

<style lang="scss" scoped>
button {
  background-color: rgb(95, 95, 95);
  font-size: 20px;
  outline: none;
  border: none;
  margin: 8px;
  background-color: transparent;
  font-weight: bold;
  &:hover {
      cursor: pointer;
  }
}
</style>
