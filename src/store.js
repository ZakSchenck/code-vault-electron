import { defineStore } from 'pinia';

export const useMyStore = defineStore('myStore', {
  // State
  state: () => ({
    folders: [],
    showInput: false,
    showFolderContent: false,
    currentFolder: null,
  }),

  // Getters
  getters: {
    getFolders: (state) => state.folders,
    getShowInput: (state) => state.showInput,
    getShowFolderContent: (state) => state.showFolderContent,
    getCurrentFolder: (state) => state.currentFolder
  },

  // Mutations
  actions: {
    saveToLocalStorage() {
      localStorage.setItem('folders', JSON.stringify(this.folders));
    },
    setShowInput(show) {
      this.showInput = show
    },
    addNewFolder(object) {
      this.folders.push(object);
    },
    setShowFolderContent(show) {
      this.showFolderContent = show;
    },
    setCurrentFolder(folder) {
      this.currentFolder = folder;
    }
  },
});