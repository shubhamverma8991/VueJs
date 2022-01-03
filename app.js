const application = Vue.createApp({
  //data,functions
  // template: "<h2>I am the template</h2>",

  data() {
    return {
      url: "http://www.google.com",
      url1: "#",
      showAll: true,
      //array of books
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          release: 2005,
          img: "assets/1.png",
          isFav: true,
        },
        {
          title: "the way of kings",
          author: "brandon sanderson",
          release: 2001,
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "brandon sanderson ",
          release: 2010,
          img: "assets/3.png",
          isFav: true,
        },
      ],
      // title: "THis is Sparta",
      // author: "300",
      // release: "2005",
      // x: 0,
      // y: 0,
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
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handlemousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },

    togglefav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

application.mount("#app");
