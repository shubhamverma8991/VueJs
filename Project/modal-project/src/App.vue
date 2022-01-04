<template>
  <!-- all template are injected into index.html -->
  <h1>{{ title }}</h1>
  <br />
  <!-- <input type="text" ref="name" />
  <br />
  <button @click="handleclick">Click Me</button> -->
  <teleport to=".modals" v-if="showModal">
    <!-- <Modal :header="header" :text="text" theme="sale1" @close="toggleModal" /> -->
    <Modal @close="toggleModal">
      <template v-slot:links>
        <a href="#">Refresh</a>
        <a href="#">Info</a>
      </template>
      <h1>Ninja Giveaway</h1>
      <p>Grab your Ninja Swag for half price</p>
    </Modal>
  </teleport>
  <div v-if="showModalTwo">
    <Modal @close="toggleModal1">
      <h1>Signup to the News Letter</h1>
      <p>For updates and PromoCode</p>
    </Modal>
  </div>
  <button @click.alt="toggleModal">Togle Modal(alt)</button>
  <button @click="toggleModal1">Togle Modal2</button>
</template>

<script>
//challenge
//create an extra buttom to open a different modal
//use the same modal component but pass in a different template(slot)
//use a different method (e.g toggleModalTwo) and data (e.g showModalTwo)

// 1st import the component required
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  //2nd use modal
  components: { Modal },
  data() {
    return {
      title: "My First App :)",
      header: "Sign up For Giveaway",
      text: "Grab the Items at half price",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal1() {
      this.showModalTwo = !this.showModalTwo;
    },

    handleclick() {
      console.log(this.$refs.name);
      // adding a class name to ref element
      this.$refs.name.classList.add("active");
      //adding a focus to the ref element
      this.$refs.name.focus();
    },
  },
};
</script>
//dont scoped this main style
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid rgb(3, 3, 3);
  display: inline-block;
  padding-bottom: 10px;
}
</style>
