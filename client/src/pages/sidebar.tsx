import React from 'react';
import styles from '../styles/Sidebar.module.css' // Assuming Sidebar has its own CSS module
import {withAuthInfo, useLogoutFunction, useRedirectFunctions} from "@propelauth/react";

function Sidebar() {
  const {redirectToAccountPage} = useRedirectFunctions()
  const logoutFn = useLogoutFunction()

  return (
    <div className={styles.sidebar}>
    <h2>Dashboard</h2>
    <a href="https://www.reddit.com/r/herpetology/">Community</a>
    <a href="upload">Upload Photo</a>
    <a href="herpedex">Herpedex</a>
    <a href="tripplanning">Trip Guide</a>
    <a href="starttrip">Start A Trip</a>
    <a onClick={() => redirectToAccountPage()}>Account</a>
    <a href="whoami">Who Am I</a>
</div>
  );
}

export default Sidebar;
