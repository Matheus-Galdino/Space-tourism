<template>
  <nav class="destination-nav">
    <ul class="nav-links">
      <li class="nav-link" v-for="(destination, index) in destinations" :key="index">
        <button class="link" @click="$emit('update:modelValue', index)" :id="index">
          {{ destination }}
        </button>
      </li>
      <div class="slider"></div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "DestinationNav",
  props: {
    destinations: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: Number,
      required: true,
    },
  },
  computed: {
    sliderStyle() {
      const activeElement = document.getElementById(this.modelValue);
      return {
        left: activeElement.offsetLeft ?? 0,
        width: activeElement.offsetWidth ?? 44,
      };
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

  background: none;
  display: inline-block;
  padding-bottom: 12px;
  text-decoration: none;
  text-transform: uppercase;
}

.slider {
  height: 3px;
  background: #fff;
  width: calc(v-bind("sliderStyle.width") * 1px);

  position: absolute;
  bottom: 0;
  left: calc(v-bind("sliderStyle.left") * 1px);

  transition: all 0.3s ease-in-out;
}
</style>
