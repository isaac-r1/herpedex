import React from 'react';
import styles from '../styles/Home.module.css'
import {withAuthInfo, useLogoutFunction, useRedirectFunctions} from "@propelauth/react";

function App() {
  
  const {redirectToLoginPage, redirectToSignupPage} = useRedirectFunctions()
  const logoutFn = useLogoutFunction()

  return (
    <div id="app">
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.logo}>My Landing Page</h1>
        <nav>
          <a href="#features">Features</a>
          <a onClick={() => redirectToLoginPage()}>Login</a>
          <a onClick={() => redirectToSignupPage()}>Register</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.hero_content}>
          <h2>Herpedex</h2>
          <p>Like a Pokedex but for Snakes</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <h2>Features</h2>
        <div className={styles.feature_list}>
          <div className={styles.feature}>
            <h3>Feature 1</h3>
            <p>Our first amazing feature</p>
          </div>
          <div className={styles.feature}>
            <h3>Feature 2</h3>
            <p>Another great feature</p>
          </div>
          <div className={styles.feature}>
            <h3>Feature 3</h3>
            <p>More reasons to love us</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;