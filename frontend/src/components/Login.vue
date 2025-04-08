<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="loginUser">
      <label for="email">Email</label>
      <input
          id="email"
          type="email"
          v-model="email"
          placeholder="Enter your email"
          required
      />

      <label for="password">Password</label>
      <input
          id="password"
          type="password"
          v-model="password"
          placeholder="Enter your password"
          required
      />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async loginUser() {
      // Basic form validation
      if (!this.email || !this.password) {
        alert("Please fill in all required fields.");
        return;
      }

      // Example: You can integrate with a backend login API here.
      // For example (assuming you have axios set up):
      //
      // try {
      //   const response = await axios.post("/api/login", {
      //     email: this.email,
      //     password: this.password,
      //   });
      //   // Handle successful login (e.g., save auth token)
      //   console.log("Logged in successfully:", response.data);
      // } catch (error) {
      //   console.error("Error logging in:", error);
      // }

      // Temporary feedback for demonstration
      alert(`Logging in with:\nEmail: ${this.email}\nPassword: ${this.password}`);
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 2rem auto;
  border: 1px solid #ccc;
  padding: 1.5rem;
  border-radius: 8px;
}

.login-container h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-top: 1rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.6rem;
  margin-top: 0.5rem;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 0.7rem;
  margin-top: 1.5rem;
  cursor: pointer;
  background-color: #3f51b5;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 4px;
}
</style>
