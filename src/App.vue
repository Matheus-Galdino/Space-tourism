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

#app {
  display: flex;
  flex-direction: column;

  color: #fff;
  min-height: 100vh;
}
</style>
