/*global module:false*/
module.exports = {
  options: {
    enabled: true,
    max_jshint_notifications: 5,
    title: "<%= pkg.name %>"
  },
  complete: {
    options: {
      message: "It's built!"
    }
  }
};
