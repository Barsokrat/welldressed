'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getTranslation, type Language } from '../i18n'

const blogPosts = [
  {
    slug: 'sewing-trends-uae-2025',
    titleRu: 'Швейные тенденции в ОАЭ 2025: что носят в Абу-Даби',
    titleEn: 'Sewing Trends in UAE 2025: What\'s Worn in Abu Dhabi',
    excerptRu: 'Узнайте о самых актуальных швейных тенденциях в ОАЭ и Абу-Даби. Пошив одежды на заказ становится всё популярнее среди жителей столицы.',
    excerptEn: 'Discover the most relevant sewing trends in UAE and Abu Dhabi. Custom tailoring is becoming increasingly popular among capital residents.',
    date: '2025-01-28',
    image: '/images/1.JPG'
  },
  {
    slug: 'custom-clothing-abu-dhabi',
    titleRu: 'Одежда на заказ в Абу-Даби: плюсы пошива',
    titleEn: 'Custom Clothing in Abu Dhabi: Benefits of Bespoke Tailoring',
    excerptRu: 'Почему швея в Абу-Даби — это лучший выбор для создания уникального гардероба. Индивидуальный пошив одежды в ОАЭ.',
    excerptEn: 'Why a seamstress in Abu Dhabi is the best choice for creating a unique wardrobe. Bespoke clothing tailoring in UAE.',
    date: '2025-01-27',
    image: '/images/2.jpg'
  },
  {
    slug: 'tailoring-services-uae',
    titleRu: 'Услуги швеи в ОАЭ: от повседневной одежды до вечерних нарядов',
    titleEn: 'Tailoring Services in UAE: From Casual Wear to Evening Gowns',
    excerptRu: 'Профессиональный пошив одежды в Абу-Даби. Услуги швеи высокого класса: платья, юбки, блузки на заказ в ОАЭ.',
    excerptEn: 'Professional clothing tailoring in Abu Dhabi. High-class seamstress services: dresses, skirts, blouses made to order in UAE.',
    date: '2025-01-26',
    image: '/images/3.JPG'
  }
]

export default function BlogPage() {
  const [lang, setLang] = useState<Language>('en')
  const t = getTranslation(lang)

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ru' : 'en')
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#FFF8F0] via-[#F5E6E6] to-[#FFD4C4] fabric-texture" lang={lang}>
      {/* Language Toggle */}
      <div style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 50
      }}>
        <button
          onClick={toggleLanguage}
          style={{
            background: 'linear-gradient(to right, #CA9E76, #BA8E66)',
            border: 'none',
            borderRadius: '9999px',
            padding: '0.4rem 0.9rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
          }}
        >
          {lang === 'en' ? 'RU' : 'EN'}
        </button>
      </div>

      {/* Header */}
      <div className="px-8 sm:px-12 pt-24 pb-12">
        <div className="w-full mx-auto" style={{maxWidth: '900px'}}>
          <Link href="/" className="inline-flex items-center gap-2 text-[#CA9E76] hover:text-[#BA8E66] mb-8 transition-colors">
            <span>←</span>
            <span>{lang === 'en' ? 'Back to Home' : 'Вернуться на главную'}</span>
          </Link>

          <h1 className="font-bold text-[#CA9E76] mb-4" style={{fontSize: 'clamp(2.5rem, 8vw, 4rem)'}}>
            {lang === 'en' ? 'Blog' : 'Блог'}
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mb-6"></div>
          <p className="text-xl text-[#364147]">
            {lang === 'en'
              ? 'Insights about tailoring, fashion trends, and bespoke clothing in Abu Dhabi and UAE'
              : 'Статьи о пошиве одежды, модных тенденциях и индивидуальном пошиве в Абу-Даби и ОАЭ'
            }
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <section className="px-8 sm:px-12 pb-32">
        <div className="w-full mx-auto grid" style={{maxWidth: '900px', gap: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'}}>
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden flex flex-col group no-underline"
              style={{textDecoration: 'none'}}
            >
              <div className="aspect-[4/3] relative overflow-hidden" style={{borderRadius: '14px', margin: '4px'}}>
                <img
                  src={post.image}
                  alt={lang === 'en' ? post.titleEn : post.titleRu}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  style={{borderRadius: '14px'}}
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-xs text-[#CA9E76] mb-2">
                  {new Date(post.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'ru-RU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <h2 className="blog-post-title font-bold text-[#CA9E76] mb-2 leading-snug">
                  {lang === 'en' ? post.titleEn : post.titleRu}
                </h2>
                <p className="text-xs text-[#364147] leading-relaxed line-clamp-3 flex-1">
                  {lang === 'en' ? post.excerptEn : post.excerptRu}
                </p>
                <div className="mt-3 text-xs text-[#CA9E76] font-semibold">
                  {lang === 'en' ? 'Read more →' : 'Читать далее →'}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
