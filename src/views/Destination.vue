<template>
  <section class="page destination">
    <p class="page__id">
      <span>01</span>
      Pick your destination
    </p>
    <img :src="destinationImg" :alt="currentDestination.name" class="destination__img" />

    <DestinationNav />

    <h1 class="destination__name">{{ currentDestination.name }}</h1>

    <p class="destination__description">
      {{ currentDestination.description }}
    </p>

    <div class="line"></div>

    <div class="extra-info">
      <h3>AVG. Distance</h3>
      <h2>{{ currentDestination.distance }}</h2>
    </div>
    <div class="extra-info">
      <h3>Est. Travel time</h3>
      <h2>{{ currentDestination.travel }}</h2>
    </div>
  </section>
</template>

<script>
import DestinationNav from "../components/DestinationNav.vue";

export default {
  name: "Destination",
  components: { DestinationNav },
  data() {
    return {
      destinations: [],
    };
  },
  computed: {
    currentDestination() {
      return this.destinations.find((x) => x.name.toLowerCase() == this.$route.params.name.toLowerCase());
    },
    destinationImg() {
      return require(`../assets/${this.currentDestination.images.webp}`);
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

  justify-content: flex-start;

  &__img {
    width: 20rem;
    height: 20rem;

    margin-bottom: 2.5rem;
  }

  &__name {
    margin-top: 2rem;
    font-size: 5.6rem;
    line-height: 1.1em;
    font-weight: normal;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }

  &__description {
    color: #d0d6f9;
    font-size: 1.5rem;
    line-height: 1.5em;
    text-align: center;
  }
}

.line {
  width: 100%;
  height: 1px;
  margin: 3rem 0;
  background: #383b4b;
}

.extra-info {
  text-align: center;
  text-transform: uppercase;

  &:last-of-type {
    margin-top: 3rem;
  }

  h2,
  h3 {
    font-weight: normal;
  }

  h2 {
    font-size: 2.8rem;
    line-height: 1.2em;
  }

  h3 {
    font-size: 1.4rem;
    line-height: 1.1em;

    color: #d0d6f9;
    margin-bottom: 1rem;
    letter-spacing: 2px;
  }
}
</style>
