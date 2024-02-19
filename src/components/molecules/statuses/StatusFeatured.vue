<template>
 <div class="w-full">
   <div :class="[
     'inline-flex w-full py-4 justify-between cursor-pointer',
     (index + 1) === length ? '' : 'border-b border-dashed border-quinary-500',
    ]"
    @click="toggleData"
    v-if="showList"
   >
    <span>
     Title
    </span>
    <button class="inline-flex items-center">
     <span>more info</span>
     <span class="inline-block ml-2">
      <i class="fas fa-long-arrow-alt-right"></i>
     </span>
    </button>
   </div>

   <div class="mt-2 pl-6 space-y-2 leading-relaxed" v-if="getFeaturedData[status.id]">

     <button class="inline-flex items-center" @click="toggleData">
      <span class="inline-block mr-2">
       <i class="fas fa-long-arrow-alt-left"></i>
      </span>
      <span>go back</span>
     </button>

     <div class="block">
       <span class="text-2xl">
        <strong>
         Title 2
        </strong>
       </span>

       <span v-if="status.updated && status.updated.length" class="text-base">
        <em>Last Updated: February 30 2023</em>
       </span>

       <div v-if="status.facilityName">
        <p>
         <strong>
          Facility Name
         </strong>
        </p>
       </div>

       <h6 v-if="status.facilityName" v-text="status.facilityName" class="font-bold uppercase"></h6>

       <div>
        <p>
         <strong>Current Status: ACTIVE</strong>
        </p>
       </div>

       <div v-if="status.projectedOpening !== null">
         <p>
           <strong>Projected Opening: April 32 2024</strong>
         </p>
       </div>

       <div v-if="status.currentStatus" v-html="status.currentStatus"></div>

       <div class="my-10">
         <a
          v-if="status.linkBuilder && status.linkBuilder.length > 0"
          href="#"
          target="_blank"
          title="Learn More"
          class="button primary inline-block"
         >
          Learn More
         </a>
       </div>
     </div>
   </div>
 </div>
</template>

<script>

 import moment from 'moment';

 import { mapGetters } from 'vuex';

 export default {
  props: {
   status: {
    type: Object,
    required: true,
   },

   index: {
    type: Number,
    required: true,
   },

   length: {
    type: Number,
    required: true,
   },
  },

  computed: {
   ...mapGetters([
    'getFeaturedData',
   ]),

   showList() {
    return Object.keys(this.getFeaturedData).length === 0 ? true : false;
   }
  },

  filters: {
   date(val, format) {
    return moment(val).format(format);
   }
  },

  data: () => ({
   showData: false,
  }),

  methods: {
   toggleData() {
    this.showData = !this.showData;
    if ( this.showData ) {
     this.$store.commit('setFeaturedData', { [this.status.id]: true } );
    } else {
     this.$store.commit('setFeaturedData', {} );
    }
   },

   updateHref(status) {
    let parsedObject = JSON.parse(JSON.stringify(status))

    if ('entrySelect' in parsedObject) return parsedObject.entrySelect[0].url;
    if ('externalUrl' in parsedObject) return parsedObject.externalUrl;
    if ('activitySelect' in parsedObject) return parsedObject.activitySelect[0].url + '/' + parsedObject.ageGroup;
   }
  },
 }

</script>