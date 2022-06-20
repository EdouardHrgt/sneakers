<template>
  <div>
    <NavBar />
    <Product />
  </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue';
import Product from '@/components/Product.vue';
export default {
  name: 'Home',
  components: {
    NavBar,
    Product,
  },
};
</script>
