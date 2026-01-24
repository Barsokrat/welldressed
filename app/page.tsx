'use client'

import { useState } from 'react'
import { Scissors, Heart, Award, Mail, Phone, MessageCircle } from 'lucide-react'
import { getTranslation, type Language } from './i18n'

export default function HomePage() {
  const [lang, setLang] = useState<Language>('en')
  const t = getTranslation(lang)

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ru' : 'en')
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#FFF8F0] via-[#F5E6E6] to-[#FFD4C4] fabric-texture">
      {/* Language Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleLanguage}
          className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-[#E8C4C4] hover:border-[#D4AF37] transition-all duration-300 font-medium text-[#5C4033]"
        >
          {lang === 'en' ? 'RU' : 'EN'}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-xl mx-auto text-center">
          {/* Logo/Name */}
          <div className="mb-10 fade-in">
            <div className="inline-block">
              <Scissors className="w-20 h-20 mx-auto mb-8 text-[#D4AF37]" strokeWidth={1.5} />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#5C4033] mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8"></div>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#8B7355] mb-3">
              {t.hero.subtitle}
            </p>
            <p className="text-lg sm:text-xl text-[#8B7355]">
              {t.hero.tagline}
            </p>
          </div>

          {/* Experience Badge */}
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-[#E8C4C4] mb-10 fade-in delay-100">
            <Award className="w-6 h-6 text-[#D4AF37]" />
            <span className="font-semibold text-lg text-[#5C4033]">{t.hero.experience}</span>
          </div>

          {/* CTA */}
          <div className="fade-in delay-200">
            <a
              href={`https://wa.me/971526232050?text=${encodeURIComponent(lang === 'en' ? 'Hi! I would like to book a consultation for custom tailoring.' : 'Здравствуйте! Хотела бы записаться на консультацию по пошиву.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#C4A137] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              {t.hero.cta}
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-10 rotate-12">✂️</div>
        <div className="absolute bottom-20 right-10 text-6xl opacity-10 -rotate-12">🧵</div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C4033] mb-4">
              {t.about.title}
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-[#E8C4C4]">
            <div className="flex items-start gap-4 mb-6">
              <Heart className="w-8 h-8 text-[#E8C4C4] flex-shrink-0 mt-1" />
              <p className="text-lg text-[#5C4033] leading-relaxed">
                {t.about.description}
              </p>
            </div>

            <div className="space-y-4 mt-8 pt-8 border-t border-[#E8C4C4]">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2"></div>
                <p className="text-[#8B7355]">{t.about.location}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2"></div>
                <p className="text-[#8B7355]">{t.about.specialty}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C4033] mb-4">
              {t.services.title}
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: '👗', title: t.services.dresses },
              { icon: '🎽', title: t.services.skirts },
              { icon: '👚', title: t.services.blouses },
              { icon: '👖', title: t.services.trousers },
              { icon: '🧥', title: t.services.jackets },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-[#E8C4C4] hover:border-[#D4AF37] transition-all duration-300 hover:scale-105 w-36"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-[#5C4033] text-sm">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C4033] mb-4">
              {t.pricing.title}
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-sm text-[#8B7355]">{lang === 'en' ? 'All prices in AED' : 'Все цены в AED'}</p>
          </div>

          <div className="space-y-6">
            {/* Skirts */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#E8C4C4]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8C4C4]">
                <span className="text-4xl">🎽</span>
                <h3 className="text-2xl font-serif font-bold text-[#5C4033]">{t.services.skirts}</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] flex-1">{t.pricing.skirts.simple}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">250–350</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] flex-1">{t.pricing.skirts.circle}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">300–400</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] flex-1">{t.pricing.skirts.gathered}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">350–450</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] flex-1">{t.pricing.skirts.lined}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">450–600</span>
                </li>
              </ul>
            </div>

            {/* Dresses */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#E8C4C4]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8C4C4]">
                <span className="text-4xl">👗</span>
                <h3 className="text-2xl font-serif font-bold text-[#5C4033]">{t.services.dresses}</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] flex-1">{t.pricing.dresses.casual}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">400–600</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] flex-1">{t.pricing.dresses.boho}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">500–700</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] flex-1">{t.pricing.dresses.evening}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">{lang === 'en' ? 'from' : 'от'} 1000</span>
                </li>
              </ul>
            </div>

            {/* Blouses */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#E8C4C4]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8C4C4]">
                <span className="text-4xl">👚</span>
                <h3 className="text-2xl font-serif font-bold text-[#5C4033]">{t.services.blouses}</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] flex-1">{t.pricing.blouses.simple}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">200–300</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] flex-1">{t.pricing.blouses.detailed}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">300–400</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] flex-1">{t.pricing.blouses.corset}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">350–700</span>
                </li>
              </ul>
            </div>

            {/* Trousers */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#E8C4C4]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8C4C4]">
                <span className="text-4xl">👖</span>
                <h3 className="text-2xl font-serif font-bold text-[#5C4033]">{t.services.trousers}</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] flex-1">{t.pricing.trousers.simple}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">300–400</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] flex-1">{t.pricing.trousers.tailored}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">{lang === 'en' ? 'from' : 'от'} 600</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] flex-1">{t.pricing.trousers.wide}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">350–500</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Jackets - Full Width */}
          <div className="mt-8 bg-white rounded-3xl shadow-xl p-8 border border-[#E8C4C4] max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8C4C4]">
              <span className="text-4xl">🧥</span>
              <h3 className="text-2xl font-serif font-bold text-[#5C4033]">{t.services.jackets}</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex justify-between items-start">
                <span className="text-[#8B7355] flex-1">{t.pricing.jackets.vestSimple}</span>
                <span className="font-semibold text-[#5C4033] ml-4">250–350</span>
              </li>
              <li className="flex justify-between items-start">
                <span className="text-[#8B7355] flex-1">{t.pricing.jackets.vestLined}</span>
                <span className="font-semibold text-[#5C4033] ml-4">350–500</span>
              </li>
              <li className="flex justify-between items-start">
                <span className="text-[#8B7355] flex-1">{t.pricing.jackets.jacket}</span>
                <span className="font-semibold text-[#5C4033] ml-4">{lang === 'en' ? 'from' : 'от'} 900</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5E6E6] to-[#FFD4C4]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-[#D4AF37]">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🎓</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5C4033] mb-4">
                {t.training.title}
              </h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
              <p className="text-xl text-[#8B7355]">
                {t.training.subtitle}
              </p>
            </div>

            <p className="text-center text-[#5C4033] mb-8 text-lg">
              {t.training.description}
            </p>

            <ul className="space-y-4 mb-8">
              {t.training.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-[#5C4033]">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <a
                href={`https://wa.me/971526232050?text=${encodeURIComponent(lang === 'en' ? 'Hi! I am interested in the sewing training course.' : 'Здравствуйте! Интересует курс обучения шитью.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#C4A137] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                {t.training.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C4033] mb-4">
              {t.contact.title}
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-xl text-[#8B7355]">
              {t.contact.message}
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="tel:+971526232050"
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-[#E8C4C4] hover:border-[#D4AF37] transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-8 h-8 mx-auto mb-3 text-[#D4AF37]" />
              <p className="text-sm text-[#8B7355] mb-2">{t.contact.phone}</p>
              <p className="font-semibold text-[#5C4033]">+971 52 623 2050</p>
            </a>

            <a
              href="mailto:yana@welldressed.ae"
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-[#E8C4C4] hover:border-[#D4AF37] transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-8 h-8 mx-auto mb-3 text-[#D4AF37]" />
              <p className="text-sm text-[#8B7355] mb-2">{t.contact.email}</p>
              <p className="font-semibold text-[#5C4033]">yana@welldressed.ae</p>
            </a>

            <a
              href={`https://wa.me/971526232050?text=${encodeURIComponent(lang === 'en' ? 'Hi! I would like to inquire about your services.' : 'Здравствуйте! Хотела бы узнать о ваших услугах.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-[#E8C4C4] hover:border-[#D4AF37] transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-8 h-8 mx-auto mb-3 text-[#D4AF37]" />
              <p className="text-sm text-[#8B7355] mb-2">{t.contact.whatsapp}</p>
              <p className="font-semibold text-[#5C4033]">+971 52 623 2050</p>
            </a>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-[#E8C4C4]">
            <p className="text-[#8B7355]">{t.contact.location}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-[#5C4033] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg mb-2">{t.footer.tagline}</p>
          <p className="text-sm text-white/70">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  )
}
