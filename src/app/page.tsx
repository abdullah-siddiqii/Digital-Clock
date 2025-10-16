// src/app/page.tsx (or pages/index.tsx if using Pages Router)

import ClockDisplay from './components/ClockDisplay';
import './globals.css'; // Assuming your Tailwind CSS is here
import styles from './Clock.module.css'; // Import the custom styles

export default function Home() {
  return (
    <main className={styles.clockContainer}>
      <ClockDisplay />
    </main>
  );
}