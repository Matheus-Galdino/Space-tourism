<template>
  <nav class="crew-nav">
    <router-link class="ellipse" to="/crew/douglas"></router-link>
    <router-link class="ellipse" to="/crew/mark"></router-link>
    <router-link class="ellipse" to="/crew/victor"></router-link>
    <router-link class="ellipse" to="/crew/anousheh"></router-link>
  </nav>
</template>

<script>
export default {
  name: "CrewNav",
};
</script>

<style lang="scss" scoped>
.crew-nav {
  display: flex;
  column-gap: 1.6rem;
  align-items: center;
}

.ellipse {
  width: 1rem;
  height: 1rem;
  opacity: 0.17;
  border-radius: 50%;
  background: #fff;
}

.router-link-exact-active {
  opacity: 1;
}
</style>
