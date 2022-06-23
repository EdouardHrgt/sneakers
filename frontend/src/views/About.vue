<template>
  <div>
    <NavBar />
    <main>
      <div class="left">
        <h1>sneakers company</h1>
        <img src="../assets/sneakers-bg-1.jpg" alt="gazelle baskets drawing" class="img-1" />
        <img src="../assets/sneakers-bg-2.jpg" alt="flying baskets drawing" class="img-2" />
      </div>
      <div class="right">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam mollitia magni voluptatem
          qui delectus voluptas quo consequatur minus, labore optio vel dolore fuga deleniti cumque
          dolorem praesentium itaque iusto quibusdam. Quam quidem, quasi, minus, recusandae at
          commodi sequi dolorum velit vero non labore. Molestiae expedita dignissimos non maxime?
          Dolor, praesentium?
        </p>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue';

export default {
  name: 'About',
  components: {
    NavBar,
  },
};
</script>

<style scoped>
main {
  width: var(--desktop-width);
  margin: auto;
  margin-top: 3rem;
  display: flex;
  height: 80vh;
  min-height: 700px;
}
.left {
  width: 100%;
  padding: 1rem;
  position: relative;
}
.right {
  background: var(--orange);
  padding: 2rem;
  border-radius: 0 15px 15px 0px;
}
.right p {
  width: 600px;
  line-height: 150%;
  margin-top: 5rem;
  align-self: flex-end;
  color: var(--white);
}
.left h1 {
  color: var(--orange);
  font-size: 5rem;
  letter-spacing: 1.5px;
}
.left img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  position: absolute;
  border-radius: 50%;
  bottom: 150px;
}
.left .img-1 {
  right: -150px;
}
.left .img-2 {
  right: -470px;
}
@media screen and (max-width: 1450px) {
  main {
    width: var(--breakpoint-1);
  }
  .left h1 {
    font-size: 4rem;
  }
  .left img {
    width: 250px;
    height: 250px;
  }
}
@media screen and (max-width: 1024px) {
  main {
    width: var(--breakpoint-2);
    flex-direction: column;
  }
  .left {
    height: 400px;
  }
  .left img {
    bottom: -125px;
  }
  .left .img-1 {
    left: 50px;
  }
  .left .img-2 {
    left: 350px;
  }
  .right {
    background: var(--orange);
    padding: 5rem 2rem;
    border-radius: 0;
  }
}
@media screen and (max-width: 800px) {
  .left img {
    display: none;
  }
  .left,
  .right {
    width: inherit;
  }
}
</style>
