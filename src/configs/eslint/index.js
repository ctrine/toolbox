// Licensed under the Apache License, Version 2.0 (the “License”); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

import {CONFIGS_DIR} from '../../paths'
import {join} from 'path'

let {env, flow, jest, react, typeScript} = process.env
const ESLINT_CONFIG_DIR = join(CONFIGS_DIR, 'eslint')

let optionalPlugins = []
let optionalExtensions = []

if (flow) {
  optionalPlugins.push('eslint-plugin-flowtype')
  optionalExtensions.push(join(ESLINT_CONFIG_DIR, 'plugin', 'flow.js'))
}

if (jest) {
  optionalPlugins.push('eslint-plugin-jest')
  optionalExtensions.push(join(ESLINT_CONFIG_DIR, 'plugin', 'jest.js'))
}

if (react) {
  optionalPlugins.push('eslint-plugin-react')
  optionalExtensions.push(join(ESLINT_CONFIG_DIR, 'plugin', 'react.js'))
}

if (typeScript) {
  // TODO
}

module.exports = {
  env: {
    browser: env.includes('browser'),
    jest: env.includes('jest'),
    node: env.includes('node-js'),
  },
  parser: 'Babel-ESLint',
  plugins: [
    'eslint-plugin-babel',
    ...optionalPlugins,
  ],
  extends: [
    join(ESLINT_CONFIG_DIR, 'core', 'best-practices.js'),
    join(ESLINT_CONFIG_DIR, 'core', 'es2015.js'),
    join(ESLINT_CONFIG_DIR, 'core', 'nodejs-and-commonjs.js'),
    join(ESLINT_CONFIG_DIR, 'core', 'possible-errors.js'),
    join(ESLINT_CONFIG_DIR, 'core', 'strict-mode.js'),
    join(ESLINT_CONFIG_DIR, 'core', 'stylistic-issues.js'),
    join(ESLINT_CONFIG_DIR, 'core', 'variables.js'),
    ...optionalExtensions,
  ],
}
