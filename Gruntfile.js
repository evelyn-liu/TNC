module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        eslint: {
            target: ['app/**/*.js']
        },
        watch: {
            files: ['<%= eslint.target %>'],
            tasks: ['eslint']
        },
        concat: {
            options: {
                // 定义一个用于插入合并输出文件之间的字符
                separator: ';'
            },
            dist: {
                // 将要被合并的文件
                src: ['app/**/*.js'],
                // 合并后的JS文件的存放位置
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                // 此处定义的banner注释将插入到输出文件的顶部
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        }
    });

    grunt.registerTask('default', ['watch']);

};