<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');
:root {
  /* COLORS */
  --orange: hsl(26, 100%, 55%);
  --light-orange: hsl(25, 100%, 94%);
  --dark-blue: hsl(220, 13%, 13%);
  --dark-gray-blue: hsl(219, 9%, 45%);
  --gray-blue: hsl(220, 14%, 75%);
  --light-gray-blue: hsl(223, 64%, 98%);
  --white: hsl(0, 0%, 100%);
  --black: hsl(0, 0%, 0%);
  --transp-black: rgba(0, 0, 0, 0.75);
  --transp-orange: rgba(255, 125, 26, 0.3);
  /* TYPO */
  --font-size: 16px;
  --font: 'Kumbh Sans', sans-serif;
  --weight-1: 400;
  --weight-2: 700;
  /* SIZES */
  --desktop-width: 1440px;
  --breakpoint-1: 90%;
  --breakpoint-2: 100%;
  --desktop-large-img: 475px;
  --desktop-small-img: 100px;
  --large-img-breakpoint-1: 375px;
  --small-img-breakpoint-1: 85px;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  border: none;
  box-sizing: border-box;
  font-family: var(--font);
}
@keyframes fadeUp {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-400px);
  }
}
</style>
