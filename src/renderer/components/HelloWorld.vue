<template>
  <div class="hello-world">
    <h1>{{ message }}</h1>
    <w-button @click="loadMessageFromDb" color="primary">
      Load from Database
    </w-button>
  </div>
</template>

<script setup>
import { useMessageStore } from '../store/message';
import { computed, onMounted } from 'vue';

defineOptions({ name: 'HelloWorld' });

const messageStore = useMessageStore();
// Computed property to get the message from the store
const message = computed(() => messageStore.message);

// Method to load message from database
const loadMessageFromDb = async () => {
  await messageStore.loadMessage();
};

// Load on mount in Electron environment
onMounted(() => {
  if (window.electronAPI) {
    loadMessageFromDb();
  }
});
</script>

<style scoped>
.hello-world {
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}
</style>
