/*global module:false*/
module.exports = {
  assets: {
    files: [
      {
        expand: true,
        cwd: "src/assets/",
        src: ["**"],
        dest: "dist/"
      }
    ]
  }
};
