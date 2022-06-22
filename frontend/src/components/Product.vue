<template>
  <div>
    <div class="overlay" v-show="caroussel" @click="caroussel = !caroussel"></div>
    <main class="product_wrapper" v-for="item in items" :key="item.name">
      <section class="images_wrapper" :class="{ active: caroussel }">
        <div class="image_big_wrapper">
          <div class="caroussel_closer" v-show="caroussel" @click="carousselImg()"></div>
          <img :src="picture" alt="a pair of sneakers" @click="caroussel = !caroussel" />

          <div class="carroussel_swappers" v-show="caroussel">
            <div class="circle previous" @click="carousselSlides(-1)"></div>
            <div class="circle next" @click="carousselSlides(1)"></div>
          </div>
        </div>
        <div class="image_thumbnail_wrapper">
          <img
            src="../assets/image-product-1-thumbnail.jpg"
            alt="thumb"
            @click="carousselImg(itemImages[0])"
          />
          <img
            src="../assets/image-product-2-thumbnail.jpg"
            alt="thumb"
            @click="carousselImg(itemImages[1])"
          />
          <img
            src="../assets/image-product-3-thumbnail.jpg"
            alt="thumb"
            @click="carousselImg(itemImages[2])"
          />
          <img
            src="../assets/image-product-4-thumbnail.jpg"
            alt="thumb"
            @click="carousselImg(itemImages[3])"
          />
        </div>
      </section>
      <section class="datas_wrapper">
        <h1>{{ item.brand }}</h1>
        <h2>{{ item.name }}</h2>
        <p class="description">
          {{ item.infos }}
        </p>
        <p class="reduced_price">
          <strong>${{ promotedPrice(item.price, item.reduction) }}</strong>
          <span>{{ item.reduction }}%</span>
        </p>
        <p class="original_price">${{ item.price }}</p>
        <div class="cart_wrapper">
          <div class="add_remove_item">
            <img src="../assets/icon-minus.svg" alt="remove 1 to quantity" @click="decrementCart" />
            <p class="quantity">{{ itemQty }}</p>
            <img src="../assets/icon-plus.svg" alt="add 1 to quantity" @click="incrementCart" />
          </div>
          <button @click="addToCart">
            <img src="../assets/icon-cart.svg" alt="Add to Cart" />
            Add to cart
          </button>
        </div>
        <div class="err_msg" v-show="errMsg">
          <p>{{ errMsg }}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Product',
  data() {
    return {
      itemQty: 0,
      caroussel: false,
      errMsg: '',
      items: [],
      itemImages: [
        require('@/assets/image-product-1.jpg'),
        require('@/assets/image-product-2.jpg'),
        require('@/assets/image-product-3.jpg'),
        require('@/assets/image-product-4.jpg'),
      ],
      picture: require('@/assets/image-product-1.jpg'),
      itemImagesIndex: 0,
    };
  },
  mounted() {
    axios
      .get('http://localhost:8080/static/items.json')
      .then((res) => (this.items = res.data))
      .catch((err) => alert(err));
  },
  methods: {
    incrementCart() {
      if (this.itemQty === 10) {
        this.errMsg = "You can't add more than 10";
      } else {
        this.errMsg = '';
        this.itemQty += 1;
      }
    },
    decrementCart() {
      if (this.itemQty === 0) {
        this.errMsg = "You can't go under 0";
      } else {
        this.errMsg = '';
        this.itemQty -= 1;
      }
    },
    addToCart() {
      if (this.itemQty > 10 || this.itemQty <= 0) {
        this.errMsg = 'unable to save this value to cart';
      } else {
        this.errMsg = '';
        alert('cart saved');
      }
    },
    promotedPrice(price, promotion) {
      let promoted = price * (promotion / 100);
      return promoted;
    },
    carousselImg(image = null) {
      this.picture = image;
    },
    carousselSlides(bin) {
      if (bin === 1) {
        this.itemImagesIndex += bin;
      } else if (bin === -1) {
        this.itemImagesIndex -= bin;
      } else {
        this.itemImagesIndex = bin;
      }

      if (this.itemImagesIndex > 3) {
        this.itemImagesIndex = 0;
      } else if (this.itemImagesIndex < 0) {
        this.itemImagesIndex = 3;
      }
      this.picture = this.itemImages[this.itemImagesIndex];
    },
  },
};
</script>

