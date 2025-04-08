<template>
  <div class="home-page">
    <div class="hero">
      <!-- Background image -->
      <img src="@/assets/test_background.png" alt="Background" class="background-image" />

      <!-- Hero content (text and login button) -->
      <div class="hero-content">
        <h1>Welcome to the Badminton Club</h1>
        <p>Manage your club effortlessly and stay connected with members.</p>
        <router-link to="/login" class="login-button">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home-page {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.hero {
  position: relative;
  width: 100%;
  height: 100%;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the container */
  z-index: -1;       /* Puts the image behind the hero content */
}

.hero-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 0 20px;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.login-button {
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
