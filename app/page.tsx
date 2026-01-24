'use client'

import { useState } from 'react'
import { getTranslation, type Language } from './i18n'

export default function HomePage() {
  const [lang, setLang] = useState<Language>('en')
  const t = getTranslation(lang)

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ru' : 'en')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#F5E6E6] to-[#FFD4C4]">
      {/* Language Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleLanguage}
          className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:border-[#D4AF37] transition-all duration-300 font-medium text-[#5C4033]"
        >
          {lang === 'en' ? 'RU' : 'EN'}
        </button>
      </div>

      {/* Pricing Section - NARROW AND COMPACT */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-8">
        <div className="w-full sm:w-[500px] md:w-[600px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C4033] mb-4">
              {t.pricing.title}
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-sm text-[#8B7355]">{lang === 'en' ? 'All prices in AED' : 'Все цены в AED'}</p>
          </div>

          <div className="space-y-6">
            {/* Skirts */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8C4C4]">
                <span className="text-4xl">🎽</span>
                <h3 className="text-2xl font-bold text-[#5C4033]">{t.services.skirts}</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] ">{t.pricing.skirts.simple}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">250–350</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] ">{t.pricing.skirts.circle}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">300–400</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] ">{t.pricing.skirts.gathered}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">350–450</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] ">{t.pricing.skirts.lined}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">450–600</span>
                </li>
              </ul>
            </div>

            {/* Dresses */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8C4C4]">
                <span className="text-4xl">👗</span>
                <h3 className="text-2xl font-bold text-[#5C4033]">{t.services.dresses}</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] ">{t.pricing.dresses.casual}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">400–600</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] ">{t.pricing.dresses.boho}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">500–700</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] ">{t.pricing.dresses.evening}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">{lang === 'en' ? 'from' : 'от'} 1000</span>
                </li>
              </ul>
            </div>

            {/* Blouses */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8C4C4]">
                <span className="text-4xl">👚</span>
                <h3 className="text-2xl font-bold text-[#5C4033]">{t.services.blouses}</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] ">{t.pricing.blouses.simple}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">200–300</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] ">{t.pricing.blouses.detailed}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">300–400</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] ">{t.pricing.blouses.corset}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">350–700</span>
                </li>
              </ul>
            </div>

            {/* Trousers */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8C4C4]">
                <span className="text-4xl">👖</span>
                <h3 className="text-2xl font-bold text-[#5C4033]">{t.services.trousers}</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] ">{t.pricing.trousers.simple}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">300–400</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] ">{t.pricing.trousers.tailored}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">{lang === 'en' ? 'from' : 'от'} 600</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] ">{t.pricing.trousers.wide}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">350–500</span>
                </li>
              </ul>
            </div>

            {/* Jackets */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8C4C4]">
                <span className="text-4xl">🧥</span>
                <h3 className="text-2xl font-bold text-[#5C4033]">{t.services.jackets}</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] ">{t.pricing.jackets.vestSimple}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">250–350</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] ">{t.pricing.jackets.vestLined}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">350–500</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-[#8B7355] ">{t.pricing.jackets.jacket}</span>
                  <span className="font-semibold text-[#5C4033] ml-4">{lang === 'en' ? 'from' : 'от'} 900</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
