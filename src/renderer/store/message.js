import { defineStore } from 'pinia';

export const useMessageStore = defineStore('message', {
  state: () => ({
    message: 'Hello World',
    loaded: false,
  }),

  actions: {
    async loadMessage() {
      try {
        // Check if we're in Electron environment
        if (window.electronAPI) {
          const message = await window.electronAPI.getMessage();
          this.message = message;
          this.loaded = true;
        }
      } catch (error) {
        console.error('Error loading message:', error);
      }
    },
  },
});
