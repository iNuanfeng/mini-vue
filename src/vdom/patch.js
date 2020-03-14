import {
  insert,
  createElm,
  addVNodes,
  removeNode,
  removeVNodes,
  sameVNode
} from './helpers'

function patch(oldVNode, vnode, parentElm) {
  if (!oldVNode) {
    addVNodes(parentElm, null, vnode, 0, vnode.length - 1);
  } else if (!vnode) {
    removeVNodes(parentElm, oldVNode, 0, oldVNode.length - 1);
  } else {
    if (sameVNode(oldVNode, vnode)) {
      // TODO: diff + 更新DOM
      patchVNode(oldVNode, vnode);
    } else {
      removeVNodes(parentElm, oldVNode, 0, oldVNode.length - 1);
      addVNodes(parentElm, null, vnode, 0, vnode.length - 1);
    }
  }
}

export default patch