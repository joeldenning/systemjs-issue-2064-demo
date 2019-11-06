const fs = require('fs-extra');
const babel = require('@babel/core');

// Build caller, use babel, to UMD
(async () => {
	const result = await babel.transformFileAsync('source/caller.js', {
		presets: [['@babel/preset-env', { modules: 'umd' }]],
	});
	await fs.writeFile('caller.js', result.code);
})();

// Build callee, use babel, to System.register
(async () => {
	const result = await babel.transformFileAsync('source/callee.js', {
		presets: [['@babel/preset-env', { modules: 'systemjs' }]],
	});
	await fs.writeFile('callee.js', result.code);
})();
