/*
  @license
	Rollup.js v4.5.0
	Sat, 18 Nov 2023 05:51:43 GMT - commit 86efc769f693516a29047c8d160c6d7287fb965d

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
export { version as VERSION, defineConfig, rollup, watch } from './shared/node-entry.js';
import './shared/parseAst.js';
import '../native.js';
import 'node:path';
import 'path';
import 'node:process';
import 'node:perf_hooks';
import 'node:fs/promises';
import 'tty';
