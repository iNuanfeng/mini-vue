const nodeOps = {
  setTextContent(elm, text) {
    elm.textContent = text
  },
  parentNode(elm) {
    return elm.parentNode
  },
  removeChild(parent, elm) {
    parent.removeChild(elm)
  },
  nextSibling() {
    //......
  },
  insertBefore() {
    //......
  },
  createElement(tag) {
    return document.createElement(tag)
  },
  appendChild(parent, elm) {
    return parent.appendChild(elm)
  },
  createTextNode(text) {
    return document.createTextNode(text);
  }
}

export default nodeOps