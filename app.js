const application = Vue.createApp({
  //data,functions
  // template: "<h2>I am the template</h2>",

  data() {
    return {
      showAll: true,
      title: "THis is Sparta",
      author: "300",
      release: "2005",
    };
  },

  methods: {
    //Directives
    toggle() {
      this.showAll = !this.showAll; //togelling it from true to false  by using !
    },

    changeTitle(title) {
      // document.write("From js");
      //method1
      // this.title = "Change from JS";
      //method2
      this.title = title;
    },

    //events handlers
    handleEvent() {
      console.log("even");
    },
  },
});

application.mount("#app");
