<template>
  <section class="page crew">
    <p class="page__id">
      <span>02</span>
      Meet your crew
    </p>

    <img :src="memberImg" :alt="member.name" loading="lazy" class="member__img" />
    <div class="line"></div>

    <CrewNav v-model="currentIndex" />

    <h2 class="role">{{ member.role }}</h2>
    <h1 class="name">{{ member.name }}</h1>

    <p class="bio">{{ member.bio }}</p>
  </section>
</template>

<script>
import CrewNav from "../components/CrewNav.vue";

export default {
  name: "Crew",
  components: { CrewNav },
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
    member() {
      return this.data[this.currentIndex - 1];
    },
    memberImg() {
      return require(`../assets/${this.member.images.png}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.crew {
  --backgroundImg: url("../assets/crew/background-crew-mobile.jpg");
}

.member__img {
  height: 30rem;
}

.line {
  margin-top: 0;
}

.role {
  font-size: 1.6rem;
  line-height: 1.2em;
  font-weight: normal;

  opacity: 0.5;
  margin-top: 3rem;
  text-transform: uppercase;
}

.name {
  font-size: 2.4rem;
  line-height: 1.2em;
  font-weight: normal;
  margin: 0.8rem 0 1.6rem;
  text-transform: uppercase;
}

.bio {
  color: #d0d6f9;
  font-size: 1.5rem;
  line-height: 1.3em;
  text-align: center;
}
</style>
