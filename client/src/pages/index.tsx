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
        <h1 className={styles.logo}>Welcome to Herpedex!</h1>
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
          <p>Like a Pokedex but for Reptiles/Amphibians</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <h2>Features</h2>
        <div className={styles.feature_list}>
          <div className={styles.feature}>
            <h3>Trip Planning</h3>
            <p>Helps herpers plan routes and track locations of reptiles and amphibians</p>
          </div>
          <div className={styles.feature}>
            <h3>Conservation Efforts</h3>
            <p>Helps herpers track and report on endangered & invasive species</p>
          </div>
          <div className={styles.feature}>
            <h3>Community</h3>
            <p>Allows herpers to share sightings, photos, and locations with friends and others!</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;