'use client';
import React, { FC } from 'react';
import styles from '../Clock.module.css';
import { DIGIT_MAP, ANGLE_MAP } from '../utils/digitMaps';
import { ClockSymbol } from '../types';

interface Props {
  digit: string;
}

const DigitDisplay: FC<Props> = ({ digit }) => {
  // Special handling for colon
  if (digit === ':') {
    return (
      <div className={styles.colon}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    );
  }

  const map = DIGIT_MAP[digit];

  // 🚨 Defensive check — prevents crash if map undefined
  if (!map) {
    console.warn(`⚠️ Unknown digit "${digit}" passed to DigitDisplay.`);
    return <div className={styles.digitContainer}></div>;
  }

  return (
    <div className={styles.digitContainer}>
      {map.map((symbol, i) => {
        const { h1, h2 } = ANGLE_MAP[symbol as ClockSymbol] || { h1: 0, h2: 0 };
        return (
          <div key={i} className={styles.tinyClock}>
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
      })}
    </div>
  );
};

export default DigitDisplay;
