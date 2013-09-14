/*global module:false*/
module.exports = {
  compile: {
    options: {
      optimizationLevel: 4,
      progressive: true
    },
    files: [
      {
        expand: true,
        cwd: "dist/images",
        src: ["**/*.{png,jpg,jpeg,gif,svg}"],
        dest: "dist/images"
      }
    ]
  }
};
