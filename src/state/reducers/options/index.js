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

import {
  COMMAND_SET,
  CONFIG_LOADED,
  OPTIONS_SET,
  PROJECT_TYPE_SET,
} from '../../../events'

import {getAvailableOptions} from './available'

/**
 * Calculate the state of the options object after new options are set.
 */
function calculateOptionsState(state, newOptions) {
  if (!state)
    throw new Error('Command not set.')

  let result = {...state}
  let {minify, ...rest} = newOptions

  if (minify) {
    leftAssign(result, {
      minifyCss: true,
      minifyHtml: true,
      minifyJs: true,
    })
  }

  leftAssign(result, rest)
  return result
}

/**
 * Returns the default options for each project type.
 */
function getProjecTypeOptions(projectType) {
  switch (projectType) {
    case 'app':
    case 'cli':
      return {platforms: ['node']}

    case 'lib':
      return {platforms: ['browser', 'node']}

    case 'react-spa':
      return {
        commentFlow: true,
        jsx: true,
        react: true,
        platforms: ['browser'],
      }
  }

  throw new Error(`Unsupported project type “${projectType}”.`)
}

/**
 * Get the properites from the right object and assign them to the left one if
 * they exists.
 */
function leftAssign(left, right) {
  for (let key in right) {
    if (key in left)
      left[key] = right[key]
  }
}

/**
 * Options reducer.
 */
export default function (state = null, event) {
  let {payload, type} = event

  switch (type) {
    // Load the available options for each command.
    case COMMAND_SET:
      return {...getAvailableOptions(payload)}

    // Set options based on the configuration loaded.
    case CONFIG_LOADED:
      return calculateOptionsState(state, payload)

    // Load the default options per project type.
    case PROJECT_TYPE_SET:
      return calculateOptionsState(
        state,
        getProjecTypeOptions(payload)
      )

    // Set options directly.
    case OPTIONS_SET:
      return calculateOptionsState(state, payload)
  }

  return state
}
