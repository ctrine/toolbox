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

import {CONFIGS_DIR} from '../paths'
import {join} from 'path'
import {runBin} from '../binaries'

const JEST_CONFIG_PATH = join(CONFIGS_DIR, 'jest', 'index.js')

export default {
  command: 'test',
  description: 'Run test suites.',
  builder: yargs => {
    yargs.options({
      watch: {
        default: false,
        description: 'Watch for changes and run tests automatically.',
        type: 'boolean',
      },
    })
  },
  handler: env => {
    let args = [`--config=${JEST_CONFIG_PATH}`]
    if (env.watch)
      args.push('--watch')
    runBin('jest', args, env)
  },
}
