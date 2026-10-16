// app.js - Loader komponen halaman (setiap menu punya folder sendiri)
const sections = [
  { id: 'nav',        path: 'components/nav/nav.html',        script: 'components/nav/nav.js' },
  { id: 'hero',       path: 'components/hero/hero.html' },
  { id: 'about',      path: 'components/about/about.html' },
  { id: 'skills',     path: 'components/skills/skills.html' },
  { id: 'projects',   path: 'components/projects/projects.html' },
  { id: 'gallery',    path: 'components/gallery/gallery.html',   script: 'components/gallery/gallery.js' },
  { id: 'terminal',   path: 'components/terminal/terminal.html', script: 'components/terminal/terminal.js' },
  { id: 'experience', path: 'components/experience/experience.html' },
  { id: 'contact',    path: 'components/contact/contact.html' },
  { id: 'footer',     path: 'components/footer/footer.html' },
];

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error('Gagal memuat script: ' + src));
    document.body.appendChild(script);
  });
}

async function loadSection(section) {
  const res = await fetch(section.path);
  if (!res.ok) throw new Error('Gagal memuat ' + section.path);
  const html = await res.text();
  document.getElementById(section.id).innerHTML = html;
  if (section.script) await loadScript(section.script);
}

async function init() {
  try {
    for (const section of sections) {
      await loadSection(section);
    }
  } catch (err) {
    console.error('[Portofolio] Gagal memuat komponen:', err);
    document.body.innerHTML = '<div style="padding: 2rem; font-family: monospace; color: #f87171;">' +
      'Gagal memuat komponen halaman. Jalankan melalui Live Server / HTTP (bukan file://).</div>';
  }
}

document.addEventListener('DOMContentLoaded', init);