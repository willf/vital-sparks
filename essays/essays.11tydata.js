export default {
  layout: "essay.njk",
  eleventyComputed: {
    permalink: (data) =>
      data.status === "draft" ? false : `/essays/${data.page.fileSlug}/`,
  },
};
