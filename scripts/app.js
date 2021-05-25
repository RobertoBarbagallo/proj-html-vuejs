
new Vue({
  el: "#app",

  data: {
    headerList: [
      {
        name: "Home",
        link: "#",
        icon: "public/png/home.png",
        iconOnHover: "public/png/home-2.png",
      },
      {
        name: "Pages",
        link: "#",
        icon: "public/png/document.png",
        iconOnHover: "public/png/document-2.png",
      },
      {
        name: "Blog",
        link: "#",
        icon: "public/png/printer.png",
        iconOnHover: "public/png/printer-2.png",

      },
      {
        name: "Shop",
        link: "#",
        icon: "public/png/cart.png",
        iconOnHover: "public/png/cart-2.png",

      },
      {
        name: "Shortcodes",
        link: "#",
        icon: "public/png/lab.png",
        iconOnHover: "public/png/lab-2.png",

      },
      {
        name: "Support",
        link: "#",
        icon: "public/png/chat.png",
        iconOnHover: "public/png/chat-2.png",

      },
      {
        name: "Contact",
        link: "#",
        icon: "public/png/envelope.png",
        iconOnHover: "public/png/envelope-2.png",
      },

    ],

    heroSliderList: [

      {
        background: "public/imgs/slider_slide1_background.png",
        leftImg: "public/imgs/slider_slide1_img1.png",
        rightImg: "public/imgs/slider_slide1_img2.png",
        id: 1,
      },
      {
        background: "public/imgs/slider_slide2_background.png",
        leftImg: "public/imgs/slider_slide2_img1.png",
        rightImg: "public/imgs/slider_slide2_img2.png",
        id: 2,
      },
      {
        background: "public/imgs/slider_slide3_background.png",
        leftImg: "public/imgs/slider_slide3_img2.png",
        rightImg: "public/imgs/slider_slide3_img3.png",
        id: 3,
      },

    ],

    sectionSliderList: [
      {
        imgPath: "public/imgs/class_01-690x506.jpg",
        id: 1,
      },
      {
        imgPath: "public/imgs/class_02-690x506.jpg",
        id: 2,
      },
      {
        imgPath: "public/imgs/class_03-690x506.jpg",
        id: 3,
      },
      // {
      //   imgPath: "public/imgs/class_04-690x506.jpg",
      //   id: 4,
      // },
    ],

    defaultVueImg: 2,
    counter: 0,
    interval: null,
    back: false,
    anotherVueImg: 0,
    anotherInterval: null,
    anotherBack: false,
    lastImg: 3,
 
  },

  computed: {

  },

  methods: {

    rightArrow(param) {
      this.back = false;
      if (!param) {
        clearInterval(this.interval);
      }
    
      let newIndex = this.defaultVueImg + 1;
      let limite = (this.heroSliderList.length - 1);

      if (newIndex > limite) {
        newIndex = 0;
      }
      this.defaultVueImg = newIndex;
      

    },

    leftArrow() {
      this.back = true;
      clearInterval(this.interval);
      let newIndex = this.defaultVueImg - 1;
      let limite = 0;

      if (newIndex < limite) {
        newIndex = (this.heroSliderList.length - 1);
      }
      this.defaultVueImg = newIndex;
    },

    dotClick(index) {
      clearInterval(this.interval);
      this.defaultVueImg = index;
    },

    leftClick() {
      this.anotherBack = true;
      clearInterval(this.anotherInterval);
      let newIndex = this.anotherVueImg - 1;
      let limite = 0;

      if (newIndex < limite) {
        newIndex = (this.sectionSliderList.length - 1);
      }
      this.anotherVueImg = newIndex;
    },


    rightClick(param) {

      this.anotherBack = false;
      if (!param) {
        clearInterval(this.anotherInterval)
      }
      let newIndex = this.anotherVueImg + 1;
      let limite = (this.sectionSliderList.length - 1);

      if (newIndex > limite) {
          newIndex = 0;
      }
      this.anotherVueImg = newIndex;
     
    },

    divClick(index) {
      clearInterval(this.anotherInterval);
      this.anotherVueImg = index;
    },

    autoPlay() {
      clearInterval(this.interval);

      this.interval = setInterval(() => {
        this.rightArrow(true);
      }, 4000);

      this.anotherInterval = setInterval(() => {
        this.rightClick(true);
      }, 4000);
    },

  },

  mounted() {

    this.autoPlay();
    document.querySelector(".hero").focus();
    document.querySelector(".slider-container").focus();
  },

});