import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import WaveUI from './plugins/wave-ui';

// Create the app
const app = createApp(App);

// Use Pinia store
const pinia = createPinia();
app.use(pinia);

// Initialize Wave UI
app.use(WaveUI);

// Mount the app
app.mount('#app');
