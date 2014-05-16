/**
 * {%= name %}
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 */

 /**
  * basic
  * Copyright (c) 2014 Justin Marshall
  */

  'use strict';



  module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);


    // Define the configuration for all the tasks
    grunt.initConfig({

      // Watches files for changes and runs tasks based on the changed files
      watch: {
        coffee: {
          files: ['coffee/{,**/}*.coffee'],
          tasks: 'coffee',
          bare: true
        },
        sass: {
          files: ['sass/{,*/}*.{scss,sass}'],
          tasks: ['compass:dest'],
          force: true
        },
        gruntfile: {
          files: ['Gruntfile.js']
        }
      },

      // Make sure code styles are up to par and there are no obvious mistakes
      jshint: {
        options: {
          jshintrc: '.jshintrc'
        },
        all: [
          'Gruntfile.js'
        ]
      },


      // Compiles CoffeeScript to JavaScript
      coffee: {
          compile: {
            expand: true,
            flatten: false,
            cwd: 'coffee/',
            src: ['**/*.coffee'],
            dest: 'js',
            ext: '.js'
          }

      },


      // Compiles Sass to CSS and generates necessary files if requested
      compass: {
        options: {
          config: 'config.rb',
          bundleExec: true,
          force: true,
          cssDir: 'css'
        },
        dev: {
          options: {
            environment: 'development'
          }
        },
        dist: {
          options: {
            environment: 'production'
          }
        }
      },


      copy: {
        dist: {}
      },

      uglify: {
        dist: {}
      },
      concat: {
        dist: {}
      }

    });


    grunt.registerTask('default', ['watch']);
  };

