import WaveUI from 'wave-ui';
import 'wave-ui/dist/wave-ui.css';

export default {
  install: (app) => {
    // Initialize Wave UI
    new WaveUI(app, {
      // Wave UI configuration options
      icons: [],
      // You can add more options here as needed
    });
  }
};
