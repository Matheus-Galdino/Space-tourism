<template>
  <section class="page destination">
    <h1>{{ currentDestination.description }}</h1>
  </section>
</template>

<script>
export default {
  name: "Travel",
  data() {
    return {
      destinations: [],
    };
  },
  computed: {
    currentDestination() {
      return this.destinations.find((x) => x.name.toLowerCase() == this.$route.params.name.toLowerCase());
    },
  },
  beforeMount() {
    const info = require("../data.json");
    this.destinations = info.destinations;
  },
};
</script>

<style lang="scss" scoped>
.destination {
  --backgroundImg: url("../assets/destination/background-destination-tablet.jpg");
}
</style>
