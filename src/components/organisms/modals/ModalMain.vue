
<template>
  <div class="gradient secondary text-white-100 px-6 py-4 flex flex-no-wrap items-center sm:px-10">
    <span class="text-lg font-bold">
      Status Updates
    </span>
    <button type="button" class="inline-block ml-auto text-2xl cursor-pointer h-full w-4" @click="togglePopup">
      <font-awesome-icon :icon="['fas', 'fa-times']" />
    </button>
  </div>
</template>

<script>

  export default {
    props: {
      content: {
        type: Object,
        required: false,
      },

      type: {
        type: String,
        required: true,
      },

      active: {
        type: Boolean,
        required: false,
      },

      popup: {
        type: Boolean,
        required: false,
      }
    },
    data: () => ({
        showModal: false,
      }),

    mounted() {
      if (this.popup) {
        //if(!localStorage.getItem('popup:show')) {
          this.showModal = true;
          // document.body.classList.add('noscroll');
        //}

        // check body scroll
        this.setBodyClass();
      }
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