module.exports ={
  bundle: {
    main: {
      scripts: [
        './public/app/app.js',
        './public/app/controllers/*.js',
        './public/app/services/*.js',
      ],
      styles: './public/styles/*.css',
      options:{
        pluginOptions:{
          'gulp-uglify':{mangle:false}
        }
      }
    }
  }
};
