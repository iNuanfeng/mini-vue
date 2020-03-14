import { VNode } from './VNode'

export function h(...args) {
  return new VNode(...args)
}

export function patch(oldVNode, newVNode) {
  console.log('todo patch')
}