<script setup>
import { useMyStore } from "../store.js";
import { v4 as uuidv4 } from "uuid";
import { ref, reactive } from "vue";

const state = reactive({
  inputContent: "",
});

const id = ref("");

const store = useMyStore();

const handleSubmitFolders = () => {
  const newFolder = {
    id: uuidv4(),
    folderName: state.inputContent,
    data: [],
  };
  store.addNewFolder(newFolder);

  // Save the folders array to localStorage
  store.saveToLocalStorage();

  state.inputContent = ""; 
  store.setShowInput(false);
};
</script>

<template>
  <div>
    <input type="text" placeholder="Folder Name" v-model="state.inputContent" />
    <button @click="handleSubmitFolders">Submit</button>
  </div>
</template>

<style lang="scss" scoped>
input {
  background-color: white;
  border: none;
  outline: none;
  height: 35px;
  margin-left: 8px;
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
    margin: 8px;
    padding: 4px 12px;
    transition: .4s;
    &:hover {
        background-color: black;
        color: white;
        transition: .4s;
        cursor: pointer;
    }
}
</style>