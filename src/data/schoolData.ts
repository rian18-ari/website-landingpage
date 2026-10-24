export interface Program {
  id: string;
  name: string;
  level: string;
  ageGroup: string;
  description: string;
  highlights: string[];
  curriculum: string;
  schedule: string;
  activities: string[];
  gradient: string;
  iconName: string;
}

export interface Facility {
  id: string;
  title: string;
  category: 'Akademik' | 'Ibadah' | 'Olahraga' | 'Teknologi' | 'Rekreasi';
  description: string;
  features: string[];
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Kegiatan Belajar' | 'Keagamaan' | 'Ekstrakurikuler' | 'Prestasi' | 'Akademik';
  description: string;
  date: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  relation: string;
  childLevel: string;
  quote: string;
  avatarText: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: 'Pengumuman' | 'Prestasi' | 'Kegiatan' | 'Akademik';
  date: string;
  summary: string;
  content: string[];
  author: string;
  readTime: string;
}

export const SCHOOL_INFO = {
  name: "SMS",
  fullName: "Sekolah Mengelola Sekolah",
  logo: "/logo.png",
  tagline: "Sekolah Mengelola Sekolah - Membangun Generasi Berilmu, Berakhlak, dan Berprestasi",
  subheadline: "SMS (Sekolah Mengelola Sekolah) hadir untuk mendampingi setiap anak tumbuh menjadi generasi yang cerdas, berkarakter Islami, mandiri, dan siap menghadapi masa depan.",
  foundationYear: "1998",
  accreditation: "Terakreditasi A (Unggul)",
  skNumber: "SK Kemendikbudristek No. 421.2/1089/Disdik/2021",
  npsn: "20108942",
  address: "Jl. Masjid SMS No. 45, Kompleks Pendidikan Islam, Jakarta Selatan 12430",
  phone: "+62 21 7654 3210",
  whatsapp: "+62 812 3456 7890",
  whatsappUrl: "https://wa.me/6281234567890?text=Assalamu%27alaikum%20Admin%20SMS%2C%20saya%20ingin%20informasi%20pendaftaran%20siswa%20baru.",
  email: "info@sms.sch.id",
  ppdbEmail: "ppdb@sms.sch.id",
  officeHours: "Senin – Jumat: 07.00 – 16.00 WIB | Sabtu: 08.00 – 13.00 WIB",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    whatsapp: "https://wa.me/6281234567890"
  },
  stats: [
    { label: "Siswa Aktif", value: "1.250+", unit: "Siswa", desc: "Dari seluruh jenjang KB-TK hingga SMA" },
    { label: "Pendidik & Tenaga Ahli", value: "85+", unit: "Guru & Staf", desc: "Tersertifikasi, berdedikasi & berakhlak mulia" },
    { label: "Jenjang Pendidikan", value: "4", unit: "Jenjang", desc: "KB/TK, SD, SMP, SMA Terakreditasi A" },
    { label: "Tahun Mengabdi", value: "26+", unit: "Tahun", desc: "Sejak didirikan pada tahun 1998" }
  ]
};

