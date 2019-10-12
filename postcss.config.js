module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-flexbugs-fixes"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009"
      },
      stage: 3
    }),
    require("postcss-nested"),
    require("postcss-custom-properties")({
      preserve: false,
      importFrom: [
        "app/javascript/styles/base.css",
        "app/javascript/styles/colors.css",
        "app/javascript/styles/fonts.css"
      ]
    })
  ]
};
