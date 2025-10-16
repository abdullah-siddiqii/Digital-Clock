// src/components/TinyClock.tsx
'use client';
import { FC } from 'react';
import { HandAngles } from '../types';
import styles from '../Clock.module.css';

interface TinyClockProps extends HandAngles {}

const TinyClock: FC<TinyClockProps> = ({ h1, h2 }) => {
  return (
    <div className={styles.tinyClock}>
      {/* Hand 1 */}
      <div 
        className={styles.hand} 
        style={{ '--angle': `${h1}deg` } as React.CSSProperties}
      ></div>
      {/* Hand 2 */}
      <div 
        className={styles.hand} 
        style={{ '--angle': `${h2}deg` } as React.CSSProperties}
      ></div>
    </div>
  );
};

export default TinyClock;