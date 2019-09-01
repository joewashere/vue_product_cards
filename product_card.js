Vue.component("prod-image", {
  data() {
    return {
      imgindex: 0
    };
  },
  props: ["image", "thumbnails"],
  template: `<div><div class="product_image">
                <a href="#" v-on:click="prev" class="arrow-container left">
                    <span class="arrow arrow-left"></span>
                </a>
                <img :src="currentImage" alt="Product Image 1">
                <a href="#" v-on:click="next" class="arrow-container right">
                    <span class="arrow arrow-right"></span>
                </a>
            </div>
            <div class="product_thumbnails">
                <a v-for="(thumb, index) in thumbnails" v-on:click="selectme(index)" href="#"><img :src="thumb" alt="Product 1"></a>
            </div></div>`,
  methods: {
    next: function(e) {
      e.preventDefault();
      if (this.imgindex < this.thumbnails.length - 1) {
        this.imgindex = this.imgindex + 1;
      } else {
        this.imgindex = 0;
      }
    },
    prev: function(e) {
      e.preventDefault();
      if (this.imgindex > 0) {
        this.imgindex = this.imgindex - 1;
      } else {
        this.imgindex = this.thumbnails.length - 1;
      }
    },
    selectme: function(index){
        this.imgindex = index;
    }
  },
  computed: {
    currentImage() {
      return this.thumbnails[this.imgindex];
    }
  }
});

var app = new Vue({
  el: "#app",
  data: {
    products: [
      {
        code: 'product1',
        name: "Product 1",
        descrip:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eligendi...",
        price: "399.97",
        image: "img/prodimg1.jpg",
        thumbnails: ["img/prodimg1.jpg", "img/prodimg2.jpg", "img/prodimg3.jpg"]
      },
      {
        code: 'product2',
        name: "Product 2",
        descrip:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eligendi...",
        price: "299.97",
        image: "img/prodimg4.jpg",
        thumbnails: ["img/prodimg4.jpg", "img/prodimg5.jpg", "img/prodimg6.jpg"]
      },
      {
        code: 'product3',
        name: "Product 3",
        descrip:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eligendi...",
        price: "599.97",
        image: "img/prodimg7.jpg",
        thumbnails: ["img/prodimg7.jpg", "img/prodimg8.jpg", "img/prodimg9.jpg"]
      }
    ]
  }
});