export const ABOUT_CONTENT = {
  overview: "SMS didirikan dengan komitmen kuat untuk menghadirkan institusi pendidikan bermutu tinggi yang memadukan keunggulan ilmu pengetahuan umum, teknologi mutakhir, dengan penanaman nilai-nilai tauhid dan adab Islami secara kaffah. Kami meyakini setiap anak memiliki fitrah kebaikan dan potensi unik yang harus diasah dengan penuh kasih sayang dan keteladanan.",
  vision: "Menjadi institusi pendidikan Islam unggul yang melahirkan generasi berilmu luas, berakhlak mulia, berjiwa pemimpin, serta berdaya saing global dengan berlandaskan Al-Qur'an dan As-Sunnah.",
  missions: [
    "Menyelenggarakan pendidikan terpadu antara Kurikulum Nasional (Kurikulum Merdeka) dan Kurikulum Diniyah Islam.",
    "Membina akidah yang shahih, ibadah yang tertib, serta akhlakul karimah melalui pembiasaan adab harian.",
    "Mengembangkan potensi akademik, sains, bahasa asing (Arab & Inggris), dan teknologi digital para peserta didik.",
    "Mewujudkan lingkungan sekolah yang asri, aman, inklusif, ramah anak, dan bernuansa Islami yang inspiratif.",
    "Membangun kolaborasi yang harmonis dan transparan antara pihak sekolah, orang tua, dan masyarakat luas."
  ],
  history: "SMS berawal pada tahun 1998 dari inisiasi para tokoh masyarakat dan pendidik Muslim yang mendambakan sarana pendidikan Islam yang modern tanpa mengorbankan kedalaman adab dan Al-Qur'an. Bermula dari sebuah jenjang Taman Kanak-Kanak dengan 3 ruang kelas, kini SMS telah berkembang menaungi empat jenjang pendidikan terpadu (KB-TK, SD, SMP, SMA) di atas lahan seluas 1,8 hektar dengan fasilitas modern, laboratorium riset, serta masjid jami' pusat kegiatan spiritual civitas sekolah.",
  principal: {
    name: "Dr. H. Ahmad Fauzi, M.Pd.",
    title: "Ketua Dewan Pengurus & Kepala Pendidikan Yayasan SMS",
    quote: "Di SMS, kami tidak sekadar mentransfer pengetahuan ke dalam lembar ujian, tetapi kami menanamkan nilai adab, kecintaan pada Al-Qur'an, dan rasa ingin tahu yang abadi. Mari bersama-sama mempersiapkan putra-putri kita menjadi pribadi yang solutif bagi umat dan bangsa.",
    credentials: "Doktor Pendidikan Karakter Islam, Alumni Universitas Negeri Jakarta & Lembaga Ilmu Pengetahuan Islam & Arab (LIPIA)"
  },
  coreValues: [
    { title: "Siddiq (Kejujuran)", desc: "Menanamkan integritas moral dalam setiap tindakan dan ucapan santri." },
    { title: "Amanah (Tanggung Jawab)", desc: "Mendidik rasa tanggung jawab terhadap diri, orang tua, dan amanah ilmu." },
    { title: "Tabligh (Komunikatif)", desc: "Melatih kemampuan berkomunikasi santun, berargumen logis, dan berdakwah bil hal." },
    { title: "Fathanah (Cerdas & Cendekia)", desc: "Menumbuhkan daya nalar kritis, keilmuan kontemporer, dan kecakapan teknologi." }
  ]
};

