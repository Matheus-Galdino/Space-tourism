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
@import "./styles/reset.scss";
@import "./styles/global.scss";

#app {
  display: flex;
  flex-direction: column;

  color: #fff;
  min-height: 100vh;
}
</style>
