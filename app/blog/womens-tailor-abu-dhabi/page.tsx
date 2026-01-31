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
    title: 'Мастер по женской одежде в Абу-Даби: как найти идеальную посадку',
    date: '30 января 2026',
    content: `
      <p>Поиск <strong>мастера по женской одежде в Абу-Даби</strong>, который понимает ваши потребности и создает одежду идеальной посадки, может быть непростой задачей. В этой статье мы расскажем, как выбрать мастера и что ожидать от профессионального <strong>пошива женской одежды на заказ</strong>.</p>

      <h2>Что отличает хорошего мастера по женской одежде</h2>

      <p><strong>Портной для женщин в Абу-Даби</strong> должен обладать особыми навыками и знаниями, которые выходят за рамки простого умения шить.</p>

      <h3>Ключевые качества профессионального мастера по женской одежде</h3>

      <h4>1. Понимание женской анатомии</h4>
      <p>Опытный <strong>мастер по женской одежде</strong> знает, как работать с различными типами женской фигуры - от хрупких до пышных форм, учитывая все нюансы и особенности.</p>

      <h4>2. Технические навыки</h4>
      <ul>
        <li>Работа со сложными тканями - шелком, шифоном, кружевом</li>
        <li>Создание корсетов и структурированных изделий</li>
        <li>Выполнение сложных драпировок</li>
        <li>Ручная вышивка и декорирование</li>
        <li>Точная подгонка по фигуре</li>
      </ul>

      <h4>3. Чувство стиля и вкус</h4>
      <p><strong>Мастер по женской одежде в Абу-Даби</strong> должен не только технически грамотно шить, но и понимать современные тенденции моды, уметь адаптировать их под индивидуальность клиентки.</p>

      <h2>Как выбрать мастера по женской одежде в Абу-Даби</h2>

      <h3>Шаг 1: Изучите портфолио</h3>
      <p>Попросите показать фотографии готовых работ. Обратите внимание на разнообразие моделей и качество исполнения. Хороший <strong>портной для женщин</strong> с гордостью покажет свои лучшие работы.</p>

      <h3>Шаг 2: Прочитайте отзывы</h3>
      <p>Мнения других женщин, которые уже пользовались услугами <strong>мастера по женской одежде</strong>, помогут составить объективное представление о качестве работы и уровне сервиса.</p>

      <h3>Шаг 3: Проведите консультацию</h3>
      <p>Первая встреча покажет, насколько портной:</p>
      <ul>
        <li>Внимательно слушает ваши пожелания</li>
        <li>Дает профессиональные рекомендации</li>
        <li>Объясняет процесс работы</li>
        <li>Обсуждает сроки и стоимость</li>
      </ul>

      <h3>Шаг 4: Начните с простого заказа</h3>
      <p>Прежде чем заказывать дорогостоящий наряд, попробуйте начать с простой вещи - блузки или юбки. Это поможет оценить качество работы <strong>мастера по женской одежде в Абу-Даби</strong>.</p>

      <h2>Что можно заказать у мастера по женской одежде</h2>

      <h3>Базовый гардероб</h3>
      <p><strong>Пошив повседневной женской одежды</strong> включает создание базовых вещей, которые станут основой вашего гардероба:</p>

      <ul>
        <li><strong>Белые блузки</strong> - классика, которая должна сидеть идеально</li>
        <li><strong>Черные брюки</strong> - универсальная вещь для любого случая</li>
        <li><strong>Платья-футляры</strong> - для офиса и деловых встреч</li>
        <li><strong>Юбки-карандаш</strong> - элегантность и женственность</li>
      </ul>

      <h3>Особые случаи</h3>
      <p>Когда нужен особенный наряд, <strong>мастер по женской одежде</strong> создаст для вас:</p>

      <ul>
        <li>Вечерние платья для торжественных мероприятий</li>
        <li>Коктейльные наряды для светских событий</li>
        <li>Выпускные платья</li>
        <li>Платья для подружек невесты</li>
        <li>Наряды для фотосессий</li>
      </ul>

      <h3>Свадебные наряды</h3>
      <p>Опытный <strong>мастер по женской одежде в Абу-Даби</strong> специализируется на создании свадебных платьев - от классических до современных моделей.</p>

      <h2>Процесс создания одежды: чего ожидать</h2>

      <h3>Первая консультация (30-60 минут)</h3>
      <ul>
        <li>Обсуждение идеи и стиля</li>
        <li>Просмотр образцов тканей</li>
        <li>Предварительная оценка стоимости</li>
        <li>Обсуждение сроков</li>
      </ul>

      <h3>Снятие мерок (20-30 минут)</h3>
      <p>Профессиональный <strong>портной для женщин</strong> снимает более 20 мерок для создания одежды идеальной посадки:</p>

      <ul>
        <li>Обхват груди, талии, бедер</li>
        <li>Высота груди и расстояние между грудными точками</li>
        <li>Длина спины, переда, руки</li>
        <li>Обхват шеи, руки, запястья</li>
        <li>Специальные мерки в зависимости от модели</li>
      </ul>

      <h3>Создание выкройки (2-3 дня)</h3>
      <p><strong>Мастер по женской одежде</strong> создает индивидуальную выкройку на основе ваших мерок и выбранной модели.</p>

      <h3>Первая примерка (через 5-7 дней)</h3>
      <p>На этом этапе проверяется базовая посадка, вносятся необходимые корректировки.</p>

      <h3>Вторая примерка (через 3-5 дней)</h3>
      <p>Проверка финальной посадки и деталей отделки.</p>

      <h3>Получение готового изделия (через 2-3 дня)</h3>
      <p>Ваша одежда готова! <strong>Мастер по женской одежде в Абу-Даби</strong> даст рекомендации по уходу за изделием.</p>

      <h2>Типичные проблемы и их решения</h2>

      <h3>Проблема: Разные размеры верха и низа</h3>
      <p><strong>Решение портного:</strong> Создание изделия с разными размерными сетками для верха и низа. Например, платье может быть 42 размера в плечах и 46 в бедрах.</p>

      <h3>Проблема: Нестандартный рост</h3>
      <p><strong>Решение портного:</strong> Корректировка длины изделия, пропорций рукавов, положения талии с учетом вашего роста.</p>

      <h3>Проблема: Особенности фигуры</h3>
      <p><strong>Решение портного:</strong> Использование специальных техник кроя и подгонки для создания гармоничного силуэта.</p>

      <h3>Проблема: Необходимость скрыть проблемные зоны</h3>
      <p><strong>Решение портного:</strong> Правильный выбор фасона, использование визуальных приемов, работа с цветом и фактурой ткани.</p>

      <h2>Стили одежды, популярные у женщин в Абу-Даби</h2>

      <h3>1. Умеренная элегантность</h3>
      <p>Закрытые, но стильные наряды, которые подчеркивают женственность, не выставляя напоказ. <strong>Мастер по женской одежде</strong> создает такую одежду с особым вниманием к деталям.</p>

      <h3>2. Роскошная восточная мода</h3>
      <p>Богатые ткани, вышивка, декор - стиль, который любят в ОАЭ. Требует высокого мастерства <strong>мастера по женской одежде</strong>.</p>

      <h3>3. Современный минимализм</h3>
      <p>Чистые линии, качественные ткани, безупречный крой - стиль для деловых женщин.</p>

      <h3>4. Романтический стиль</h3>
      <p>Женственные силуэты, легкие ткани, драпировки, кружево - для тех, кто ценит мягкость и нежность в образе.</p>

      <h2>Сколько стоят услуги мастера по женской одежде в Абу-Даби</h2>

      <p>Цены на <strong>пошив женской одежды</strong> варьируются в зависимости от сложности:</p>

      <h3>Повседневная одежда</h3>
      <ul>
        <li>Простая блузка: 200-350 AED</li>
        <li>Брюки: 300-500 AED</li>
        <li>Юбка: 250-400 AED</li>
        <li>Повседневное платье: 400-700 AED</li>
      </ul>

      <h3>Деловая одежда</h3>
      <ul>
        <li>Деловое платье: 500-900 AED</li>
        <li>Жакет: 600-1000 AED</li>
        <li>Костюм (юбка/брюки + жакет): 900-1500 AED</li>
      </ul>

      <h3>Вечерние наряды</h3>
      <ul>
        <li>Коктейльное платье: 800-1500 AED</li>
        <li>Вечернее платье: 1200-3000 AED</li>
        <li>Свадебное платье: 3000-8000 AED и выше</li>
      </ul>

      <h2>Уход за одеждой от мастера по женской одежде</h2>

      <p>Качественная одежда требует правильного ухода:</p>

      <ul>
        <li><strong>Хранение:</strong> используйте мягкие плечики, храните в чехлах</li>
        <li><strong>Чистка:</strong> деликатные изделия лучше отдавать в химчистку</li>
        <li><strong>Глажка:</strong> соблюдайте температурный режим для каждой ткани</li>
        <li><strong>Ремонт:</strong> при необходимости обращайтесь к тому же портному для ремонта</li>
      </ul>

      <h2>Часто задаваемые вопросы</h2>

      <h3>Сколько времени занимает пошив?</h3>
      <p>Обычно от 2 до 4 недель в зависимости от сложности модели. Простая блузка может быть готова за неделю, свадебное платье - за 2-3 месяца.</p>

      <h3>Можно ли скопировать модель из журнала?</h3>
      <p>Да, опытный <strong>мастер по женской одежде в Абу-Даби</strong> может создать похожую модель, адаптировав ее под вашу фигуру.</p>

      <h3>Что если одежда не подойдет?</h3>
      <p>Профессиональный портной проводит несколько примерок именно для того, чтобы этого не произошло. Финальные корректировки обычно включены в стоимость.</p>

      <h3>Можно ли переделать старую одежду?</h3>
      <p>Конечно! <strong>Портной для женщин</strong> может обновить, перешить или адаптировать ваши любимые вещи.</p>

      <h2>Заключение</h2>

      <p>Найти хорошего <strong>мастера по женской одежде в Абу-Даби</strong> - значит найти мастера, который понимает ваши потребности, учитывает особенности фигуры и создает одежду, в которой вы чувствуете себя уверенно и красиво.</p>

      <p><strong>Пошив женской одежды на заказ</strong> - это не просто создание одежды, это создание вашего уникального образа, который подчеркивает вашу индивидуальность. Доверьтесь профессионалу, и ваш гардероб наполнится вещами идеальной посадки!</p>
    `
  }

  const contentEn = {
    title: "Women's Tailor Abu Dhabi: Finding the Perfect Fit",
    date: 'January 30, 2026',
    content: `
      <p>Finding a <strong>women's tailor in Abu Dhabi</strong> who understands your needs and creates perfectly fitted clothing can be challenging. In this article, we'll explain how to choose a craftsman and what to expect from professional <strong>custom women's tailoring</strong>.</p>

      <h2>What distinguishes a good women's tailor</h2>

      <p>A <strong>tailor for women in Abu Dhabi</strong> must possess special skills and knowledge that go beyond simple sewing ability.</p>

      <h3>Key qualities of professional women's tailor</h3>

      <h4>1. Understanding female anatomy</h4>
      <p>An experienced <strong>women's tailor</strong> knows how to work with different female body types - from petite to curvy figures, considering all nuances and features.</p>

      <h4>2. Technical skills</h4>
      <ul>
        <li>Working with complex fabrics - silk, chiffon, lace</li>
        <li>Creating corsets and structured garments</li>
        <li>Executing complex draping</li>
        <li>Hand embroidery and decoration</li>
        <li>Precise fit adjustment</li>
      </ul>

      <h4>3. Sense of style and taste</h4>
      <p>A <strong>women's tailor in Abu Dhabi</strong> should not only sew technically well but also understand modern fashion trends and adapt them to client's individuality.</p>

      <h2>How to choose a women's tailor in Abu Dhabi</h2>

      <h3>Step 1: Study the portfolio</h3>
      <p>Ask to see photos of finished works. Pay attention to model variety and execution quality. A good <strong>tailor for women</strong> will proudly show their best works.</p>

      <h3>Step 2: Read reviews</h3>
      <p>Opinions of other women who have used the <strong>women's tailor's</strong> services will help form an objective view of work quality and service level.</p>

      <h3>Step 3: Conduct a consultation</h3>
      <p>The first meeting will show how well the tailor:</p>
      <ul>
        <li>Carefully listens to your wishes</li>
        <li>Gives professional recommendations</li>
        <li>Explains the work process</li>
        <li>Discusses timeframes and cost</li>
      </ul>

      <h3>Step 4: Start with a simple order</h3>
      <p>Before ordering an expensive outfit, try starting with a simple item - a blouse or skirt. This will help assess the <strong>women's tailor in Abu Dhabi's</strong> work quality.</p>

      <h2>What you can order from a women's tailor</h2>

      <h3>Basic wardrobe</h3>
      <p><strong>Everyday women's clothing tailoring</strong> includes creating basic items that will become the foundation of your wardrobe:</p>

      <ul>
        <li><strong>White blouses</strong> - a classic that should fit perfectly</li>
        <li><strong>Black trousers</strong> - a universal item for any occasion</li>
        <li><strong>Sheath dresses</strong> - for office and business meetings</li>
        <li><strong>Pencil skirts</strong> - elegance and femininity</li>
      </ul>

      <h3>Special occasions</h3>
      <p>When you need a special outfit, a <strong>women's tailor</strong> will create for you:</p>

      <ul>
        <li>Evening dresses for ceremonial events</li>
        <li>Cocktail outfits for social occasions</li>
        <li>Graduation dresses</li>
        <li>Bridesmaid dresses</li>
        <li>Photo shoot outfits</li>
      </ul>

      <h3>Wedding attire</h3>
      <p>An experienced <strong>women's tailor in Abu Dhabi</strong> specializes in creating wedding dresses - from classic to modern models.</p>

      <h2>Clothing creation process: what to expect</h2>

      <h3>First consultation (30-60 minutes)</h3>
      <ul>
        <li>Discussion of idea and style</li>
        <li>Fabric samples review</li>
        <li>Preliminary cost estimate</li>
        <li>Timeframe discussion</li>
      </ul>

      <h3>Taking measurements (20-30 minutes)</h3>
      <p>A professional <strong>tailor for women</strong> takes over 20 measurements to create perfectly fitted clothing:</p>

      <ul>
        <li>Bust, waist, hip circumference</li>
        <li>Bust height and distance between bust points</li>
        <li>Back, front, arm length</li>
        <li>Neck, arm, wrist circumference</li>
        <li>Special measurements depending on model</li>
      </ul>

      <h3>Pattern creation (2-3 days)</h3>
      <p>The <strong>women's tailor</strong> creates an individual pattern based on your measurements and chosen model.</p>

      <h3>First fitting (after 5-7 days)</h3>
      <p>At this stage, basic fit is checked, necessary adjustments are made.</p>

      <h3>Second fitting (after 3-5 days)</h3>
      <p>Checking final fit and finishing details.</p>

      <h3>Receiving finished garment (after 2-3 days)</h3>
      <p>Your clothing is ready! The <strong>women's tailor in Abu Dhabi</strong> will give care recommendations for the garment.</p>

      <h2>Common problems and their solutions</h2>

      <h3>Problem: Different sizes for top and bottom</h3>
      <p><strong>Tailor's solution:</strong> Creating garment with different sizing grids for top and bottom. For example, a dress can be size 42 in shoulders and 46 in hips.</p>

      <h3>Problem: Non-standard height</h3>
      <p><strong>Tailor's solution:</strong> Adjusting garment length, sleeve proportions, waist position considering your height.</p>

      <h3>Problem: Figure features</h3>
      <p><strong>Tailor's solution:</strong> Using special cutting and fitting techniques to create harmonious silhouette.</p>

      <h3>Problem: Need to hide problem areas</h3>
      <p><strong>Tailor's solution:</strong> Proper style choice, using visual techniques, working with color and fabric texture.</p>

      <h2>Clothing styles popular with women in Abu Dhabi</h2>

      <h3>1. Modest elegance</h3>
      <p>Covered but stylish outfits that emphasize femininity without showing off. A <strong>women's tailor</strong> creates such clothing with special attention to details.</p>

      <h3>2. Luxurious Eastern fashion</h3>
      <p>Rich fabrics, embroidery, decor - a style loved in UAE. Requires high mastery from <strong>women's tailor</strong>.</p>

      <h3>3. Modern minimalism</h3>
      <p>Clean lines, quality fabrics, impeccable cut - style for businesswomen.</p>

      <h3>4. Romantic style</h3>
      <p>Feminine silhouettes, light fabrics, draping, lace - for those who value softness and tenderness in their look.</p>

      <h2>How much do women's tailor services cost in Abu Dhabi</h2>

      <p>Prices for <strong>women's clothing tailoring</strong> vary depending on complexity:</p>

      <h3>Everyday clothing</h3>
      <ul>
        <li>Simple blouse: 200-350 AED</li>
        <li>Trousers: 300-500 AED</li>
        <li>Skirt: 250-400 AED</li>
        <li>Casual dress: 400-700 AED</li>
      </ul>

      <h3>Business attire</h3>
      <ul>
        <li>Business dress: 500-900 AED</li>
        <li>Jacket: 600-1000 AED</li>
        <li>Suit (skirt/trousers + jacket): 900-1500 AED</li>
      </ul>

      <h3>Evening attire</h3>
      <ul>
        <li>Cocktail dress: 800-1500 AED</li>
        <li>Evening dress: 1200-3000 AED</li>
        <li>Wedding dress: 3000-8000 AED and above</li>
      </ul>

      <h2>Care for clothing from women's tailor</h2>

      <p>Quality clothing requires proper care:</p>

      <ul>
        <li><strong>Storage:</strong> use soft hangers, store in covers</li>
        <li><strong>Cleaning:</strong> delicate items are better taken to dry cleaning</li>
        <li><strong>Ironing:</strong> observe temperature regime for each fabric</li>
        <li><strong>Repair:</strong> if necessary, contact the same tailor for repairs</li>
      </ul>

      <h2>Frequently asked questions</h2>

      <h3>How long does tailoring take?</h3>
      <p>Usually from 2 to 4 weeks depending on model complexity. A simple blouse can be ready in a week, a wedding dress - in 2-3 months.</p>

      <h3>Can you copy a model from a magazine?</h3>
      <p>Yes, an experienced <strong>women's tailor in Abu Dhabi</strong> can create a similar model, adapting it to your figure.</p>

      <h3>What if the clothing doesn't fit?</h3>
      <p>A professional tailor conducts several fittings precisely to prevent this. Final adjustments are usually included in the cost.</p>

      <h3>Can old clothing be altered?</h3>
      <p>Of course! A <strong>tailor for women</strong> can update, remake or adapt your favorite items.</p>

      <h2>Conclusion</h2>

      <p>Finding a good <strong>women's tailor in Abu Dhabi</strong> means finding a craftsman who understands your needs, considers figure features and creates clothing in which you feel confident and beautiful.</p>

      <p><strong>Custom women's tailoring</strong> is not just creating clothes, it's creating your unique image that emphasizes your individuality. Trust a professional, and your wardrobe will be filled with perfectly fitted items!</p>
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
                src="/images/5.JPG"
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
                      {lang === 'en' ? 'Professional ladies tailoring in Abu Dhabi' : 'Профессиональный пошив женской одежды'}
                    </p>
                  </Link>
                  <Link href="/blog/tailor-abu-dhabi-ladies" style={{ display: 'block', padding: '1rem', borderRadius: '12px', background: '#FFF8F0', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'; }}>
                    <p style={{ color: '#CA9E76', fontWeight: '600', marginBottom: '0.25rem' }}>
                      {lang === 'en' ? 'Tailor in Abu Dhabi for Ladies: Custom Women\'s Fashion' : 'Портной в Абу-Даби для женщин: индивидуальная женская мода'}
                    </p>
                    <p style={{ color: '#364147', fontSize: '0.875rem', margin: 0 }}>
                      {lang === 'en' ? 'Custom women\'s fashion in Abu Dhabi' : 'Индивидуальная женская мода'}
                    </p>
                  </Link>
                  <Link href="/blog/sewing-trends-uae-2026" style={{ display: 'block', padding: '1rem', borderRadius: '12px', background: '#FFF8F0', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'; }}>
                    <p style={{ color: '#CA9E76', fontWeight: '600', marginBottom: '0.25rem' }}>
                      {lang === 'en' ? 'Sewing Trends in UAE 2026: What\'s Worn in Abu Dhabi' : 'Швейные тенденции в ОАЭ 2026: что носят в Абу-Даби'}
                    </p>
                    <p style={{ color: '#364147', fontSize: '0.875rem', margin: 0 }}>
                      {lang === 'en' ? 'Discover the most relevant sewing trends in UAE' : 'Узнайте о самых актуальных швейных тенденциях'}
                    </p>
                  </Link>
                </div>
              </div>

              {/* Navigation to Next/Prev Posts */}
              <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #F5E6E6', display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <div style={{ flex: '1', minWidth: '120px' }}>
                  <Link href="/blog/ladies-tailoring-abu-dhabi" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#CA9E76', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', transition: 'transform 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(-4px)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; }}>
                    <ChevronLeft size={20} />
                    {lang === 'en' ? 'Previous Post' : 'Предыдущая статья'}
                  </Link>
                </div>
                <Link href="/blog" style={{ color: '#CA9E76', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', flex: '0 0 auto' }}>
                  {lang === 'en' ? 'All Posts' : 'Все статьи'}
                </Link>
                <div style={{ flex: '1', minWidth: '120px', display: 'flex', justifyContent: 'flex-end' }}>
                  <Link href="/blog/tailor-abu-dhabi-ladies" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#CA9E76', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', transition: 'transform 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(4px)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; }}>
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
