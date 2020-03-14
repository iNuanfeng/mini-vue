import { VNode } from './VNode'
import patch from './patch.js'

function h(...args) {
  return new VNode(...args)
}

export { h, patch }