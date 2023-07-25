<script setup>
import { computed, reactive, onMounted } from "vue";
import { useMyStore } from "../store.js";

const store = useMyStore();

const state = reactive({
  showInput: false,
  inputContent: "",
});

const handleShowInput = () => {
  state.showInput = !state.showInput;
};

onMounted(() => {
const storedData = localStorage.getItem("folders");
const parsedData = storedData ? JSON.parse(storedData) : [];
const firstFolder = parsedData[0].data;

console.log(firstFolder)
    
})

const handleSubmitFile = () => {
    // Create a copy of the current folder. This func logic is for reactivity
  const updatedFolder = { ...currentFolder.value };
  updatedFolder.data.push({ name: state.inputContent, codeBlock: "" });
  // Update the store
  store.setCurrentFolder(updatedFolder);
  state.inputContent = "";
  state.showInput = false;
}

const foldersById = (id) => {
  const storedData = localStorage.getItem("folders");
  const parsedData = storedData ? JSON.parse(storedData) : [];
  const folder = parsedData.find((folder) => folder.id === id);
  return folder ? folder.data : [];
};

const currentFolder = computed(() => {
  const currentFolderId = store.getCurrentFolder.id;
  return store.getFolders.find((folder) => folder.id === currentFolderId);
});

const inputReactive = computed(() => state.showInput);
</script>

<template>
  <div class="file-container__wrapper">
    <h2 @click="handleShowInput">
      {{ currentFolder.folderName }}&nbsp;&nbsp;&nbsp;&nbsp;{{!state.showInput ? '+' : '-'}}
    </h2>
    <div v-if="inputReactive">
      <input
        type="text"
        placeholder="Code Block Name"
        v-model="state.inputContent"
      />
      <button @click="handleSubmitFile">Submit</button>
    </div>
    <h3 v-if="!currentFolder.data">No Code Files Found...</h3>
    <div v-else>
      <div v-for="data in currentFolder.data" :key="data.id">
          <h3>&#128196; {{ data.name }}</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.file-container__wrapper {
  background-color: #444a58;
  width: 300px;
  height: 100vh;
  border-right: 1px solid gray;
  padding-left: 8px;
  h2 {
    position: relative;
    display: inline-block;
    &::before {
      position: absolute;
      content: "";
      bottom: 0px;
      width: 100%;
      height: 4px;
      background-color: white;
    }
  }
  h3 {
      margin-top: 8px;

  }
}

input {
  background-color: white;
  border: none;
  outline: none;
  height: 35px;
  margin: 12px 0 0 0;
  padding-left: 8px;
  width: 90%;
  color: black;
  font-size: 22px;
  border-left: 12px solid gray;
}

button {
  border: none;
  outline: none;
  color: black;
  font-size: 20px;
  background-color: rgb(255, 255, 255);
  font-weight: bold;
  margin: 12px 0 12px 0;
  padding: 4px 12px;
  transition: 0.4s;
  &:hover {
    background-color: black;
    color: white;
    transition: 0.4s;
    cursor: pointer;
  }
}
</style>