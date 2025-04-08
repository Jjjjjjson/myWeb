<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/" class="logo-link">Badminton Club</router-link>
    </div>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <!-- You can add more links as your project expands -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 0.75rem 1.5rem;
  color: #fff;
}

.logo-link {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-left: 1rem;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ddd;
}
</style>
