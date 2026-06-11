// Subtle typing effect on hero title load
document.addEventListener('DOMContentLoaded', () => {

  // Highlight active nav link based on current path
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.href && link.href.includes(path.split('/').pop())) {
      link.classList.add('active');
    }
  });

  // Add a scanline hover effect to post cards
  document.querySelectorAll('.post-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = 'rgba(0, 200, 212, 0.2)';
      card.style.transition = 'border-color 0.2s';
    });
    card.addEventListener('mouseleave', () => {
      card.style.borderColor = '';
    });
  });

  // Wrap inline code blocks in post prose with a copy hint (optional UX touch)
  document.querySelectorAll('.prose pre').forEach(pre => {
    const btn = document.createElement('button');
    btn.textContent = 'copy';
    btn.style.cssText = `
      position: absolute;
      top: 8px;
      right: 10px;
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.7rem;
      background: transparent;
      border: 1px solid #1A2340;
      color: #5A6880;
      padding: 2px 8px;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.15s;
    `;
    btn.addEventListener('mouseenter', () => { btn.style.color = '#00C8D4'; btn.style.borderColor = '#007A82'; });
    btn.addEventListener('mouseleave', () => { btn.style.color = '#5A6880'; btn.style.borderColor = '#1A2340'; });
    btn.addEventListener('click', () => {
      const code = pre.querySelector('code');
      navigator.clipboard.writeText(code ? code.innerText : pre.innerText).then(() => {
        btn.textContent = 'copied!';
        btn.style.color = '#4EDB8A';
        setTimeout(() => { btn.textContent = 'copy'; btn.style.color = '#5A6880'; }, 1500);
      });
    });
    pre.style.position = 'relative';
    pre.appendChild(btn);
  });

});
