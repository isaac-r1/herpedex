<template>
    <div id="app">
      <!-- Header -->
      <header class="header">
        <h1 class="logo">My Landing Page</h1>
        <nav>
          <a href="#features">Features</a>
          <router-link to="/login">Login</router-link>
          <router-link to="/register">Register</router-link>
        </nav>
      </header>
  
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h2>Welcome to Our Product</h2>
          <p>Innovating the future, today.</p>
          <button @click="ctaClick">Get Started</button>
        </div>
      </section>
  
      <!-- Features Section -->
      <section id="features" class="features">
        <h2>Features</h2>
        <div class="feature-list">
          <div class="feature">
            <h3>Feature 1</h3>
            <p>Our first amazing feature</p>
          </div>
          <div class="feature">
            <h3>Feature 2</h3>
            <p>Another great feature</p>
          </div>
          <div class="feature">
            <h3>Feature 3</h3>
            <p>More reasons to love us</p>
          </div>
        </div>
      </section>
  
      <!-- Call to Action -->
      <section id="cta" class="cta">
        <h2>Ready to Join Us?</h2>
        <button @click="ctaClick">Sign Up Today</button>
      </section>
    </div>
  </template>

<script>
export default {
  methods: {
    ctaClick() {
      alert('Thank you for your interest!');
    }
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #42b983;
  color: white;
}

.header nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
}

.header .logo {
  font-size: 1.5rem;
}

/* Hero Section */
.hero {
  background: url('https://via.placeholder.com/1920x600') no-repeat center center/cover;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.hero-content h2 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.hero-content button {
  padding: 10px 20px;
  background-color: #42b983;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

/* Features Section */
.features {
  padding: 50px;
  text-align: center;
}

.feature-list {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.feature {
  width: 30%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

/* Call to Action */
.cta {
  padding: 50px;
  background-color: #42b983;
  color: white;
  text-align: center;
}

.cta button {
  padding: 15px 30px;
  font-size: 1.2rem;
  background-color: white;
  color: #42b983;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.cta button:hover {
  background-color: #38a774;
  color: white;
}
</style>
