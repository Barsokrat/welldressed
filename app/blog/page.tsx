'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getTranslation, type Language } from '../i18n'

const blogPosts = [
  {
    slug: 'fabric-shopping-abu-dhabi',
    titleRu: 'Где купить ткани в Абу-Даби: гид по лучшим местам',
    titleEn: 'Where to Buy Fabrics in Abu Dhabi: Guide to Best Places',
    excerptRu: 'Секреты выбора тканей в Абу-Даби: лучшие магазины, лайфхаки и советы от профессионалов.',
    excerptEn: 'Secrets of choosing fabrics in Abu Dhabi: best stores, life hacks and tips from professionals.',
    date: '2026-02-01',
    image: '/images/blog/fabric-shopping.jpeg'
  },
  {
    slug: 'ladies-tailoring-abu-dhabi',
    titleRu: 'Пошив женской одежды в Абу-Даби: искусство создавать красоту',
    titleEn: 'Ladies Tailoring in Abu Dhabi: The Art of Creating Beauty',
    excerptRu: 'Профессиональный пошив женской одежды в Абу-Даби. Портниха для женщин создаёт уникальные наряды идеальной посадки.',
    excerptEn: 'Professional ladies tailoring in Abu Dhabi. Women\'s tailor creates unique outfits with perfect fit.',
    date: '2026-01-31',
    image: '/images/4.JPG'
  },
  {
    slug: 'womens-tailor-abu-dhabi',
    titleRu: 'Мастер по женской одежде в Абу-Даби: как найти идеальную посадку',
    titleEn: 'Women\'s Tailor Abu Dhabi: Finding the Perfect Fit',
    excerptRu: 'Как выбрать мастера по женской одежде в Абу-Даби. Всё о пошиве женской одежды на заказ - от консультации до примерок.',
    excerptEn: 'How to choose a women\'s tailor in Abu Dhabi. Everything about custom ladies tailoring - from consultation to fittings.',
    date: '2026-01-30',
    image: '/images/5.JPG'
  },
  {
    slug: 'tailor-abu-dhabi-ladies',
    titleRu: 'Портной в Абу-Даби для женщин: индивидуальная женская мода',
    titleEn: 'Tailor in Abu Dhabi for Ladies: Custom Women\'s Fashion',
    excerptRu: 'Индивидуальная женская мода в Абу-Даби. Портной для женщин создаёт эксклюзивную одежду для любого случая.',
    excerptEn: 'Custom women\'s fashion in Abu Dhabi. Tailor for ladies creates exclusive clothing for any occasion.',
    date: '2026-01-29',
    image: '/images/6.JPG'
  },
  {
    slug: 'sewing-trends-uae-2026',
    titleRu: 'Швейные тенденции в ОАЭ 2026: что носят в Абу-Даби',
    titleEn: 'Sewing Trends in UAE 2026: What\'s Worn in Abu Dhabi',
    excerptRu: 'Узнайте о самых актуальных швейных тенденциях в ОАЭ и Абу-Даби. Пошив одежды на заказ становится всё популярнее среди жителей столицы.',
    excerptEn: 'Discover the most relevant sewing trends in UAE and Abu Dhabi. Custom tailoring is becoming increasingly popular among capital residents.',
    date: '2026-01-28',
    image: '/images/1.JPG'
  },
  {
    slug: 'custom-clothing-abu-dhabi',
    titleRu: 'Одежда на заказ в Абу-Даби: плюсы пошива',
    titleEn: 'Custom Clothing in Abu Dhabi: Benefits of Bespoke Tailoring',
    excerptRu: 'Почему швея в Абу-Даби – это лучший выбор для создания уникального гардероба. Индивидуальный пошив одежды в ОАЭ.',
    excerptEn: 'Why a seamstress in Abu Dhabi is the best choice for creating a unique wardrobe. Bespoke clothing tailoring in UAE.',
    date: '2026-01-27',
    image: '/images/2.jpg'
  },
  {
    slug: 'tailoring-services-uae',
    titleRu: 'Услуги швеи в ОАЭ: от повседневной одежды до вечерних нарядов',
    titleEn: 'Tailoring Services in UAE: From Casual Wear to Evening Gowns',
    excerptRu: 'Профессиональный пошив одежды в Абу-Даби. Услуги швеи высокого класса: платья, юбки, блузки на заказ в ОАЭ.',
    excerptEn: 'Professional clothing tailoring in Abu Dhabi. High-class seamstress services: dresses, skirts, blouses made to order in UAE.',
    date: '2026-01-26',
    image: '/images/3.JPG'
  }
]

export default function BlogPage() {
  const [lang, setLang] = useState<Language>('en')
  const t = getTranslation(lang)

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang) {
      setLang(savedLang)
    }
  }, [])

  const toggleLanguage = () => {
    setLang(prev => {
      const newLang = prev === 'en' ? 'ru' : 'en'
      localStorage.setItem('language', newLang)
      return newLang
    })
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

      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 transition-all duration-300"
        style={{
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 50,
          background: 'linear-gradient(to right, #CA9E76, #BA8E66)',
          color: 'white',
          padding: '0.4rem 0.9rem',
          borderRadius: '9999px',
          fontSize: '0.875rem',
          fontWeight: '600',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          textDecoration: 'none'
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
        <span>←</span>
        <span>{lang === 'en' ? 'Back to Home' : 'Вернуться на главную'}</span>
      </Link>

      {/* Header */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-8 sm:px-12">
        <div className="w-full text-center" style={{maxWidth: '900px'}}>
          <h1 className="font-bold text-[#CA9E76] mb-4" style={{fontSize: 'clamp(2.5rem, 8vw, 4rem)'}}>
            {lang === 'en' ? 'Blog' : 'Блог'}
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mb-6 mx-auto"></div>
          <p className="text-xl text-[#364147]">
            {lang === 'en'
              ? 'Insights about tailoring, fashion trends, and bespoke clothing in Abu Dhabi and UAE'
              : 'Статьи о пошиве одежды, модных тенденциях и индивидуальном пошиве в Абу-Даби и ОАЭ'
            }
          </p>
        </div>
      </section>

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
              <div style={{padding: '4px 4px 12px 4px'}} className="flex flex-col flex-1">
                <p style={{marginBottom: '6px'}} className="text-xs text-[#CA9E76]">
                  {new Date(post.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'ru-RU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <h2 style={{margin: '0 0 4px 0', lineHeight: '1.3'}} className="blog-post-title font-bold text-[#CA9E76]">
                  {lang === 'en' ? post.titleEn : post.titleRu}
                </h2>
                <p style={{marginBottom: '8px', lineHeight: '1.4'}} className="blog-post-excerpt text-[#364147] line-clamp-2 flex-1">
                  {lang === 'en' ? post.excerptEn : post.excerptRu}
                </p>
                <div className="text-xs text-[#CA9E76] font-semibold">
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
