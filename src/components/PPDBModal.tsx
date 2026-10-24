import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, ArrowRight, ArrowLeft, GraduationCap, Copy, Check, Send } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface PPDBModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgramId?: string;
}

export const PPDBModal: React.FC<PPDBModalProps> = ({ isOpen, onClose, defaultProgramId }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [copied, setCopied] = useState(false);
  
  const [formData, setFormData] = useState({
    studentName: '',
    birthPlace: '',
    birthDate: '',
    gender: 'Laki-laki',
    previousSchool: '',
    targetLevel: defaultProgramId === 'kb-tk' ? 'KB-TK Islam SMS' :
                 defaultProgramId === 'smp-islam' ? 'SMP Islam SMS' :
                 defaultProgramId === 'sma-islam' ? 'SMA Islam Unggulan SMS' : 'SD Islam SMS',
    specialProgram: 'Reguler Terpadu',
    parentName: '',
    parentRelation: 'Ayah Kandung',
    phone: '',
    email: '',
    address: '',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [registrationCode, setRegistrationCode] = useState('');

  if (!isOpen) return null;

  const validateStep = (currentStep: number) => {
    const errs: Record<string, string> = {};
    if (currentStep === 1) {
      if (!formData.studentName.trim()) errs.studentName = 'Nama calon siswa wajib diisi';
      if (!formData.birthPlace.trim()) errs.birthPlace = 'Tempat lahir wajib diisi';
      if (!formData.birthDate) errs.birthDate = 'Tanggal lahir wajib diisi';
    } else if (currentStep === 2) {
      if (!formData.targetLevel) errs.targetLevel = 'Pilih salah satu jenjang pendidikan';
    } else if (currentStep === 3) {
      if (!formData.parentName.trim()) errs.parentName = 'Nama orang tua/wali wajib diisi';
      if (!formData.phone.trim()) {
        errs.phone = 'Nomor WhatsApp aktif wajib diisi';
      } else if (!/^[0-9+ -]{9,16}$/.test(formData.phone.trim())) {
        errs.phone = 'Format nomor WhatsApp tidak valid (contoh: 081234567890)';
      }
      if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        errs.email = 'Format email tidak valid';
      }
      if (!formData.address.trim()) errs.address = 'Alamat domisili wajib diisi';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      if (step === 3) {
        // Generate friendly registration number
        const randomDigits = Math.floor(1000 + Math.random() * 9000);
        const code = `PPDB-SMS-${new Date().getFullYear()}-${randomDigits}`;
        setRegistrationCode(code);
        setStep(4);
      } else {
        setStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
      }
    }
  };

  const handlePrev = () => {
    setStep((prev) => (prev - 1) as 1 | 2 | 3 | 4);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(registrationCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const generateWhatsAppMessage = () => {
    const text = `Assalamu'alaikum Warahmatullah, Panitia PPDB SMS.%0A%0ASaya telah mengisi formulir registrasi online dengan rincian:%0A- No Registrasi: *${registrationCode}*%0A- Nama Calon Siswa: *${formData.studentName}*%0A- Jenjang Dituju: *${formData.targetLevel}*%0A- Nama Orang Tua: *${formData.parentName}*%0A- No. WhatsApp: *${formData.phone}*%0A%0AMohon informasi jadwal observasi & langkah verifikasi selanjutnya. Terima kasih.`;
    return `https://wa.me/6281234567890?text=${text}`;
  };

  const handleReset = () => {
    setStep(1);
    setFormData({
      studentName: '',
      birthPlace: '',
      birthDate: '',
      gender: 'Laki-laki',
      previousSchool: '',
      targetLevel: 'SD Islam SMS',
      specialProgram: 'Reguler Terpadu',
      parentName: '',
      parentRelation: 'Ayah Kandung',
      phone: '',
      email: '',
      address: '',
      notes: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#0e3d2f] text-white px-6 py-5 flex items-center justify-between border-b border-[#c59b27]/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 p-0.5 flex items-center justify-center overflow-hidden shadow-sm">
              <img src="/logo.png" alt="Logo SMS" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">Formulir PPDB Online SMS</h2>
              <p className="text-xs text-emerald-200/80">Tahun Ajaran 2027/2028 · Gelombang 1 Terbuka</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup Formulir"
            className="p-2 text-emerald-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wizard Progress */}
        {step < 4 && (
          <div className="px-6 pt-5 pb-2 border-b border-slate-100 bg-slate-50/60">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#0e3d2f]">
                Langkah {step} dari 3: {
                  step === 1 ? 'Data Calon Siswa' :
                  step === 2 ? 'Jenjang & Peminatan' : 'Data Orang Tua / Wali'
                }
              </span>
              <span className="text-xs text-slate-500 font-mono">{Math.round((step / 3) * 100)}% Selesai</span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#0e3d2f] transition-all duration-300 rounded-full"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {step === 1 && (
            <div className="space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-base font-bold text-slate-900">Informasi Calon Siswa</h3>
                <p className="text-xs text-slate-500">Masukkan identitas calon siswa sesuai akta kelahiran atau kartu keluarga.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nama Lengkap Siswa <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Muhammad Rayyan Al-Fatih"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3d2f]/20 ${
                    errors.studentName ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-[#0e3d2f]'
                  }`}
                />
                {errors.studentName && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.studentName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tempat Lahir <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Jakarta"
                    value={formData.birthPlace}
                    onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3d2f]/20 ${
                      errors.birthPlace ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-[#0e3d2f]'
                    }`}
                  />
                  {errors.birthPlace && <p className="text-xs text-red-500 mt-1">{errors.birthPlace}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tanggal Lahir <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3d2f]/20 ${
                      errors.birthDate ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-[#0e3d2f]'
                    }`}
                  />
                  {errors.birthDate && <p className="text-xs text-red-500 mt-1">{errors.birthDate}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Jenis Kelamin</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3d2f]/20 focus:border-[#0e3d2f]"
                  >
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Asal Sekolah Sebelumnya</label>
                  <input
                    type="text"
                    placeholder="Contoh: TK Nurul Iman / Belum Bersekolah"
                    value={formData.previousSchool}
                    onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3d2f]/20 focus:border-[#0e3d2f]"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-base font-bold text-slate-900">Pilihan Jenjang & Kekhususan</h3>
                <p className="text-xs text-slate-500">Pilih jenjang pendidikan dan fokus peminatan yang diinginkan.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">Pilih Jenjang Sekolah</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'KB-TK Islam SMS', label: 'KB - TK Islam', desc: 'Usia 3 - 6 Tahun' },
                    { id: 'SD Islam SMS', label: 'SD Islam Terpadu', desc: 'Kelas 1 - 6' },
                    { id: 'SMP Islam SMS', label: 'SMP Islam', desc: 'Kelas 7 - 9' },
                    { id: 'SMA Islam Unggulan SMS', label: 'SMA Islam Unggulan', desc: 'Kelas 10 - 12' },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setFormData({ ...formData, targetLevel: item.id })}
                      className={`text-left p-3.5 rounded-xl border transition-all ${
                        formData.targetLevel === item.id
                          ? 'border-[#0e3d2f] bg-emerald-50/60 ring-2 ring-[#0e3d2f]/10'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-900">{item.label}</span>
                        {formData.targetLevel === item.id && (
                          <CheckCircle2 className="w-4 h-4 text-[#0e3d2f]" />
                        )}
                      </div>
                      <span className="text-xs text-slate-500 mt-1 block">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">Program Peminatan</label>
                <div className="space-y-2">
                  {[
                    { id: 'Reguler Terpadu', label: 'Kurikulum Terpadu Reguler (Nasional + Diniyah + Karakter)' },
                    { id: 'Peminatan Tahfidz Khusus', label: 'Kelas Peminatan Tahfidz Al-Qur\'an Intensif' },
                    { id: 'Bilingual & STEM Science', label: 'Kelas Bilingual & Penguatan Sains/Teknologi' }
                  ].map((prog) => (
                    <label
                      key={prog.id}
                      className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                        formData.specialProgram === prog.id ? 'border-[#0e3d2f] bg-emerald-50/40' : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="specialProgram"
                        checked={formData.specialProgram === prog.id}
                        onChange={() => setFormData({ ...formData, specialProgram: prog.id })}
                        className="mt-0.5 text-[#0e3d2f] focus:ring-[#0e3d2f]"
                      />
                      <span className="text-xs font-medium text-slate-800">{prog.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-base font-bold text-slate-900">Informasi Orang Tua / Wali</h3>
                <p className="text-xs text-slate-500">Kontak utama untuk konfirmasi jadwal observasi dan administrasi PPDB.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Orang Tua / Wali <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Hendra Wibowo"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3d2f]/20 ${
                      errors.parentName ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-[#0e3d2f]'
                    }`}
                  />
                  {errors.parentName && <p className="text-xs text-red-500 mt-1">{errors.parentName}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Hubungan</label>
                  <select
                    value={formData.parentRelation}
                    onChange={(e) => setFormData({ ...formData, parentRelation: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3d2f]/20 focus:border-[#0e3d2f]"
                  >
                    <option value="Ayah Kandung">Ayah Kandung</option>
                    <option value="Ibu Kandung">Ibu Kandung</option>
                    <option value="Wali Siswa">Wali Siswa</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Contoh: 081234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3d2f]/20 ${
                      errors.phone ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-[#0e3d2f]'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Alamat Email (Opsional)</label>
                  <input
                    type="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3d2f]/20 ${
                      errors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-[#0e3d2f]'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Alamat Domisili Tempat Tinggal <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Nama jalan, nomor rumah, RT/RW, kelurahan, kecamatan, kota..."
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className={`w-full px-3.5 py-2 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3d2f]/20 ${
                    errors.address ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-[#0e3d2f]'
                  }`}
                />
                {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Catatan Khusus / Riwayat Kesehatan (Opsional)</label>
                <input
                  type="text"
                  placeholder="Contoh: Memiliki riwayat asma ringan / minat di bidang kaligrafi"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3d2f]/20 focus:border-[#0e3d2f]"
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0e3d2f] flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#c59b27]">Alhamdulillah · Formulir Terkirim</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Registrasi Awal PPDB Berhasil</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto mt-1.5 leading-relaxed">
                  Data calon santri ananda <strong className="text-slate-900 font-semibold">{formData.studentName}</strong> telah berhasil dicatat ke sistem PPDB SMS.
                </p>
              </div>

              {/* Registration Voucher Card */}
              <div className="bg-[#0e3d2f] text-white p-5 rounded-xl max-w-md mx-auto text-left relative overflow-hidden border border-[#c59b27]/30 shadow-md">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                  <div>
                    <p className="text-[10px] text-emerald-200/80 uppercase tracking-widest font-medium">Nomor Registrasi PPDB</p>
                    <p className="text-lg font-mono font-bold text-[#eab308] tracking-wider">{registrationCode}</p>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-emerald-100 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Tersalin' : 'Salin'}</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-emerald-200/70 block">Jenjang Pilihan:</span>
                    <span className="font-semibold text-white truncate block">{formData.targetLevel}</span>
                  </div>
                  <div>
                    <span className="text-emerald-200/70 block">Wali Murid:</span>
                    <span className="font-semibold text-white truncate block">{formData.parentName}</span>
                  </div>
                  <div className="col-span-2 pt-1 border-t border-white/10 mt-1">
                    <span className="text-emerald-200/70 block">Status:</span>
                    <span className="font-semibold text-emerald-300">Menunggu Verifikasi & Konfirmasi Jadwal</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Konfirmasi via WhatsApp Panitia</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Selesai & Tutup
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        {step < 4 && (
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>
            ) : <div />}

            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-[#0e3d2f] hover:bg-[#134e3a] rounded-lg transition-colors shadow-sm"
            >
              <span>{step === 3 ? 'Kirim Pendaftaran' : 'Lanjutkan'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
