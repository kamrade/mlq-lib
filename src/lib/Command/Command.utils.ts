export function sortItemsByDOMPosition(elements: HTMLElement[]) {
  return elements.slice().sort((a, b) => {
    return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
  });
}