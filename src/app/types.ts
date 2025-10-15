// src/types.ts

// Defines the angles for the two hands of a TinyClock
export type HandAngles = {
  h1: number; // Angle for Hand 1 (in degrees)
  h2: number; // Angle for Hand 2 (in degrees)
};

// Define the symbols used in the digit map
export type ClockSymbol = 
  | 'N'  // Neutral (0, 0)
  | 'TR' // Top Right (90, 0)
  | 'TL' // Top Left (180, 90)
  | 'BR' // Bottom Right (0, 270)
  | 'BL' // Bottom Left (270, 180)
  | 'H'  // Horizontal (180, 0)
  | 'V'  // Vertical (90, 270);
  | 'C'  // Center (e.g., for the colon separator)

// The Digit Map structure: a mapping of a digit string ('0' through '9')
// or a separator (':') to an array of 24 symbols (6 rows * 4 columns)
export type DigitMap = Record<string, ClockSymbol[]>;