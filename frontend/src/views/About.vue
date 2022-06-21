<template>
  <div>
    <NavBar />
    <main>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum fuga voluptates adipisci
        sapiente eius sunt molestiae consequuntur, esse praesentium aspernatur maiores quos, debitis
        quidem nesciunt consectetur voluptate placeat odit dignissimos sit reiciendis sed numquam
        nisi nam! Totam odio laudantium necessitatibus officia esse numquam molestias ex
        exercitationem eligendi quis ad pariatur vero, quibusdam culpa voluptate veniam. Sunt non
        aliquam, nesciunt tenetur esse, sint corrupti sequi iure laboriosam possimus id eum quis ex
        pariatur maiores, delectus repellat expedita odio fuga eos a commodi doloribus? Consectetur
        itaque exercitationem qui voluptatibus voluptates quod facilis suscipit, natus alias illum,
        nesciunt dolores cumque tempora dolore totam.
      </p>
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
}
main p {
  width: 70%;
  line-height: 150%;
}
</style>
