const { load } = require("js-yaml");
const { filterTagList, getFullYear, htmlDateString, readableDate } = require("./config/filters/");
const markdown = require("./config/plugins/");
const { posts, tagList } = require("./config/collections/");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/assets/sass/style.scss");

  // Process Yaml files
  eleventyConfig.addDataExtension("yaml", load);

  // Passthroughs
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("./src/assets/images/");
  eleventyConfig.addPassthroughCopy("./src/assets/scripts/");

  // Filters
  eleventyConfig.addFilter("readableDate", readableDate);
  eleventyConfig.addFilter("htmlDateString", htmlDateString);
  eleventyConfig.addFilter("getFullYear", getFullYear);
  eleventyConfig.addFilter("filterTagList", filterTagList);

  // Plugins
  eleventyConfig.setLibrary("md", markdown);

  // Collections
  eleventyConfig.addCollection("posts", posts);
  eleventyConfig.addCollection("tagList", tagList);

  return {
    dir: {
      input: "src",
      data: "data",
      layouts: "layouts",
      includes: "includes",
    },
  };
};
