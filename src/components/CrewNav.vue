<template>
  <nav class="crew-nav">
    <button class="ellipse" v-for="n in 4" :key="n" @click="$emit('update:modelValue', n)" :class="{ active: n == modelValue }"></button>
  </nav>
</template>

<script>
export default {
  name: "CrewNav",
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
  },
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
  transition: opacity 0.3s ease-in-out;

  &.active {
    opacity: 1;
  }
}
</style>
