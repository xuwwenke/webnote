module.exports = function (grunt) {
    grunt.initConfig({
        htmlmin: {
            options: {
                collapseWhitespace: true,
                preserveLineBreaks: false
            },
            files: {
                src: './index.html',
                dest: 'dist/index.html'
            }
        },
        concat:{
            js:{
                src:['dlgFont/dlgFont.js','editor/editor.js','menubar/menubar.js','main/main.js'],
                dest:'dist/js/build.js'
            },
            css:{
                src:['dlgFont/dlgFont.css','editor/editor.css','menubar/menubar.css'],
                dest:'dist/css/build.css'
            },
        },
        uglify: {
            'dist/build.min.js': 'dist/js/build.js'   
        },
        cssmin: {  
            'dist/build.min.css': 'dist/css/build.css'
        },
        clean:{
            end:['dist/css', 'dist/js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('minify',['concat','uglify','cssmin','htmlmin','clean:end']); 
    grunt.registerTask("release", ['copy', 'htmlmin','cssmin', 'uglify']);
};