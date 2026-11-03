const parse = (data) => /^(\d{4})-(\d+)-/.exec(data.page.fileSlug) || [];

export default {
  layout: "essay.njk",
  eleventyComputed: {
    volume: (data) => parse(data)[1],
    issue: (data) => Number(parse(data)[2]),
    permalink: (data) =>
      data.status === "draft" ? false : `/essays/${data.page.fileSlug}/`,
  },
};
