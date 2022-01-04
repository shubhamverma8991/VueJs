<template>
  <!-- all template are injected into index.html -->
  <h1>{{ title }}</h1>
  <br />
  <!-- <input type="text" ref="name" />
  <br />
  <button @click="handleclick">Click Me</button> -->
  <Modal :header="header" :text="text" theme="sale1" />
</template>

<script>
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
    };
  },
  methods: {
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
