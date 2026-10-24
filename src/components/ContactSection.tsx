import React, { useState } from 'react';
import { SCHOOL_INFO, FAQS } from '../data/schoolData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronDown, ChevronUp, AlertCircle, MessageCircle, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Informasi Umum',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Nama lengkap wajib diisi';
    if (!formData.phone.trim()) {
      errors.phone = 'Nomor WhatsApp wajib diisi';
    } else if (!/^[0-9+ -]{9,16}$/.test(formData.phone.trim())) {
      errors.phone = 'Format nomor telepon tidak valid';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Format email tidak valid';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Pesan minimal berisi 10 karakter';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Informasi Umum',
        message: ''
      });
    }, 900);
  };

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100/70 text-[#0e3d2f] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>Pusat Layanan & Informasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Hubungi & Kunjungi SMS
          </h2>
          <p className="text-base text-slate-600 mt-2 leading-relaxed">
            Tim panitia dan humas kami siap menyambut pertanyaan Anda seputar kurikulum, biaya pendidikan, jadwal tur sekolah, maupun proses pendaftaran siswa baru.
          </p>
        </div>

        {/* 2-Column Split: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Contact Cards & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#fafaf7] rounded-2xl p-6 border border-slate-200/90 space-y-5">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-200/80 pb-3">
                Informasi Kontak Resmi
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0e3d2f] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#c59b27]" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Alamat Kampus</span>
                    <span className="text-slate-600 leading-relaxed block">{SCHOOL_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0e3d2f] flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">WhatsApp PPDB & Konsultasi</span>
                    <a
                      href={SCHOOL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0e3d2f] font-semibold hover:underline"
                    >
                      {SCHOOL_INFO.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0e3d2f] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#c59b27]" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Telepon Kantor</span>
                    <span className="text-slate-600">{SCHOOL_INFO.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0e3d2f] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#c59b27]" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Email Resmi</span>
                    <a href={`mailto:${SCHOOL_INFO.email}`} className="text-slate-600 hover:text-[#0e3d2f]">
                      {SCHOOL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0e3d2f] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#c59b27]" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Jam Operasional Pelayanan</span>
                    <span className="text-slate-600 leading-relaxed block">{SCHOOL_INFO.officeHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Visual Embed Area */}
            <div className="bg-[#fafaf7] rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm">
              <div className="p-3.5 bg-slate-100/70 border-b border-slate-200/70 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0e3d2f]" /> Lokasi Kampus SMS
                </span>
                <span className="text-[11px] text-slate-500">Jakarta Selatan</span>
              </div>
              <div className="relative h-48 bg-slate-200 flex items-center justify-center overflow-hidden">
                <iframe
                  title="Peta Lokasi SMS"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.40552763261!2d106.7570425390625!3d-6.257529499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a23e590001%3A0xb35a09e02c638cbb!2sJakarta%20Selatan!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full opacity-90 contrast-105"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#fafaf7] rounded-2xl p-6 sm:p-8 border border-slate-200/90">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Kirim Pesan / Permohonan Tur Sekolah</h3>
            <p className="text-xs text-slate-500 mb-6">
              Silakan isi formulir di bawah. Kami akan merespons melalui WhatsApp atau email maksimal dalam 1x24 jam kerja.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#0e3d2f] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Pesan Anda Berhasil Terkirim</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Terima kasih atas minat Anda pada SMS. Staf humas kami akan segera menghubungi Anda melalui nomor WhatsApp yang diberikan.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-4 py-2 text-xs font-semibold text-[#0e3d2f] bg-white border border-emerald-200 rounded-lg hover:bg-emerald-100/50 transition-colors"
                >
                  Kirim Pesan Lainnya
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Lengkap Anda <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Ibu Rina Mariana"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3d2f]/20 ${
                      formErrors.name ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-[#0e3d2f]'
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nomor WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Contoh: 08123456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3d2f]/20 ${
                        formErrors.phone ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-[#0e3d2f]'
                      }`}
                    />
                    {formErrors.phone && <p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Alamat Email (Opsional)</label>
                    <input
                      type="email"
                      placeholder="email@anda.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3d2f]/20 ${
                        formErrors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-[#0e3d2f]'
                      }`}
                    />
                    {formErrors.email && <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Topik Informasi</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3d2f]/20 focus:border-[#0e3d2f]"
                  >
                    <option value="Informasi PPDB 2027/2028">Informasi Pendaftaran PPDB 2027/2028</option>
                    <option value="Permohonan Jadwal Tur Sekolah (School Tour)">Permohonan Jadwal Tur Sekolah (School Tour)</option>
                    <option value="Biaya Pendidikan & Beasiswa">Biaya Pendidikan & Program Beasiswa</option>
                    <option value="Mutasi / Pindahan Siswa">Mutasi / Pindahan Siswa</option>
                    <option value="Informasi Umum & Lainnya">Informasi Umum & Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Pesan Pertanyaan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tuliskan pertanyaan spesifik Anda seputar putra-putri Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3d2f]/20 ${
                      formErrors.message ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-[#0e3d2f]'
                    }`}
                  />
                  {formErrors.message && <p className="text-xs text-red-500 mt-1">{formErrors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#0e3d2f] hover:bg-[#134e3a] rounded-lg shadow-sm transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sedang Mengirim Pesan...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Kirim Pesan Sekarang</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQs Accordion Strip */}
        <div className="pt-8 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c59b27]">Tanya Jawab Seputar Sekolah</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">Pertanyaan yang Sering Diajukan (FAQ)</h3>
          </div>

          <div className="space-y-3 max-w-4xl">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-[#fafaf7] transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm hover:text-[#0e3d2f]"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#0e3d2f] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
