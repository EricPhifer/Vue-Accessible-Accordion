
<template>
 <div class="relative bg-white-100">
   <div class="gradient secondary text-white-100 px-6 py-4 flex flex-no-wrap items-center">
     <span class="text-lg lg:text-2xl font-bold">
        content.title
     </span>
     <span class="inline-block ml-auto text-2xl cursor-pointer h-full w-4" @click="toggleModal">
         <i class="fas fa-times"></i>
     </span>
   </div>
   <div class="px-4 py-5">
     <div class="flex flex-wrap lg:flex-no-wrap overflow-y-scroll h-vh50">
       <div class="w-full sm:w-2/5 prose-aside md:prose-aside-md lg:prose-aside-lg">
       <div v-if="(content.days && content.days.length) || (content.flexDays && content.flexDays.length)">
         <h4>Days</h4>
       </div>
         <div v-if="content.days && content.days.length">
           <ul class="space-y-4">
             <li v-for="day in content.days">
               <strong> day.name:</strong>
               <span class="block">
                  day.times
               </span>
             </li>
           </ul>
         </div>
         <div v-if="content.flexDays && content.flexDays.length">
           <ul class="space-y-4">
             <li v-if="flex.expired === false" v-for="(flex, index) in content.flexDays" :key="index">
               <strong v-if="flex.canceled === true" class="block text-tertiary-500">
                  flex.event <span>cancelled</span>
               </strong>
               <strong v-if="flex.canceled === false" class="block">
                  flex.event
               </strong>
               <strong class="block"> flex.day</strong>
               <span class="block">
                  flex.date -  flex.startTime -  flex.endTime
               </span>
             </li>
           </ul>
         </div>
         <div v-if="content.costs && content.costs.length">
           <h4>Costs</h4>
           <ul class="space-y-4">
             <li v-for="cost in content.costs">
               <strong v-if="cost.rateType !== 'None'">
                  cost.rateType
               </strong>
               <span class="block" v-if="cost.generalRate">
                 General Rate:  cost.generalRate
               </span>
               <span class="block" v-if="cost.passholderRate">
                 Passholder Rate:  cost.passholderRate
               </span>
               <span class="block" v-if="cost.onlineRate">
                 Online Rate:  cost.onlineRate
               </span>
               <span class="block" v-if="cost.admissionAlsoRequired">
                 Admission Required?  cost.admissionAlsoRequired ? 'Yes' : 'No'
               </span>
               <span class="block" v-if="cost.displayAsDropIn">
                 Is this a Drop-In?  cost.displayAsDropIn ? 'Yes' : 'No'
               </span>
               <a class="block" v-if="cost.purchaseUrl" :href="cost.purchaseUrl" target="_blank">
                 Purchase
               </a>
             </li>
           </ul>
         </div>
         <div v-if="content.instructors && content.instructors.length">
           <h4>Instructor</h4>
           <ul class="space-y-4">
             <li v-for="(instructor, index) in content.instructors" :key="index">
             <span v-if="instructor.instructorSelectName">
               <a :href="instructor.instructorSelectUrl">
                 <strong>
                    instructor.instructorSelectName
                 </strong>
               </a>
               <span v-if="instructor.displayAsInstructor" class="text-xs">
                 Instructor
               </span>
             </span>
               <span v-if="instructor.contactName">
               <strong>
                  instructor.contactName
               </strong>
               <span v-if="instructor.displayAsInstructor" class="text-xs">
                 Instructor
               </span>
               <span class="block" v-if="instructor.contactTitle">
                   Title:  instructor.contactTitle
               </span>
               <span class="block" v-if="instructor.address">
                   Address:  instructor.address
               </span>
               <span class="block" v-if="instructor.phone">
                   Phone: <a :href="`tel:${instructor.phone}`" class="text-primary-500 hover:text-primary-500 focus:text-primary-500"> instructor.phone</a>
               </span>
               <span class="block" v-if="instructor.email">
                 Email: <a :href="`mailto:${instructor.email}`"> instructor.email</a>
               </span>
             </span>
             </li>
           </ul>
         </div>
       </div>

       <div class="w-full sm:w-3/5">
         <div class="sm:flex sm:items-start lg:pl-8">
         <div class="mt-3 sm:mt-0 sm:ml-4">
           <div class="mb-10">
             <h2 class="rule primary extra-wide thin text-xl lg:text-2xl text-secondary-700 font-secondary font-normal uppercase">
               <strong>Description</strong> & More Info
             </h2>
             <div class="mb-10 text-lg">
               <p class="" v-if="content.startDate">
                 <strong>Dates:</strong>
                    content.startDate <span v-if="content.endDate !== null">-  content.endDate</span>
               </p>
               <div class="" v-if="content.locationParent || content.manualLocation">
                   <p v-if="content.locationParent">
                     <strong>Location:</strong>
                     <a :href="content.locationParent" class="text-primary-700 hover:text-primary-500 focus:text-primary-500">
                        content.locationParentName
                     </a>
                   </p>
                   <p v-if="content.locationParent == '' && content.manualLocation">
                      content.manualLocation
                   </p>
               </div>
               <div class="" v-if="content.age && content.age.length">
                 <p>
                   <strong>Age Group:</strong>
                   <span>
                      content.age
                   </span>
                 </p>
               </div>
               <!-- Age Groups are only for classes since they can have adult/youth participants while leagues don't mix -->
               <div class="" v-if="content.ageGroups && content.ageGroups.length">
                 <p>
                   <strong>Ages:</strong>
                   <span v-for="(age, index) in content.ageGroups" :key="index">
                      age.age.label<span v-if="index != (content.ageGroups.length - 1)">,</span>
                   </span>
                 </p>
               </div>
             </div>
             <div class="prose md:prose-md lg:prose-lg" v-html="content.description"></div>
             <div v-if="content.leagueMessages && content.leagueMessages.length" class="mt-10">
               <h3 class="text-xl lg:text-2xl mb-5 lg:mb-2 text-quinary-700 font-secondary font-normal uppercase">
                 <strong>League</strong> Messages
               </h3>
               <div v-for="(message, index) in content.leagueMessages" :key="index" class="mt-5">
                 <strong> message.title</strong>
                 <span class="block" v-html="message.text"></span>
               </div>
             </div>
             <div v-if="content.otherLinks && content.otherLinks.length" class="mt-10">
               <h3 class="text-xl lg:text-2xl mb-5 lg:mb-2 text-quinary-700 font-secondary font-normal uppercase">
                 <strong>Additional</strong> Resources
               </h3>
               <ul class="space-y-4">
                 <li v-for="(link, index) in content.otherLinks" :key="index">
                   <strong v-if="link.header">
                      link.header
                   </strong>
                   <a :href="link.link" class="block text-primary-700 hover:text-primary-500 focus:text-primary-500" v-if="link.text">
                      link.text
                   </a>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </div>
       </div>
     </div>
   </div>
   <div v-if="content.url && content.url.length" class="bg-quinary-100 flex flex-col md:flex-row justify-between items-center md:space-x-8 py-2 px-6 md:py-4 border-t-2 border-solid border-quinary-50">
     <div class="w-full" >
       <ButtonPrimary :options="{ url: content.url, text: 'Sign Up Now', target: '_blank', utilities: 'block w-full text-center' }"></ButtonPrimary>
     </div>
   </div>
 </div>
</template>

<script>

export default {
 components: {
  'ButtonPrimary': () => import(/* webpackChunkName: "ButtonPrimary" */ '../atoms/buttons/ButtonPrimary.vue'),
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
 },
}

</script>