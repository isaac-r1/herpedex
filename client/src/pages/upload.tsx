import React, { useEffect, useState } from 'react';
import styles from '../styles/Upload.module.css'; // Import the CSS module
import Sidebar from './sidebar';
import Uploader from '../components/Uploader'

function Upload() {
    
   

  return (
    
    <div className={styles.container}>
        <Sidebar/>
        <div className={styles.mainContent}>
          <h1>Upload a Photo</h1>
          <Uploader/>
        </div>
    </div>
    
  );
}

export default Upload;
