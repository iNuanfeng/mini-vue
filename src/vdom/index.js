import { Vnode } from './Vnode'
import patch from './patch.js'

function h(...args) {
  return new Vnode(...args)
}

export { h, patch }