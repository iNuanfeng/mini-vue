import { insert, createElm, addVnodes, removeNode, removeVnodes } from './helpers'

function patch(oldVnode, vnode, parentElm) {
  if (!oldVnode) {
    addVnodes(parentElm, null, vnode, 0, vnode.length - 1);
  } else if (!vnode) {
    console.log('___', oldVnode, vnode, parentElm)
    removeVnodes(parentElm, oldVnode, 0, oldVnode.length - 1);
  } else {
    // TODO: diff + 更新DOM
    //   if (sameVnode(oldVNode, vnode)) {
  //     patchVnode(oldVNode, vnode);
  //   } else {
  //     removeVnodes(parentElm, oldVnode, 0, oldVnode.length - 1);
  //     addVnodes(parentElm, null, vnode, 0, vnode.length - 1);
  //   }
  }
}

export default patch