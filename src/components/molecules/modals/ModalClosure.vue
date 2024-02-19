
<template>
 <div class="bg-white-100">
   <div class="gradient tertiary text-white-100 px-6 py-4 flex flex-no-wrap items-center sm:px-10">
     <span class="text-xm lg:text-lg font-bold px-2">
       Closure Information
     </span>
     <span class="inline-block ml-auto text-2xl cursor-pointer h-full w-4" @click="toggleModal">
       <i class="fas fa-times"></i>
     </span>
   </div>
   <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
     <div class="sm:flex sm:items-start">
       <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
         <h3 class="text-lg leading-6 font-medium text-gray-900" v-if="content.schedule">
          <span v-if="closureStart">From closureStart</span> <span v-if="closureEnd">to closureEnd</span>
         </h3>
         <div class="mt-2 prose" v-html="content.information"></div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>

 import moment from 'moment';

 export default {
  props: {
   content: {
    type: Object,
    required: true,
   },

   active: {
    type: Boolean,
    required: true,
   }
  },

  computed: {
   closureStart() {
    if ( this.content.closureStart ) {
     if ( this.content.hasTime ) {
      return moment(this.content.closureStart).format('h:mmA dddd, MMMM D');
     } else {
      return moment(this.content.closureStart).format('dddd, MMMM D');
     }
    } else {
     return null;
    }
   },

   closureEnd() {
    if ( this.content.closureEnd ) {
     if ( this.content.hasTime ) {
      return moment(this.content.closureEnd).format('h:mmA dddd, MMMM D');
     } else {
      return moment(this.content.closureEnd).format('dddd, MMMM D');
     }
    } else {
     return null;
    }
   }
  },

  filters: {
   date(val) {
    return moment(val).format('h:mmA dddd, MMMM D');
   }
  },

  methods: {
   toggleModal() {
    this.$emit('toggleModal', !this.active)
   }
  }
 }

</script>