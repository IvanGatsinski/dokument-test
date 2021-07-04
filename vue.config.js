module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/assets/styles/_variables.scss";`
        }
      }
    },
    configureWebpack: {
      // It will be merged into the final Webpack config
      plugins: [
        // Your plugins here...
      ]
    }
  };