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
  },
  "cachebuster-css": {
    files: [
      {
        expand: true,
        cwd: "dist/styles/",
        src: ["*.css"],
        dest: "dist/styles/",
        ext: "<%= cachebuster %>.css",
        filter: 'isFile'
      }
    ]
  },
  "cachebuster-css-map": {
    files: [
      {
        expand: true,
        cwd: "dist/styles/",
        src: ["*.css.map"],
        dest: "dist/styles/",
        ext: "<%= cachebuster %>.css.map",
        filter: 'isFile'
      }
    ]
  },
  "cachebuster-js": {
    files: [
      {
        expand: true,
        cwd: "dist/scripts/",
        src: ["*.js"],
        dest: "dist/scripts/",
        ext: "<%= cachebuster %>.js",
        filter: 'isFile'
      }
    ]
  }
};
