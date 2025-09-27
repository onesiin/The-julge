/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#111322",
        white: "#FFFFFF",
        gray: {
          50: "#7D7986",
          40: "#A4A1AA",
          30: "#CBC9CF",
          20: "#E5E4E7",
          10: "#F2F2F3",
          5: "#FAFAFA",
        },
        red: {
          40: "#FF4040",
          30: "#FF8D72",
          20: "#FFAF9B",
          10: "#FFEBE7",
        },
        blue: {
          20: "#0080FF",
          10: "#CCE6FF",
        },
        green: {
          20: "#20A81E",
          10: "#D4F7D4",
        },
        yellow: "#FEE500",
      },
      screens: {
        mobile: { max: "375px" },
        tablet: { min: "744px", max: "1439px" },
        desktop: { min: "1440px" },
      },
      fontSize: {
        "body-1-regular": ["16px", { lineHeight: "26px", fontWeight: "400" }],
        "body-2-regular": ["14px", { lineHeight: "22px", fontWeight: "400" }],
        "body-1-bold": ["16px", { lineHeight: "20px", fontWeight: "700" }],
        "body-2-bold": ["14px", { lineHeight: "100%", fontWeight: "700" }],
        caption: ["12px", { lineHeight: "16px", fontWeight: "400" }],
        h1: ["28px", { lineHeight: "100%", fontWeight: "700" }],
        h2: ["24px", { lineHeight: "100%", fontWeight: "700" }],
        h3: ["30px", { lineHeight: "100%", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};
