import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';

export default {
	input: 'src/index.ts',
	plugins: [
		json(),
		typescript({
			tsconfig: './tsconfig.json'
		})
	],
	output: [
		{
			format: 'umd',
			name: 'GPUConstant',
			file: 'build/GPUConstant.js',
			sourcemap: false,
			indent: '\t'
		},
		{
			format: 'es',
			file: 'build/GPUConstant.module.js',
			sourcemap: false,
			indent: '\t'
		}
	]
};
