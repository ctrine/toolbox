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

import pkgDir from 'pkg-dir'
import {join, resolve} from 'path'
import {TARGET_DIRECTORY_SET} from '../events/identifiers'

const TOOLBOX_DIR = resolve(__dirname, '..', '..', '..')

export default function (state = null, event) {
  let {payload, type} = event

  if (type !== TARGET_DIRECTORY_SET && state)
    return state

  const TARGET_DIR = resolve(payload || process.cwd())
  const PROJECT_DIR = pkgDir.sync(TARGET_DIR)

  return {
    project: {
      root: PROJECT_DIR,
      build: join(PROJECT_DIR, 'build'),
      modules: join(PROJECT_DIR, 'node_modules'),
      source: join(PROJECT_DIR, 'src'),
    },
    target: TARGET_DIR,
    toolbox: {
      root: TOOLBOX_DIR,
      modules: join(TOOLBOX_DIR, 'node_modules'),
    },
  }
}
