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

import React, {Component} from 'react'
import style from './index.module.css'

// {stack.map((x, index) =>
//   <div key={index}>
//       <div>{x.namespace}</div>
//       <br/>
//       <div>{x.path}</div>
//       <br/>
//       <br/>
//   </div>
// )}

export default class ErrorBox extends Component {
  render() {
    let {error:{stack}} = this.props
    return <div className={style.errorBox}>
      <div className={style.codeFrame}>
        codebox
      </div>
    </div>
  }
}