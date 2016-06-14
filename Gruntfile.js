module.exports = function (grunt) {

  /*
   * Grunt tasks
   */

  grunt.loadNpmTasks("grunt-aws");

  /*
   * Config
   */

  grunt.initConfig({

    /*
     * Deploy
     */

    s3: {
      options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
      },
      staging: {
        options: {
          bucket: "staging.georgiestone.com"
        },
        cwd: "src/",
        src: "**"
      },
      production: {
        options: {
          bucket: "www.georgiestone.com"
        },
        cwd: "src/",
        src: "**"
      }
    }

  });

};
