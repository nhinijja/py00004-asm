<template>
  <header id="header" class="header d-flex align-items-center sticky-top">
    <div
      class="container position-relative d-flex align-items-center justify-content-between"
    >
      <a
        href="index.html"
        class="logo d-flex align-items-center me-auto me-xl-0"
      >
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1 class="sitename">Yummy</h1>
        <span>.</span>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/menu">Menu</router-link></li>
          <li><router-link to="/events">Events</router-link></li>

          <li><router-link to="/chefs">Chefs</router-link></li>

          <!-- Dropdown menu -->

          <li><router-link to="/contact">Contact</router-link></li>
        </ul>

        <i
          class="mobile-nav-toggle d-xl-none bi bi-list"
          @click="toggleMobileMenu"
        ></i>
      </nav>

      <router-link to="/login" class="btn-get-started">Login</router-link>
    </div>
  </header>

  <!-- Sử dụng router-link để điều hướng đến trang đăng nhập -->
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped></style>
