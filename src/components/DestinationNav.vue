<template>
  <nav class="destination-nav">
    <ul class="nav-links">
      <li class="nav-link">
        <router-link to="/destination/moon" class="link" id="moon"> Moon </router-link>
      </li>
      <li>
        <router-link to="/destination/mars" class="link" id="mars">Mars</router-link>
      </li>
      <li>
        <router-link to="/destination/europa" class="link" id="europa">Europa</router-link>
      </li>
      <li>
        <router-link to="/destination/titan" class="link" id="titan">Titan</router-link>
      </li>
      <div class="slider"></div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "DestinationNav",
  computed: {
    left() {
      return document.getElementById(this.$route.params.name).offsetLeft ?? 0;
    },
    width() {
      return document.getElementById(this.$route.params.name).offsetWidth ?? 44;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-links {
  display: flex;
  column-gap: 2.5rem;

  list-style: none;
  position: relative;
}

.link {
  color: #fff;
  font-size: 1.4rem;
  line-height: 1.2em;
  letter-spacing: 2px;

  display: inline-block;
  padding-bottom: 8px;
  text-decoration: none;
  text-transform: uppercase;
}

.slider {
  height: 3px;
  background: #fff;
  width: calc(v-bind("width") * 1px);

  position: absolute;
  bottom: 0;
  left: calc(v-bind("left") * 1px);

  transition: all 0.3s ease-in-out;
}
</style>
