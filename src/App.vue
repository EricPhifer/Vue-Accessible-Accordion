<template>
  <main>
    <!-- NavMain with details / summary -->
    <ul class="space-y-4">
      <NavMain />
    </ul>
  </main>
</template>

<script>
import NavMain from "./components/organisms/NavMain.vue";

export default {
  components: {
    NavMain,
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
