'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Mail, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { getTranslation, type Language } from '../../i18n'

export default function BlogPost() {
  const [lang, setLang] = useState<Language>('en')

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

  const contentRu = {
    title: 'Швейные тенденции в ОАЭ 2026: что носят в Абу-Даби',
    date: '28 января 2026',
    content: `
      <p>Объединенные Арабские Эмираты и особенно Абу-Даби давно зарекомендовали себя как центр моды и стиля на Ближнем Востоке. В 2026 году <strong>пошив одежды на заказ</strong> в ОАЭ переживает настоящий бум, и всё больше жителей столицы выбирают индивидуальный подход к созданию гардероба.</p>

      <h2>Почему швея в Абу-Даби – это не просто тренд</h2>

      <p>Современная <strong>швея в Абу-Даби</strong> – это высококвалифицированный специалист, который сочетает традиционные техники с инновационными подходами. <strong>Индивидуальный пошив одежды в ОАЭ</strong> позволяет создавать уникальные наряды, которые идеально сидят по фигуре и отражают личность клиента.</p>

      <h2>Главные тренды пошива одежды в ОАЭ в 2026 году</h2>

      <h3>1. Устойчивая мода и переработка</h3>
      <p>Жители Абу-Даби всё чаще обращаются к швеям для переделки и обновления существующей одежды. <strong>Пошив одежды</strong> с использованием экологичных материалов и переработка винтажных вещей становятся особенно популярными.</p>

      <h3>2. Минимализм с восточными акцентами</h3>
      <p><strong>Одежда на заказ в ОАЭ</strong> часто сочетает лаконичные современные силуэты с традиционными арабскими элементами – вышивкой, драпировками, использованием роскошных тканей.</p>

      <h3>3. Идеальная посадка</h3>
      <p>В климате ОАЭ особенно важно, чтобы одежда была не только красивой, но и комфортной. Профессиональная <strong>швея Абу-Даби</strong> учитывает особенности местного климата, создавая наряды из дышащих тканей с безупречной посадкой.</p>

      <h2>Услуги индивидуального пошива в Абу-Даби</h2>

      <p><strong>Пошив одежды в Абу-Даби</strong> включает широкий спектр услуг:</p>
      <ul>
        <li>Вечерние и коктейльные платья для светских мероприятий</li>
        <li>Деловые костюмы и офисная одежда</li>
        <li>Повседневные комплекты с учетом климата ОАЭ</li>
        <li>Свадебные и праздничные наряды</li>
        <li>Переделка и реставрация любимых вещей</li>
      </ul>

      <h2>Почему выбирают индивидуальный пошив одежды в ОАЭ</h2>

      <p>Обращаясь к опытной <strong>швее в Абу-Даби</strong>, вы получаете:</p>
      <ul>
        <li><strong>Уникальность</strong> – ваша одежда создается специально для вас</li>
        <li><strong>Идеальную посадку</strong> – все параметры учитываются индивидуально</li>
        <li><strong>Качество</strong> – профессиональный <strong>пошив одежды</strong> гарантирует долговечность</li>
        <li><strong>Выбор материалов</strong> – вы сами выбираете ткани и фурнитуру</li>
        <li><strong>Экономию времени</strong> – не нужно искать идеальную вещь по магазинам</li>
      </ul>

      <h2>Заключение</h2>

      <p><strong>Одежда на заказ в ОАЭ</strong> – это не роскошь, а разумный выбор современного человека, который ценит качество, комфорт и индивидуальность. Если вы ищете профессиональную <strong>швею в Абу-Даби</strong> для создания уникального гардероба, индивидуальный <strong>пошив одежды</strong> откроет для вас мир бесконечных возможностей.</p>

      <p>Позвольте себе роскошь носить одежду, созданную специально для вас. <strong>Пошив одежды в Абу-Даби</strong> – это инвестиция в ваш стиль и комфорт.</p>
    `
  }

  const contentEn = {
    title: 'Sewing Trends in UAE 2026: What\'s Worn in Abu Dhabi',
    date: 'January 28, 2026',
    content: `
      <p>The United Arab Emirates, and especially Abu Dhabi, have long established themselves as a center of fashion and style in the Middle East. In 2026, <strong>custom clothing tailoring</strong> in the UAE is experiencing a real boom, with more and more capital residents choosing an individual approach to creating their wardrobe.</p>

      <h2>Why a seamstress in Abu Dhabi is more than just a trend</h2>

      <p>A modern <strong>seamstress in Abu Dhabi</strong> is a highly qualified specialist who combines traditional techniques with innovative approaches. <strong>Bespoke clothing tailoring in UAE</strong> allows creating unique outfits that fit perfectly and reflect the client's personality.</p>

      <h2>Main clothing tailoring trends in UAE in 2026</h2>

      <h3>1. Sustainable fashion and upcycling</h3>
      <p>Abu Dhabi residents increasingly turn to seamstresses for alterations and updates of existing clothing. <strong>Clothing tailoring</strong> using eco-friendly materials and upcycling vintage items are becoming especially popular.</p>

      <h3>2. Minimalism with Eastern accents</h3>
      <p><strong>Custom clothing in UAE</strong> often combines laconic modern silhouettes with traditional Arabic elements – embroidery, draping, use of luxurious fabrics.</p>

      <h3>3. Perfect fit</h3>
      <p>In the UAE climate, it's especially important that clothing is not only beautiful but also comfortable. A professional <strong>Abu Dhabi seamstress</strong> considers the local climate's peculiarities, creating outfits from breathable fabrics with impeccable fit.</p>

      <h2>Bespoke tailoring services in Abu Dhabi</h2>

      <p><strong>Clothing tailoring in Abu Dhabi</strong> includes a wide range of services:</p>
      <ul>
        <li>Evening and cocktail dresses for social events</li>
        <li>Business suits and office wear</li>
        <li>Everyday outfits considering UAE climate</li>
        <li>Wedding and festive attire</li>
        <li>Alterations and restoration of favorite items</li>
      </ul>

      <h2>Why choose bespoke clothing tailoring in UAE</h2>

      <p>By turning to an experienced <strong>seamstress in Abu Dhabi</strong>, you get:</p>
      <ul>
        <li><strong>Uniqueness</strong> – your clothing is created specifically for you</li>
        <li><strong>Perfect fit</strong> – all parameters are individually considered</li>
        <li><strong>Quality</strong> – professional <strong>clothing tailoring</strong> guarantees durability</li>
        <li><strong>Material choice</strong> – you choose fabrics and accessories yourself</li>
        <li><strong>Time saving</strong> – no need to search for the perfect item in stores</li>
      </ul>

      <h2>Conclusion</h2>

      <p><strong>Custom clothing in UAE</strong> is not a luxury, but a reasonable choice of a modern person who values quality, comfort and individuality. If you're looking for a professional <strong>seamstress in Abu Dhabi</strong> to create a unique wardrobe, bespoke <strong>clothing tailoring</strong> will open a world of endless possibilities for you.</p>

      <p>Allow yourself the luxury of wearing clothes created specifically for you. <strong>Clothing tailoring in Abu Dhabi</strong> is an investment in your style and comfort.</p>
    `
  }

  const content = lang === 'en' ? contentEn : contentRu

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
        href="/blog"
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
        <span>{lang === 'en' ? 'Back to Blog' : 'Вернуться к блогу'}</span>
      </Link>

      <article className="px-8 sm:px-12 pt-16 pb-32">
        <div className="w-full mx-auto" style={{maxWidth: '800px'}}>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="aspect-[16/9] relative overflow-hidden" style={{borderRadius: '1.5rem 1.5rem 0 0'}}>
              <Image
                src="/images/1.JPG"
                alt={content.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8 md:p-12">
              <p className="text-sm text-[#CA9E76] mb-4">{content.date}</p>
              <h1 className="font-bold text-[#CA9E76] mb-8" style={{fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', lineHeight: '1.2'}}>
                {content.title}
              </h1>

              <div
                className="prose prose-lg max-w-none"
                style={{
                  color: '#364147',
                  fontSize: '1.125rem',
                  lineHeight: '1.75'
                }}
                dangerouslySetInnerHTML={{ __html: content.content }}
              />

              {/* Social Media Links */}
              <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #F5E6E6' }}>
                <p style={{ fontSize: '0.875rem', color: '#CA9E76', marginBottom: '1rem', fontWeight: '600' }}>
                  {lang === 'en' ? 'Follow us and get in touch:' : 'Подпишитесь и свяжитесь с нами:'}
                </p>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <a
                    href="https://instagram.com/yanboroboro"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'linear-gradient(to right, #CA9E76, #BA8E66)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      transition: 'opacity 0.2s, box-shadow 0.2s',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      opacity: 1
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '0.85';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    }}
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://wa.me/971526232050"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'linear-gradient(to right, #CA9E76, #BA8E66)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      transition: 'opacity 0.2s, box-shadow 0.2s',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      opacity: 1
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '0.85';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    }}
                  >
                    <MessageCircle size={24} />
                  </a>
                  <a
                    href="mailto:yana@welldressed.ae"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'linear-gradient(to right, #CA9E76, #BA8E66)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      transition: 'opacity 0.2s, box-shadow 0.2s',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      opacity: 1
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '0.85';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    }}
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <a
                  href="https://wa.me/971526232050?text=Hello!%20I%27d%20like%20to%20order%20custom%20tailoring"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(to right, #CA9E76, #BA8E66)',
                    color: 'white',
                    padding: '1rem 2.5rem',
                    borderRadius: '9999px',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    textDecoration: 'none',
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
                  {lang === 'en' ? 'Order Custom Tailoring' : 'Заказать пошив'}
                </a>
              </div>

              {/* Related Articles */}
              <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #F5E6E6' }}>
                <h3 style={{ color: '#CA9E76', fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  {lang === 'en' ? 'Read Also' : 'Читайте также'}
                </h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <Link href="/blog/ladies-tailoring-abu-dhabi" style={{ display: 'block', padding: '1rem', borderRadius: '12px', background: '#FFF8F0', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'; }}>
                    <p style={{ color: '#CA9E76', fontWeight: '600', marginBottom: '0.25rem' }}>
                      {lang === 'en' ? 'Ladies Tailoring in Abu Dhabi: The Art of Creating Beauty' : 'Пошив женской одежды в Абу-Даби: искусство создавать красоту'}
                    </p>
                    <p style={{ color: '#364147', fontSize: '0.875rem', margin: 0 }}>
                      {lang === 'en' ? 'Professional ladies tailoring' : 'Профессиональный пошив женской одежды'}
                    </p>
                  </Link>
                  <Link href="/blog/custom-clothing-abu-dhabi" style={{ display: 'block', padding: '1rem', borderRadius: '12px', background: '#FFF8F0', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'; }}>
                    <p style={{ color: '#CA9E76', fontWeight: '600', marginBottom: '0.25rem' }}>
                      {lang === 'en' ? 'Custom Clothing in Abu Dhabi: Benefits of Bespoke Tailoring' : 'Одежда на заказ в Абу-Даби: плюсы пошива'}
                    </p>
                    <p style={{ color: '#364147', fontSize: '0.875rem', margin: 0 }}>
                      {lang === 'en' ? 'Why a seamstress in Abu Dhabi is the best choice' : 'Почему швея в Абу-Даби - это лучший выбор'}
                    </p>
                  </Link>
                  <Link href="/blog/tailoring-services-uae" style={{ display: 'block', padding: '1rem', borderRadius: '12px', background: '#FFF8F0', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'; }}>
                    <p style={{ color: '#CA9E76', fontWeight: '600', marginBottom: '0.25rem' }}>
                      {lang === 'en' ? 'Tailoring Services in UAE: From Casual Wear to Evening Gowns' : 'Услуги швеи в ОАЭ: от повседневной одежды до вечерних нарядов'}
                    </p>
                    <p style={{ color: '#364147', fontSize: '0.875rem', margin: 0 }}>
                      {lang === 'en' ? 'Professional clothing tailoring in Abu Dhabi' : 'Профессиональный пошив одежды в Абу-Даби'}
                    </p>
                  </Link>
                </div>
              </div>

              {/* Navigation to Next/Prev Posts */}
              <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #F5E6E6', display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <div style={{ flex: '1', minWidth: '120px' }}>
                  <Link href="/blog/tailor-abu-dhabi-ladies" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#CA9E76', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', transition: 'transform 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(-4px)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; }}>
                    <ChevronLeft size={20} />
                    {lang === 'en' ? 'Previous Post' : 'Предыдущая статья'}
                  </Link>
                </div>
                <Link href="/blog" style={{ color: '#CA9E76', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', flex: '0 0 auto' }}>
                  {lang === 'en' ? 'All Posts' : 'Все статьи'}
                </Link>
                <div style={{ flex: '1', minWidth: '120px', display: 'flex', justifyContent: 'flex-end' }}>
                  <Link href="/blog/custom-clothing-abu-dhabi" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#CA9E76', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', transition: 'transform 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(4px)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; }}>
                    {lang === 'en' ? 'Next Post' : 'Следующая статья'}
                    <ChevronRight size={20} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </article>

      <style jsx global>{`
        .prose h2 {
          color: #CA9E76;
          font-size: 1.75rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose h3 {
          color: #CA9E76;
          font-size: 1.375rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .prose p {
          margin-bottom: 1.25rem;
        }
        .prose ul {
          margin-top: 1rem;
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose a {
          color: #CA9E76;
          text-decoration: underline;
          transition: opacity 0.2s;
        }
        .prose a:hover {
          opacity: 0.8;
        }
        .prose strong {
          color: #CA9E76;
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}
