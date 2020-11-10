import { createApp } from "vue";
// @ts-ignore
import App from "./App.vue";

createApp(App).mount("#app");

const app = createApp({
  data: () => ({
    modalOpen: false
  }),
  methods: {
    toggleModalState(){
      this.modalOpen = !this.modalOpen;
    }
  }
});