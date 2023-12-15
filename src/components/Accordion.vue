
<template>
       <li
        :class="[
          'pt-1 pb-2',
          (index + 1) === length ? '' : 'border-b-1 border-dashed border-quinary-500',
        ]"
        v-for="(item, index) in items"
        :key="index"
      >
      <details :open="item.slideOut" @click="toggleData(index)">
          <summary>
            <!-- <span
              class="text-xxs text-secondary-700 flex-grow-0"
              :class="item.slideOut ? 'rotate-icon' : 'unrotate-icon'"
              aria-hidden="true"
            >
              <font-awesome-icon :icon="['fas', 'fa-plus']" />
            </span> -->
            <span class="text-primary-900 text-base sm:text-xl font-primary font-semibold">
              {{ dynamicTitle(index) }}
            </span>
          </summary>

          <!-- Accordion Panel Content -->
                            <span class="text-base">
                                <p><em>Last Updated: An Event | May 27 2023</em></p>
                            </span>
                            <p class="mb-10">
                                <strong>Current Status: GOOD</strong>
                            </p>

                            <p class="mb-10">
                                <strong>Projected Opening: Coming soon | October 24 2023</strong>
                            </p>

                        <a
                            href="#"
                            target="_self"
                            :title="`Status ${index + 1} Title`"
                        class="button primary inline-block
"
                >
                    Learn More
            </a>
        </details>
    </li>

  </template>
  
  <script>
  export default {
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
/* Hide default arrow */
    details > summary::-webkit-details-marker {
        display: none;
    }

    details > summary {
        list-style-type: none;
        cursor: pointer;
        user-select: none;
    }

    /* Style for the custom icon */
    details > summary::before {
        content: '';
        display: inline-block;
        width: 12px; /* Adjust the size as needed */
        height: 12px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTBoLTEwdi0xMGgtNHYxMGgtMTB2NGgxMHYxMGg0di0xMGgxMHoiLz48L3N2Zz4=");
        margin-right: 0.5rem; /* Adjust spacing as needed */
        transition: transform 0.3s ease;
    }

    details[open] > summary::before {
        transform: rotate(45deg); 
    }
</style>