import VNode from './VNode'

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
function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
}

/**
 * 克隆一个 VNode 节点
 * @param {Object} node VNode节点
 */
function cloneVNode(node) {
  const cloneVnode = new VNode(
    node.tag,
    node.data,
    node.children,
    node.text,
    node.elm
  );
  return cloneVnode;
}

export function h(...args) {
  return new VNode(...args)
}