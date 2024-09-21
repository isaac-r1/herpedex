<template>
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="username">Username</label>
          <input v-model="username" id="username" type="text" placeholder="Enter your username" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="password" id="password" type="password" placeholder="Enter your password" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'LoginPage',
    setup() {
      const username = ref('')
      const password = ref('')
      const router = useRouter()
  
      const onSubmit = () => {
        console.log('Login attempted', username.value)
        // Here you would typically call your login API
        // For now, we'll just navigate to the home page
        router.push('/')
      }
  
      return {
        username,
        password,
        onSubmit
      }
    }
  }
  </script>
  
  <style scoped>
  .login {
    max-width: 300px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #3aa876;
  }
  </style>