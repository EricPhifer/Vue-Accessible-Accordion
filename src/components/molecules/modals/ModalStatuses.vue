
<template>
 <div class="bg-white-100">
   <div class="gradient secondary text-white-100 px-6 py-4 flex flex-no-wrap items-center sm:px-10">
    <span class="text-lg font-bold">
     Status Updates
    </span>
    <span class="inline-block ml-auto text-2xl cursor-pointer h-full w-4" @click="togglePopup">
     <i class="fas fa-times"></i>
    </span>
   </div>
   <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
    <div class="sm:flex sm:items-start overflow-y-scroll h-vh50">
     <div class="mt-3 sm:mt-0 sm:ml-4 w-full prose md:prose-md lg:prose-lg">

      <StatusFeatured 
        v-for="(status, index) in getFeaturedStatuses"
        :key="status.id"
        :status="status"
        :length="getFeaturedStatuses.length"
        :index="index"
      >
      </StatusFeatured>

     </div>
    </div>
   </div>
 </div>
</template>

<script>
 import { mapGetters } from 'vuex';

 export default {

  components: {
   'StatusFeatured': () => import(/* webpackChunkName: "StatusFeatured" */ '../statuses/StatusFeatured.vue'),
  },

  props: {
   active: {
    type: Boolean,
    required: true,
   }
  },

  data: () => ({
   options: {
    type: 'status',
    featured: true,
   },

   showData: false,
  }),

  computed: {
   ...mapGetters([
    'getCsrf',
    'getGqlToken',
    'getFeaturedStatuses',
   ]),
  },

  methods: {
   togglePopup() {
    this.$emit('togglePopup', !this.active);
    this.$store.commit('setFeaturedData', {});
    this.showData = false;
   }
  },

  async created() {
    // Get the CSRF param to verify submissions before attempting any other queries
    if ( !this.getGqlToken ) {
     await this.$store.dispatch('fetchCsrf');
    }

    // Wait for the GQL token before attempting GQL queries
    if ( !this.getGqlToken ) {
     await this.$store.dispatch('fetchGqlToken');
    }

    // Wait for the statusses to be fetched
    await this.$store.dispatch('fetchStatuses', this.options);

    if ( this.getFeaturedStatuses.length === 0 ) {
     this.$emit('togglePopup', !this.active)
    }
  },
 }
</script>