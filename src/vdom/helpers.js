import nodeOps from '../platform'

// insert 用来在 parent 这个父节点下插入一个子节点，如果指定了 ref 则插入到 ref 这个子节点前面。
function insert(parent, elm, ref) {
  if (parent) {
    if (ref) {
      if (ref.parentNode === parent) {
        // TODO
        return nodeOps.insertBefore(parent, elm, ref);
      }
    } else {
      return nodeOps.appendChild(parent, elm)
    }
  }
}

// createElm 用来新建一个节点， tag 存在创建一个标签节点，否则创建一个文本节点。
function createElm(vnode, parentElm, refElm) {
  if (vnode.tag) {
    return insert(parentElm, nodeOps.createElement(vnode.tag), refElm);
  } else {
    return insert(parentElm, nodeOps.createTextNode(vnode.text), refElm);
  }
}

// addVnodes 用来批量调用 createElm 新建节点。
function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    const newParentElm = createElm(vnodes[startIdx], parentElm, refElm);

    // Vnode 的 elm 属性上保持对应的 DOM 对象
    vnodes[startIdx].elm = newParentElm

    if (vnodes[startIdx].children) {
      // 创建子节点
      addVnodes(newParentElm, null, vnodes[startIdx].children, 0, vnodes[startIdx].children.length - 1)
    }
  }
}

// removeNode 用来移除一个节点。
function removeNode(el) {
  const parent = nodeOps.parentNode(el);
  if (parent) {
    nodeOps.removeChild(parent, el);
  }
}

// removeVnodes 会批量调用 removeNode 移除节点。
function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    const ch = vnodes[startIdx]
    if (ch) {
      removeNode(ch.elm);
    }
  }
}

// 判断是否与之前是同一个 DOM 节点
function sameVnode(a, b) {
  return (
    a.key === b.key &&
    a.tag === b.tag &&
    a.isComment === b.isComment &&
    (!!a.data) === (!!b.data) &&
    sameInputType(a, b)
  )
}

function sameInputType(a, b) {
  if (a.tag !== 'input') return true
  let i
  const typeA = (i = a.data) && (i = i.attrs) && i.type
  const typeB = (i = b.data) && (i = i.attrs) && i.type
  return typeA === typeB
}

// 同节点，diff + 更新DOM
function patchVnode(oldVnode, vnode) {
  console.log('patchVnode', oldVnode, vnode)
  return
  // TODO
  if (oldVnode === vnode) {
    return;
  }

  if (vnode.isStatic && oldVnode.isStatic && vnode.key === oldVnode.key) {
    vnode.elm = oldVnode.elm;
    vnode.componentInstance = oldVnode.componentInstance;
    return;
  }

  const elm = vnode.elm = oldVnode.elm;
  const oldCh = oldVnode.children;
  const ch = vnode.children;

  if (vnode.text) {
    nodeOps.setTextContent(elm, vnode.text);
  } else {
    if (oldCh && ch && (oldCh !== ch)) {
      updateChildren(elm, oldCh, ch);
    } else if (ch) {
      if (oldVnode.text) nodeOps.setTextContent(elm, '');
      addVnodes(elm, null, ch, 0, ch.length - 1);
    } else if (oldCh) {
      removeVnodes(elm, oldCh, 0, oldCh.length - 1)
    } else if (oldVnode.text) {
      nodeOps.setTextContent(elm, '')
    }
  }
}

export {
  insert,
  createElm,
  addVnodes,
  removeNode,
  removeVnodes,
  sameVnode,
  patchVnode
}