import {
  Ticket,
  ShieldCheck,
  Zap,
  BarChart3,
  Users,
  BookOpen,
  PlayCircle,
  CheckCircle2,
  Building2,
  UserRound,
  ArrowRight,
  GitCompare,
  Headphones,
  Clock3,
  Database,
  Server,
  Lock,
  MonitorCheck,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Ticket,
      title: "Manajemen Tiket Terpusat",
      desc: "Semua laporan kendala, permintaan bantuan, dan tindak lanjut tersimpan dalam satu sistem yang mudah dipantau.",
    },
    {
      icon: Clock3,
      title: "Monitoring SLA",
      desc: "Pantau batas waktu penanganan tiket agar tim IT dapat merespons masalah sesuai prioritas layanan.",
    },
    {
      icon: Users,
      title: "Multi Role User",
      desc: "Mendukung role Admin, User Pelapor, Teknisi, Supervisor, dan Manajemen.",
    },
    {
      icon: BarChart3,
      title: "Dashboard & Laporan",
      desc: "Lihat statistik tiket, performa teknisi, kategori masalah, dan tren layanan IT secara real-time.",
    },
    {
      icon: ShieldCheck,
      title: "Akses Aman",
      desc: "Hak akses pengguna dapat diatur agar data dan proses kerja tetap aman dan terkontrol.",
    },
    {
      icon: Headphones,
      title: "Support Lebih Cepat",
      desc: "Mempercepat komunikasi antara pengguna dan tim IT melalui alur tiket yang jelas.",
    },
  ];

  const comparisonRows = [
    ["Tracking tiket", "Otomatis", "Sulit dipantau", "Tersedia"],
    ["SLA & prioritas", "Ada", "Tidak konsisten", "Tergantung paket"],
    ["Dashboard laporan", "Real-time", "Manual", "Biasanya berbayar"],
    ["Riwayat pekerjaan", "Terdokumentasi", "Sering tercecer", "Tersedia"],
    ["Deployment lokal", "Mendukung", "Tidak relevan", "Belum tentu"],
    ["Custom workflow", "Fleksibel", "Tidak ada", "Terbatas"],
  ];

  const usedBy = [
    "Instansi Pemerintahan",
    "Rumah Sakit & Klinik",
    "Perusahaan Swasta",
    "Sekolah & Kampus",
    "Tim IT Internal",
    "Unit Helpdesk Layanan",
  ];

  const deploymentSteps = [
    "Persiapan server aplikasi dan database.",
    "Konfigurasi environment, koneksi database, dan hak akses.",
    "Deploy aplikasi ke server lokal, VPS, atau cloud.",
    "Setup domain, SSL, backup, dan scheduler bila diperlukan.",
    "Uji coba login, role user, pembuatan tiket, dan laporan.",
  ];

  const manualItems = [
    "Panduan login dan pengelolaan akun",
    "Panduan membuat tiket baru",
    "Panduan assignment tiket ke teknisi",
    "Panduan update status tiket",
    "Panduan laporan dan dashboard",
    "Panduan pengaturan kategori, prioritas, SLA, dan user",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 px-6 py-4 backdrop-blur md:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#home" className="flex items-center gap-3 font-bold">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
              <Ticket size={22} />
            </span>
            <span>Resolve IT</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#pengenalan" className="hover:text-cyan-300">Produk</a>
            <a href="#kelebihan" className="hover:text-cyan-300">Kelebihan</a>
            <a href="#perbandingan" className="hover:text-cyan-300">Perbandingan</a>
            <a href="#demo" className="hover:text-cyan-300">Demo</a>
            <a href="#deployment" className="hover:text-cyan-300">Deployment</a>
            <a href="#manual" className="hover:text-cyan-300">Manual</a>
          </div>

          <a
            href="#kontak"
            className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-300"
          >
            Konsultasi
          </a>
        </div>
      </nav>

      <section id="home" className="relative overflow-hidden px-6 py-24 md:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb66,transparent_35%),radial-gradient(circle_at_top_left,#06b6d466,transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <Ticket size={16} />
              Sistem Helpdesk Ticketing
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Resolve IT untuk Layanan IT yang Lebih Cepat, Rapi, dan Terukur
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Resolve IT adalah sistem helpdesk ticketing untuk membantu organisasi
              mengelola laporan kendala, permintaan layanan, prioritas pekerjaan,
              SLA, teknisi, dan laporan performa dalam satu platform digital.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Lihat Demo <PlayCircle size={18} />
              </a>

              <a
                href="#manual"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                Manual Book <BookOpen size={18} />
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-slate-900 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Dashboard Resolve IT</p>
                  <h3 className="text-xl font-bold">Ticket Overview</h3>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-300">
                  Live
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Open", "128"],
                  ["Progress", "46"],
                  ["Resolved", "312"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-slate-800 p-4">
                    <p className="text-sm text-slate-400">{label}</p>
                    <p className="mt-2 text-3xl font-bold">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                {[
                  "Printer tidak terhubung ke jaringan",
                  "Permintaan reset password user",
                  "Instalasi aplikasi pada komputer baru",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl bg-slate-800 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
                        {index + 1}
                      </span>
                      <p className="text-sm text-slate-200">{item}</p>
                    </div>
                    <ArrowRight size={16} className="text-slate-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pengenalan" className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-semibold text-cyan-300">Pengenalan Produk</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Apa itu Resolve IT?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Resolve IT membantu tim IT menerima laporan, membuat tiket,
            menentukan prioritas, menugaskan teknisi, mencatat progres,
            menyelesaikan masalah, dan membuat laporan layanan. Sistem ini cocok
            untuk organisasi yang ingin mengganti proses manual seperti chat,
            telepon, atau spreadsheet menjadi proses digital yang lebih terstruktur.
          </p>
        </div>
      </section>

      <section id="kelebihan" className="bg-slate-900 px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-semibold text-cyan-300">Kelebihan Produk</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Dirancang untuk mempercepat pelayanan helpdesk
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="perbandingan" className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center gap-3">
            <GitCompare className="text-cyan-300" />
            <div>
              <p className="font-semibold text-cyan-300">Perbandingan Produk</p>
              <h2 className="text-3xl font-bold md:text-4xl">
                Resolve IT vs metode lain
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10">
            <table className="w-full min-w-[760px] border-collapse bg-slate-900 text-left">
              <thead className="bg-cyan-400 text-slate-950">
                <tr>
                  <th className="px-5 py-4">Fitur</th>
                  <th className="px-5 py-4">Resolve IT</th>
                  <th className="px-5 py-4">Manual / Spreadsheet</th>
                  <th className="px-5 py-4">Produk Lain</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row[0]} className="border-t border-white/10">
                    {row.map((cell, index) => (
                      <td
                        key={cell}
                        className={`px-5 py-4 ${
                          index === 1
                            ? "font-semibold text-cyan-200"
                            : "text-slate-300"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="demo" className="bg-slate-900 px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-semibold text-cyan-300">Video Demo Produk</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Lihat alur kerja Resolve IT
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Section ini dapat diisi dengan video demo penggunaan produk, mulai
              dari user membuat tiket, admin melakukan verifikasi, teknisi
              memproses tiket, hingga tiket selesai dan masuk ke laporan.
            </p>
          </div>

          <div className="flex aspect-video items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-slate-800 shadow-2xl">
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400 text-slate-950">
                <PlayCircle size={42} />
              </div>
              <h3 className="text-2xl font-bold">Video Demo Resolve IT</h3>
              <p className="mt-2 text-slate-400">
                Ganti area ini dengan iframe YouTube atau file video produk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="profil" className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
              <UserRound size={64} />
            </div>

            <div>
              <p className="font-semibold text-cyan-300">
                Bio Profil Pembuat Produk
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Tim Developer Resolve IT
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                Resolve IT dikembangkan oleh tim yang berfokus pada solusi
                digital untuk kebutuhan operasional IT. Produk ini dibuat untuk
                membantu organisasi meningkatkan kualitas layanan helpdesk,
                mempercepat penyelesaian masalah, dan menyediakan data laporan
                yang mudah dianalisis oleh manajemen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pengguna" className="bg-slate-900 px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-cyan-300">Digunakan Oleh</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Cocok digunakan di berbagai organisasi
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {usedBy.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <Building2 className="text-cyan-300" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="deployment" className="px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="font-semibold text-cyan-300">
              Instalasi & Deployment
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Mudah diterapkan di server organisasi
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Resolve IT dapat disiapkan pada server internal, VPS, atau cloud
              sesuai kebutuhan organisasi. Proses deployment dapat disesuaikan
              dengan stack aplikasi, database, dan standar keamanan yang digunakan.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { label: "Linux Server", icon: Server },
                { label: "Database", icon: Database },
                { label: "SSL", icon: Lock },
                { label: "Monitoring", icon: MonitorCheck },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
                  >
                    <Icon size={15} />
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            {deploymentSteps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 border-b border-white/10 py-4 last:border-0"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                  {index + 1}
                </div>
                <p className="leading-7 text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="manual" className="bg-slate-900 px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-semibold text-cyan-300">
                Manual Book Produk
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Panduan penggunaan Resolve IT
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                Manual book berisi panduan login, pengelolaan user, pembuatan
                tiket, assignment teknisi, update status, penyelesaian tiket,
                pencetakan laporan, serta pengaturan sistem.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-950 p-6">
              {manualItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-white/10 py-4 last:border-0"
                >
                  <CheckCircle2 className="text-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kontak" className="px-6 py-20 text-center md:px-16">
        <div className="mx-auto max-w-4xl">
          <Zap className="mx-auto mb-5 text-cyan-300" size={42} />
          <h2 className="text-3xl font-bold md:text-5xl">
            Siap meningkatkan kualitas layanan IT?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Gunakan Resolve IT untuk membuat proses helpdesk lebih jelas,
            terukur, dan mudah dikembangkan.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:sales@resolveit.local"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-8 py-4 font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
            >
              Konsultasi Sekarang <ArrowRight size={18} />
            </a>

            <a
              href="#deployment"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Lihat Deployment
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400 md:px-16">
        © 2026 Resolve IT. Sistem Helpdesk Ticketing.
      </footer>
    </main>
  );
}