import { mauve, mauveDark } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';
import {
  primaryGradient,
  primaryGradientA,
  primaryRadialA,
  secondaryA,
  secondaryDarkA,
  secondaryGradient,
  tertiaryGradient,
} from 'styles/colors';

export const { styled, css, createTheme, keyframes, getCssText, globalCss } =
  createStitches({
    theme: {
      colors: {
        primary: mauve.mauve7,
        secondary: mauveDark.mauve1,
        secondaryA: secondaryDarkA,
        lightGray: mauve.mauve5,
        baseGray: mauve.mauve9,
        darkGray: mauve.mauve11,
        semiDarkerGray: mauveDark.mauve3,
        darkerGray: mauveDark.mauve2,

        primaryGradient,
        primaryGradientA,
        secondaryGradient,
        tertiaryGradient,

        primaryRadialA,
      },
      fonts: {
        sans: 'Noto Sans, apple-system, sans-serif',
        mono: 'Fira Code, monospace',
      },
      fontSizes: {
        1: '12px',
        2: '14px',
        3: '16px',
        4: '18px',
        5: '20px',
      },
      space: {
        1: '4px',
        2: '8px',
        3: '10px',
        4: '12px',
        5: '14px',
        6: '16px',
        7: '18px',
        8: '20px',
        9: '24px',
        10: '32px',
        11: '48px',
        12: '56px',
        13: '64px',
      },
      sizes: {
        1: '4px',
        2: '8px',
        3: '10px',
        4: '12px',
        5: '14px',
        6: '16px',
        7: '18px',
        8: '20px',
        9: '24px',
        10: '32px',
        11: '48px',
        12: '56px',
        13: '64px',
        md: '768px',
      },
      radii: {
        1: '2px',
        2: '4px',
        3: '6px',
        4: '8px',
        5: '10px',
        6: '12px',
        round: '9999px',
      },
      fontWeights: {},
      lineHeights: {},
      letterSpacings: {},
      borderWidths: {},
      borderStyles: {},
      shadows: {},
      zIndices: {},
      transitions: {
        base: '0.15s ease',
      },
    },
    media: {
      bp1: '(min-width: 640px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
    },
    utils: {
      size: value => ({
        width: value,
        height: value,
      }),
    },
  });

export const lightTheme = createTheme('light-theme', {
  colors: {
    primary: mauveDark.mauve1,
    secondary: mauveDark.mauve12,
    secondaryA,
    lightGray: mauveDark.mauve5,
    baseGray: mauveDark.mauve8,
    darkGray: mauveDark.mauve10,
    semiDarkerGray: mauve.mauve6,
    darkerGray: mauve.mauve3,
  },
});

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },
  'body, input, textarea, select, button': {
    fontFamily: '$sans',
    fontWeight: 400,
    fontSize: '1rem',
    fontSmooth: 'antialiased',
  },
  button: {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    color: 'inherit',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
    lineHeight: 0,
  },
  img: {
    pointerEvents: 'none',
    userSelect: 'none',
  },
  html: {
    overflowY: 'overlay',
    '@media (max-width: 1080px)': {
      fontSize: '93.75%',
    },
    '@media (max-width: 720px)': {
      fontSize: '87.5%',
    },
    '@media (prefers-color-scheme: light)': {},
    '@media (prefers-color-scheme: dark)': {},
  },
});
