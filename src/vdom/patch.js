import {
  insert,
  createElm,
  addVnodes,
  removeNode,
  removeVnodes,
  sameVnode,
  patchVnode
} from './helpers'

function patch(oldVnode, vnode, parentElm) {
  if (!oldVnode) {
    addVnodes(parentElm, null, vnode, 0, vnode.length - 1);
  } else if (!vnode) {
    removeVnodes(parentElm, oldVnode, 0, oldVnode.length - 1);
  } else {
    if (sameVnode(oldVnode[0], vnode[0])) {
      // diff + 更新DOM
      patchVnode(oldVnode[0], vnode[0]);
    } else {
      removeVnodes(parentElm, oldVnode, 0, oldVnode.length - 1);
      addVnodes(parentElm, null, vnode, 0, vnode.length - 1);
    }
  }
}

export default patch