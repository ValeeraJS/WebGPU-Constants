import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';

export default {
	input: 'src/index.ts',
	plugins: [
		json(),
		typescript({
			tsconfig: './tsconfig.legacy.json'
		})
	],
	output: [
		{
			format: 'umd',
			name: 'GPUConstant',
			file: 'build/GPUConstant.legacy.js',
			sourcemap: false,
			indent: '\t'
		},
		{
			format: 'es',
			file: 'build/GPUConstant.legacy.module.js',
			sourcemap: false,
			indent: '\t'
		}
	]
};