export const PROGRAMS: Program[] = [
  {
    id: "kb-tk",
    name: "KB & TK Islam SMS",
    level: "Kelompok Bermain & Taman Kanak-Kanak",
    ageGroup: "Usia 3 - 6 Tahun",
    description: "Fondasi emas pembentukan adab, kemandirian anak, hafalan doa harian, pengenalan hijaiyah metode interaktif, dan motorik sensorik dalam suasana belajar yang menyenangkan.",
    highlights: [
      "Metode Sentra & Montessori Islami",
      "Hafalan Surat Pendek (Juz 'Amma) & Hadits Pilihan",
      "Pembiasaan Adab Makan, Berbicara & Toilet Training",
      "Pemeriksaan Tumbuh Kembang & Konsultasi Psikolog Anak"
    ],
    curriculum: "Kurikulum Merdeka PAUD dipadukan dengan Pendidikan Adab Fitrah Anak",
    schedule: "Senin – Jumat | 07.30 – 11.30 WIB",
    activities: ["Field Trip Edukatif", "Market Day Cilik", "Pekan Kreativitas Seni", "Manasik Haji Cilik"],
    gradient: "from-emerald-700 to-teal-900",
    iconName: "Baby"
  },
  {
    id: "sd-islam",
    name: "SD Islam Terpadu SMS",
    level: "Sekolah Dasar Islam Terpadu",
    ageGroup: "Usia 6 - 12 Tahun",
    description: "Pendidikan dasar terintegrasi yang memperkuat literasi, numerasi, sains, pemahaman Al-Qur'an (Tahsin & Tahfidz target 3 Juz), serta pembiasaan shalat berjamaah dan akhlak harian.",
    highlights: [
      "Target Hafalan Al-Qur'an Minimal 3 Juz dengan Uji Sertifikasi",
      "Pendekatan Pembelajaran Aktif Saintifik (Active & Joyful Learning)",
      "Daily Conversation Bahasa Arab & Inggris Sederhana",
      "Program Shalat Dhuha, Shalat Zhuhur Berjamaah & Dzuhur Kultum"
    ],
    curriculum: "Kurikulum Merdeka Nasional + Kurikulum Diniyah Terpadu JSIT",
    schedule: "Senin – Jumat | 07.00 – 14.30 WIB (Full Day School)",
    activities: ["Pramuka Siaga & Penggalang", "Klub Sains & Robotik", "Tahfidz Camp", "Pentas Seni Budaya Islam"],
    gradient: "from-green-800 to-emerald-950",
    iconName: "BookOpen"
  },
  {
    id: "smp-islam",
    name: "SMP Islam SMS",
    level: "Sekolah Menengah Pertama",
    ageGroup: "Usia 12 - 15 Tahun",
    description: "Mengembangkan kepemimpinan remaja, kematangan berpikir kritis, pendalaman sains, coding dasar, kemahiran dwi-bahasa, serta target hafalan 5 Juz dengan program pembinaan karakter intensif.",
    highlights: [
      "Target Tahfidz 5 Juz Bersanad + Kajian Fiqih Remaja",
      "Bilingual Class & English/Arabic Immersion Program",
      "Science Club & Pembinaan Olimpiade Sains Nasional (OSN)",
      "Latihan Dasar Kepemimpinan Siswa (LDKS) & Social Project"
    ],
    curriculum: "Kurikulum Merdeka + Penguatan Riset & Kurikulum Pesantren Modern",
    schedule: "Senin – Jumat | 07.00 – 15.30 WIB",
    activities: ["Archery (Memanah)", "Robotics & Coding Club", "Public Speaking Forum", "Bakti Sosial Peduli Umat"],
    gradient: "from-teal-800 to-slate-900",
    iconName: "GraduationCap"
  },
  {
    id: "sma-islam",
    name: "SMA Islam Unggulan SMS",
    level: "Sekolah Menengah Atas",
    ageGroup: "Usia 15 - 18 Tahun",
    description: "Mempersiapkan siswa menembus PTN unggulan dan universitas internasional dengan bekal keilmuan kuat, kemampuan riset ilmiah, kemandirian kewirausahaan Islami, dan keteguhan iman.",
    highlights: [
      "Bimbingan Khusus UTBK / SNBT & Jalur Prestasi Tahfidz ke PTN",
      "Program Karya Tulis Ilmiah (KTI) Remaja & Mentoring Riset",
      "Sertifikasi Tahfidz 5-10 Juz & Sertifikasi Bahasa (TOEFL / TOAFL)",
      "Career Day, Magang Industri & Islamic Youth Leadership"
    ],
    curriculum: "Kurikulum Merdeka SMA + Persiapan Seleksi Perguruan Tinggi Top",
    schedule: "Senin – Jumat | 07.00 – 16.00 WIB",
    activities: ["Model United Nations (MUN)", "Klub Jurnalistik & Multimedia", "Paskibra & Bela Diri", "Student Entrepreneur"],
    gradient: "from-emerald-900 to-cyan-950",
    iconName: "Award"
  }
];

