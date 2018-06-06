/**
 * CodeSlide Source Code
 */

function CodeSlide(node, options) {
  const rootNode = typeof node === 'string'
    ? document.getElementById(node)
    : node;

  if(!node) {
    throw new Error(`[ERROR] - node passed to CodeSlide, ${node}, is null`);
  }

  const slides = rootNode.querySelectorAll('code');

}
