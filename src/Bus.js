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

/**
 * Generic communication bus.
 */
export default class Bus {
  subscribers = {
    // Listeners for all events.
    allEvents: [],

    // Listeners for specific events.
    specificEvents: {},
  }

  publish(event) {
    let {
      allEvents,
      specificEvents,
    } = this.subscribers

    allEvents.forEach(subscriber => subscriber(event))

    specificEvents[event.type]
      ?.forEach(subscriber => subscriber(event))
  }

  subscribe(arg) {
    if (typeof arg === 'function')
      return this._subscribe({callback: arg})
    return this._subscribe(arg)
  }

  _subscribe({type, callback}) {
    let {
      allEvents,
      specificEvents,
    } = this.subscribers

    const LIST = type
      ? specificEvents[type] ??= []
      : allEvents

    LIST.push(callback)
  }
}
