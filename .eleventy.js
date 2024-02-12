const esbuild = require("esbuild")

module.exports = function (eleventyConfig) {

	// process bundling for javascript files
	// use esbuild
	eleventyConfig.on('eleventy.before', async () => {
    await esbuild.build({
      entryPoints: ['src/js/main.js'],
      bundle: false,
      sourcemap: false,
      outdir: 'dist/js/'
    	}
    )
  })
	
	// Copy `src/static/` to `dist/`
	eleventyConfig.addPassthroughCopy({ "src/img/": "/img/" });
	eleventyConfig.addPassthroughCopy({ "src/static": "/" });
	// eleventyConfig.addPassthroughCopy({ "src/fonts": "/fonts" });

	// pug settings - add eleventy filters to pug
	global.filters = eleventyConfig.javascriptFunctions;
	
  eleventyConfig.setPugOptions({
    globals: ['filters'],
    pretty: true
  });

	return {
		dir: {
			input: "src/pug/",
			output: "dist",
			includes: "../_includes",
			// data: "../_data",
		},
	};
};