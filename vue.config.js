module.exports = {
  pwa: {
    name: 'StonePaperScissor',
    appleMobileWebAppCapable: 'yes',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      globPatterns: ['**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}'],
      maximumFileSizeToCacheInBytes: 20 * 1024 * 1024, // Increase max file caching size to 20 MB
      swSrc: 'src/service-worker.js',
      exclude: [
        /\.map$/,
        /manifest\.json$/,
      ],
    },
    themeColor: '#3b5998',
  },
  devServer: {
    port: 4000,
  },
  outputDir: 'www',
  css: {
    sourceMap: true,
  },
  lintOnSave: false,
};
