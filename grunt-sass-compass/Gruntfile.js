module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
    			dev: {
        			src: 'sass',
        			dest: 'css',
        			linecomments: true,
        			forcecompile: true,
        			debugsass: true,
        			images: '/path/to/images',
        			relativeassets: true
        			}
    
		},
		sass: {
			dist: {
				files: {
					'css/style.css' : 'sass/style.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'compass:dev']
			}
		}
	});

	grunt.registerTask('compassDesarrollo', 'compass:dev');
	grunt.registerTask('sassDesarrollo', 'sass');

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-compass');
	grunt.registerTask('default',['watch']);
}