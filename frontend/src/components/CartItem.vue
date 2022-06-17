<template>
  <div>
    <div class="cart_item_wrapper">
      <img src="../assets/image-product-1-thumbnail.jpg" alt="#" class="item_img" />
      <div class="item_infos_wrapper">
        <p>Fall Limited Edition Sneakers</p>
        <p>$125.00 x 3 <strong>$375.00</strong></p>
      </div>
      <img src="../assets/icon-delete.svg" alt="Delete Item" class="delete_item" />
    </div>
    <div class="checkout_btn">
      <button>Checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
};
</script>

<style scoped>
.cart_item_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 325px;
  margin: 7px auto;
}
.item_img {
  border-radius: 7px;
  width: 65px;
  height: 65px;
}
.item_infos_wrapper p {
  color: var(--gray-blue);
  font-weight: var(--weight-2);
}
.item_infos_wrapper strong {
  color: var(--black);
  margin-left: 10px;
}
.delete_item {
  cursor: pointer;
}
.checkout_btn {
  width: 325px;
  margin: 1rem auto 0;
}
.checkout_btn button {
  background-color: var(--orange);
  color: var(--white);
  font-weight: var(--weight-2);
  font-size: 1.3rem;
  padding: 1rem 0;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}
.checkout_btn button:hover {
  filter: brightness(1.1);
}
</style>
