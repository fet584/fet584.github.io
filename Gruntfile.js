module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.initConfig({
        uglify:{
            my_target:{
                files:{
                    'dest/main.min.js':['views/js/main.js']
                }
            }
        },

    });


    grunt.registerTask('default',[
        'uglify',
        ]);
};