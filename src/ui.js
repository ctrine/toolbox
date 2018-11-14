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

import chalk from 'chalk'
import ora from 'ora'
import Multispinner from 'multispinner'

import {
  TASK_STARTED,
  TASK_STOPPED,
} from './state/events/identifiers'

const SPINNER_ANIMATION = {
  interval: 60,
  frames: [
    '[.  ]',
    '[:. ]',
    '[.:.]',
    '[ .:]',
    '[  .]',
    '[   ]',
  ],
}

export function setUpUi(store) {
}
