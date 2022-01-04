var cartData = {
  columns: ["Id", "Name", "Email", "Phone", "College_Name"],
  data: [
    {
      Id: 1,
      Name: "Rajkumar Patel",
      Email: "rajpatel@gmail.com",
      Phone: "9876543210",
      College_Name: "Harvard University",
      ImagePath: "images/a.jpg",
    },
    {
      Id: 2,
      Name: "Sagar Patel",
      Email: "spatel@gmail.com",
      Phone: "9876543210",
      College_Name: "Harvard University",
      ImagePath: "images/b.jpg",
    },
    {
      Id: 3,
      Name: "Rana gautam",
      Email: "rgautam@gmail.com",
      Phone: "9876543210",
      College_Name: "Harvard University",
      ImagePath: "images/c.jpg",
    },
    {
      Id: 4,
      Name: "Nenu Chacko",
      Email: "nchacko@gmail.com",
      Phone: "9876543210",
      College_Name: "Harvard University",
      ImagePath: "images/d.jpg",
    },
    {
      Id: 5,
      Name: "Sonal Katiyar",
      Email: "skatiyar@gmail.com",
      Phone: "9876543210",
      College_Name: "Harvard University",
      ImagePath: "images/e.jpg",
    },
  ],
};

var gridviewApp = new Vue({
  el: "#app-gridview",

  data: {
    gridData: cartData,
    buttonSwitchViewText: "Switch to GridView",
    isGridView: true,
  },

  methods: {
    switchView: function () {
      if (this.isGridView) {
        this.buttonSwitchViewText = "Switch to ListView";
      } else {
        this.buttonSwitchViewText = "Switch to GridView";
      }

      this.isGridView = !this.isGridView;
    },
  },
});
