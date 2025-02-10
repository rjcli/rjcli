import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Indigo */
    --color-brand-50: #eef2ff;
    --color-brand-100: #e0e7ff;
    --color-brand-200: #c7d2fe;
    --color-brand-500: #6366f1;
    --color-brand-600: #4f46e5;
    --color-brand-700: #4338ca;
    --color-brand-800: #3730a3;
    --color-brand-900: #312e81;

    /* Grey */
    --color-grey-0: #fff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;

    --color-blue-100: #e0f2fe;
    --color-blue-700: #0369a1;
    --color-green-100: #dcfce7;
    --color-green-700: #15803d;
    --color-yellow-100: #fef9c3;
    --color-yellow-700: #a16207;
    --color-silver-100: #e5e7eb;
    --color-silver-700: #374151;
    --color-indigo-100: #e0e7ff;
    --color-indigo-700: #4338ca;

    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    --color-white: #fff;
    --color-absolute-black: #000;
    --color-black: #121212;
    --color-gray-1: #363636;
    --color-gray-2: #888888;
    --color-gray-3: #cccccc;
    --color-gray-4: #f5f5f5;
    --color-gray-5: #bbb;
    --color-blue: #5367ff;
    --color-blue-light: #98a4ff;
    --color-green: #17c083;
    --color-orange: #ff5d01;
    --color-purple: #9669c6;
    --color-red: #ff1639;
    --color-yellow: #ffbe2d;
    --color-cyan: #eaafc8;
    --color-sky: #16eefc;
    --color-background: #212121;
    --color-animation-1: #1e90ff;
    --color-animation-2: #fff000;

    --color-resume-bg: #0056b3;

    --backdrop-color: rgba(255, 255, 255, 0.1);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

    --color-nagarro-trainee: #41516c,
    --color-nagarro-engineer: #fbca3e,
    --color-intel-intern: #e24a68,


    /* For dark mode */
    --image-grayscale: 0;
    --image-opacity: 100%;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: var(--color-absolute-black);
    border: 3px solid var(--color-sky);
  }

  ::-webkit-scrollbar-track {
    background-color: inherit;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* Creating animations for dark mode */
    transition: background-color 0.3s, border 0.3s;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.625;
    background-color: var(--color-black);
    color: var(--color-gray-4);
    display: block;
    margin: auto;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  select:disabled,
  input:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
  }

  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  img {
    max-width: 100%;

    /* For dark mode */
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
  }

  .rotate-icon {
    transform: rotateY(180deg);
  }

  .see-more {
    cursor: pointer;
    font-size: 3.2rem;
    color: var(--color-grey-4);
    font-weight: 400;
  }

  .see-more:hover {
    color: var(--color-sky);
    transition: all 0.4s ease-in-out;
  }

  /* Utility Class */
  .m-2 {
    margin: 3.2rem;
  }

  .center {
    text-align: center !important;
    letter-spacing: 1px;
  }

  .ml-10 {
    margin-left: 1rem;
  }

  .mt-5 {
    margin-top: 5px;
  }

  .menu-button {
    position: absolute;
    top: 2rem;
    right: 2rem;
    color: var(--color-sky);
  }
`;

export default GlobalStyle;
