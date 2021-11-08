<template>
  <Nav />
  <router-view :data="currentData" />
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: { Nav },
  data() {
    return {
      info: {
        destinations: [],
        crew: [],
        technology: [],
      },
    };
  },
  computed: {
    currentData() {
      if (this.$route.name == "Destination") return this.info.destinations;
      if (this.$route.name == "Crew") return this.info.crew;
      else return this.info.technology;
    },
  },
  beforeMount() {
    this.info = require("./data.json");
  },
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
