export function ViewPost() {
  return {
    async handleReplaceHTML() {
      try {
        const { $el } = this;
        const res = await fetch('/api/post/alice@prisma.io/all?html=ViewPost');
        const html = await res.text();
        Alpine.morph($el, html);
      } catch (err) {
        console.error(err);
      }
    }
  }
}