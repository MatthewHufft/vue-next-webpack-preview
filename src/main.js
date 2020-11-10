import { createApp } from "vue";

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

app.mount("#app");