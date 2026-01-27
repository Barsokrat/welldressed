'use client'

import { useState } from 'react'
import { Scissors, Heart, Award, Mail, Phone, MessageCircle, Instagram, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { getTranslation, type Language } from './i18n'
import Image from 'next/image'

const portfolioImages = [
  '1.JPG',
  '2.jpg',
  '3.JPG',
  '4.JPG',
  '5.JPG',
  '6.JPG',
  '7.JPG',
  '8.JPG',
  '9.JPG',
  '10.JPG',
  '11.JPG',
  '12.JPG',
  '13.jpg',
];

export default function HomePage() {
  const [lang, setLang] = useState<Language>('en')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const t = getTranslation(lang)

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ru' : 'en')
  }

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % portfolioImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + portfolioImages.length) % portfolioImages.length)
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(portfolioImages.length / 4))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(portfolioImages.length / 4)) % Math.ceil(portfolioImages.length / 4))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide()
    }
    if (touchStart - touchEnd < -75) {
      prevSlide()
    }
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#FFF8F0] via-[#F5E6E6] to-[#FFD4C4] fabric-texture" lang={lang}>
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
        <button
          onClick={toggleLanguage}
          className="bg-[#CA9E76] backdrop-blur-sm px-6 py-3 sm:px-5 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-base sm:text-sm text-white hover:bg-[#BA8E66]"
        >
          {lang === 'en' ? 'RU' : 'EN'}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-12">
        <div className="w-full text-center" style={{maxWidth: '800px', marginBottom: 'clamp(0px, 3vh, 300px)'}}>
          <div className="mb-8 sm:mb-10 fade-in">
            <div className="inline-block mb-1 sm:mb-2 relative">
              <div className="relative w-[200px] h-[200px] mx-auto">
                <Image
                  src="/logo.png"
                  alt="Yana Boro Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <h1 className="font-bold text-[#CA9E76] mb-4 sm:mb-6" style={{fontSize: 'clamp(3rem, 12vw, 7rem)', lineHeight: '1.1'}}>
              {t.hero.title}
            </h1>
            <div className="w-32 sm:w-40 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6 sm:mb-8"></div>
            <p className="hero-text font-medium text-[#364147] mb-2 sm:mb-3" style={{fontSize: 'clamp(1.5rem, 5vw, 2.5rem)'}}>
              {t.hero.subtitle}
            </p>
            <p className="hero-text text-[#364147]" style={{fontSize: 'clamp(1.25rem, 4vw, 1.75rem)'}}>
              {t.hero.tagline}
            </p>
          </div>

          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg mb-24 sm:mb-32 fade-in delay-100">
            <Award className="w-5 sm:w-6 h-5 sm:h-6 text-[#CA9E76]" />
            <span className="hero-text font-semibold text-base sm:text-lg text-[#364147]">{t.hero.experience}</span>
          </div>

          <div className="fade-in delay-200 mb-4 sm:mb-8">
            <a
              href={`https://wa.me/971526232050?text=${encodeURIComponent(lang === 'en' ? 'Hi! I would like to book a consultation for custom tailoring.' : 'Здравствуйте! Хотела бы записаться на консультацию по пошиву.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button-cta"
            >
              <MessageCircle className="w-6 h-6" />
              <span>{t.hero.cta}</span>
            </a>
          </div>

          {/* Decorative elements - hidden on mobile */}
          <div className="hidden md:block absolute top-20 left-10 text-6xl opacity-10 rotate-12">✂️</div>
          <div className="hidden md:block absolute bottom-20 right-10 text-6xl opacity-10 -rotate-12">🧵</div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="px-8 sm:px-12">
        <div className="w-full mx-auto" style={{maxWidth: '800px'}}>
          <div className="text-center mb-12">
            <h2 className="font-bold text-[#CA9E76] mb-4" style={{fontSize: 'clamp(1.75rem, 4vw, 2.25rem)'}}>
              {t.about.title}
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <p className="text-[#364147] leading-relaxed mb-6" style={{fontSize: '1rem'}}>
              {t.about.description}
            </p>

            <div className="space-y-4 pt-6" style={{borderTop: '2px dashed #E8C4C4'}}>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                <p className="text-[#364147]" style={{fontSize: '1rem'}}>{t.about.location}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                <p className="text-[#364147]" style={{fontSize: '1rem'}}>{t.about.specialty}</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="px-8 sm:px-12">
        <div className="w-full mx-auto" style={{maxWidth: '800px'}}>
          <div className="text-center mb-16">
            <h2 className="font-bold text-[#CA9E76] mb-4" style={{fontSize: 'clamp(1.75rem, 4vw, 2.25rem)'}}>
              {t.services.title}
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 min-[640px]:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: '/icons/1_dresses.png', title: t.services.dresses },
              { icon: '/icons/2_skirts.png', title: t.services.skirts },
              { icon: '/icons/3_blouses.png', title: t.services.blouses },
              { icon: '/icons/4_trousers.png', title: t.services.trousers },
              { icon: '/icons/5_blazers.png', title: t.services.jackets },
              { icon: '/icons/6_corsets.png', title: t.services.corsets },
              { icon: '/icons/7_accessories.png', title: t.services.accessories },
              { icon: '/icons/8_recycling.png', title: t.services.recycling },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[160px] flex flex-col items-center justify-center"
              >
                <div className="mb-3">
                  <img
                    src={service.icon}
                    alt={service.title}
                    style={{ width: '48px', height: '48px', margin: '0 auto' }}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-[#CA9E76] text-base">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Portfolio Section */}
      <section id="portfolio" className="px-8 sm:px-12">
        <div className="w-full mx-auto" style={{maxWidth: '1000px'}}>
          <div className="text-center mb-12">
            <h2 className="font-bold text-[#CA9E76] mb-4" style={{fontSize: 'clamp(1.75rem, 4vw, 2.25rem)'}}>
              {t.portfolio.title}
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-xl text-[#364147]">{t.portfolio.subtitle}</p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(portfolioImages.length / 4) }).map((_, slideIdx) => (
                  <div key={slideIdx} className="min-w-full grid grid-cols-2 md:grid-cols-4 gap-4 px-2">
                    {portfolioImages.slice(slideIdx * 4, slideIdx * 4 + 4).map((img, idx) => {
                      const actualIdx = slideIdx * 4 + idx;
                      return (
                        <div
                          key={actualIdx}
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(actualIdx);
                          }}
                          className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 aspect-square cursor-pointer"
                        >
                          <Image
                            src={`/images/${img}`}
                            alt={`Portfolio piece ${actualIdx + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#CA9E76]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all z-10"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#CA9E76]" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6 mb-2">
              {Array.from({ length: Math.ceil(portfolioImages.length / 4) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentSlide ? 'bg-[#CA9E76] w-8' : 'bg-[#CA9E76]/30 w-2'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
            aria-label="Close"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/${portfolioImages[selectedImage]}`}
              alt={`Portfolio piece ${selectedImage + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {selectedImage + 1} / {portfolioImages.length}
          </div>
        </div>
      )}


      {/* Pricing Section */}
      <section id="pricing" className="px-8 sm:px-12">
        <div className="w-full mx-auto" style={{maxWidth: '800px'}}>
          <div className="text-center mb-16">
            <h2 className="font-bold text-[#CA9E76] mb-4" style={{fontSize: 'clamp(1.75rem, 4vw, 2.25rem)'}}>
              {t.pricing.title}
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-sm text-[#364147]">{lang === 'en' ? 'All prices in AED' : 'Все цены в AED'}</p>
          </div>

          <div className="space-y-6">
            {/* Skirts */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8C4C4]">
                <span className="text-4xl">🎽</span>
                <h3 className="text-2xl font-bold text-[#CA9E76]">{t.services.skirts}</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-start">
                  <span className="text-[#364147]">{t.pricing.skirts.simple}</span>
                  <span className="font-semibold text-[#364147] ml-4">250–350</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#364147]">{t.pricing.skirts.circle}</span>
                  <span className="font-semibold text-[#364147] ml-4">300–400</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#364147]">{t.pricing.skirts.gathered}</span>
                  <span className="font-semibold text-[#364147] ml-4">350–450</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#364147]">{t.pricing.skirts.lined}</span>
                  <span className="font-semibold text-[#364147] ml-4">450–600</span>
                </li>
              </ul>
            </div>

            {/* Dresses */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8C4C4]">
                <span className="text-4xl">👗</span>
                <h3 className="text-2xl font-bold text-[#CA9E76]">{t.services.dresses}</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-start">
                  <span className="text-[#364147]">{t.pricing.dresses.casual}</span>
                  <span className="font-semibold text-[#364147] ml-4">400–600</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#364147]">{t.pricing.dresses.boho}</span>
                  <span className="font-semibold text-[#364147] ml-4">500–700</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#364147]">{t.pricing.dresses.evening}</span>
                  <span className="font-semibold text-[#364147] ml-4">{lang === 'en' ? 'from' : 'от'} 1000</span>
                </li>
              </ul>
            </div>

            {/* Blouses */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8C4C4]">
                <span className="text-4xl">👚</span>
                <h3 className="text-2xl font-bold text-[#CA9E76]">{t.services.blouses}</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-start">
                  <span className="text-[#364147]">{t.pricing.blouses.simple}</span>
                  <span className="font-semibold text-[#364147] ml-4">200–300</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#364147]">{t.pricing.blouses.detailed}</span>
                  <span className="font-semibold text-[#364147] ml-4">300–400</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#364147]">{t.pricing.blouses.corset}</span>
                  <span className="font-semibold text-[#364147] ml-4">350–700</span>
                </li>
              </ul>
            </div>

            {/* Trousers */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8C4C4]">
                <span className="text-4xl">👖</span>
                <h3 className="text-2xl font-bold text-[#CA9E76]">{t.services.trousers}</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-start">
                  <span className="text-[#364147]">{t.pricing.trousers.simple}</span>
                  <span className="font-semibold text-[#364147] ml-4">300–400</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#364147]">{t.pricing.trousers.tailored}</span>
                  <span className="font-semibold text-[#364147] ml-4">{lang === 'en' ? 'from' : 'от'} 600</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#364147]">{t.pricing.trousers.wide}</span>
                  <span className="font-semibold text-[#364147] ml-4">350–500</span>
                </li>
              </ul>
            </div>

            {/* Jackets */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8C4C4]">
                <span className="text-4xl">🧥</span>
                <h3 className="text-2xl font-bold text-[#CA9E76]">{t.services.jackets}</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-start">
                  <span className="text-[#364147]">{t.pricing.jackets.vestSimple}</span>
                  <span className="font-semibold text-[#364147] ml-4">250–350</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#364147]">{t.pricing.jackets.vestLined}</span>
                  <span className="font-semibold text-[#364147] ml-4">350–500</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#364147]">{t.pricing.jackets.jacket}</span>
                  <span className="font-semibold text-[#364147] ml-4">{lang === 'en' ? 'from' : 'от'} 900</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section id="process" className="px-8 sm:px-12">
        <div className="w-full mx-auto" style={{maxWidth: '800px'}}>
          <div className="text-center mb-12">
            <h2 className="font-bold text-[#CA9E76] mb-4" style={{fontSize: 'clamp(1.75rem, 4vw, 2.25rem)'}}>
              {t.process.title}
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <ul className="space-y-6">
              {t.process.steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#CA9E76] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">{idx + 1}</span>
                  </div>
                  <p className="text-[#364147] leading-relaxed" style={{fontSize: '1rem', marginTop: '0.125rem'}}>{step}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* Training Section */}
      <section id="training" className="px-8 sm:px-12">
        <div className="w-full mx-auto" style={{maxWidth: '800px'}}>
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="font-bold text-[#CA9E76] mb-4" style={{fontSize: 'clamp(1.75rem, 4vw, 2.25rem)'}}>
                {t.training.title}
              </h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
              <p className="text-xl text-[#364147]">
                {t.training.subtitle}
              </p>
            </div>

            <p className="text-center text-[#364147] mb-8 text-lg">
              {t.training.description}
            </p>

            <ul className="space-y-4 mb-8">
              {t.training.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#CA9E76] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-[#364147]">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="text-center mb-8 sm:mb-16">
              <a
                href={`https://wa.me/971526232050?text=${encodeURIComponent(lang === 'en' ? 'Hi! I am interested in the sewing training course.' : 'Здравствуйте! Интересует курс обучения шитью.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button-cta"
              >
                <MessageCircle className="w-6 h-6" />
                <span>{t.training.cta}</span>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="px-8 sm:px-12 mb-32">
        <div className="w-full mx-auto" style={{maxWidth: '800px'}}>
          <div className="text-center mb-12">
            <h2 className="font-bold text-[#CA9E76] mb-4" style={{fontSize: 'clamp(1.75rem, 4vw, 2.25rem)'}}>
              {t.contact.title}
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-xl text-[#364147]">
              {t.contact.message}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            <a
              href={`https://wa.me/971526232050?text=${encodeURIComponent(lang === 'en' ? 'Hi! I would like to inquire about your services.' : 'Здравствуйте! Хотела бы узнать о ваших услугах.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-8 h-8 mx-auto mb-3 text-[#CA9E76]" />
              <p className="text-sm text-[#364147]" style={{marginBottom: 0, lineHeight: '1'}}>WhatsApp</p>
              <p className="font-semibold text-[#364147] text-sm" style={{marginTop: '0.25rem'}}>+971 52 623 2050</p>
            </a>

            <a
              href="tel:+971526232050"
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-8 h-8 mx-auto mb-3 text-[#CA9E76]" />
              <p className="text-sm text-[#364147]" style={{marginBottom: 0, lineHeight: '1'}}>{t.contact.phone}</p>
              <p className="font-semibold text-[#364147] text-sm" style={{marginTop: '0.25rem'}}>+971 52 623 2050</p>
            </a>

            <a
              href="mailto:yana@welldressed.ae"
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-8 h-8 mx-auto mb-3 text-[#CA9E76]" />
              <p className="text-sm text-[#364147]" style={{marginBottom: 0, lineHeight: '1'}}>{t.contact.email}</p>
              <p className="font-semibold text-[#364147] text-sm" style={{marginTop: '0.25rem'}}>yana@welldressed.ae</p>
            </a>

            <a
              href="https://www.instagram.com/yanboroboro/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Instagram className="w-8 h-8 mx-auto mb-3 text-[#CA9E76]" />
              <p className="text-sm text-[#364147]" style={{marginBottom: 0, lineHeight: '1'}}>Instagram</p>
              <p className="font-semibold text-[#364147] text-sm" style={{marginTop: '0.25rem'}}>@yanboroboro</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-8 pb-8 px-8 sm:px-12 bg-[#5C4033]">
        <div className="w-full mx-auto text-center" style={{maxWidth: '800px'}}>
          <div className="mb-3">
            <Image
              src="/logo.png"
              alt="WellDressed Logo"
              width={150}
              height={150}
              className="mx-auto opacity-90"
            />
          </div>
          <p className="text-base mb-2 text-[#CA9E76]">{t.footer.tagline}</p>
          <p className="text-xs text-[#CA9E76]/70 mb-0">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  )
}
// Force rebuild
