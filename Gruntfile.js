module.exports = function(grunt) {

  /***** CONFIGURATION *****/
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Generate JS documentation
    jsdoc: {
      /*frontend: {
          options: {
              destination: './doc/frontend',
              template: 'node_modules/grunt-jsdoc/node_modules/ink-docstrap/template',
              configure: './doc/jsdoc.frontend.conf.json'
          },*/
      //src: ['./public/app/**/*.js']
      //},
      backend: {
        options: {
          destination: './doc/backend',
          template: 'node_modules/grunt-jsdoc/node_modules/ink-docstrap/template',
          configure: './doc/jsdoc.backend.conf.json'
        },
        src: ['./app/**/*.js', './index.js', 'README.md']
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    }

  });


  /***** LOAD TASKS *****/
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-karma');


  /***** REGISTER TASKS *****/

}
