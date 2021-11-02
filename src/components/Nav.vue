<template>
  <nav>
    <img src="../assets/shared/logo.svg" alt="logo" />
    <button class="burger">
      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </button>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss">
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2.5rem;
}

.burger {
  background: none;
}

.line {
  width: 24px;
  height: 3px;
  background: #fff;

  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
}
</style>
