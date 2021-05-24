new Vue({
    el: "#app",
  
    data: {
      headerList:[
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

      immagini: [
            { file: 'img/img1.jpg' },
            { file: 'img/img2.jpg' },
            { file: 'img/img3.jpg' },
            { file: 'img/img4.jpeg' },
            { file: 'img/img5.jpg' },
            { file: 'img/img6.jpeg' }

        ],

        defaultVueImg: 2,     
        counter: 0,
        interval: null
    },
  
    computed: {
  
    },
  
    methods: {

      rightClick: function (){

        let newIndex = this.defaultVueImg + 1
        let limite = (this.immagini.length -1)

        if(newIndex > limite){
         newIndex = 0
        }
        this.defaultVueImg = newIndex
     },
        
    leftClick: function (){
        
         let newIndex = this.defaultVueImg - 1
         let limite = 0

         if(newIndex < limite ){
            newIndex = (this.immagini.length - 1)
         }
         this.defaultVueImg = newIndex     
    },

    dotClick: function (myPicIndex){
        this.defaultVueImg = myPicIndex 
    },

      
    },
  
    mounted() {

      document.querySelector(".sliderContainer").focus()
        
    },
  
  
  });