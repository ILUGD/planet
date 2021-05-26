const pluginTailwindCSS = require("eleventy-plugin-tailwindcss");
const pluginMetagen = require("eleventy-plugin-metagen");
const _ = require("lodash");
const moment = require("moment");
const { fetchFeed } = require("./.eleventy.modules");

module.exports = function (eleventyConfig) {
  // passthrough copy
  eleventyConfig.addPassthroughCopy({ "./src/images": "assets" });

  // plugins
  eleventyConfig.addPlugin(pluginMetagen);
  eleventyConfig.addPlugin(pluginTailwindCSS, {
    src: "src/css/*.css",
    dest: "assets",
    keepFolderStructure: false,
    minify: false,
  });

  // filters
  eleventyConfig.addFilter("prettyDate", (date) => {
    return moment(date).format("Do MMM, YYYY");
  });

  // collections
  eleventyConfig.addCollection("feeds", async (collection) => {
    const allFeeds = await _.chain(collection.getAllSorted())
      .filter((post) => _.startsWith(post.filePathStem, "/feeds"))
      .map(async (page) =>
        _.set(page, "data.feedData", await fetchFeed(page.data.feed))
      )
      .value();
    const res = await Promise.all(allFeeds);
    // console.log(res)
    return res;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
