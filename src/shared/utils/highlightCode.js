import Prism from "prismjs"

export default function highlightCode() {
  if (!window || !document) return
  const codeBlocks = document.querySelectorAll("pre > code")
  codeBlocks.forEach((codeBlock) => {
    if (typeof codeBlock === "object") {
      Prism.highlightElement(codeBlock)
    }
  })
}
