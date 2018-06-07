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

import addBasicPlugins from './plugins/basic'
import addFlowPlugins from './plugins/flow'
import addJsxPlugins from './plugins/jsx'
import addReactPlugins from './plugins/react'
import addTypeScriptPlugins from './plugins/typeScript'
import {getSettings} from '../toolbox'
import {findModule} from '../../modules'

module.exports = function () {
  let {supportedBrowser, supportedNodeJs, supportedPlatforms} = getSettings()
  let targets = {}

  for (let platform of supportedPlatforms) {
    switch (platform) {
      case 'browser':
        targets.browsers = supportedBrowser
        break
      case 'node-js':
        targets.node = supportedNodeJs
        break
    }
  }

  let result = {
    plugins: [],
    presets: [findModule('@babel/preset-env'), targets],
  }

  addBasicPlugins(result.plugins)
  addFlowPlugins(result.plugins)
  addJsxPlugins(result.plugins)
  addReactPlugins(result.plugins)
  addTypeScriptPlugins(result.plugins)

  return result
}
