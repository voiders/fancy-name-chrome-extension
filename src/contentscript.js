import './chromereload.js'

const max = Math.max
const min = Math.min

function getIndexChild (parent, child) {
  return Array.prototype.indexOf.call(parent.childNodes, child)
}
function isSiblingNode (node, sibling) {
  return node.parentNode === sibling.parentNode
}

function isSiblingElement (element, sibling) {
  return element.parentElement === sibling.parentElement
}

window.addEventListener('mouseup', function (evt) {
  const select = window.getSelection()
  console.log(getSelection(select))
})

function getSelection (select) {
  const {anchorNode, focusNode, anchorOffset, focusOffset} = select
  if (anchorNode === focusNode) {
    return getSameNodeSelect(anchorNode, anchorOffset, focusOffset)
  }
  if (isSiblingNode(anchorNode, focusNode)) {
    return getParentNodeSelect(anchorNode, focusNode, anchorOffset, focusOffset)
  }
  if (isSiblingElement(anchorNode.parentElement, focusNode.parentElement)) {
    console.log('yay')
  }
}
function getSameNodeSelect (node, anchorOffset, focusOffset) {
  return node.textContent.substring(
    anchorOffset,
    focusOffset
  )
}
function getParentNodeSelect (anchorNode, focusNode, anchorOffset, focusOffset) {
  const parent = anchorNode.parentNode
  const indexAnchor = getIndexChild(parent, anchorNode)
  const indexFocus = getIndexChild(parent, focusNode)
  const first = min(indexAnchor, indexFocus)
  const last = max(indexAnchor, indexFocus)
  const isAnchorFirst = first === indexAnchor
  let text = ''
  for (var index = first; index < last + 1; index++) {
    let child = parent.childNodes[index]
    if (index === first) {
      text += isAnchorFirst
        ? anchorNode.textContent.substring(anchorOffset)
        : focusNode.textContent.substring(focusOffset)
    } else if (index === last) {
      text += isAnchorFirst
        ? focusNode.textContent.substring(0, focusOffset)
        : anchorNode.textContent.substring(0, anchorOffset)
    } else {
      text += child.textContent
    }
  }
  return text
}
