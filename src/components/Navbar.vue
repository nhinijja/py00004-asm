<template>
  <nav class="navbar navbar-expand-lg bg-light navbar-light">
    <div class="container-fluid">
      <!-- Brand -->
      <router-link to="/" class="navbar-brand">
        Burger <span>King</span>
      </router-link>

      <!-- Toggle Button for Mobile View -->
      <button
        type="button"
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Links -->
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarCollapse"
      >
        <div class="navbar-nav ml-auto">
          <router-link :to="{ name: 'Home' }" class="nav-item nav-link active"
            >Home</router-link
          >

          <router-link to="/about" class="nav-item nav-link active"
            >About</router-link
          >

          <router-link to="/chefs" class="nav-item nav-link active"
            >Chef</router-link
          >
          <router-link to="/menu" class="nav-item nav-link active"
            >Menu</router-link
          >
          <router-link to="/events" class="nav-item nav-link active"
            >Booking</router-link
          >
          <router-link to="/post" class="nav-item nav-link active"
            >Post</router-link
          >
          <!-- Dropdown Menu -->
          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              @click.prevent="toggleDropdown"
              :class="{ show: dropdownOpen }"
            >
              Pages
            </a>
            <div class="dropdown-menu" :class="{ show: dropdownOpen }">
              <router-link to="/single" class="dropdown-item"
                >Blog Grid</router-link
              >
              <router-link to="/book" class="dropdown-item"
                >Blog Detail</router-link
              >
            </div>
          </div>

          <router-link to="/contact" class="nav-item nav-link active"
            >Contact</router-link
          >
        </div>
      </div>
      <router-link to="/login" class="nav-item nav-link active"
        >Login</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      dropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
  },
};
</script>

<style scoped>
/* Styles for dropdown menu */
.dropdown-menu {
  display: none;
}
.dropdown-menu.show {
  display: block;
}
</style>
