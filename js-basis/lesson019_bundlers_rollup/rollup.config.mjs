import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import styles from "rollup-plugin-styles";
import image from "@rollup/plugin-image";
import serve from './node_modules/rollup-plugin-serve/dist/index.cjs';
import livereload from "rollup-plugin-livereload";

export default {
	input: "./index.js",
	output: { file: "./dist/bundle.js", format: "cjs" },
	plugins: [resolve(), babel({ babelHelpers: "bundled" }), styles(), image(), serve(), livereload()],
};
