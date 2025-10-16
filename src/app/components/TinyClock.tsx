// src/components/TinyClock.tsx
'use client';
import { FC } from 'react';
import { HandAngles } from '../types';
import styles from '../Clock.module.css';

const TinyClock: FC<HandAngles> = ({ h1, h2 }) => {
  return (
    <div className={styles.tinyClock}>
      <div 
        className={styles.hand} 
        style={{ '--angle': `${h1}deg` } as React.CSSProperties}
      ></div>
      
      <div 
        className={styles.hand} 
        style={{ '--angle': `${h2}deg` } as React.CSSProperties}
      ></div>
    </div>
  );
};

export default TinyClock;
