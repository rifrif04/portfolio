// Terminal Emulator
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');
const terminalSend = document.getElementById('terminal-send');

const commands = {
  help: `Daftar perintah yang tersedia:
  • <span class="text-cyan-400">whoami</span>    : Tampilkan identitas profil singkat
  • <span class="text-cyan-400">skills</span>    : Ringkasan stack keahlian utama
  • <span class="text-cyan-400">projects</span>  : Daftar proyek arsitektur unggulan
  • <span class="text-cyan-400">specs</span>     : Spesifikasi cluster server produksi
  • <span class="text-cyan-400">contact</span>   : Informasi kontak & kanal komunikasi
  • <span class="text-cyan-400">clear</span>     : Bersihkan layar terminal`,

  whoami: `<span class="text-white font-bold">Muhamad Syarif Hidayatulloh</span>
Role     : IT Infrastructure & Network Engineer
Focus    : Data Center Virtualization, Disaster Recovery, Cyber Security Blueprint
Location : Malang, Jawa Timur, Indonesia`,

  experience: `• <span class="text-cyan-400 font-bold">[16 Jun 2025 - Sekarang]</span> IT Infrastructure & Network Engineer
  PT Bagong Dekaka Makmur (Head Office Malang)
• <span class="text-emerald-400 font-bold">[Des 2022 - 3 Jun 2025]</span> Head IT (Kepala Divisi IT)
  RS Cahaya Medika Pagelaran (Perumusan SOP IT: Backup Data, Downtime, Hak Akses, SIMRS)
• <span class="text-teal-400 font-bold">[31 Mei 2022 - 25 Des 2022]</span> IT Pendataan & Sistem
  J&T Express (PT Karya Niaga Abadi)`,

  skills: `<span class="text-cyan-400 font-bold">[VIRTUALIZATION]</span> Proxmox VE 8, PBS, KVM, QEMU, LXC, Docker
<span class="text-emerald-400 font-bold">[HARDWARE]</span>       HPE ProLiant Gen 12, Intel Xeon, ZFS Mirror, Enterprise NVMe
<span class="text-teal-400 font-bold">[SECURITY]</span>       Dual-Bridge (vmbr0/vmbr1), VLAN Isolation, Bastion PAM, NIST CSF 2.0
<span class="text-amber-400 font-bold">[SYSTEMS]</span>        Ubuntu 24.04, Nginx Reverse Proxy, MySQL Tuning, Redis`,

  projects: `1. HPE ProLiant Gen 12 Multi-Tier Decoupled VM Architecture
2. Zero-Trust Dual-Bridge Micro-segmentation & Bastion Host PAM
3. Proxmox Backup Server (PBS) Live Incremental Deduplication (84% Saving)
4. ERP & Helpdesk High-Availability Infrastructure Optimization`,

  specs: `<span class="text-cyan-400">Host:</span> Proxmox VE (Node pve)
<span class="text-cyan-400">CPU :</span> 12th Gen Intel Core i7-12700KF (12 Cores, 20 Threads)
<span class="text-cyan-400">RAM :</span> 64 GB DDR4 (Kernel Samepage Merging Active)
<span class="text-cyan-400">Disk:</span> NVMe 512GB (Root) + 2x 2TB WD Red Plus (ZFS Mirror Pool)
<span class="text-cyan-400">Uptime:</span> 49 Days Zero-Incident`,

  contact: `• LinkedIn  : https://www.linkedin.com/in/muhamad-syarif-hidayatulloh
• Email     : hidayatsyarif13@gmail.com
• WhatsApp  : 0858-5935-9382
• Location  : Malang, Indonesia`
};

function handleCommand() {
  const cmd = terminalInput.value.trim().toLowerCase();
  if (!cmd) return;

  // Add user command echo
  const userLine = document.createElement('div');
  userLine.innerHTML = `<span class="text-cyan-400">syarif@infra:~$</span> <span class="text-white">${cmd}</span>`;
  terminalOutput.appendChild(userLine);

  // Process command
  const responseLine = document.createElement('div');
  if (cmd === 'clear') {
    terminalOutput.innerHTML = '';
  } else if (commands[cmd]) {
    responseLine.innerHTML = `<div class="p-2 rounded bg-slate-900/50 border border-slate-800 my-1">${commands[cmd].replace(/\n/g, '<br>')}</div>`;
    terminalOutput.appendChild(responseLine);
  } else {
    responseLine.innerHTML = `<span class="text-rose-400">Perintah tidak dikenal: '${cmd}'. Ketik <span class="text-cyan-400">'help'</span> untuk bantuan.</span>`;
    terminalOutput.appendChild(responseLine);
  }

  terminalInput.value = '';
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

terminalInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleCommand();
});

terminalSend.addEventListener('click', handleCommand);