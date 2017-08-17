module.exports = {
	head: {
		title: 'Vue-SPA',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Vue-SPA' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', medial: 'all', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,500' },
		],
	},
	css: [
		'~/assets/css/main.css',
	],
	loading: {
		color: '#7048e8',
	},
	build: {
		extend(config, ctx) {
			const cssLoader = config.module.rules.find((loader) => (loader.test.toString() === '/\\.scss$/' || loader.test.toString() === '/\\.css$/'));
			cssLoader.use.push('postcss-loader');
			if (ctx.dev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				});
			}
		},
	},
};
