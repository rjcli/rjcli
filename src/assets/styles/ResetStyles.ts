import { createGlobalStyle } from 'styled-components';

const ResetStyle = createGlobalStyle`
  html {
    font-family: sans-serif;
    line-height: 1.15;
    text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-size: 62.5%;
  }

  body {
    margin: 0;
  }

  article,
  aside,
  footer,
  header,
  nav,
  section {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  main {
    display: block;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: inherit;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  mark {
    background-color: #ff0;
    color: #000;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  audio,
  video {
    display: inline-block;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  img {
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    display: inline-block;
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    /* -webkit-appearance: textfield; */
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  menu {
    display: block;
  }

  canvas {
    display: inline-block;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
`;

export default ResetStyle;
