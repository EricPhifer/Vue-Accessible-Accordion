
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
     <div v-if="(content.daysAndTimesWithInstructor && content.daysAndTimesWithInstructor.length) || (content.daysAndTimes && content.daysAndTimes.length) || (content.flexDays && content.flexDays.length)">
      <h4>Days</h4>
     </div>

     <div v-if="content.daysAndTimesWithInstructor && content.daysAndTimesWithInstructor.length">
      <ul class="space-y-4">
       <li v-for="(value, key, index) in instructorDays" :key="index">
        <strong> key | capitalize :</strong>
        <span v-for="(time, index) in value" :key="index">
         time.startTime | time  -  time.endTime | time 
        <span v-if="(index + 1) !== value.length">/</span>
        </span>
       </li>
      </ul>
     </div>

     <div v-if="content.daysAndTimes && content.daysAndTimes.length">
      <ul class="space-y-4">
       <li v-for="(value, key, index) in days" :key="index">
        <strong> key | capitalize :</strong>
        <div 
         v-for="(time, index) in value" :key="index" 
         :class="[ 
          'block',
          index === 0 ? 'mt-2' : '',
         ]" 
        >
         <strong class="font-semibold"> time.group : </strong>
         <span> time.startTime | time  -  time.endTime | time </span>
        </div>
       </li>
      </ul>
     </div>

     <div v-if="content.days && content.days.length">
      <ul class="space-y-4">
       <li v-for="(day, index) in content.days" :key="index">
        <strong> day.name :</strong>
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
         flex.event  <span>cancelled</span>
        </strong>
        <strong v-if="flex.canceled === false" class="block">
         flex.event 
        </strong>
        <strong class="block">
         flex.day 
        </strong>
        <span class="block">
         flex.date  -  flex.startTime  -  flex.endTime 
        </span>
       </li>
      </ul>
     </div>

     <div v-if="content.flexDates && content.flexDates.length">
      <ul class="space-y-4">
       <li v-if="flex.canceled === true" v-for="(flex, index) in content.flexDates" :key="index">
        <strong v-if="flex.canceled === true" class="block text-tertiary-500">
         flex.classEvent 
        </strong>
        <strong v-if="flex.canceled === false" class="block">
         flex.event 
        </strong>
        <strong class="block"> flex.day </strong>
        <span class="block">
         flex.date  -  flex.startTime  -  flex.endTime 
        </span> 
       </li>
      </ul>
     </div>

     <div v-if="(content.costs && content.costs.length) || (content.activityEventsCost && content.activityEventsCost.length) || (content.leagueCosts && content.leagueCosts.length)">
      <h4>Costs</h4>
      <ul v-if="content.activityEventsCost && content.activityEventsCost.length" class="space-y-4">
          <li v-for="(cost, index) in content.activityEventsCost" :key="index">
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

              <span class="block" v-if="cost.admissionRequired">
                  Admission Required?  cost.admissionRequired ? 'Yes' : 'No' 
              </span>

              <span class="block" v-if="cost.displayAsDropIn">
                  Is this a Drop-In?  cost.displayAsDropIn ? 'Yes' : 'No' 
              </span>

              <a class="block" v-if="cost.purchaseUrl" :href="cost.purchaseUrl" target="_blank">
                  Purchase
              </a>
          </li>
      </ul>

      <ul v-if="content.leagueCosts && content.leagueCosts.length" class="space-y-4">
          <li v-for="(cost, index) in content.leagueCosts" :key="index">

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

              <span class="block" v-if="cost.admissionRequired">
                  Admission Required?  cost.admissionRequired ? 'Yes' : 'No' 
              </span>

              <span class="block" v-if="cost.displayAsDropIn">
                  Is this a Drop-In?  cost.displayAsDropIn ? 'Yes' : 'No' 
              </span>

              <a class="block" v-if="cost.purchaseUrl" :href="cost.purchaseUrl" target="_blank">
                  Purchase
              </a>
          </li>
      </ul>

      <ul v-if="content.costs && content.costs.length" class="space-y-4">
       <li v-for="(cost, index) in content.costs" :key="index">
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

        <span class="block" v-if="cost.admissionRequired">
         Admission Required?  cost.admissionRequired ? 'Yes' : 'No' 
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

     <div v-if="content.contacts && content.contacts.length">
      <h4>Instructor</h4>
      <ul class="space-y-4">
       <li v-for="(instructor, index) in content.contacts" :key="index">
        <span v-for="(existing, index) in instructor.existingContact" :key="index" class="block">
         <a :href="existing.url">
          <strong>
           existing.title 
          </strong>
         </a>
        </span>
        <!-- manually entered contact -->
        <div>
         <strong>
          instructor.contactName 
         </strong>

         <div v-if="instructor.displayAsInstructor" class="text-xs">
          Instructor
         </div>

         <div v-if="instructor.contactTitle">
          Title:  instructor.contactTitle 
         </div>

         <div v-if="instructor.address">
          Address:  instructor.address 
         </div>

         <div v-if="instructor.phone">
          Phone: <a :href="`tel:${instructor.phone}`" class="text-primary-500 hover:text-primary-500 focus:text-primary-500"> instructor.phone </a>
         </div>

         <div v-if="instructor.email">
          Email: <a :href="`mailto:${instructor.email}`"> instructor.email </a>
         </div>
        </div>
       </li>
      </ul>
     </div>
    </div>

    <div class="w-full sm:w-3/5">
     <div class="sm:flex sm:items-start lg:pl-8">
      <div class="mt-3 sm:mt-0 sm:ml-4">
       <div class="mb-10">
        <h2 class="rule primary extra-wide thin text-xl lg:text-2xl text-secondary-700 font-secondary font-normal uppercase">
         <strong>Description</strong> &amp; More Info
        </h2>
        <div class="mb-10 text-lg">
         <p v-if="content.startDate">
          <strong>Dates:</strong>
           content.startDate  <span v-if="content.endDate !== null">-  content.endDate </span>
         </p>

         <!-- board meetings only -->
         <div v-if="content.meetingLocation">
          <p>
           content.meetingLocation 
          </p>
         </div>

         <!-- board meetings only -->
         <div v-if="content.meetingAgenda">
          <a :href="content.meetingAgenda[0].url" v-if="content.meetingAgenda.length" target="_blank" class="block text-primary-700 hover:text-primary-500 focus:text-primary-500">
           Download the meeting agenda
          </a>
         </div>

         <div v-if="content.locationSelect || content.manualLocation">
          <p v-if="content.locationSelect && content.locationSelect.length">
           <strong>
               Location:
           </strong>
           <span v-for="(location, index) in content.locationSelect" :key="index">
            <a :href="location.url" class="text-primary-700 hover:text-primary-500 focus:text-primary-500">
             <span v-if="location.level === 1">
              location.title 
             </span>
            </a>
           </span>
          </p>

          <p v-if="content.locationParent == '' && content.manualLocation">
           content.manualLocation 
          </p>
         </div>

         <div v-if="content.age && content.age.length">
          <p>
           <strong>
            Age Group:
           </strong>
           <span>
            content.age 
           </span>
          </p>
         </div>

         <!-- Age Groups are only for classes since they can have adult/youth participants while leagues don't mix -->
         <div v-if="content.ageGroups && content.ageGroups.length">
          <p>
          <strong>Ages:</strong>
          <span v-for="(age, index) in content.ageGroups" :key="index">
           age <span v-if="index != (content.ageGroups.length - 1)">,</span>
          </span>
          </p>
         </div>
        </div>
        <div class="prose md:prose-md lg:prose-lg" v-html="content.description"></div>

        <!-- special events only -->
        <div class="w-full" v-if="content.website">
         <a :href="content.website" class="block text-primary-700 hover:text-primary-500 focus:text-primary-500">
          content.website 
         </a>
        </div>

        <div v-if="content.messages && content.messages.length" class="mt-10">
        <h3 class="text-xl lg:text-2xl mb-5 lg:mb-2 text-quinary-700 font-secondary font-normal uppercase">
         <strong>League</strong> Messages
        </h3>
        <div v-for="(message, index) in content.messages" :key="index" class="mt-5">
          <strong> message.messageTitle </strong>
          <span class="block prose md:prose-md lg:prose-lg" v-html="message.message"></span>
        </div>
        </div>
        <div v-if="(content.otherLinks && content.otherLinks.length) || (content.websiteLink && content.websiteLink.length)" class="mt-10">
         <h3 class="text-xl lg:text-2xl mb-5 lg:mb-2 text-quinary-700 font-secondary font-normal uppercase">
          <strong>Additional</strong> Resources
         </h3>

         <ul class="space-y-4">
          <li v-for="(link, index) in content.otherLinks" :key="index">
          <strong v-if="link.linkHeading">
           link.linkHeading 
          </strong>
          <a v-if="link.linkToExternalWebsite" :href="link.linkToExternalWebsite" target="_blank" class="block text-primary-700 hover:text-primary-500 focus:text-primary-500">
           link.linkText 
          </a>
          <span v-for="(linkToEntry, index) in link.linkToEntry" :key="index" class="block">
           <a :href="linkToEntry.url" class="block text-primary-700 hover:text-primary-500 focus:text-primary-500">
            link.linkText 
           </a>
          </span>
          <span v-for="(linkToFile, index) in link.linkToFile" :key="index" class="block">
           <a :href="linkToFile.url" class="block text-primary-700 hover:text-primary-500 focus:text-primary-500">
            link.linkText 
           </a>
          </span>
          <span v-for="(locationSelect, index) in link.locationSelect" :key="index" class="block">
           <a :href="locationSelect.url" class="block text-primary-700 hover:text-primary-500 focus:text-primary-500">
            link.linkText 
           </a>
          </span>
          </li>
         </ul>

         <div v-if="content.websiteLink" class="mt-10">
          <a class="text-primary-700 hover:text-primary-500 focus:text-primary-500" :href="content.websiteLink" target="_blank">
          Visit Website
          </a>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>

  <div v-if="content.registrationUrl && content.registrationUrl.length" class="bg-quinary-100 flex flex-col md:flex-row justify-between items-center md:space-x-8 py-2 px-6 md:py-4 border-t-2 border-solid border-quinary-50">
   <div class="w-full" >
    <ButtonPrimary :options="{ url: content.registrationUrl, text: 'Sign Up Now', target: '_blank', utilities: 'block w-full text-center' }"></ButtonPrimary>
   </div>
  </div>
 </div>
</template>

<script>
import moment from 'moment';

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

 computed: {
  instructorDays() {
    if ( this.content.daysAndTimesWithInstructor ) {
      return this.groupBy(this.content.daysAndTimesWithInstructor, (obj) => obj.day);
    } else {
      return null;
    }
  },

  days() {
    if ( this.content.daysAndTimes ) {
     return this.groupBy(this.content.daysAndTimes, (obj) => obj.day);
    } else {
      return null;
    }
  }
 },

 filters: {

  time(val) {
   return moment(val).format('h:mma');
  },

  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
 },

 methods: {

  toggleModal() {
    this.$emit('toggleModal', !this.active);
  },

  groupBy(xs, f) {
    return xs.reduce((r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r), {});
  }
 }
}

</script>