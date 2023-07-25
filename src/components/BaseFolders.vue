<template>
  <div>
    <div
      class="base-folders__wrapper"
      v-for="folder in folders"
      :key="folder.id"
    >
      <div @click="handleFolderContent(folder)">
        <p>{{ "\uD83D\uDCC1" }} {{ folder.folderName }}</p>
        <p>{{ folder.data.length }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useMyStore } from "../store.js";
import { v4 as uuidv4 } from "uuid";

const store = useMyStore();

const state = reactive({
  inputContent: "",
});

const handleFolderContent = (folder) => {
    console.log(folder)
  store.setCurrentFolder(folder);
  store.setShowFolderContent(true);
};

const handleSubmitFolders = (folder) => {
  const newFolder = {
    id: uuidv4(),
    folderName: state.inputContent,
    data: [],
  };
  store.addNewFolder(newFolder);

  // Save the folders array to localStorage
  store.saveToLocalStorage();

  state.inputContent = "";
};

// Use a computed property to make the folders array reactive
const folders = computed(() => store.getFolders);
</script>

<style lang="scss">
.base-folders__wrapper {
  margin-left: 8px;
  margin-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    &:hover {
      background-color: rgb(112, 112, 112);
      cursor: pointer;
    }
    p {
      margin: 6px;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>