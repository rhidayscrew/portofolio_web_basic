/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      height: {
        height500: "500px",
        height648: "648px",
        height750: "750px",
      },
      colors: {
        primaryBackground: "",
        secondaryBackground: "#faeee7",
        icons: "#f9004d",
        textColor: "#33272a",
        textSecondary: "#33272a",
        hoverBg: "#f9004d",
        blackBg: "#faeee7",
        bgRed: "#f9004d",
        textTeam: "#33272a",
        bgCardProjects: "#ff8ba7",
        bgNavbar: "#fffffe",
      }
    },
  },
  plugins: [],
}

