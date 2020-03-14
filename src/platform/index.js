const nodeOps = {
  setTextContent(text) {
    console.log(text)
  },
  parentNode() {
    //......
  },
  removeChild() {
    //......
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