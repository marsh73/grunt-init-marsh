/**
 * grunt-init repo
 * https://github.com/marsh73/repo
 * Copyright (c) 2014 Justin Marshall
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'I love Grunt';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '';

// Template-specific notes to be displayed after question prompts.
exports.after = '';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('author_name', 'Justin Marshall')

  ], function(err, props) {




    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file, used by npm and grunt.
    init.writePackageJSON('package.json', {
      name: props.name,
      description: props.description,
      version: props.version,
      devDependencies: {
        "grunt-contrib-watch": ">=0.4.3",
        "grunt-contrib-compass": ">=0.8.0",
        "grunt-contrib-jshint": ">=0.1.1",
        "grunt-contrib-uglify": ">=0.2.0",
        "grunt-contrib-coffee": ">=0.10.1",
        "grunt-contrib-concat": ">=0.4.0"
      },
    });

    // All done!
    done();
  });

};
