module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "myRed": "#F81607",
        "myBlue": "#47B5FF",
        "myBgLight": "#F5F5F5",
        "myGray": "#2A2A2A",
        "myBgDark": "#1D1D1D",
      },
      spacing: {
        "76": "19rem",
        "80": "20rem",
        "84": "21rem",
        "88": "22rem",
        "92": "23rem",
        "120": "30rem",
        "124": "31rem",
        "128": "32rem",
        "132": "33rem",
      }
    },
  },
  plugins: [],
}