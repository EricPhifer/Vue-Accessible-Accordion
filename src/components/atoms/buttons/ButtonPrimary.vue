<template>

 <a 
  :href="options.url"
  :target="options.target ? options.target : '_self'"
  :class="[
   'inline-block button primary',
   options.utilities ? options.utilities : null,
  ]"
 >
  options.text
 </a>

</template>

<script>

 export default {
  props: {
   options: {
    type: Object,
    required: true,
   }
  }
 }

</script>