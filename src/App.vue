<template>
  <main>
    <!-- Modal -->
    <ul class="space-y-4">
      <ModalMain />
    </ul>
  </main>
</template>

<script>
import ModalMain from './components/organisms/modals/ModalMain.vue'

export default {
  components: {
    ModalMain,
  },
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
