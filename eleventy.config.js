export default function (eleventyConfig) {
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("editing.md");
  eleventyConfig.ignores.add("style-guide.md");

  eleventyConfig.addCollection("essays", (api) =>
    api
      .getFilteredByGlob("essays/*.md")
      .filter((e) => e.data.status !== "draft")
      .sort((a, b) => b.inputPath.localeCompare(a.inputPath))
  );

  return {
    dir: { input: ".", includes: "_includes", output: "_site" },
    pathPrefix: process.env.PATH_PREFIX || "/",
  };
}
