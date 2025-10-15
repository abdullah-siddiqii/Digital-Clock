// src/utils/digitMaps.ts

import { ClockSymbol, HandAngles, DigitMap } from '../types';

// 1. Angle Map: Defines the rotation (in degrees) for each symbol.
export const ANGLE_MAP: Record<ClockSymbol, HandAngles> = {
  N: { h1: 0, h2: 0 },
  TR: { h1: 90, h2: 0 },
  TL: { h1: 180, h2: 90 },
  BR: { h1: 0, h2: 270 },
  BL: { h1: 270, h2: 180 },
  H: { h1: 180, h2: 0 },
  V: { h1: 90, h2: 270 },
  C: { h1: 0, h2: 0 }, // Center symbol will be used for colon
};

// 2. Digit Definitions: 6x4 array (24 symbols) for each number.
//    NOTE: You will need to complete the maps for 0, 2-9, and the colon ':'.
export const DIGIT_MAP: DigitMap = {
  '1': [
    // R1
    'N', 'TR', 'TR', 'N',
    // R2
    'N', 'V', 'V', 'N',
    // R3
    'N', 'V', 'V', 'N',
    // R4
    'N', 'V', 'V', 'N',
    // R5
    'N', 'V', 'V', 'N',
    // R6
    'H', 'H', 'H', 'H',
  ],
  
  '0': [ 
    // Example (incomplete) - Top border
    'H', 'H', 'H', 'H', 
    // Left/Right side
    'V', 'N', 'N', 'V', 
    // ... complete the remaining 4 rows for '0'
    // ...
    // Bottom border
    'H', 'H', 'H', 'H', 
  ],
  
  // You would define '2', '3', '4', ..., '9' here.
};