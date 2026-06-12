document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.prose pre').forEach(pre => {
    const btn = document.createElement('button');
    btn.textContent = 'copy';
    btn.style.cssText = `
      position: absolute; top: 8px; right: 10px;
      font-family: 'Share Tech Mono', monospace; font-size: 0.7rem;
      background: #fff; border: 1px solid #ddd; color: #888;
      padding: 2px 8px; border-radius: 2px; cursor: pointer; transition: all 0.15s;
    `;
    btn.addEventListener('mouseenter', () => { btn.style.color = '#111'; btn.style.borderColor = '#111'; });
    btn.addEventListener('mouseleave', () => { btn.style.color = '#888'; btn.style.borderColor = '#ddd'; });
    btn.addEventListener('click', () => {
      const code = pre.querySelector('code');
      navigator.clipboard.writeText(code ? code.innerText : pre.innerText).then(() => {
        btn.textContent = 'copied';
        setTimeout(() => { btn.textContent = 'copy'; }, 1500);
      });
    });
    pre.style.position = 'relative';
    pre.appendChild(btn);
  });
});
