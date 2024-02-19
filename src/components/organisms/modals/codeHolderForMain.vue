<template>
  <div 
    class="fixed z-100 inset-0 overflow-y-auto"
    v-if="active || showModal"
  >
    <div :class="[
      'flex items-center justify-center h-screen pt-4 px-4 pb-20 text-center max-w-4xl mx-auto transition-opacity ease-in-out duration-300',
      active || showModal ? 'opacity-100' : 'opacity-0',
    ]">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-500 opacity-75" @click.self="togglePopup(); toggleModal()"></div>
    </div>

    <!-- This element is to trick the browser into centering the modal contents. -->
    <!-- <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>-->
      <div :class="[ 
          'w-full inline-block bg-white-100 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 ease-in-out duration-300',
          active || showModal ? 'lg:max-h-3/4vh opacity-100 translate-y-0 sm:scale-100' : 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
        ]" 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modal-headline"
      >

        <!-- the content, create imports based on type! -->
        <ModalCalendar
          v-if="type === 'calendar'"
          :content="content"
          :active="showModal"
          @toggleModal="toggleModal"
        >
        </ModalCalendar>

        <ModalClosure
          v-if="type === 'closure'"
          :content="content"
          :active="active"
          @toggleModal="toggleModal"
        >
        </ModalClosure>

        <ModalNews
          v-if="type === 'news'"
          :content="content"
          :active="active"
          @toggleModal="toggleModal"
        >
        </ModalNews>

        <ModalStatuses
          v-if="type === 'statuses'"
          :active="showModal"
          @togglePopup="togglePopup"
        >
        </ModalStatuses>

        <ModalClasses
          v-if="type === 'classes'"
          :content="content"
          :active="active"
          @toggleModal="toggleModal"
        >
        </ModalClasses>
        <!-- end content -->
      </div>
    </div>
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