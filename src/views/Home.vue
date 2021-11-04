<template>
  <section class="page home">
    <h2>So, you want to travel to</h2>
    <h1>space</h1>
    <p>
      Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back,
      and relax because we’ll give you a truly out of this world experience!
    </p>

    <router-link to="/destination/moon"> Explore </router-link>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.home {
  --backgroundImg: url("../assets/home/background-home-tablet.jpg");

  h2 {
    font-size: 1.6rem;
    line-height: 1em;
    letter-spacing: 3px;
    text-transform: uppercase;

    color: #d0d6f9;
  }

  h1 {
    font-size: 8rem;
    font-weight: normal;

    margin: 1.6rem 0;
    text-transform: uppercase;
  }

  p {
    color: #d0d6f9;
    font-size: 1.5rem;
    line-height: 1.6em;
  }

  a {
    display: inline-grid;
    place-content: center;

    width: 150px;
    height: 150px;
    font-size: 2rem;
    letter-spacing: 1.25px;

    color: #0b0d17;
    margin-top: 8rem;
    border-radius: 50%;
    background: #fff;
    text-decoration: none;
    text-transform: uppercase;
  }
}
</style>
