/**
 * {%= name %}
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    site: grunt.file.readYAML('_config.yml'),

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'lib/*.js', 'test/*.js']
    },

    coffee: {
      compile: {
        expand: true,
        flatten: false,
        cwd: 'coffee/',
        src: ['**/*.coffee'],
        dest: 'js',
        ext: '.js'
      }
    }

    // Before generating any new files,
    // remove any previously-created files.
    clean: {
      example: ['<%= site.destination %>/*.html']
    },
    compass: {
      options: {
        config: 'config.rb',
        bundleExec: true,
        force: true
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


    watch: {
      jshint: {
        files: ['<%= jshint.all %>'],
        tasks: ['jshint:lint']
      },
      coffee: {
        files: ['coffee/{,**/}*.coffee'],
        tasks: 'coffee',
        bare: true
      },
      compass: {
        tasks: ['compass:dev']
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // builds to be run.
  grunt.registerTask('build', ['clean','coffee','compass:dist']);

  // Default to tasks to run with the "grunt" command.
  grunt.registerTask('default', ['clean', 'jshint', 'watch']);
};
