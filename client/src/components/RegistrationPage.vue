<template>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
    <div class="register">
      <h2>Register</h2>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="username">Username</label>
          <input v-model="username" id="username" type="text" placeholder="Enter your username" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" id="email" type="email" placeholder="Enter your email" required>
        </div> 
        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="password" id="password" type="password" placeholder="Enter your password" required>
        </div>
        <div class="form-group">
            <label for="confirm-password">Confirm Password</label>
            <input v-model="confirmPassword" id="confirm-password" type="password" placeholder="Confirm your password" required>
        </div>
        <p v-if="!passwordsMatch" class="error">Passwords do not match</p>
        <button type="submit">Register</button>
      </form>
    </div>

  </template>
  
  <script>
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'  // Import useRouter
  import authService from '@/services/authService'  // Make sure this path is correct

  export default {
    name: 'RegistrationPage',
    setup() {
      const router = useRouter()  // Initialize router
      const username = ref('')  // Add username ref
      const email = ref('')     // Add email ref
      const password = ref('')
      const confirmPassword = ref('')

      const passwordsMatch = computed(() => {
        return password.value === confirmPassword.value
      })

      const onSubmit = async () => {
        if (passwordsMatch.value) {
          try {
            const response = await authService.register(
              username.value,
              email.value,
              password.value
            )
            console.log('Registration successful', response.data)
            alert('Registration successful! Redirecting to login...')
            router.push('/login')
          } catch (error) {
            console.error('Registration failed', error.response?.data || error.message)
            alert('Registration failed: ' + (error.response?.data?.message || error.message))
          }
        } else {
          console.log('Passwords do not match')
          alert('Passwords do not match')
        }
      }

      return {
        username,  // Expose username to template
        email,     // Expose email to template
        password,
        confirmPassword,
        passwordsMatch,
        onSubmit
      }
    }
  }
  </script>
  
  <style scoped>
  .register {
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

  .error {
  color: red;
  font-size: 0.8em;
}

nav {
    margin-bottom: 20px; 
  }

  nav a {
    margin-right: 15px; 
    text-decoration: none; 
    color: #42b983; 
  }

  nav a:last-child {
    margin-right: 0; 
}

  </style>