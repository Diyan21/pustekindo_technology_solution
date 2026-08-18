import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nama: '',
    perusahaan: '',
    whatsapp: '',
    email: '',
    kebutuhan: 'Instalasi CCTV Baru',
    pesan: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const kebutuhanOptions = [
    'Instalasi CCTV Baru',
    'Penambahan Titik Kamera',
    'Perbaikan & Maintenance Sistem',
    'Integrasi Remote Monitoring / Network',
    'Surveillance Pabrik / Industri',
    'Surveillance Kantor / Komersial',
    'Surveillance Rumah Tinggal / Kost',
    'Konsultasi Umum'
  ];

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.nama.trim()) {
      errors.nama = 'Nama lengkap wajib diisi.';
    }
    if (!formData.whatsapp.trim()) {
      errors.whatsapp = 'Nomor WhatsApp wajib diisi.';
    } else if (!/^[0-9+-\s]{8,18}$/.test(formData.whatsapp.trim())) {
      errors.whatsapp = 'Format nomor WhatsApp tidak valid.';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Format email tidak valid.';
    }
    if (!formData.pesan.trim()) {
      errors.pesan = 'Pesan atau rincian kebutuhan wajib diisi.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const waText = 
`*Formulir Konsultasi CCTV - PUSTEKINDO*
----------------------------------------
*Nama:* ${formData.nama}
*Perusahaan / Instansi:* ${formData.perusahaan || '-'}
*WhatsApp:* ${formData.whatsapp}
*Email:* ${formData.email || '-'}
*Kategori Kebutuhan:* ${formData.kebutuhan}
----------------------------------------
*Pesan / Kebutuhan:*
${formData.pesan}
----------------------------------------
(Dikirim via Website PUSTEKINDO TECHNOLOGY SOLUTION)`;

    const waUrl = `https://wa.me/6281212612006?text=${encodeURIComponent(waText)}`;
    
    // Open WhatsApp
    window.open(waUrl, '_blank');
    setIsSubmitting(false);
  };

  return (
    <section id="kontak" className="py-20 lg:py-24 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-[#007bff] border border-blue-100 text-xs font-bold tracking-wider uppercase">
            <Phone className="w-3.5 h-3.5 text-[#007bff]" />
            <span>Kontak & Lokasi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
            Hubungi PUSTEKINDO
          </h2>

          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Silakan hubungi kami untuk mendiskusikan rencana pengadaan, jadwal survei lokasi, atau konsultasi teknis surveillance system Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Company Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Main Company Card */}
            <div className="bg-[#0a192f] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl space-y-5">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-xs font-mono text-[#00d4ff] font-semibold tracking-wider">
                  {COMPANY_INFO.subName}
                </p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Penyedia solusi surveillance system, CCTV, remote monitoring dan integrasi keamanan IT profesional di Jakarta.
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3 pt-4 border-t border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#00d4ff] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Alamat Kantor
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 mt-0.5 leading-relaxed font-medium">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              {/* WhatsApp / Phone */}
              <div className="flex items-start space-x-3 pt-4 border-t border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#25D366] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Telephone / WhatsApp
                  </h4>
                  <p className="text-sm sm:text-base text-white font-bold mt-0.5">
                    {COMPANY_INFO.phone}
                  </p>
                  <p className="text-xs text-slate-400">Senin - Sabtu (08.30 - 17.30 WIB)</p>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <a
                  id="contact-btn-wa"
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-2 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                  WhatsApp
                </a>

                <a
                  id="contact-btn-tel"
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center justify-center py-2 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-[#00d4ff]" />
                  Telepon
                </a>

                <a
                  id="contact-btn-maps"
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-2 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 mr-1.5 text-red-400" />
                  Maps
                </a>
              </div>
            </div>

            {/* Service Area Card */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-2">
              <div className="flex items-center space-x-2 text-[#0a192f] font-bold text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#007bff]" />
                <span>Cakupan Layanan Survei & Instalasi</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Melayani wilayah Jakarta (Barat, Pusat, Utara, Selatan, Timur), Tangerang, Bekasi, Depok, Bogor, Karawang, dan pengiriman/integrasi proyek ke berbagai wilayah di Indonesia.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <div className="mb-5">
                <h3 className="text-lg sm:text-xl font-bold text-[#0a192f] tracking-tight">
                  Formulir Konsultasi Online
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Isi data di bawah ini. Pesan akan langsung tersusun rapi dan terhubung ke WhatsApp resmi PUSTEKINDO.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Nama */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 font-mono">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Contoh: Budi Santoso"
                        value={formData.nama}
                        onChange={(e) => {
                          setFormData({ ...formData, nama: e.target.value });
                          if (formErrors.nama) setFormErrors({ ...formErrors, nama: '' });
                        }}
                        className={`w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                          formErrors.nama
                            ? 'border-red-500 focus:ring-red-200'
                            : 'border-slate-200 focus:border-[#007bff] focus:ring-blue-100'
                        }`}
                      />
                    </div>
                    {formErrors.nama && (
                      <p className="text-xs text-red-500 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" /> {formErrors.nama}
                      </p>
                    )}
                  </div>

                  {/* Perusahaan */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 font-mono">
                      Nama Perusahaan / Pribadi
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: PT Sumber Rejeki / Rumah"
                      value={formData.perusahaan}
                      onChange={(e) => setFormData({ ...formData, perusahaan: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#007bff] focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* WhatsApp */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 font-mono">
                      Nomor WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="0812-XXXX-XXXX"
                      value={formData.whatsapp}
                      onChange={(e) => {
                        setFormData({ ...formData, whatsapp: e.target.value });
                        if (formErrors.whatsapp) setFormErrors({ ...formErrors, whatsapp: '' });
                      }}
                      className={`w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                        formErrors.whatsapp
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-slate-200 focus:border-[#007bff] focus:ring-blue-100'
                      }`}
                    />
                    {formErrors.whatsapp && (
                      <p className="text-xs text-red-500 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" /> {formErrors.whatsapp}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 font-mono">
                      Email (Opsional)
                    </label>
                    <input
                      type="email"
                      placeholder="nama@perusahaan.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                      }}
                      className={`w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                        formErrors.email
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-slate-200 focus:border-[#007bff] focus:ring-blue-100'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-red-500 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" /> {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Kebutuhan Dropdown */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 font-mono">
                    Kategori Kebutuhan
                  </label>
                  <select
                    value={formData.kebutuhan}
                    onChange={(e) => setFormData({ ...formData, kebutuhan: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 bg-white focus:outline-none focus:border-[#007bff] focus:ring-2 focus:ring-blue-100"
                  >
                    {kebutuhanOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Pesan */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 font-mono">
                    Rincian Kebutuhan / Pesan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Jelaskan kebutuhan jumlah kamera, perkiraan lokasi bangunan, atau kendala sistem saat ini..."
                    value={formData.pesan}
                    onChange={(e) => {
                      setFormData({ ...formData, pesan: e.target.value });
                      if (formErrors.pesan) setFormErrors({ ...formErrors, pesan: '' });
                    }}
                    className={`w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 resize-none ${
                      formErrors.pesan
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-slate-200 focus:border-[#007bff] focus:ring-blue-100'
                    }`}
                  />
                  {formErrors.pesan && (
                    <p className="text-xs text-red-500 mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" /> {formErrors.pesan}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200 flex items-center justify-center space-x-2 active:scale-98"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Kirim Pesan via WhatsApp</span>
                </button>

                <p className="text-center text-[10px] text-slate-400 pt-0.5">
                  Data Anda aman dan diteruskan secara langsung ke nomor resmi WhatsApp PUSTEKINDO.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

