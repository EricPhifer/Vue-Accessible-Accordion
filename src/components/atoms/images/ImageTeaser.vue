<template>

 <figure role="figure" :aria-label="options.alt" class="w-full h-full">
   <picture 
    :class="[ 'block relative', options.ratio ]">

    <source :data-srcset="image.srcsetWebp"
     :sizes="sizes"
     type="image/webp"
    />

    <source :data-srcset="image.srcset" :sizes="sizes"/>

    <img    
     :src="image.src"
     :srcset="image.srcset"
     :sizes="sizes"
     :alt="options.alt" 
    />

   </picture>
 </figure>

</template>

<script>

 import { mapGetters } from 'vuex';

 export default {
  props: {
    options: {
     type: Object,
     required: true,
    }
  },

  computed: {
   ...mapGetters([
    'getPlaceholders',
   ]),

   sizes() {
    return '';
   },

   image() {
     return {
      srcsetWebp: this.options.image ? this.options.image.srcsetWebp : this.getPlaceholders.teaserPlaceholder[0].optimizeTeasers.srcsetWebp,
      srcset: this.options.image ? this.options.image.srcset : this.getPlaceholders.teaserPlaceholder[0].optimizeTeasers.srcset,
      src: this.options.image ? this.options.image.src : this.getPlaceholders.teaserPlaceholder[0].optimizeTeasers.src,
      placeholderImage: this.options.image ? this.options.image.placeholderImage : this.getPlaceholders.teaserPlaceholder[0].optimizeTeasers.placeholderImage,
     }
   }
  },
 }

</script>