export const ADVANTAGES = [
  {
    title: "Pendidikan Karakter & Adab Islami",
    desc: "Penanaman akidah shahihah, pembiasaan shalat berjamaah tepat waktu, adab harian kepada orang tua dan guru, serta pembelajaran sirah nabawiyah sejak usia dini.",
    iconName: "HeartHandshake"
  },
  {
    title: "Lingkungan Belajar Asri & Kondusif",
    desc: "Kampus hijau bebas asap rokok dengan ruang terbuka hijau, sirkulasi udara alami, suasana yang tenang, dan keamanan sistem kartu akses 24 jam.",
    iconName: "ShieldCheck"
  },
  {
    title: "Guru Kompeten, Peduli & Tersertifikasi",
    desc: "Didampingi tenaga pendidik lulusan universitas terkemuka dan pondok pesantren terpercaya yang mengajar dengan dedikasi, kehangatan, serta teladan nyata.",
    iconName: "Users"
  },
  {
    title: "Pembelajaran Aktif, Berbasis Proyek & Teknologi",
    desc: "Mengasah daya nalar kritis dan pemecahan masalah melalui laboratorium digital, smart classroom, literasi sains, dan pembelajaran berbasis proyek terarah.",
    iconName: "Cpu"
  },
  {
    title: "Pengembangan Bakat & Ekstrakurikuler Lengkap",
    desc: "Wadah penyaluran potensi unik siswa dari bidang tahfidz Al-Qur'an, pidato dwi-bahasa, sains, seni kaligrafi, panahan, beladiri, hingga keolahragaan.",
    iconName: "Sparkles"
  },
  {
    title: "Sinergi Sekolah & Orang Tua yang Harmonis",
    desc: "Komunikasi dua arah yang rutin melalui forum parenting bulanan, buku penghubung digital, serta pelaporan berkala perkembangan akhlak dan akademik anak.",
    iconName: "Smile"
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "masjid",
    title: "Masjid Jami' Kampus SMS",
    category: "Ibadah",
    description: "Pusat ibadah dan penempaan spiritual civitas sekolah berkapasitas 800 jamaah dengan tempat wudhu higienis dan ruang halaqah Al-Qur'an yang tenang.",
    features: ["Kapasitas 800 Jamaah", "Ruang Halaqah Tahfidz", "Sound System Akustik Jernih", "Area Bersih & Sejuk"],
    iconName: "Compass"
  },
  {
    id: "kelas",
    title: "Ruang Kelas Modern & Ber-AC",
    category: "Akademik",
    description: "Ruang kelas ergonomis dengan pendingin ruangan, proyektor interaktif/smart TV, loker pribadi siswa, dan tata cahaya optimal untuk kenyamanan belajar.",
    features: ["AC & Air Purifier", "Smart Interactive Board", "Loker Siswa Mandiri", "Maksimal 24 Siswa/Kelas"],
    iconName: "School"
  },
  {
    id: "perpustakaan",
    title: "Perpustakaan & Pojok Literasi Digital",
    category: "Akademik",
    description: "Koleksi lebih dari 7.000 judul buku referensi sains, sastra, ensiklopedia Islam, serta akses e-book dan bilik komputer riset mandiri.",
    features: ["7.000+ Judul Buku Terkurasi", "E-Library Tablet Station", "Area Baca Santai Lesehan", "Bilik Diskusi Kelompok"],
    iconName: "BookOpen"
  },
  {
    id: "lab-sains",
    title: "Laboratorium Sains & Komputer",
    category: "Teknologi",
    description: "Fasilitas praktikum fisika, biologi, kimia berstandar keselamatan tinggi, serta lab komputer berkecepatan tinggi untuk pembelajaran koding dan multimedia.",
    features: ["Peralatan Mikroskop & Kimia", "PC Laboratorium Core i7", "Jaringan Internet Fiber Optic", "Instruktur Lab Khusus"],
    iconName: "Microscope"
  },
  {
    id: "lapangan",
    title: "Lapangan Olahraga Multifungsi",
    category: "Olahraga",
    description: "Lapangan outdoor & semi-indoor berstandar untuk futsal, basket, bulutangkis, bola voli, upacara bendera, dan arena latihan memanah santri.",
    features: ["Lapangan Futsal & Basket", "Area Latihan Memanah", "Tribun Penonton Teduh", "Lantai Lapangan Anti-Slip"],
    iconName: "Trophy"
  },
  {
    id: "playground",
    title: "Playground & Arena Kreativitas Siswa",
    category: "Rekreasi",
    description: "Area bermain anak ramah sensorik dan motorik dengan rumput sintetis aman, panggung kreativitas terbuka, serta kantin sehat halal berstandar BPOM.",
    features: ["Mainan Bersertifikasi Aman", "Kantin Halal & Sehat Terkontrol", "Gazebo Diskusi Asri", "Taman Edukasi Botani"],
    iconName: "Smile"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Wisuda Tahfidz Al-Qur'an Angkatan Ke-18",
    category: "Keagamaan",
    description: "Penganugerahan syahadah tahfidz kepada santri yang telah menyelesaikan hafalan 3, 5, hingga 10 Juz dengan munaqasyah ketat.",
    date: "14 Oktober 2026",
    iconName: "BookCheck"
  },
  {
    id: "g2",
    title: "Pekan Sains & Karya Inovasi Ramah Lingkungan",
    category: "Akademik",
    description: "Pameran sains tahunan siswa mempresentasikan prototipe penyaring air otomatis dan pembangkit listrik mini bertenaga surya.",
    date: "28 September 2026",
    iconName: "Atom"
  },
  {
    id: "g3",
    title: "Simulasi & Praktik Manasik Haji Santri",
    category: "Keagamaan",
    description: "Pembelajaran kontekstual rukun Islam kelima di miniatur Masjidil Haram dan Padang Arafah bersama dewan asatidz.",
    date: "12 September 2026",
    iconName: "Compass"
  },
  {
    id: "g4",
    title: "Latihan Gabungan Pramuka & Outbound Kemandirian",
    category: "Ekstrakurikuler",
    description: "Kegiatan survival alam terbuka, pioneering, penjelajahan, dan pembiasaan shalat qiyamullail di perkemahan kaki gunung.",
    date: "20 Agustus 2026",
    iconName: "Tent"
  },
  {
    id: "g5",
    title: "Kunjungan Belajar Edukatif & Planetarium",
    category: "Kegiatan Belajar",
    description: "Siswa mengamati tata surya dan merenungkan kebesaran Allah SWT dalam penciptaan langit dan bumi sesuai Surah Ali Imran.",
    date: "04 Agustus 2026",
    iconName: "Sparkles"
  },
  {
    id: "g6",
    title: "Juara Umum Olimpiade Sains & Seni Islam Antar-Sekolah",
    category: "Prestasi",
    description: "Tim delegasi SMS meraih medali emas pada cabang Matematika Terapan, Pidato Bahasa Arab, dan Tahfidz.",
    date: "15 Juli 2026",
    iconName: "Trophy"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Ibu Hj. Rina Mariana, S.E.",
    relation: "Orang Tua Siswa Kelas 4 SD Islam SMS",
    childLevel: "Orang Tua Siswa SD",
    quote: "Hal yang paling kami syukuri menyekolahkan ananda di SMS adalah adab dan kebiasaan beribadahnya. Tanpa disuruh, ananda sudah bersiap saat adzan berkumandang, serta sopan santun kepada yang lebih tua terlihat sangat menonjol.",
    avatarText: "RM"
  },
  {
    id: "t2",
    name: "Bapak Dr. Ir. Hendra Wibowo",
    relation: "Orang Tua Alumni SMP & Kini Kelas 11 SMA SMS",
    childLevel: "Orang Tua Siswa SMA",
    quote: "Keseimbangan antara sains modern dan agama di sini sangat teruji. Guru-gurunya tidak hanya cakap mengajar pelajaran umum dengan menarik, namun juga menjadi teladan moral yang hangat bagi anak-anak kami.",
    avatarText: "HW"
  },
  {
    id: "t3",
    name: "Ibu dr. Nabila Safitri, Sp.A.",
    relation: "Orang Tua Murid TK-B SMS",
    childLevel: "Orang Tua Siswa TK",
    quote: "Metode pembelajaran di TK sangat menyenangkan dan tidak membebani anak. Ananda selalu pulang sekolah dengan wajah ceria dan hafalan surat-surat pendek serta doa sehari-hari bertambah dengan sendirinya.",
    avatarText: "NS"
  },
  {
    id: "t4",
    name: "Faris Al-Ghifari, S.T.",
    relation: "Alumni SMA SMS (Kini Software Engineer & Lulusan ITB)",
    childLevel: "Alumni Angkatan 2020",
    quote: "Fondasi aqidah, kedisiplinan shalat berjamaah, dan pola pikir riset yang saya dapatkan selama 6 tahun di SMS menjadi kompas utama saya ketika menghadapi dinamika perkuliahan di kampus teknik terkemuka.",
    avatarText: "FA"
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "news-1",
    title: "Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2027/2028 Resmi Dibuka",
    category: "Pengumuman",
    date: "18 Oktober 2026",
    summary: "Pendaftaran siswa baru untuk jenjang KB-TK, SD, SMP, dan SMA Islam SMS telah dibuka. Simak alur, jadwal observasi, dan kuota gelombang pertama.",
    content: [
      "Panitia PPDB SMS mengumumkan pembukaan pendaftaran calon peserta didik baru untuk tahun ajaran mendatang. Pendaftaran gelombang pertama dibuka mulai tanggal 15 Oktober hingga kuota terpenuhi.",
      "Calon orang tua siswa dapat mendaftarkan putra-putrinya secara daring melalui website resmi ini atau hadir langsung ke Sekretariat PPDB di Ruang Informasi Kampus SMS.",
      "Tersedia beasiswa prestasi akademik dan beasiswa Tahfidzul Qur'an untuk calon siswa jenjang SMP dan SMA yang memiliki hafalan minimal 3 juz."
    ],
    author: "Tim Humas PPDB SMS",
    readTime: "3 menit baca"
  },
  {
    id: "news-2",
    title: "Santri SMS Raih Medali Emas pada Olimpiade Matematika dan Sains Nasional",
    category: "Prestasi",
    date: "05 Oktober 2026",
    summary: "Prestasi membanggakan kembali diraih oleh ananda Muhammad Rayyan yang sukses memboyong medali emas kompetisi sains tingkat nasional.",
    content: [
      "Alhamdulillah, puji syukur ke hadirat Allah SWT, delegasi siswa SMS berhasil meraih hasil membanggakan pada ajang Olimpiade Sains Pelajar Indonesia.",
      "Persiapan intensif selama tiga bulan bersama tim pembina laboratorium sains dan guru matematika membuktikan bahwa pendidikan Islam mampu bersanding dan unggul dalam pencapaian saintifik.",
      "Kepala Sekolah menyampaikan apresiasi setinggi-tingginya kepada ananda dan dewan pembina atas kerja keras dan doa yang senantiasa dipanjatkan."
    ],
    author: "Koordinator Prestasi Siswa",
    readTime: "2 menit baca"
  },
  {
    id: "news-3",
    title: "Kajian Parenting Bulanan: Membangun Resiliensi Digital Remaja Muslim",
    category: "Kegiatan",
    date: "22 September 2026",
    summary: "Menghadirkan narasumber pakar psikologi keluarga Islam, sekolah menyelenggarakan forum diskusi mendampingi anak bijak di era gawai.",
    content: [
      "Sebagai bagian dari pilar kemitraan sekolah dan orang tua, SMS menyelenggarakan Seminar Parenting Bulanan bertajuk 'Menumbuhkan Fitrah Keimanan dan Menjaga Akhlak Remaja di Era Layar Kaca'.",
      "Seminar dihadiri lebih dari 300 wali murid secara hybrid di Auditorium SMS dan disiarkan melalui kanal resmi sekolah.",
      "Hasil diskusi merekomendasikan kesepakatan pola asuh bersama antara aturan di rumah dan budaya digital yang diterapkan di lingkungan sekolah."
    ],
    author: "Divisi Bimbingan Konseling & Komite",
    readTime: "4 menit baca"
  }
];

