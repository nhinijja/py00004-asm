<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <Footer />
    <!-- Footer hiển thị ở đây -->
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"; // Đúng tên Navbar
import Footer from "./components/Footer.vue"; // Đổi tên import Footer

export default {
  name: "App",
  components: {
    Navbar,
    Footer, // Đăng ký Footer
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
