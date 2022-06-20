<template>
  <div class="product_wrapper">
    <section class="images_wrapper">
      <div class="image_big_wrapper">
        <img src="../assets/image-product-1.jpg" alt="chaussures" />
      </div>
      <div class="image_thumbnail_wrapper">
        <img src="../assets/image-product-1-thumbnail.jpg" alt="thumb" />
        <img src="../assets/image-product-2-thumbnail.jpg" alt="thumb" />
        <img src="../assets/image-product-3-thumbnail.jpg" alt="thumb" />
        <img src="../assets/image-product-4-thumbnail.jpg" alt="thumb" />
      </div>
    </section>
    <section class="datas_wrapper">
      <h1>sneakers company</h1>
      <h2>Fall Limited Edition Sneakers</h2>
      <p class="description">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable
        rubber outer sole, they’ll withstand everything the weather can offer.
      </p>
      <p class="reduced_price">
        <strong>$125.00</strong>
        <span>50%</span>
      </p>
      <p class="original_price">$250</p>
      <div class="cart_wrapper">
        <div class="add_remove_item">
          <img src="../assets/icon-minus.svg" alt="remove 1 to quantity" />
          <p class="quantity">0</p>
          <img src="../assets/icon-plus.svg" alt="add 1 to quantity" />
        </div>
        <button>
          <img src="../assets/icon-cart.svg" alt="" />
          Add to cart
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Product',
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
/*ALL ABOUT images section (left side)*/
img {
  border-radius: 15px;
}
.images_wrapper {
  width: var(--desktop-large-img);
}
.image_big_wrapper {
  width: inherit;
}
.image_big_wrapper img {
  width: inherit;
  object-fit: cover;
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
