#!/usr/bin/env node
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { execSync } from 'child_process';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '../../../');
const nodeModules = resolve(rootDir, 'node_modules');

const command = [
  resolve(nodeModules, '.bin/prettier'),
  '--ignore-path',
  resolve(rootDir, '.prettierignore'),
  '--cache-location',
  resolve(nodeModules, '.cache/prettier/.prettier-cache'),
  ...process.argv.slice(2)
].join(' ');

try {
  console.log(execSync(command, { encoding: 'utf-8' }));
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(error.status);
}
