<template>
  <nav class="tech-nav">
    <button v-for="n in 3" :key="n" :class="{ active: n == modelValue }" @click="$emit('update:modelValue', n)">
      {{ n }}
    </button>
  </nav>
</template>

<script>
export default {
  name: "TechNav",
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.tech-nav {
  display: flex;
  column-gap: 1.6rem;
  align-items: center;

  button {
    width: 4rem;
    height: 4rem;

    display: grid;
    place-content: center;

    font-size: 16px;

    color: #fff;
    background: none;
    border-radius: 50%;
    padding: 1.1rem 1.6rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid rgba(255, 255, 255, 0.25);

    &.active {
      color: #0b0d17;
      background: #fff;
    }
  }
}
</style>
