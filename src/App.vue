<template>
  <main>
    <!-- Accordion with details / summary -->
    <ul class="space-y-4">
      <Accordion />
    </ul>
  </main>
</template>

<script>
import Accordion from "./components/Accordion.vue";

export default {
  components: {
    Accordion,
  },
  data: () => ({
    items: [
      { slideOut: false },
      { slideOut: false },
      { slideOut: false },
      { slideOut: false },
      { slideOut: false },
      { slideOut: false },
    ],
  }),

  methods: {
    toggleData(index) {
      // Toggle the state of the clicked item
      this.$set(this.items, index, { ...this.items[index], slideOut: !this.items[index].slideOut });
    },
    dynamicTitle(index) {
      return `Item ${index + 1}`;
    },
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
