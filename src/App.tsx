/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { ExcellenceSection } from './components/ExcellenceSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NewsSection } from './components/NewsSection';
import { RegistrationCTA } from './components/RegistrationCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PPDBModal } from './components/PPDBModal';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { GalleryModal } from './components/GalleryModal';
import { ArticleModal } from './components/ArticleModal';
import { Program, GalleryItem, NewsArticle } from './data/schoolData';

export default function App() {
  const [isPPDBOpen, setIsPPDBOpen] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState<string>('');
  const [detailProgram, setDetailProgram] = useState<Program | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const handleOpenPPDB = (programId?: string) => {
    setSelectedProgramId(programId || '');
    setIsPPDBOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf7] text-slate-800 font-sans selection:bg-[#0e3d2f] selection:text-emerald-100">
      {/* 1. Header / Navbar */}
      <Navbar onOpenPPDB={() => handleOpenPPDB()} />

      {/* 2. Main Content Stream */}
      <main className="flex-1">
        {/* A. Hero Section */}
        <Hero onOpenPPDB={() => handleOpenPPDB()} />

        {/* B. Stats Section */}
        <StatsSection />

        {/* C. Tentang Sekolah */}
        <AboutSection />

        {/* D. Program Pendidikan */}
        <ProgramsSection
          onSelectProgram={(program) => setDetailProgram(program)}
          onOpenPPDB={(progId) => handleOpenPPDB(progId)}
        />

        {/* E. Keunggulan Sekolah */}
        <ExcellenceSection />

        {/* F. Fasilitas Sekolah */}
        <FacilitiesSection />

        {/* G. Galeri Kegiatan */}
        <GallerySection
          onSelectItem={(item) => setSelectedGalleryItem(item)}
        />

        {/* H. Testimoni Orang Tua & Alumni */}
        <TestimonialsSection />

        {/* I. Berita & Informasi */}
        <NewsSection
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* J. Call to Action Pendaftaran (PPDB) */}
        <RegistrationCTA onOpenPPDB={() => handleOpenPPDB()} />

        {/* K. Kontak, Lokasi & Tanya Jawab (FAQ) */}
        <ContactSection />
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* 4. Floating WhatsApp Assistant */}
      <FloatingWhatsApp />

      {/* 5. Interactive Modals */}
      <PPDBModal
        isOpen={isPPDBOpen}
        onClose={() => setIsPPDBOpen(false)}
        defaultProgramId={selectedProgramId}
      />

      <ProgramDetailModal
        program={detailProgram}
        onClose={() => setDetailProgram(null)}
        onOpenPPDB={(progId) => handleOpenPPDB(progId)}
      />

      <GalleryModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}
