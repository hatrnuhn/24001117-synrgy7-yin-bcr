/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/input.css"],
  theme: {
    colors: {
      "bcr-blue": "#0D28A6",
      "bcr-lighterblue": "#F1F3FF",
      "bcr-slighterlightblue":"#CFD4ED",
      "bcr-limegreen": "#5CB85F",
      "bcr-danger":"#FA2C5A",
      "bcr-warning":"#F9CC00",
      "bcr-success":"#73CA5C",
      "bcr-neutral02":"#D0D0D0",
      "white":"#FFFFFF",
      "bcr-dark":"#222222",
    },
    width: {
      "91prcnt": "91.111%",
      "81prcnt": "81.111%",
      "screen": "100vw",
      "full": "100%",
      "half":"50%",
      "auto":"auto",
    },
    borderWidth: {
      "1":"1px",
    },
    extend: {},
  },
  plugins: [],
}

