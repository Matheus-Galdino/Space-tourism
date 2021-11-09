<template>
  <nav>
    <img src="../assets/shared/logo.svg" alt="logo" />
    <input type="checkbox" id="nav-toggle" />

    <label class="burger" for="nav-toggle">
      <span class="line line-1"></span>
      <span class="line line-2"></span>
      <span class="line line-3"></span>
    </label>

    <ol class="nav-links">
      <li>
        <router-link to="/"> <strong>00</strong> Home</router-link>
      </li>
      <li>
        <router-link to="/destination"><strong>01</strong> Destination</router-link>
      </li>
      <li>
        <router-link to="/crew"><strong>02</strong> Crew</router-link>
      </li>
      <li>
        <router-link to="/tech"><strong>03</strong> Technology</router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  padding: 0 2.4rem;
  height: var(--navHeight);

  input {
    display: none;
  }
}

.burger {
  z-index: 2;
  cursor: pointer;
  background: none;

  .line {
    margin: 0;
    display: block;

    width: 30px;
    height: 3px;
    background: #fff;

    &:not(:last-of-type) {
      margin-bottom: 7px;
    }
  }
}

.nav-links {
  display: none;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;

  width: 65vw;

  padding: 3rem;
  padding-top: 12rem;

  list-style: none;
  backdrop-filter: blur(81px);
  background: rgba(255, 255, 255, 0.04);

  li:not(:last-of-type) {
    margin-bottom: 3rem;
  }

  a {
    color: #fff;
    font-size: 1.6rem;
    line-height: 1.3em;
    letter-spacing: 3px;
    text-decoration: none;
    text-transform: uppercase;

    strong {
      margin-right: 1rem;
    }
  }
}

input:checked ~ .nav-links {
  display: block;
}
</style>
