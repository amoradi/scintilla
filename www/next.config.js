module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/documentation": { page: "/documentation" }
    };
  }
};
