
<template>
  <li
    :class="[
      'pt-1 pb-2',
      (index + 1) === items.length ? '' : 'border-b-1 border-dashed border-quinary-500',
    ]"
    v-for="(item, index) in items"
    :key="index"
  >
    <details :open="item.slideOut" @toggle="item.slideOut = !item.slideOut">
      <summary :id="'accordion-header-' + index">
        <span class="text-primary-900 text-base sm:text-xl font-primary font-semibold">
          <span
            class="text-xxs text-secondary-700 flex-grow-0"
            :class="item.slideOut ? 'rotate-icon' : 'unrotate-icon'"
            aria-hidden="true"
          >
            <font-awesome-icon :icon="['fas', 'fa-plus']" />
          </span>
            {{ dynamicTitle(index) }}
        </span>
      </summary>

      <!-- Accordion Panel Content -->
      <div :aria-labelledby="'accordion-header-' + index" role="region">
        <span class="text-base">
          <h5><em>Last Updated: An Event | May 27 2023</em></h5>
        </span>
        
        <h5 class="mb-10"><strong>Current Status: OPEN</strong></h5>
        <h5 class="mb-10"><strong>Projected Opening: Coming soon | October 24 2023</strong></h5>
        <p>A description of the event to come...</p>
        <a
          href="#"
          target="_self"
          :title="`Status ${index + 1} Title`"
          class="button primary inline-block"
        >
        Learn More
      </a>
    </div>
    </details>
  </li>
</template>

<script>
  import { reactive } from 'vue'; 

  export default {
    data() {
      return {
        items: reactive([
          { slideOut: false },
          { slideOut: false },
          { slideOut: false },
          { slideOut: false },
          { slideOut: false },
          { slideOut: false },
        ]),
      };
    },

    methods: {
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
</style>