module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      shouldit: {
        options: {
          stderr: false
        },
        command: './node_modules/spec-detective/bin/spec-detective "**/*feature.md" karma-specs.json'
      }
    },
    watch: {
      scripts: {
        files: ['karma-specs.json', 'specs/**/*.md'],
        tasks: ['default'],
        options: {
          spawn: false,
        }
      }
    }
  });




  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');


  grunt.registerTask('default', ['shell:shouldit']);

};