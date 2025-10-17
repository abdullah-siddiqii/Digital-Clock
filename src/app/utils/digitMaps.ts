
import { ClockSymbol, HandAngles, DigitMap } from '../types'; 

export const ANGLE_MAP: Record<ClockSymbol, HandAngles> = {
  N: { h1: 0, h2: 0 }, // Neutral (no hands)
  H: { h1: 180, h2: 0 }, // Horizontal
  V: { h1: 90, h2: 270 }, // Vertical
  TR: { h1: 90, h2: 0 }, // Top Right
  TL: { h1: 180, h2: 90 }, // Top Left
  BR: { h1: 0, h2: 270 }, // Bottom Right
  BL: { h1: 270, h2: 180 }, // Bottom Left

  C: { h1: 0, h2: 0 }, // Center
};

export const DIGIT_MAP: DigitMap = {
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
    'V', 'TR', 'TL', 'V',
    'V', 'V', 'V', 'V',
    'V', 'V', 'V', 'V',
    'V', 'BR', 'BL', 'V',
    'BR', 'H', 'H', 'BL',
    'H', 'H', 'H', 'H',

  ],

  '1': [
    'TR', 'H', 'TL', 'N',
    'BR', 'TL', 'V', 'N',
    'N', 'V', 'V', 'N',
    'N', 'V', 'V', 'N',
    'TR', 'BL', 'BR', 'TL',
    'BR', 'H', 'H', 'BL',
    'H', 'H', 'H', 'H',

  ],
'2': [
  'TR', 'H', 'H', 'TL',  
  'BR', 'H', 'TL', 'V',    
  'TR', 'H', 'BL', 'V',  
  'V', 'TR', 'H', 'BL',    
  'V', 'BR', 'H', 'TL',    
  'BR', 'H', 'H', 'BL',  
    'H', 'H', 'H', 'H',

],


 '3': [
  'TR', 'H', 'H', 'TL',  
  'BR', 'H', 'TL', 'V',
  'TR', 'H', 'BL', 'V',
  'BR', 'H', 'TL', 'V',
  'TR', 'H', 'BL', 'V',
  'BR', 'H', 'H', 'BL',
    'H', 'H', 'H', 'H',

],


  '4': [
    'TR', 'TL', 'TR', 'TL',
    'V', 'V', 'V', 'V',
    'V', 'BR', 'BL', 'V',
    'BR', 'H', 'TL', 'V',
    'N', 'N', 'V', 'V',
    'N', 'N', 'BR', 'BL',
    'H', 'H', 'H', 'H',

  ],

  '5': [
    'TR', 'H', 'H', 'TL',
    'V', 'TR', 'H', 'BL',
    'V', 'BR', 'H', 'TL',
    'BR', 'H', 'TL', 'V',
    'TR', 'H', 'BL', 'V',
    'BR', 'H', 'H', 'BL',
    'H', 'H', 'H', 'H',

  ],

  '6': [
    'TR', 'H', 'H', 'TL',
    'V', 'TR', 'H', 'BL',
    'V', 'BR', 'H', 'TL',
    'V', 'TR', 'TL', 'V',
    'V', 'BR', 'BL', 'V',
    'BR', 'H', 'H', 'BL',
    'H', 'H', 'H', 'H',

  ],

  '7': [
    'TR', 'H', 'H', 'TL',
    'BR', 'H', 'TL', 'V',
    'N', 'N', 'V', 'V',
    'N', 'N', 'V', 'V',
    'N', 'N', 'V', 'V',
    'N', 'N', 'BR', 'BL',
    'H', 'H', 'H', 'H',

  ],

  '8': [
    'TR', 'H', 'H', 'TL',
    'V', 'TR', 'TL', 'V',
    'V', 'BR', 'BL', 'V',
    'V', 'TR', 'TL', 'V',
    'V', 'BR', 'BL', 'V',
    'BR', 'H', 'H', 'BL',
    'H', 'H', 'H', 'H',

  ],

  '9': [
    'TR', 'H', 'H', 'TL',
    'V', 'TR', 'TL', 'V',
    'V', 'BR', 'BL', 'V',
    'BR', 'H', 'TL', 'V',
    'TR', 'H', 'BL', 'V',
    'BR', 'H', 'H', 'BL',
    'H', 'H', 'H', 'H',

  ],
};