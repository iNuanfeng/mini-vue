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

// addVNodes 用来批量调用 createElm 新建节点。
function addVNodes(parentElm, refElm, vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    const newParentElm = createElm(vnodes[startIdx], parentElm, refElm);

    // VNode 的 elm 属性上保持对应的 DOM 对象
    vnodes[startIdx].elm = newParentElm

    if (vnodes[startIdx].children) {
      // 创建子节点
      addVNodes(newParentElm, null, vnodes[startIdx].children, 0, vnodes[startIdx].children.length -1)
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

// removeVNodes 会批量调用 removeNode 移除节点。
function removeVNodes(parentElm, vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    const ch = vnodes[startIdx]
    if (ch) {
      removeNode(ch.elm);
    }
  }
}

// 判断是否与之前是同一个 DOM 节点
function sameVNode() {
  return false
}

export {
  insert,
  createElm,
  addVNodes,
  removeNode,
  removeVNodes,
  sameVNode
}