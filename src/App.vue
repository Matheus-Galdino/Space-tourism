<template>
  <Nav />
  <router-view />
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: { Nav },
};
</script>

<style lang="scss">
@import url("./styles/reset.scss");
@import url("./styles/global.scss");
@import url("./styles/variables.scss");

#app {
  display: flex;
  flex-direction: column;

  color: #fff;
  height: 100vh;
  padding: 2.4rem 2.4rem 5rem;

  background-size: cover;
  background: url("./assets/home/background-home-tablet.jpg") no-repeat;
}
</style>
