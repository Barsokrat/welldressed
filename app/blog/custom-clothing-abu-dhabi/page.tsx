'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
    title: 'Одежда на заказ в Абу-Даби: преимущества индивидуального пошива',
    date: '27 января 2026',
    content: `
      <p>В эпоху массового производства <strong>одежда на заказ в ОАЭ</strong> становится символом истинного стиля и индивидуальности. Всё больше жителей столицы обращаются к услугам профессиональных мастеров, понимая ценность индивидуального подхода.</p>

      <h2>Что такое индивидуальный пошив одежды</h2>

      <p><strong>Пошив одежды на заказ</strong> — это процесс создания уникального предмета гардероба с нуля, полностью адаптированного под ваши параметры, предпочтения и стиль жизни. Опытная <strong>швея в Абу-Даби</strong> не просто шьёт одежду — она создаёт произведение искусства, которое идеально подходит именно вам.</p>

      <h2>Преимущества работы со швеёй в Абу-Даби</h2>

      <h3>1. Идеальная посадка</h3>
      <p>Главное преимущество, которое предлагает профессиональная <strong>швея Абу-Даби</strong>, — это безупречная посадка по фигуре. В отличие от магазинной одежды, каждый сантиметр вашего наряда учитывает особенности вашего телосложения.</p>

      <h3>2. Эксклюзивность дизайна</h3>
      <p><strong>Одежда на заказ в ОАЭ</strong> означает, что вы никогда не встретите человека в таком же наряде. Ваш стиль остаётся уникальным и неповторимым.</p>

      <h3>3. Выбор материалов премиум-класса</h3>
      <p>При заказе <strong>пошива одежды в Абу-Даби</strong> вы можете выбрать именно те ткани, которые вам нравятся — от натурального шёлка до льна и высококачественного хлопка, идеально подходящих для климата ОАЭ.</p>

      <h3>4. Долговечность и качество</h3>
      <p>Профессиональный <strong>пошив одежды</strong> гарантирует высокое качество исполнения. Каждый шов, каждая деталь выполнены с максимальным вниманием, что обеспечивает долгий срок службы изделия.</p>

      <h2>Когда стоит обратиться к швее в Абу-Даби</h2>

      <p><strong>Индивидуальный пошив одежды в ОАЭ</strong> особенно актуален в следующих ситуациях:</p>

      <ul>
        <li><strong>Особые случаи</strong> — свадьбы, важные деловые встречи, торжественные мероприятия</li>
        <li><strong>Нестандартная фигура</strong> — когда сложно найти готовую одежду идеальной посадки</li>
        <li><strong>Уникальный стиль</strong> — если вы хотите выделяться и иметь неповторимый образ</li>
        <li><strong>Климатические особенности</strong> — создание комфортной одежды для жаркого климата ОАЭ</li>
        <li><strong>Переделка любимых вещей</strong> — обновление гардероба без лишних трат</li>
      </ul>

      <h2>Процесс работы: как заказать пошив одежды в Абу-Даби</h2>

      <h3>Шаг 1: Консультация</h3>
      <p>На первой встрече <strong>швея в Абу-Даби</strong> обсуждает с вами пожелания, снимает мерки, показывает образцы тканей и помогает определиться с дизайном.</p>

      <h3>Шаг 2: Выбор материалов</h3>
      <p>Вы выбираете ткань, фурнитуру, цвета — всё, что сделает вашу <strong>одежду на заказ в ОАЭ</strong> по-настоящему особенной.</p>

      <h3>Шаг 3: Примерки</h3>
      <p>В процессе <strong>пошива одежды</strong> проводится несколько примерок, чтобы обеспечить идеальную посадку и внести необходимые корректировки.</p>

      <h3>Шаг 4: Финальная отделка</h3>
      <p>Завершающие штрихи делают ваш наряд совершенным — от обработки швов до установки фурнитуры.</p>

      <h2>Стоимость индивидуального пошива в Абу-Даби</h2>

      <p>Многие думают, что <strong>пошив одежды на заказ</strong> — это очень дорого. На самом деле, учитывая качество, долговечность и уникальность, это выгодное вложение. Цены на услуги <strong>швеи в Абу-Даби</strong> варьируются в зависимости от сложности модели и выбранных материалов, но результат всегда оправдывает ожидания.</p>

      <h2>Популярные услуги пошива в ОАЭ</h2>

      <ul>
        <li><strong>Вечерние платья</strong> — элегантные наряды для светских мероприятий</li>
        <li><strong>Деловые костюмы</strong> — строгий стиль для офиса</li>
        <li><strong>Повседневная одежда</strong> — комфортные платья, юбки, блузки</li>
        <li><strong>Свадебные наряды</strong> — платья мечты для особого дня</li>
        <li><strong>Корсеты и нижнее бельё</strong> — для идеального силуэта</li>
      </ul>

      <h2>Заключение</h2>

      <p>Выбирая <strong>пошив одежды в Абу-Даби</strong>, вы выбираете качество, индивидуальность и комфорт. Профессиональная <strong>швея в Абу-Даби</strong> поможет создать гардероб вашей мечты, где каждая вещь будет сидеть идеально и отражать вашу личность.</p>

      <p><strong>Одежда на заказ в ОАЭ</strong> — это не просто покупка, это инвестиция в ваш стиль, уверенность и комфорт. Позвольте себе роскошь носить одежду, созданную специально для вас.</p>
    `
  }

  const contentEn = {
    title: 'Custom Clothing in Abu Dhabi: Benefits of Bespoke Tailoring',
    date: 'January 27, 2026',
    content: `
      <p>In the era of mass production, <strong>custom clothing in UAE</strong> is becoming a symbol of true style and individuality. More and more capital residents are turning to professional craftsmen, understanding the value of an individual approach.</p>

      <h2>What is bespoke clothing tailoring</h2>

      <p><strong>Custom clothing tailoring</strong> is the process of creating a unique wardrobe item from scratch, fully adapted to your parameters, preferences and lifestyle. An experienced <strong>seamstress in Abu Dhabi</strong> doesn't just sew clothes — she creates a work of art that's perfect for you.</p>

      <h2>Benefits of working with a seamstress in Abu Dhabi</h2>

      <h3>1. Perfect fit</h3>
      <p>The main advantage offered by a professional <strong>Abu Dhabi seamstress</strong> is impeccable fit. Unlike store-bought clothing, every centimeter of your outfit considers your body's unique features.</p>

      <h3>2. Exclusive design</h3>
      <p><strong>Custom clothing in UAE</strong> means you'll never meet someone in the same outfit. Your style remains unique and inimitable.</p>

      <h3>3. Premium material selection</h3>
      <p>When ordering <strong>clothing tailoring in Abu Dhabi</strong>, you can choose exactly the fabrics you like — from natural silk to linen and high-quality cotton, perfectly suited for UAE climate.</p>

      <h3>4. Durability and quality</h3>
      <p>Professional <strong>clothing tailoring</strong> guarantees high-quality execution. Every seam, every detail is made with maximum attention, ensuring long product lifespan.</p>

      <h2>When to turn to a seamstress in Abu Dhabi</h2>

      <p><strong>Bespoke clothing tailoring in UAE</strong> is especially relevant in the following situations:</p>

      <ul>
        <li><strong>Special occasions</strong> — weddings, important business meetings, ceremonial events</li>
        <li><strong>Non-standard figure</strong> — when it's difficult to find ready-made clothing with perfect fit</li>
        <li><strong>Unique style</strong> — if you want to stand out and have an inimitable look</li>
        <li><strong>Climate features</strong> — creating comfortable clothing for UAE hot climate</li>
        <li><strong>Alterations of favorite items</strong> — wardrobe update without extra expenses</li>
      </ul>

      <h2>Work process: how to order clothing tailoring in Abu Dhabi</h2>

      <h3>Step 1: Consultation</h3>
      <p>At the first meeting, a <strong>seamstress in Abu Dhabi</strong> discusses your wishes, takes measurements, shows fabric samples and helps you decide on design.</p>

      <h3>Step 2: Material selection</h3>
      <p>You choose fabric, accessories, colors — everything that will make your <strong>custom clothing in UAE</strong> truly special.</p>

      <h3>Step 3: Fittings</h3>
      <p>During the <strong>clothing tailoring</strong> process, several fittings are conducted to ensure perfect fit and make necessary adjustments.</p>

      <h3>Step 4: Final finishing</h3>
      <p>Finishing touches make your outfit perfect — from seam processing to accessory installation.</p>

      <h2>Cost of bespoke tailoring in Abu Dhabi</h2>

      <p>Many think that <strong>custom clothing tailoring</strong> is very expensive. In fact, considering the quality, durability and uniqueness, it's a profitable investment. Prices for <strong>seamstress services in Abu Dhabi</strong> vary depending on model complexity and chosen materials, but the result always meets expectations.</p>

      <h2>Popular tailoring services in UAE</h2>

      <ul>
        <li><strong>Evening dresses</strong> — elegant outfits for social events</li>
        <li><strong>Business suits</strong> — strict style for office</li>
        <li><strong>Casual wear</strong> — comfortable dresses, skirts, blouses</li>
        <li><strong>Wedding attire</strong> — dream dresses for a special day</li>
        <li><strong>Corsets and lingerie</strong> — for perfect silhouette</li>
      </ul>

      <h2>Conclusion</h2>

      <p>Choosing <strong>clothing tailoring in Abu Dhabi</strong>, you choose quality, individuality and comfort. A professional <strong>seamstress in Abu Dhabi</strong> will help create your dream wardrobe, where every item will fit perfectly and reflect your personality.</p>

      <p><strong>Custom clothing in UAE</strong> is not just a purchase, it's an investment in your style, confidence and comfort. Allow yourself the luxury of wearing clothes created specifically for you.</p>
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
                src="/images/2.jpg"
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
        .prose strong {
          color: #CA9E76;
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}
