
<template>
 <div class="bg-white-100">
  <div class="gradient secondary text-white-100 px-6 py-4 flex flex-no-wrap items-center">
   <span class="text-lg font-bold">
    content.title
   </span>
   <span class="inline-block ml-auto text-2xl cursor-pointer h-full w-4" @click="toggleModal">
    <i class="fas fa-times"></i>
   </span>
  </div>
  <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-wrap lg:flex-no-wrap overflow-y-scroll h-vh50">

   <div class="w-full lg:w-1/3 py-4">
    <ImageTeaser :options="{ image: content.image, alt: content.title, lazyload: content.lazyload }"></ImageTeaser>
   </div>

   <div class="w-full lg:w-2/3">
    <div class="sm:flex sm:items-start lg:pl-8 pb-10">
     <div class="mt-3 sm:mt-0 sm:ml-4">
      <div class="mt-2 mb-4 prose md:prose-md lg:prose-lg" v-html="content.body">
      </div>
      <div v-if="content.otherLinks && content.otherLinks.length" class="flex flex-wrap flex-col space-y-5">
       <div v-for="(link, index) in content.otherLinks" :key="index">
         <strong v-if="link.linkHeading" class="mr-2">
           link.linkHeading
         </strong>
         <a
          v-if="link.linkToEntry && link.linkToEntry.length"
          :href="link.linkToEntry[0].url" class="button primary inline-flex">
            link.linkText
         </a>
         <a
          v-if="link.linkToExternalWebsite && link.linkToExternalWebsite.length"
          :href="link.linkToExternalWebsite" target="_blank" class="button primary inline-flex">
            link.linkText
         </a>
         <a
          v-if="link.linkToFile && link.linkToFile.length"
          :href="link.linkToFile[0].url" class="button primary inline-flex">
            link.linkText
         </a>
         <a
          v-if="link.locationSelect && link.locationSelect.length"
          :href="link.locationSelect[0].url" class="button primary inline-flex">
            link.linkText
         </a>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script>

 export default {
  components: {
  'ImageTeaser': () => import(/* webpackChunkName: "ImageTeaser" */ '../../atoms/images/ImageTeaser.vue'),
  },

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

  methods: {
   toggleModal() {
    this.$emit('toggleModal', !this.active);
   }   
  } 
 }

</script>