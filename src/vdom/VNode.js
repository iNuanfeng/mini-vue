export class Vnode {
  constructor(tag, data, children, text, elm) {
    /*当前节点的标签名*/
    this.tag = tag;
    /*当前节点的一些数据信息，比如props、attrs等数据*/
    this.data = data;
    /*当前节点的子节点，是一个数组*/
    this.children = children;
    /*当前节点的文本*/
    this.text = text;
    /*当前虚拟节点对应的真实dom节点*/
    this.elm = elm;
  }
}


/**
 * 创建一个空节点
 */
export function createEmptyVnode() {
  const node = new Vnode();
  node.text = '';
  return node;
}

/**
 * 创建一个文本节点
 * @param {String} val 文本内容
 */
export function createTextVnode(val) {
  return new Vnode(undefined, undefined, undefined, String(val));
}

/**
 * 克隆一个 Vnode 节点
 * @param {Object} node Vnode节点
 */
export function cloneVnode(node) {
  const cloneVnode = new Vnode(
    node.tag,
    node.data,
    node.children,
    node.text,
    node.elm
  );
  return cloneVnode;
}
