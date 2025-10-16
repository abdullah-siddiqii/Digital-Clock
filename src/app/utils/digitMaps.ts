// src/utils/digitMaps.ts

import { ClockSymbol, HandAngles, DigitMap } from '../types'; // ✅ Correct path assumed

// 1. Angle Map: Defines the rotation (in degrees) for each symbol.
export const ANGLE_MAP: Record<ClockSymbol, HandAngles> = {
  // N: Neutral/Blank (Center dot)
  N: { h1: 135, h2: 135 }, 
  
  // H: Full Horizontal Line
  H: { h1: 180, h2: 0 }, 
  
  // V: Full Vertical Line
  V: { h1: 90, h2: 270 }, 

  // Corner Symbols
  TR: { h1: 90, h2: 0 },   // Top Right Corner
  TL: { h1: 180, h2: 90 }, // Top Left Corner
  BR: { h1: 0, h2: 270 },  // Bottom Right Corner
  BL: { h1: 270, h2: 180 },// Bottom Left Corner

  // C: Center Dot (for the colon separator).
  C: { h1: 0, h2: 0 }, 
};

// 2. Digit Definitions: 6x4 array (24 symbols) for each number.
export const DIGIT_MAP: DigitMap = {
  // The Colon Separator: Two center dots
  ':': [
    'N', 'H', 'H', 'H',
    'N', 'C', 'C', 'N',
    'N', 'N', 'N', 'N',
    'N', 'C', 'C', 'N',
    'N', 'N', 'N', 'N',
    'N', 'N', 'N', 'N',
  ],
  
  '0': [
    'TR', 'H', 'H', 'TL',
    'V', 'N', 'N', 'V',
    'V', 'N', 'N', 'V',
    'V', 'N', 'N', 'V',
    'V', 'N', 'N', 'V',
    'BR', 'H', 'H', 'BL',
  ],

  '1': [
    'TR', 'H', 'TL', 'N',
    'BR', 'TL', 'V', 'N',
    'N', 'V', 'V', 'N',
    'N', 'V', 'V', 'N',
    'TR', 'BL', 'BR', 'TL',
    'BR', 'H', 'H', 'BL',
  ],
'2': [
  'TR', 'H', 'H', 'TL',  // Top bar
  'N', 'N', 'N', 'V',    // Top-right vertical
  'TR', 'H', 'H', 'BL',  // Upper-middle bar
  'V', 'N', 'N', 'N',    // Lower-left vertical
  'V', 'N', 'N', 'N',    // Continue left vertical
  'BR', 'H', 'H', 'BL',  // Bottom bar
],


 '3': [
  'TR', 'H', 'H', 'TL',  // Top bar
  'N', 'N', 'N', 'V',    // Upper right vertical
  'N', 'H', 'H', 'BL',  // Middle bar (flat center)
  'N', 'N', 'N', 'V',    // Lower right vertical
  'N', 'N', 'N', 'V',    // Continue lower right
  'BR', 'H', 'H', 'BL',  // Bottom bar
],


  '4': [
    'V', 'N', 'N', 'V',
    'V', 'N', 'N', 'V',
    'BR', 'H', 'H', 'BL',
    'N', 'N', 'N', 'V',
    'N', 'N', 'N', 'V',
    'N', 'N', 'N', 'V',
  ],

  '5': [
    'TR', 'H', 'H', 'TL',
    'V', 'N', 'N', 'N',
    'BR', 'H', 'H', 'TL',
    'N', 'N', 'N', 'V',
    'N', 'N', 'N', 'V',
    'BR', 'H', 'H', 'BL',
  ],

  '6': [
    'TR', 'H', 'H', 'TL',
    'V', 'N', 'N', 'N',
    'BR', 'H', 'H', 'TL',
    'V', 'N', 'N', 'V',
    'V', 'N', 'N', 'V',
    'BR', 'H', 'H', 'BL',
  ],

  '7': [
    'TR', 'H', 'H', 'TL',
    'N', 'N', 'N', 'V',
    'N', 'N', 'N', 'V',
    'N', 'N', 'N', 'V',
    'N', 'N', 'N', 'V',
    'N', 'N', 'N', 'V',
  ],

  '8': [
    'TR', 'H', 'H', 'TL',
    'V', 'N', 'N', 'V',
    'BR', 'H', 'H', 'BL',
    'V', 'N', 'N', 'V',
    'V', 'N', 'N', 'V',
    'BR', 'H', 'H', 'BL',
  ],

  '9': [
    'TR', 'H', 'H', 'TL',
    'V', 'N', 'N', 'V',
    'BR', 'H', 'H', 'BL',
    'N', 'N', 'N', 'V',
    'N', 'N', 'N', 'V',
    'BR', 'H', 'H', 'BL',
  ],
};