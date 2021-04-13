module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/css");
  return {
    dir: {
      // default: [site root]
      input: "src",
      // default: _site
      output: "public",
    },
  };
};