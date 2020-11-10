<template>
  <button @click="toggleModalState">Open Modal</button>
  <modal v-if="modalOpen">
    <p>Hello there stranger! I'm a functioning modal</p>
  </modal>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  components: {
    Modal
  },

}
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

</script>