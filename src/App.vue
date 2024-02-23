<template>
  <Modal :show-modal="showModal"/>
  <main :aria-hidden="showModal">
    <!-- Accordion with details / summary -->
    <ul class="space-y-4">
      <Accordion />
    </ul>
  </main>
</template>

<script>
  import Accordion from "./components/Accordion.vue";
  import Modal from "./components/Modal.vue";

  export default {
    components: {
      Accordion,
      Modal,
    },
    data: () => ({
      showModal: false,
    })
  };
</script>


<style scoped>
header {
  line-height: 1.5;
}

ul {
  width: 570px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