<style scoped>
.product_wrapper {
  width: var(--desktop-width);
  margin: auto;
  min-height: 80vh;
  padding: 5rem;
  display: flex;
}
.overlay {
  background-color: var(--transp-black);
  position: fixed;
  inset: 0;
}
/*ALL ABOUT images section (left side)*/
img {
  border-radius: 15px;
}
.images_wrapper {
  width: var(--desktop-large-img);
  position: relative;
}
.image_big_wrapper {
  width: inherit;
}
.image_big_wrapper img {
  width: inherit;
  object-fit: cover;
  cursor: pointer;
}
.active {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  width: calc(var(--desktop-large-img) + 75px);
}
.caroussel_closer,
.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}
.caroussel_closer {
  width: 30px;
  height: 30px;
  background-image: url(../assets/icon-close.svg);
  background-size: 50%;
  position: absolute;
  right: 0;
  top: -40px;
  transition: 0.4s;
}
.caroussel_closer:hover {
  transform: scale(1.3);
}
.carroussel_swappers {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 37%;
  left: -25px;
  right: -25px;
}
.circle {
  background-color: var(--white);
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.previous {
  background-image: url(../assets/icon-previous.svg);
}
.next {
  background-image: url(../assets/icon-next.svg);
}
.circle:hover {
  outline: 2px solid var(--orange);
}
.image_thumbnail_wrapper {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.image_thumbnail_wrapper img {
  width: var(--desktop-small-img);
  object-fit: cover;
  cursor: pointer;
}
.image_thumbnail_wrapper img:hover {
  filter: grayscale(80%);
}
/*ALL ABOUT INFOS (right side)*/
.datas_wrapper {
  padding: 3rem 12.5rem 0 7rem;
}
.datas_wrapper h1 {
  color: var(--orange);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
}
.datas_wrapper h1,
.datas_wrapper h2,
.description,
.original_price {
  margin-bottom: 2rem;
}
.datas_wrapper h2 {
  font-weight: var(--weight-2);
  font-size: 3rem;
  line-height: 110%;
}
.datas_wrapper .description,
.original_price {
  color: var(--gray-blue);
}
.reduced_price {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.reduced_price strong {
  font-size: 2rem;
  margin-right: 1rem;
}
.reduced_price span {
  background-color: var(--transp-orange);
  padding: 3px 7px;
  border-radius: 5px;
  color: var(--orange);
  font-weight: var(--weight-2);
}
.original_price {
  text-decoration: line-through;
  font-size: 1.2rem;
}
/*CART ADD / REMOVE / TOTAL */
.cart_wrapper {
  display: flex;
  align-items: center;
}
.add_remove_item,
.cart_wrapper button {
  border-radius: 10px;
  display: flex;
  align-items: center;
  height: 3.5rem;
}
.add_remove_item {
  background: var(--light-gray-blue);
  justify-content: space-between;
  padding: 0 1rem;
}
.add_remove_item img {
  cursor: pointer;
}
.add_remove_item .quantity {
  font-weight: var(--weight-2);
  font-size: 1.2rem;
  margin: 0 2.7rem;
}
.cart_wrapper button {
  background-color: var(--orange);
  color: white;
  font-size: 1rem;
  font-weight: var(--weight-2);
  letter-spacing: 0.5px;
  padding: 0 4rem;
  margin-left: 1.5rem;
  cursor: pointer;
  box-shadow: 0px 9px 20px -2px var(--transp-orange);
}
.cart_wrapper button img {
  margin-right: 1rem;
}
.err_msg {
  color: var(--orange);
  margin-top: 1rem;
}
@media screen and (max-width: 1450px) {
  .product_wrapper {
    width: var(--breakpoint-1);
    padding: 5rem 2rem;
  }
  .datas_wrapper {
    padding: 3rem;
  }
  .datas_wrapper h2 {
    font-size: 2.7rem;
  }
  .add_remove_item,
  .cart_wrapper button {
    height: 3rem;
  }
  .cart_wrapper button {
    padding: 0 1.2rem;
    margin-left: 1rem;
  }
  .add_remove_item .quantity {
    margin: 0 1rem;
  }
}
@media screen and (max-width: 1024px) {
  .product_wrapper {
    width: var(--breakpoint-2);
  }
  .images_wrapper {
    width: var(--large-img-breakpoint-1);
  }
  .image_thumbnail_wrapper img {
    width: var(--small-img-breakpoint-1);
  }
  .datas_wrapper {
    padding: 1.5rem;
  }
}
@media screen and (max-width: 800px) {
  .product_wrapper {
    background-color: rgb(98, 199, 113);
  }
}
</style>
