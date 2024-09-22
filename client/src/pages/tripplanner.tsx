import React from 'react';
import styles from '../styles/TripPlanner.module.css';
import Sidebar from './sidebar'; // Ensure this component is correctly imported

const TripPlanner: React.FC = () => {
  return (
    <div className={styles.container}>
      <Sidebar /> {/* Sidebar sticks to the left */}
      <div className={styles.mainContent}>
        <div className={styles.tripPlannerContainer}>
          <div className={styles.tripPlannerContent}>
            <h1>Welcome to Herpedex</h1>
            <p>
              “Herping”, or the activity of finding repitles and amphibians and observing them in the wild, is a fun activity that can be enjoyed by everyone. Here are some tips and tricks to enhance your experience:
            </p>
            <p>
                Using Herpedex will allow you to contribute to databases that environmental and conservation groups use to track and monitor invasive/threatened species.
            </p>
            <h2>Packing</h2>
            <p>
              Experienced “herpers” like to bring items such as snake hooks, flashlights, water, and snacks. Protective equipment can include gloves and protective clothing. Be sure to bring whatever can keep both you and the herps safe!
            </p>

            <h2>Handling</h2>
            <p>
              Do not pick up any “herps” unless you can confidently identify them. If you don’t know what it is, don’t pick it up.
            </p>
            <ul>
              <li><strong>Snakes:</strong> Support the snake’s body and avoid restraining its head.</li>
              <li><strong>Amphibians:</strong> Use wet hands or gloves to prevent drying them out.</li>
              <li><strong>Reptiles:</strong> Exercise caution with lizards, as they may lose their tails when scared.</li>
            </ul>

            <h2>General Etiquette</h2>
            <p>
              Respect the environment. Any animal you pick up should be placed back down, and any environment you disturbed should be returned to its original state.
            </p>
            <p>
              Document and report any endangered species to your local wildlife department. Avoid giving out direct coordinates to prevent poaching.
            </p>

            <h2>Resources</h2>
            <p>
              For further reading, consider:
            </p>
            <ul>
              <li><em>Snake Hunting Guide II; Methods, Tools, and Techniques for Finding Snakes</em> by Will Bird and Phil Peak</li>
              <li><em>The Field Herping Guide: Finding Amphibians and Reptiles in the Wild</em> by Mike Pingleton and Joshua Holbrook</li>
            </ul>

            <p>
              We hope this helps, and be sure to safely Herp!
            </p>
            <p className={styles.signature}>The Herpedex Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;
