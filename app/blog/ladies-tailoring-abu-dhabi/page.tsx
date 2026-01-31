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
    title: 'Пошив женской одежды в Абу-Даби: искусство создавать красоту',
    date: '31 января 2026',
    content: `
      <p>Когда речь заходит о создании идеального женского гардероба, <strong>пошив женской одежды в Абу-Даби</strong> становится настоящим спасением для тех, кто ценит качество, индивидуальность и безупречную посадку. Женская портновская работа требует особого мастерства и понимания женской фигуры.</p>

      <h2>Почему женщинам нужна профессиональная портниха в Абу-Даби</h2>

      <p>Женская фигура уникальна и многогранна. То, что прекрасно смотрится на манекене в магазине, может совершенно не подходить вам. <strong>Портниха для женщин в Абу-Даби</strong> специализируется на создании одежды, которая подчеркивает достоинства именно вашей фигуры.</p>

      <h3>Особенности женского пошива</h3>

      <ul>
        <li><strong>Учет типа фигуры</strong> - груша, яблоко, песочные часы, прямоугольник - каждый тип требует особого подхода</li>
        <li><strong>Работа с женскими тканями</strong> - шелк, шифон, кружево, атлас требуют деликатного обращения</li>
        <li><strong>Сложные конструкции</strong> - корсеты, драпировки, вытачки для идеальной посадки</li>
        <li><strong>Внимание к деталям</strong> - женская одежда требует безупречной отделки</li>
      </ul>

      <h2>Услуги по пошиву женской одежды на заказ в Абу-Даби</h2>

      <h3>Повседневный женский гардероб</h3>

      <p><strong>Пошив одежды для женщин</strong> начинается с базового гардероба. Опытная портниха создаст для вас:</p>

      <ul>
        <li>Платья на каждый день - от офисных до прогулочных</li>
        <li>Блузки и топы идеальной посадки</li>
        <li>Юбки всех фасонов - карандаш, солнце, трапеция</li>
        <li>Брюки с учетом особенностей фигуры</li>
      </ul>

      <h3>Женская вечерняя мода</h3>

      <p>Когда нужно выглядеть сногсшибательно, <strong>женская портниха в Абу-Даби</strong> создаст для вас наряд мечты:</p>

      <ul>
        <li>Вечерние платья в пол</li>
        <li>Коктейльные наряды</li>
        <li>Платья для особых случаев</li>
        <li>Выпускные и праздничные наряды</li>
      </ul>

      <h3>Женская деловая одежда</h3>

      <p>Успешная бизнес-леди знает, как важен правильный дресс-код. <strong>Пошив женской деловой одежды в Абу-Даби</strong> включает:</p>

      <ul>
        <li>Деловые костюмы - брючные и с юбкой</li>
        <li>Жакеты и блейзеры безупречного кроя</li>
        <li>Офисные платья строгого стиля</li>
        <li>Деловые блузки и рубашки</li>
      </ul>

      <h2>Свадебная мода: особая специализация мастера по женской одежде</h2>

      <p>Свадебное платье - это мечта каждой невесты. <strong>Пошив свадебных платьев в Абу-Даби</strong> требует высочайшего мастерства:</p>

      <h3>Что включает создание свадебного платья</h3>

      <ul>
        <li>Индивидуальный дизайн или адаптация понравившейся модели</li>
        <li>Работа с деликатными тканями - кружевом, фатином, шелком</li>
        <li>Создание корсета для идеального силуэта</li>
        <li>Многоярусные юбки, шлейфы, драпировки</li>
        <li>Ручная вышивка и декор бисером, стразами</li>
        <li>Несколько примерок для безупречной посадки</li>
      </ul>

      <h2>Преимущества индивидуального пошива для женщин</h2>

      <h3>1. Решение проблем с фигурой</h3>

      <p>У многих женщин встречаются особенности фигуры, которые затрудняют подбор готовой одежды. <strong>Мастер по женской одежде в Абу-Даби</strong> решает эти проблемы:</p>

      <ul>
        <li>Разные размеры верха и низа</li>
        <li>Нестандартный рост</li>
        <li>Особенности груди</li>
        <li>Проблемные зоны, которые нужно скрыть</li>
        <li>Зоны, которые хочется подчеркнуть</li>
      </ul>

      <h3>2. Создание индивидуального стиля</h3>

      <p><strong>Пошив женской одежды на заказ</strong> позволяет создать уникальный стиль, который отражает вашу личность и подходит вашему образу жизни.</p>

      <h3>3. Качество и долговечность</h3>

      <p>Профессионально сшитая женская одежда служит годами, сохраняя форму и внешний вид.</p>

      <h2>Как проходит пошив женской одежды в Абу-Даби</h2>

      <h3>Первая встреча</h3>

      <p><strong>Портниха для женщин</strong> проводит детальную консультацию:</p>

      <ul>
        <li>Обсуждение желаемого стиля и назначения одежды</li>
        <li>Анализ типа фигуры и особенностей</li>
        <li>Рекомендации по фасонам и тканям</li>
        <li>Просмотр портфолио и примеров работ</li>
      </ul>

      <h3>Выбор материалов</h3>

      <p>Для женской одежды особенно важен правильный выбор ткани:</p>

      <ul>
        <li>Натуральные ткани для комфорта в климате ОАЭ</li>
        <li>Деликатные материалы для вечерних нарядов</li>
        <li>Практичные ткани для повседневной носки</li>
        <li>Качественная фурнитура и отделка</li>
      </ul>

      <h3>Создание выкройки и пошив</h3>

      <p><strong>Мастер по женской одежде в Абу-Даби</strong> создает индивидуальную выкройку, учитывающую все особенности вашей фигуры. Процесс включает несколько примерок для достижения идеального результата.</p>

      <h2>Тренды женской моды в Абу-Даби 2026</h2>

      <h3>Востребованные стили</h3>

      <ul>
        <li><strong>Элегантный минимализм</strong> - чистые линии, качественные ткани</li>
        <li><strong>Восточная роскошь</strong> - богатые ткани, вышивка, драпировки</li>
        <li><strong>Умеренная скромность</strong> - закрытые фасоны с изысканными деталями</li>
        <li><strong>Feminine power</strong> - женственные силуэты для деловых женщин</li>
      </ul>

      <h3>Популярные ткани</h3>

      <ul>
        <li>Натуральный шелк - для вечерних нарядов</li>
        <li>Хлопок и лен - для повседневной носки</li>
        <li>Шифон и органза - для легких платьев</li>
        <li>Кружево - для романтичных образов</li>
      </ul>

      <h2>Стоимость пошива женской одежды в Абу-Даби</h2>

      <p>Цены на <strong>пошив женской одежды</strong> зависят от сложности модели:</p>

      <ul>
        <li>Простая блузка - от 200 AED</li>
        <li>Повседневное платье - от 350 AED</li>
        <li>Деловой костюм - от 800 AED</li>
        <li>Вечернее платье - от 1200 AED</li>
        <li>Свадебное платье - от 3000 AED</li>
      </ul>

      <h2>Почему выбирают нашу женскую портниху в Абу-Даби</h2>

      <ul>
        <li><strong>Специализация на женской одежде</strong> - глубокое понимание женской фигуры</li>
        <li><strong>Опыт работы</strong> - сотни довольных клиенток</li>
        <li><strong>Индивидуальный подход</strong> - каждая женщина уникальна</li>
        <li><strong>Качество материалов</strong> - работаем только с лучшими тканями</li>
        <li><strong>Разумные сроки</strong> - понимаем, как важно получить заказ вовремя</li>
      </ul>

      <h2>Заключение</h2>

      <p><strong>Пошив женской одежды в Абу-Даби</strong> - это не просто услуга, это искусство создавать красоту и уверенность. Профессиональная <strong>женская портниха</strong> поможет вам создать гардероб, в котором каждая вещь будет идеально сидеть, подчеркивать вашу красоту и соответствовать вашему стилю жизни.</p>

      <p>Доверьте создание вашего образа профессионалу. <strong>Пошив одежды для женщин в Абу-Даби</strong> - это инвестиция в вашу красоту, комфорт и уверенность в себе.</p>
    `
  }

  const contentEn = {
    title: 'Ladies Tailoring in Abu Dhabi: The Art of Creating Beauty',
    date: 'January 31, 2026',
    content: `
      <p>When it comes to creating the perfect women's wardrobe, <strong>ladies tailoring in Abu Dhabi</strong> becomes a real salvation for those who value quality, individuality and impeccable fit. Women's tailoring work requires special mastery and understanding of the female figure.</p>

      <h2>Why women need a professional tailor in Abu Dhabi</h2>

      <p>The female figure is unique and multifaceted. What looks perfect on a store mannequin may not suit you at all. A <strong>tailor for ladies in Abu Dhabi</strong> specializes in creating clothes that emphasize the advantages of your particular figure.</p>

      <h3>Features of ladies tailoring</h3>

      <ul>
        <li><strong>Considering body type</strong> - pear, apple, hourglass, rectangle - each type requires a special approach</li>
        <li><strong>Working with women's fabrics</strong> - silk, chiffon, lace, satin require delicate handling</li>
        <li><strong>Complex constructions</strong> - corsets, draping, darts for perfect fit</li>
        <li><strong>Attention to details</strong> - women's clothing requires impeccable finishing</li>
      </ul>

      <h2>Custom ladies tailoring services in Abu Dhabi</h2>

      <h3>Everyday women's wardrobe</h3>

      <p><strong>Ladies clothing tailoring</strong> starts with basic wardrobe. An experienced tailor will create for you:</p>

      <ul>
        <li>Everyday dresses - from office to casual</li>
        <li>Blouses and tops with perfect fit</li>
        <li>Skirts of all styles - pencil, circle, A-line</li>
        <li>Trousers considering figure features</li>
      </ul>

      <h3>Women's evening fashion</h3>

      <p>When you need to look stunning, a <strong>ladies tailor in Abu Dhabi</strong> will create your dream outfit:</p>

      <ul>
        <li>Floor-length evening gowns</li>
        <li>Cocktail outfits</li>
        <li>Special occasion dresses</li>
        <li>Graduation and festive attire</li>
      </ul>

      <h3>Women's business attire</h3>

      <p>A successful businesswoman knows how important proper dress code is. <strong>Ladies business tailoring in Abu Dhabi</strong> includes:</p>

      <ul>
        <li>Business suits - with trousers and skirts</li>
        <li>Jackets and blazers with impeccable cut</li>
        <li>Strict style office dresses</li>
        <li>Business blouses and shirts</li>
      </ul>

      <h2>Wedding fashion: special specialization of ladies tailor</h2>

      <p>A wedding dress is every bride's dream. <strong>Wedding dress tailoring in Abu Dhabi</strong> requires highest mastery:</p>

      <h3>What wedding dress creation includes</h3>

      <ul>
        <li>Individual design or adaptation of favorite model</li>
        <li>Working with delicate fabrics - lace, tulle, silk</li>
        <li>Creating corset for perfect silhouette</li>
        <li>Multi-tiered skirts, trains, draping</li>
        <li>Hand embroidery and decoration with beads, rhinestones</li>
        <li>Several fittings for impeccable fit</li>
      </ul>

      <h2>Advantages of custom tailoring for ladies</h2>

      <h3>1. Solving figure problems</h3>

      <p>Many women have figure features that make it difficult to select ready-made clothing. A <strong>ladies tailor in Abu Dhabi</strong> solves these problems:</p>

      <ul>
        <li>Different sizes for top and bottom</li>
        <li>Non-standard height</li>
        <li>Bust features</li>
        <li>Problem areas to hide</li>
        <li>Areas you want to emphasize</li>
      </ul>

      <h3>2. Creating individual style</h3>

      <p><strong>Custom ladies tailoring</strong> allows creating a unique style that reflects your personality and suits your lifestyle.</p>

      <h3>3. Quality and durability</h3>

      <p>Professionally tailored women's clothing serves for years, maintaining shape and appearance.</p>

      <h2>How ladies tailoring works in Abu Dhabi</h2>

      <h3>First meeting</h3>

      <p>A <strong>tailor for ladies</strong> conducts detailed consultation:</p>

      <ul>
        <li>Discussion of desired style and clothing purpose</li>
        <li>Analysis of body type and features</li>
        <li>Recommendations on styles and fabrics</li>
        <li>Portfolio and work examples review</li>
      </ul>

      <h3>Material selection</h3>

      <p>For women's clothing, proper fabric choice is especially important:</p>

      <ul>
        <li>Natural fabrics for comfort in UAE climate</li>
        <li>Delicate materials for evening outfits</li>
        <li>Practical fabrics for everyday wear</li>
        <li>Quality accessories and finishing</li>
      </ul>

      <h3>Pattern creation and tailoring</h3>

      <p>A <strong>ladies tailor in Abu Dhabi</strong> creates individual pattern considering all your figure features. The process includes several fittings to achieve perfect result.</p>

      <h2>Women's fashion trends in Abu Dhabi 2026</h2>

      <h3>Popular styles</h3>

      <ul>
        <li><strong>Elegant minimalism</strong> - clean lines, quality fabrics</li>
        <li><strong>Eastern luxury</strong> - rich fabrics, embroidery, draping</li>
        <li><strong>Modest modesty</strong> - covered styles with exquisite details</li>
        <li><strong>Feminine power</strong> - feminine silhouettes for businesswomen</li>
      </ul>

      <h3>Popular fabrics</h3>

      <ul>
        <li>Natural silk - for evening attire</li>
        <li>Cotton and linen - for everyday wear</li>
        <li>Chiffon and organza - for light dresses</li>
        <li>Lace - for romantic looks</li>
      </ul>

      <h2>Cost of ladies tailoring in Abu Dhabi</h2>

      <p>Prices for <strong>ladies tailoring</strong> depend on model complexity:</p>

      <ul>
        <li>Simple blouse - from 200 AED</li>
        <li>Casual dress - from 350 AED</li>
        <li>Business suit - from 800 AED</li>
        <li>Evening dress - from 1200 AED</li>
        <li>Wedding dress - from 3000 AED</li>
      </ul>

      <h2>Why choose our ladies tailor in Abu Dhabi</h2>

      <ul>
        <li><strong>Specialization in women's clothing</strong> - deep understanding of female figure</li>
        <li><strong>Work experience</strong> - hundreds of satisfied clients</li>
        <li><strong>Individual approach</strong> - every woman is unique</li>
        <li><strong>Material quality</strong> - we work only with best fabrics</li>
        <li><strong>Reasonable timeframes</strong> - we understand how important it is to receive order on time</li>
      </ul>

      <h2>Conclusion</h2>

      <p><strong>Ladies tailoring in Abu Dhabi</strong> is not just a service, it's the art of creating beauty and confidence. A professional <strong>ladies tailor</strong> will help you create a wardrobe where every item will fit perfectly, emphasize your beauty and match your lifestyle.</p>

      <p>Trust creating your image to a professional. <strong>Ladies clothing tailoring in Abu Dhabi</strong> is an investment in your beauty, comfort and self-confidence.</p>
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
                src="/images/4.JPG"
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
                  <Link
                    href="/blog/womens-tailor-abu-dhabi"
                    style={{
                      display: 'block',
                      padding: '1rem',
                      borderRadius: '12px',
                      background: '#FFF8F0',
                      textDecoration: 'none',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                    }}
                  >
                    <p style={{ color: '#CA9E76', fontWeight: '600', marginBottom: '0.25rem' }}>
                      {lang === 'en' ? 'Women\'s Tailer Abu Dhabi: Finding the Perfect Fit' : 'Мастер по женской одежде в Абу-Даби: как найти идеальную посадку'}
                    </p>
                    <p style={{ color: '#364147', fontSize: '0.875rem', margin: 0 }}>
                      {lang === 'en' ? 'How to choose a women\'s tailor in Abu Dhabi' : 'Как выбрать мастера по женской одежде'}
                    </p>
                  </Link>
                  <Link
                    href="/blog/tailor-abu-dhabi-ladies"
                    style={{
                      display: 'block',
                      padding: '1rem',
                      borderRadius: '12px',
                      background: '#FFF8F0',
                      textDecoration: 'none',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                    }}
                  >
                    <p style={{ color: '#CA9E76', fontWeight: '600', marginBottom: '0.25rem' }}>
                      {lang === 'en' ? 'Tailor in Abu Dhabi for Ladies: Custom Women\'s Fashion' : 'Портной в Абу-Даби для женщин: индивидуальная женская мода'}
                    </p>
                    <p style={{ color: '#364147', fontSize: '0.875rem', margin: 0 }}>
                      {lang === 'en' ? 'Custom women\'s fashion in Abu Dhabi' : 'Индивидуальная женская мода в Абу-Даби'}
                    </p>
                  </Link>
                  <Link
                    href="/blog/custom-clothing-abu-dhabi"
                    style={{
                      display: 'block',
                      padding: '1rem',
                      borderRadius: '12px',
                      background: '#FFF8F0',
                      textDecoration: 'none',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                    }}
                  >
                    <p style={{ color: '#CA9E76', fontWeight: '600', marginBottom: '0.25rem' }}>
                      {lang === 'en' ? 'Custom Clothing in Abu Dhabi: Benefits of Bespoke Tailoring' : 'Одежда на заказ в Абу-Даби: плюсы пошива'}
                    </p>
                    <p style={{ color: '#364147', fontSize: '0.875rem', margin: 0 }}>
                      {lang === 'en' ? 'Why a seamstress in Abu Dhabi is the best choice' : 'Почему швея в Абу-Даби - это лучший выбор'}
                    </p>
                  </Link>
                </div>
              </div>

              {/* Navigation to Next/Prev Posts */}
              <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #F5E6E6', display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <div style={{ flex: '1', minWidth: '120px' }}></div>
                <Link
                  href="/blog"
                  style={{
                    color: '#CA9E76',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    flex: '0 0 auto'
                  }}
                >
                  {lang === 'en' ? 'All Posts' : 'Все статьи'}
                </Link>
                <div style={{ flex: '1', minWidth: '120px', display: 'flex', justifyContent: 'flex-end' }}>
                  <Link
                    href="/blog/womens-tailor-abu-dhabi"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#CA9E76',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      transition: 'transform 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
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
        .prose h4 {
          color: #BA8E66;
          font-size: 1.125rem;
          font-weight: 600;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
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
        .prose a {
          color: #CA9E76;
          text-decoration: underline;
          transition: opacity 0.2s;
        }
        .prose a:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  )
}
