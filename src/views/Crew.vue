<template>
  <section class="page crew">
    <p class="page__id">
      <span>02</span>
      Meet your crew
    </p>

    <img :src="memberImg" :alt="member.name" class="member__img" />
    <div class="line"></div>

    <h2 class="role">{{ member.role }}</h2>
    <h1 class="name">{{ member.name }}</h1>

    <p class="bio">{{ member.bio }}</p>
  </section>
</template>

<script>
export default {
  name: "Crew",
  data() {
    return {
      crew: [],
    };
  },
  computed: {
    member() {
      return this.crew.find((x) => x.name.toLowerCase().includes(this.$route.params.name));
    },
    memberImg() {
      return require(`../assets/${this.member.images.webp}`);
    },
  },
  beforeMount() {
    const info = require("../data.json");
    this.crew = info.crew;
  },
};
</script>

<style lang="scss" scoped>
.crew {
  --backgroundImg: url("../assets/crew/background-crew-tablet.jpg");
}

.member__img {
  width: 30rem;
}

.line {
  margin-top: 0;
}

.role {
  font-size: 1.6rem;
  line-height: 1.2em;
  font-weight: normal;

  opacity: 0.5;
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
