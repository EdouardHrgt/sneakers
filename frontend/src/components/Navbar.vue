<template>
  <div>
    <div class="filter" v-show="menu"></div>
    <header>
      <nav>
        <div class="menu_mobile"><img src="../assets/icon-menu.svg" alt="Open the menu" /></div>
        <div class="close_menu_mobile" v-show="menu">
          <img src="../assets/icon-close.svg" alt="Close the menu" />
        </div>
        <h1><img src="../assets/logo.svg" alt="sneakers logo" /></h1>
        <ul>
          <li><router-link to="/collections">Collections</router-link></li>
          <li><router-link to="/men">Men</router-link></li>
          <li><router-link to="/women">Women</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>

      <section class="cart_profile_wrapper">
        <div class="cart">
          <div class="cart_icon_wrapper">
            <img src="../assets/icon-cart.svg" alt="Access to your cart" @click="toggleCart()" />
            <p class="cart_item_number" v-show="cartNumber">{{ cartNumber }}</p>
          </div>
          <div class="cart_list" v-show="showCart">
            <strong>Cart</strong>
            <p v-if="itemList.length == 0">Your cart is empty.</p>
            <CartItem v-if="itemList.length > 0" />
          </div>
        </div>

        <div class="profile">
          <img src="../assets/image-avatar.png" alt="Access to your profile" />
        </div>
      </section>
    </header>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue';
export default {
  name: 'Navbar',
  components: {
    CartItem,
  },
  data() {
    return {
      cartNumber: 0,
      itemList: [],
      menu: false,
      showCart: false,
    };
  },
  methods: {
    toggleCart() {
      this.showCart ? (this.showCart = false) : (this.showCart = true);
    },
  },
};
</script>

<style scoped>
header,
nav,
nav ul,
.cart_profile_wrapper {
  display: flex;
  align-items: center;
}
.menu_mobile,
.close_menu_mobile,
.filter {
  display: none;
}
header {
  width: var(--desktop-width);
  margin: auto;
  padding: 0 2rem;
  border-bottom: 1px solid var(--gray-blue);
  justify-content: space-between;
  position: relative;
  height: 97px;
}
nav ul {
  margin-left: 3rem;
}
nav li {
  margin: 0 1.2rem;
  cursor: pointer;
  font-size: var(--font-size);
  color: var(--dark-gray-blue);
  height: 90px;
  display: flex;
  align-items: center;
  transition: 0.2s;
}
nav li:hover {
  box-shadow: 0 4px 0 var(--orange);
}
nav li a {
  color: black;
}
.cart {
  margin-right: 2rem;
}
.cart_icon_wrapper {
  position: relative;
}
.cart_icon_wrapper img {
  cursor: pointer;
}
.cart_item_number {
  font-size: 10px;
  width: 20px;
  height: 15px;
  border-radius: 20px;
  top: -9px;
  right: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  overflow: hidden;
  background-color: var(--orange);
  color: var(--white);
  cursor: pointer;
}
.cart_list {
  position: absolute;
  z-index: 1;
  right: 0;
  top: 90px;
  width: 350px;
  min-height: 225px;
  box-shadow: 0px 9px 20px -2px rgba(0, 0, 0, 0.3);
  background-color: var(--white);
  border-radius: 7px;
}
.cart_list strong {
  font-weight: var(--weight-2);
  border-bottom: 1px solid var(--gray-blue);
  width: 100%;
  display: inline-block;
  padding: 1rem;
}
.cart_list p {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--gray-blue);
  font-weight: var(--weight-2);
}
.profile img {
  width: 55px;
  height: 55px;
  cursor: pointer;
}
.profile img:hover {
  outline: 1px solid var(--orange);
  border-radius: 50%;
}
@media screen and (max-width: 1450px) {
  header {
    width: 90%;
  }
}
@media screen and (max-width: 1024px) {
  header {
    width: 100%;
  }
  .cart_list {
    right: 10px;
  }
}
/* MOBILE */
@media screen and (max-width: 800px) {
  .menu_mobile {
    display: inline-block;
    margin-right: 1rem;
    padding-top: 2px;
    cursor: pointer;
  }
  .close_menu_mobile {
    display: inline-block;
    cursor: pointer;
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    z-index: 11;
  }
  nav ul {
    margin-left: 0rem;
    background: var(--white);
    position: absolute;
    left: -1000px;
    top: 0;
    min-height: 100vh;
    width: 65%;
    z-index: 10;
    flex-direction: column;
    align-items: baseline;
    justify-content: baseline;
    padding-top: 6rem;
    
  }
  nav li {
    margin: 0;
    height: auto;
    padding: 0.7rem 1.5rem;
    display: flex;
    align-items: center;
    color: var(--black);
    font-weight: var(--weight-2);
  }
  .filter {
    display: inline-block;
    position: fixed;
    z-index: 9;
    background-color: var(--transp-black);
    inset: 0;
  }
  .cart_list {
    position: absolute;
    right: 50%;
    top: 105px;
    transform: translateX(50%);
    width: 95%;
    display: none;
  }
}
</style>
