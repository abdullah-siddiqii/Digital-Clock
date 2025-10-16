// src/components/ClockDisplay.tsx
'use client';
import { FC, useState, useEffect } from 'react';
import DigitDisplay from './DigitDisplay';
import styles from '../Clock.module.css';

// 🔹 Helper function: Returns [H1, H2, M1, M2, S1, S2]
const getClockDigits = (): string[] => {
  const now = new Date();
  const hours = now.getHours() % 12 || 12; // 12-hour format
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');

  return (hh + mm + ss).split('');
};

// 🔹 Blinking Colon Component
const Colon: FC<{ show: boolean }> = ({ show }) => (
  <div
    className={styles.blinkColon}
    style={{ opacity: show ? 1 : 0.2 }}
  >
    <DigitDisplay digit=":" />
  </div>
);

const ClockDisplay: FC = () => {
  // ✅ Only render clock after client mount
  const [mounted, setMounted] = useState(false);
  const [digits, setDigits] = useState<string[]>([]);
  const [showColon, setShowColon] = useState(true);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setDigits(getClockDigits());
      setShowColon(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    // Render nothing during SSR
    return null;
  }

  const [h1, h2, m1, m2, s1, s2] = digits;
  return (
    <main>
      <h1 className={styles.clockTitle}>✨ Digital Galaxy Clock ✨</h1>

      <div className={styles.clockContainer} role="timer" aria-live="polite">
        {/* Hours */}
        <DigitDisplay digit={h1}  />
        <DigitDisplay digit={h2} />

        {/* First Colon */}
        <Colon show={showColon} />

        {/* Minutes */}
        <DigitDisplay digit={m1} />
        <DigitDisplay digit={m2} />

        {/* Second Colon */}
        <Colon show={showColon} />

        {/* Seconds */}
        <DigitDisplay digit={s1} />
        <DigitDisplay digit={s2} />

        <h6 className={styles.clockBottom}>✨ Made by Abdullah Siddiqui ✨</h6>
      </div>
    </main>
  );
};

export default ClockDisplay;
