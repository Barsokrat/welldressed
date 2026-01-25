'use client'

import { useState } from 'react'
import { Scissors, Heart, Award, Mail, Phone, MessageCircle, Instagram } from 'lucide-react'
import { getTranslation, type Language } from './i18n'
import Image from 'next/image'

export default function HomePage() {
  const [lang, setLang] = useState<Language>('en')
  const t = getTranslation(lang)

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ru' : 'en')
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#FFF8F0] via-[#F5E6E6] to-[#FFD4C4] fabric-texture" lang={lang}>
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
        <button
          onClick={toggleLanguage}
          className="bg-white/90 backdrop-blur-sm px-6 py-3 sm:px-5 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-base sm:text-sm text-[#364147]"
        >
          {lang === 'en' ? 'RU' : 'EN'}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-12">
        <div className="w-full text-center" style={{maxWidth: '700px', marginBottom: 'clamp(0px, 15vh, 300px)'}}>
          <div className="mb-8 sm:mb-10 fade-in">
            <div className="inline-block mb-6 sm:mb-8">
              <Image
                src="/logo.png"
                alt="WellDressed Logo"
                width={200}
                height={200}
                className="mx-auto"
                priority
              />
            </div>
            <h1 className="font-bold text-[#CA9E76] mb-4 sm:mb-6 leading-tight" style={{fontSize: 'clamp(3rem, 12vw, 7rem)'}}>
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

          <div className="fade-in delay-200 mb-12 sm:mb-20">
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
            <div className="flex items-start gap-4 mb-6">
              <Heart className="w-8 h-8 text-[#E8C4C4] flex-shrink-0 mt-0.5" />
              <p className="text-[#364147] leading-relaxed" style={{fontSize: '1rem'}}>
                {t.about.description}
              </p>
            </div>

            <div className="space-y-4 mt-10 pt-6" style={{borderTop: '2px dashed #E8C4C4'}}>
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
              { icon: '👗', title: t.services.dresses },
              { icon: '🎽', title: t.services.skirts },
              { icon: '👚', title: t.services.blouses },
              { icon: '👖', title: t.services.trousers },
              { icon: '🧥', title: t.services.jackets },
              { icon: '🩱', title: t.services.corsets },
              { icon: '👜', title: t.services.accessories },
              { icon: '♻️', title: t.services.recycling },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[160px] flex flex-col items-center justify-center"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-[#CA9E76] text-base">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>


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


      {/* Training Section */}
      <section id="training" className="px-8 sm:px-12">
        <div className="w-full mx-auto" style={{maxWidth: '800px'}}>
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🎓</div>
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
      <section id="contact" className="px-8 sm:px-12 pb-16">
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
              <p className="text-sm text-[#364147] mb-1">WhatsApp</p>
              <p className="font-semibold text-[#364147] text-sm">+971 52 623 2050</p>
            </a>

            <a
              href="tel:+971526232050"
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-8 h-8 mx-auto mb-3 text-[#CA9E76]" />
              <p className="text-sm text-[#364147] mb-1">{t.contact.phone}</p>
              <p className="font-semibold text-[#364147] text-sm">+971 52 623 2050</p>
            </a>

            <a
              href="mailto:yana@welldressed.ae"
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-8 h-8 mx-auto mb-3 text-[#CA9E76]" />
              <p className="text-sm text-[#364147] mb-1">{t.contact.email}</p>
              <p className="font-semibold text-[#364147] text-sm">yana@welldressed.ae</p>
            </a>

            <a
              href="https://www.instagram.com/yanboroboro/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Instagram className="w-8 h-8 mx-auto mb-3 text-[#CA9E76]" />
              <p className="text-sm text-[#364147] mb-1">Instagram</p>
              <p className="font-semibold text-[#364147] text-sm">@yanboroboro</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-8 pb-8 px-8 sm:px-12 bg-[#5C4033]">
        <div className="w-full mx-auto text-center" style={{maxWidth: '800px'}}>
          <div className="mb-2">
            <Image
              src="/logo.png"
              alt="WellDressed Logo"
              width={150}
              height={150}
              className="mx-auto opacity-90"
            />
          </div>
          <p className="text-base mb-2 text-[#CA9E76]">{t.footer.tagline}</p>
          <p className="text-xs text-[#CA9E76]/70 mb-4">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  )
}
