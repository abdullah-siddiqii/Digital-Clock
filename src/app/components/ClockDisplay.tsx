'use client';
import { FC, useState, useEffect } from 'react';
import DigitDisplay from './DigitDisplay';
import styles from '../Clock.module.css';

// Helper function to get the current time digits
const getClockDigits = (): string[] => {
  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const amPm = now.getHours() >= 12 ? 'PM' : 'AM';

  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');

  return [...hh, ...mm, ...ss, amPm];
};

// Separate Colon component for blinking effect
const Colon: FC<{ show: boolean }> = ({ show }) => (
  <div style={{ opacity: show ? 1 : 0.3, transition: 'opacity 0.4s ease' }}>
    <DigitDisplay digit=":" />
  </div>
);

const ClockDisplay: FC = () => {
  const [mounted, setMounted] = useState(false);
  const [digits, setDigits] = useState<string[]>([]);
  const [showColon, setShowColon] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light' | 'neon' | 'paper'|'old'|'rich'>('neon');

  // Mounting and clock update
  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setDigits(getClockDigits());
      setShowColon(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Fallback for SSR hydration or loading
  if (!mounted)
    return (
      <div className="h-[calc(100vh-80px)] w-full flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-400" />
      </div>
    );

  if (digits.length === 0) return null;

  const [h1, h2, m1, m2, s1, s2, amPm] = digits;

  // Theme mapping
const themeClass =
  theme === 'dark'
    ? styles.themedark
    : theme === 'light'
    ? styles.themelight
    : theme === 'neon'
    ? styles.themeneon
    : theme === 'paper'
    ? styles.themepaper
    : theme === 'old'
    ? styles.themeold
    : theme === 'rich'
    ? styles.themerich
    : '';
  
  return (
    <main className={`${styles.clockPage} ${themeClass}`}>
      {/* Title */}
      <h1 className={styles.clockTitle}>✨ Digital Galaxy Clock ✨</h1>
      {/* <h4 className={styles.themeTitle}>
        Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </h4> */}

      {/* Theme Buttons */}
    
      <div
        style={{
          marginBottom: '15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        <button
          type="button"
className={`${styles.themeButton} ${theme === 'dark' ? styles.activeButton : ''}`}
          onClick={() => setTheme('dark')}
          title="Switch to dark theme"
          aria-label="Switch to dark theme"
        >
          🌙
        </button>

        <button
          type="button"
          className={`${styles.themeButton} ${theme === 'light' ? styles.activeButton : ''}`}
          onClick={() => setTheme('light')}
          title="Switch to light theme"
          aria-label="Switch to light theme"
        >
          ☀️
        </button>

        <button
          type="button"
          className={`${styles.themeButton} ${theme === 'neon' ? styles.activeButton : ''}`}
          onClick={() => setTheme('neon')}
          title="Switch to neon theme"
          aria-label="Switch to neon theme"
        >
          🌃
        </button>
      <button
  type="button"
  className={`${styles.themeButton} ${theme === 'paper' ? styles.activeButton : ''}`}
  onClick={() => setTheme('paper')}
  title="Switch to paper theme"
  aria-label="Switch to paper theme"
>
  📜
</button>
      <button
  type="button"
  className={`${styles.themeButton} ${theme === 'old' ? styles.activeButton : ''}`}
  onClick={() => setTheme('old')}
  title="Switch to old school theme"
  aria-label="Switch to old school theme"
>
  🕰️
</button>
      <button
  type="button"
  className={`${styles.themeButton} ${theme === 'rich' ? styles.activeButton : ''}`}
  onClick={() => setTheme('rich')}
  title="Switch to rich theme"
  aria-label="Switch to rich theme"
>
  💎
</button>

      </div>

      {/* Clock Digits */}
      <div className={styles.clockContainer} role="timer" aria-live="polite">
        <DigitDisplay digit={h1} />
        <DigitDisplay digit={h2} />
        <Colon show={showColon} />
        <DigitDisplay digit={m1} />
        <DigitDisplay digit={m2} />
        <Colon show={showColon} />
        <DigitDisplay digit={s1} />
        <DigitDisplay digit={s2} />
        <DigitDisplay digit={amPm} />
      </div>

      {/* Footer */}
      <h6 className={styles.clockbottom}>✨ Made by Abdullah Siddiqui ✨</h6>
    </main>
  );
};

export default ClockDisplay;
