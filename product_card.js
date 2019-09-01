
// Image Carousel
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
    // Function for Next button
    next: function(e) {
      e.preventDefault();
      if (this.imgindex < this.thumbnails.length - 1) {
        this.imgindex = this.imgindex + 1;
      } else {
        this.imgindex = 0;
      }
    },
    // Function for Previous Button
    prev: function(e) {
      e.preventDefault();
      if (this.imgindex > 0) {
        this.imgindex = this.imgindex - 1;
      } else {
        this.imgindex = this.thumbnails.length - 1;
      }
    },
    // Function for when user selects a thumbnail
    selectme: function(index){
        this.imgindex = index;
    }
  },
  computed: {
    // Update the current image based on the selected index.
    currentImage() {
      return this.thumbnails[this.imgindex];
    }
  }
});

// Product Star Rating Display
Vue.component("prod-rating", {
  props: ["rating"],
  data(){
    return {
      stars: []
    }
  },
  mounted: function () {
    let ratingTracker = this.rating;
    // Loop 5 times for 5 stars!
    for(i=1; i<=5; i++){
      // Is the rating higher than our iterator?
      if(this.rating >= i){
        // Full star for you!
        this.stars.push("icon-star-full");
        ratingTracker--;
      }else{
        // No? How about we see if we have anything left...
        if(ratingTracker % 1 !== 0){
          // Half a star for you!
          this.stars.push("icon-star-half");  
          ratingTracker = 0;
        }else{
          // Nothings left. No stars for you!
          this.stars.push("icon-star-empty");
          ratingTracker--;
        }
      }
    }
  },
  template: `
  <div class="rating">
    <span v-for="star in stars" :class="star +  ' icon glyph'"></span>
  </div>
  `
});

Vue.component("atc-buttons", {
  props: ["price"],
  data(){
    return {
      atcLoading: false,
      wishLoading: false
    }
  },
  template: `
    <div class="atcbuttons">
    <a class="btn-primary" v-bind:class="{'loading':atcLoading}" v-on:click="addToCart">
    <span class="glyph icon icon-cart"></span><span class="btn-price">\${{ price }}</span><span class="btn-atc">Add to Cart</span>
      </a><a class="btn-secondary" v-bind:class="{'loading':wishLoading}" v-on:click="saveToWish">
          <span class="glyph icon icon-heart"></span>Save
      </a>
      <div class="loadOverlay animate"></div>
    </div>
  `,
  methods: {
    addToCart: function (e) {
      this.atcLoading = true;
      this.$el.querySelector('.loadOverlay').style.display = "block";
      this.$el.querySelector('.loadOverlay').innerHTML = "Adding to cart...";
      setTimeout( () => {
        this.atcLoading = false;
        this.$el.querySelector('.loadOverlay').style.display = "none";
        this.$el.querySelector('.loadOverlay').innerHTML = "";
      }, 1450);
    },
    saveToWish: function () {
      this.wishLoading = true;
      this.$el.querySelector('.loadOverlay').style.display = "block";
      this.$el.querySelector('.loadOverlay').innerHTML = "Adding to wishlist...";
      setTimeout( () => {
        this.wishLoading = false;
        this.$el.querySelector('.loadOverlay').style.display = "none";
      this.$el.querySelector('.loadOverlay').innerHTML = "";
      }, 1450);
    }
  }
});

// Main Vue App
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
        thumbnails: ["img/prodimg1.jpg", "img/prodimg2.jpg"],
        rating: 4.5
      },
      {
        code: 'product2',
        name: "Product 2",
        descrip:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eligendi...",
        price: "299.97",
        image: "img/prodimg4.jpg",
        thumbnails: ["img/prodimg4.jpg", "img/prodimg5.jpg", "img/prodimg6.jpg", "img/prodimg3.jpg"],
        rating: 5
      },
      {
        code: 'product3',
        name: "Product 3",
        descrip:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eligendi...",
        price: "599.97",
        image: "img/prodimg7.jpg",
        thumbnails: ["img/prodimg7.jpg", "img/prodimg8.jpg", "img/prodimg9.jpg"],
        rating: 3.5
      },
      {
        code: 'product4',
        name: "Product 4",
        descrip:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eligendi...",
        price: "199.97",
        image: "img/prodimg10.jpg",
        thumbnails: ["img/prodimg10.jpg", "img/prodimg11.jpg", "img/prodimg12.jpg"],
        rating: 1.5
      }
    ]
  }
});
