module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            shouldit: {
                options: {
                    stderr: false
                },
                command: './node_modules/spec-detective/bin/spec-detective "**/*feature.md" "karma-specs.json,phpunit-test-results.xml"'
            },
            phpunit: {
                command: 'php vendor/bin/phpunit'
            }
        },
        watch: {
            'scripts': {
                files: ['karma-specs.json', 'specs/**/*.md', 'phpunit-test-results.xml'],
                tasks: ['default'],
                options: {
                    spawn: false
                }
            },
            'jstests': {
                files: ['tests/*.js'],
                tasks: ['karma'],
                options: {
                    singleRun: true
                }
            },
            'phptests' : {
                files: ['tests/*Test.php'],
                tasks: ['shell:phpunit']
            }
        },
        karma: {
            options: {
                files: ['tests/*Spec.js']
            },
            unit: {
                configFile: 'karma.conf.js',
                reporters: ['dots', 'specjson'],
                singleRun: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['shell:shouldit']);
    grunt.registerTask('test', ['shell:phpunit', 'karma:unit']);

};