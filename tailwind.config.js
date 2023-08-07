/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f7fafc",
        white: "#fff",
        darkslateblue: {
          "100": "#072e75",
          "200": "#112650",
        },
        lightslategray: "#8695a0",
        mediumturquoise: "#5dc2c4",
        darkslategray: "#0f3f62",
        mistyrose: {
          "100": "#ffece8",
          "200": "#ffdad9",
        },
        lavender: {
          "100": "#d9edff",
          "200": "#d9daff",
        },
        tomato: "#f4694c",
        azure: {
          "100": "#e7f7f8",
          "200": "#e0f3f3",
        },
        lightseagreen: {
          "100": "#54bcbd",
          "200": "rgba(84, 188, 189, 0.2)",
        },
        lightcyan: "#dafdff",
        darkturquoise: "#3debf6",
      },
      fontFamily: {
        avenir: "Avenir",
      },
      borderRadius: {
        mini: "15px",
        xl: "20px",
        "3xs": "10px",
        "21xl": "40px",
        "11xl": "30px",
        "21xl-1": "40.1px",
        "4xs-4": "8.4px",
      },
    },
    fontSize: {
      xs: "12px",
      smi: "13px",
      base: "16px",
      sm: "14px",
      lg: "18px",
      xl: "20px",
    },
    screens: {
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
