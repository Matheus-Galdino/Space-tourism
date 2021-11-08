<template>
  <section class="page tech">
    <p class="page__id">
      <span>03</span>
      Space launch 101
    </p>

    <img :src="techImg" :alt="currentTech.name" loading="lazy" class="tech__img" />

    <TechNav v-model="currentIndex" class="tech-nav" />

    <h2>the terminology...</h2>
    <h1 class="name">{{ currentTech.name }}</h1>

    <p class="description">
      {{ currentTech.description }}
    </p>
  </section>
</template>

<script>
import TechNav from "../components/TechNav.vue";

export default {
  name: "Tech",
  components: { TechNav },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 1,
    };
  },
  computed: {
    currentTech() {
      return this.data[this.currentIndex - 1];
    },
    techImg() {
      return require(`../assets/${this.currentTech.images.landscape}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.tech {
  --backgroundImg: url("../assets/technology/background-technology-mobile.jpg");

  padding-inline: 0;
}

.tech__img {
  width: 100%;
  height: 17rem;
  object-fit: cover;
}

.tech-nav {
  margin: 3rem 0;
}

h2 {
  font-size: 1.4rem;
  line-height: 1.2em;
  letter-spacing: 2px;
  font-weight: normal;

  color: #d0d6f9;
  text-transform: uppercase;
}

.name {
  font-size: 2.4rem;
  line-height: 1.2em;
  font-weight: normal;
  margin: 0.8rem 0 1.6rem;
  text-transform: uppercase;
}

.description {
  font-size: 1.5rem;
  line-height: 1.7em;

  color: #d0d6f9;
  padding: 0 2.5rem;
  text-align: center;
}
</style>
