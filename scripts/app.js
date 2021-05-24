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
      },
      {
        background: "public/imgs/slider_slide2_background.png",
        leftImg: "public/imgs/slider_slide2_img1.png",
        rightImg: "public/imgs/slider_slide2_img2.png",
      },
      {
        background: "public/imgs/slider_slide3_background.png",
        leftImg: "public/imgs/slider_slide3_img2.png",
        rightImg: "public/imgs/slider_slide3_img3.png",
      },

    ],

    defaultVueImg: 2,
    counter: 0,
    interval: null
  },

  computed: {

  },

  methods: {

    rightClick(param) {
      if(param == false){
        clearInterval(this.interval)
        let newIndex = this.defaultVueImg + 1;
        let limite = (this.heroSliderList.length - 1);
  
        if (newIndex > limite) {
          newIndex = 0;
        }
        this.defaultVueImg = newIndex;
      }else{
        let newIndex = this.defaultVueImg + 1;
        let limite = (this.heroSliderList.length - 1);
  
        if (newIndex > limite) {
          newIndex = 0;
        }
        this.defaultVueImg = newIndex;
      }
  
    },

    leftClick() {
      clearInterval(this.interval)
      let newIndex = this.defaultVueImg - 1;
      let limite = 0;

      if (newIndex < limite) {
        newIndex = (this.heroSliderList.length - 1);
      }
      this.defaultVueImg = newIndex;
    },

    dotClick(index) {
      clearInterval(this.interval)
      this.defaultVueImg = index;
    },

    autoPlay(){
      clearInterval(this.interval)

      this.interval = setInterval(() => {
        this.rightClick(true);
        }, 2000);
    }


  },

  mounted() {

    this.autoPlay();
    document.querySelector(".hero").focus();

  },


});