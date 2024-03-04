
<template>
  <!-- keyup.esc allows esc button to close the modal -->
  <focus-trap 
    v-model:active="isActive"
    @keyup.esc="closeModal"
    >
    <div
    :class="['backdrop', showModal ? 'opacity-100' : 'opacity-0']"
    @click.self="closeModal"
  >
  <modal-dialog 
  :aria-modal="showModal" 
  aria-labelledby="modal-headline" 
  class="modal" 
  >
  <div class="modal-container">
    <div class="modal-header">
      <h4 id="modal-headline">Status Updates</h4>
      <button class="close-button" @click="closeModal" autofocus>
        <font-awesome-icon class="close-icon" :icon="['fas', 'fa-plus']" />
      </button>
    </div>
    <div class="modal-content">
      <p>I am the very model of a modern Major General.</p>
      <ul>
        <li>
          <a href="#">An anchorable tag</a>
        </li>
        <li>
          <a href="#">An anchorable tag</a>
        </li>
        <li>
          <a href="#">An anchorable tag</a>
        </li>
        <li>
          <a href="#">An anchorable tag</a>
        </li>
      </ul>
    </div>
  </div>    
</modal-dialog>
</div>
  </focus-trap>
</template>

<script>
  export default {
    data() {
      return {
        showModal: false
      };
    },
    mounted() {
      this.showModal = true;
      // this.$refs.modalDialog.focus();
    },


    methods: {
      closeModal() {
        this.showModal = false;
      },
    
    }
  }
</script>
  
<style scoped>
  .backdrop {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }
  .modal {
    width: 400px;
    height: 200px;
    display: block;
    position: relative;
    border: 2px solid #555;
    border-radius: 0.5rem;
    background-color: #fff;
    z-index: 1000;
  }
  .close-button {
    width: 18px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .close-icon {
    font-size: 2rem;
    rotate: 45deg;
    position: absolute;
  }
  .modal-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: darkslateblue;
    padding: 15px;
    color: #fff;
  }
  .modal-content {
    padding: 1rem;
  }
  .modal-content a {
    font-weight: bold;
    color: steelblue;
  }
</style>