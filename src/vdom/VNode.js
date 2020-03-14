export class VNode {
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
export function createEmptyVNode() {
  const node = new VNode();
  node.text = '';
  return node;
}

/**
 * 创建一个文本节点
 * @param {String} val 文本内容
 */
export function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
}

/**
 * 克隆一个 VNode 节点
 * @param {Object} node VNode节点
 */
export function cloneVNode(node) {
  const cloneVnode = new VNode(
    node.tag,
    node.data,
    node.children,
    node.text,
    node.elm
  );
  return cloneVnode;
}