export const FAQS = [
  {
    q: "Bagaimana proses dan alur pendaftaran siswa baru (PPDB)?",
    a: "Alur pendaftaran terdiri dari: 1) Pengisian formulir online di website ini, 2) Pembayaran biaya pendaftaran dan verifikasi berkas, 3) Observasi kesiapan belajar/psikotes ringan anak dan wawancara orang tua, 4) Pengumuman hasil seleksi, dan 5) Daftar ulang."
  },
  {
    q: "Apakah ada tes seleksi akademik untuk masuk ke jenjang SD?",
    a: "Untuk jenjang SD, kami tidak memberlakukan tes calistung yang memberatkan. Proses observasi difokuskan pada kesiapan motorik, kemandirian anak, sosialisasi, serta wawancara pemetaan bersama orang tua."
  },
  {
    q: "Berapa rasio jumlah guru dan siswa dalam satu kelas?",
    a: "Untuk KB-TK rasio adalah 1 guru mendampingi maksimal 8-10 anak dengan 2 guru di setiap kelas. Untuk SD, SMP, dan SMA maksimal 24 siswa per kelas dengan didampingi wali kelas dan guru bidang studi."
  },
  {
    q: "Apakah SMS menerima siswa pindahan?",
    a: "Penerimaan siswa pindahan dilayani sepanjang masih tersedia kuota pada rombongan belajar (rombel) yang dituju dan memenuhi kelengkapan rapor serta administrasi mutasi resmi dari dinas pendidikan."
  },
  {
    q: "Apakah ada program beasiswa bagi calon siswa berprestasi?",
    a: "Ya, kami menyediakan beasiswa jalur prestasi akademik (juara olimpiade sains/kejuaraan resmi dinas) serta beasiswa santri berprestasi Tahfidz Al-Qur'an untuk jenjang SMP dan SMA."
  }
];
