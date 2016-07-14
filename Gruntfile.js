module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        watch: {
            files: ['src/**'],
            tasks: ['copy']
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            build: {
                files: {
                    'dist/js/app.min.js': ['src/js/app.js']
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: '*.htm',
                        dest: 'dist/'
                    },
                    {
                        expand: true,
                        cwd: 'src',
                        src: 'img/**',
                        dest: 'dist/img'
                    },
                    {
                        expand: true,
                        cwd: 'src',
                        src: 'css/**',
                        dest: 'dist/css'
                    },
                    {
                        expand: true,
                        cwd: 'src',
                        src: 'views/**',
                        dest: 'dist/views'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['jshint', 'uglify','copy']);


};