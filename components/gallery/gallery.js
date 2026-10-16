// Lightbox Galeri Dokumentasi
(function () {
  const items = document.querySelectorAll('.gallery-item');
  if (!items.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'fixed inset-0 z-[100] hidden items-center justify-center p-4 bg-black/85 backdrop-blur-sm';
  overlay.innerHTML =
    '<button class="absolute top-5 right-6 text-white text-4xl leading-none hover:text-cyan-400 transition-colors" aria-label="Tutup">&times;</button>' +
    '<img class="max-h-[85vh] max-w-[90vw] rounded-xl border border-slate-700 shadow-2xl" src="" alt="">';
  document.body.appendChild(overlay);

  const overlayImg = overlay.querySelector('img');
  const closeBtn = overlay.querySelector('button');

  function open(src, alt) {
    overlayImg.src = src;
    overlayImg.alt = alt;
    overlay.classList.remove('hidden');
    overlay.classList.add('flex');
  }

  function close() {
    overlay.classList.add('hidden');
    overlay.classList.remove('flex');
  }

  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      open(img.src, img.alt);
    });
  });

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
})();