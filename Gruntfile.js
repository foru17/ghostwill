module.exports=function(grunt){
    require('time-grunt')(grunt);
    //配置 Ghost 本地开发主题
    grunt.initConfig({
        //默认文件目录在这里
        paths:{
            assets:'./assets',//输出的最终文件都在这里
            scss:'./css/scss',
            css:'./css'
        },
        buildType:'Build',
        pkg: grunt.file.readJSON('package.json'),
        archive_name: grunt.option('name') || 'ghostwill',

        //清理掉开发时才需要的文件
        clean: {
            pre: ['dist/', 'build/'],
            post: ['<%= archive_name %>.zip']
        },

        //压缩最终的theme 文件
        compress:{
            main:{
                options:{
                    archive:'<%= archive_name %>-<%= grunt.template.today("yyyy-mm-dd") %>.zip'
                },
                expand:true,
                cwd:'build/',
                src:['**/*'],
                dest:''
            }
        },

        copy:{
            main:{
                files:[
                    {expand: true, src: ['assets/css/**'], dest: 'build/'},
                    {expand: true, src: ['assets/fonts/**'], dest: 'build/'},
                    {expand: true, src: ['assets/images/**'], dest: 'build/'},
                    {expand: true, src: ['assets/js/**'], dest: 'build/'},
                    {expand: true, src: ['partials/**'], dest: 'build/'},
                    {expand: true, src: ['scss/**'], dest: 'build/'},
                    {expand: true, src: ['*', '!.gitignore', '!.DS_Store'], dest: 'build/'},
                ]
            },

            archive:{
                files:[
                        {expand: true, src: ['<%= archive_name %>.zip'], dest: 'dist/'}
                ]
            }
        },

        //Sass 预处理
        sass:{
            admin:{
                options:{
                    sourcemap:true
                },
                files:{
                    '<%= paths.css %>/style.css':'<%= paths.scss %>/style.scss',
                }
            }
        },

        cssmin:{
            //压缩 css
            options:{
                  keepSpecialComments: 0
              },
              compress:{
                    files:{
                     '<%= paths.assets %>/css/min.style.css': [
                     '<%= paths.css %>/style.css'
                 ]
                 }
              }
        },

        //监听变化
        watch:{
            options:{
                //开启 livereload
                livereload:true,
                //显示日志
                dateFormate:function(time){
                    grunt.log.writeln('编译完成,用时'+time+'ms ' + (new Date()).toString());
                    grunt.log.writeln('Wating for more changes...');
                }
            },

            //css
            sass:{
                files:'<%= paths.scss %>/**/*.scss',
                tasks:['sass:admin','cssmin']
            },
            //JavaScript

        }

    });

  //输出进度日志
  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + '文件: '+filepath + ' 变动状态: ' + action);
  });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['sass:admin']);
    //执行 grunt bundle --name 打包最终主题为 name.zip 文件
    grunt.registerTask('bundle', ['clean:pre', 'copy:main','cssmin','copy:archive', 'clean:post','compress']);


};
