'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getTranslation, type Language } from '../../i18n'

export default function BlogPost() {
  const [lang, setLang] = useState<Language>('en')

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ru' : 'en')
  }

  const contentRu = {
    title: 'Услуги швеи в ОАЭ: от повседневной одежды до вечерних нарядов',
    date: '26 января 2025',
    content: `
      <p>Профессиональная <strong>швея в Абу-Даби</strong> предлагает широкий спектр услуг — от создания повседневных образов до роскошных вечерних нарядов. В этой статье мы расскажем о всех возможностях, которые открывает <strong>индивидуальный пошив одежды в ОАЭ</strong>.</p>

      <h2>Полный спектр услуг швеи в Абу-Даби</h2>

      <p><strong>Пошив одежды на заказ</strong> включает множество направлений, каждое из которых требует специальных навыков и опыта.</p>

      <h3>1. Повседневная одежда</h3>

      <h4>Платья на каждый день</h4>
      <p>Комфортные и стильные платья для жаркого климата ОАЭ. <strong>Швея Абу-Даби</strong> создаст для вас идеальное платье из лёгких, дышащих тканей, которое будет отлично сидеть и подчёркивать достоинства фигуры.</p>

      <h4>Блузки и рубашки</h4>
      <p><strong>Пошив одежды</strong> для офиса — это отдельное искусство. Профессиональная блузка с идеальной посадкой создаст безупречный деловой образ.</p>

      <h4>Юбки и брюки</h4>
      <p>От классических прямых до модных широких моделей — <strong>одежда на заказ в ОАЭ</strong> позволяет реализовать любые идеи с учётом особенностей вашей фигуры.</p>

      <h3>2. Деловая одежда</h3>

      <p>Для успешных женщин Абу-Даби особенно важен профессиональный гардероб. <strong>Пошив одежды в Абу-Даби</strong> для деловых встреч включает:</p>

      <ul>
        <li><strong>Деловые костюмы</strong> — классические и современные модели</li>
        <li><strong>Жакеты и пиджаки</strong> — строгие линии и безупречный крой</li>
        <li><strong>Брюки со стрелками</strong> — идеальная посадка по фигуре</li>
        <li><strong>Деловые платья</strong> — элегантность и комфорт в одном</li>
      </ul>

      <h3>3. Вечерние наряды</h3>

      <p>Когда речь идёт о светских мероприятиях, <strong>швея в Абу-Даби</strong> становится вашим личным модельером:</p>

      <h4>Вечерние платья</h4>
      <p><strong>Пошив вечерних платьев</strong> — это высшее мастерство. От выбора роскошных тканей до сложных драпировок и декора — каждая деталь продумана до мелочей.</p>

      <h4>Коктейльные платья</h4>
      <p>Для полуофициальных мероприятий идеально подойдут элегантные коктейльные платья. <strong>Одежда на заказ в ОАЭ</strong> позволяет создать наряд, который подчеркнёт вашу индивидуальность.</p>

      <h3>4. Свадебная мода</h3>

      <p>Самый важный день в жизни заслуживает идеального платья. Опытная <strong>швея Абу-Даби</strong> поможет создать:</p>

      <ul>
        <li>Свадебные платья любого стиля — от классики до авангарда</li>
        <li>Платья для подруг невесты</li>
        <li>Наряды для гостей свадьбы</li>
        <li>Аксессуары: фаты, перчатки, болеро</li>
      </ul>

      <h3>5. Специальная одежда</h3>

      <h4>Корсеты</h4>
      <p><strong>Пошив корсетов</strong> требует особого мастерства. Правильно сшитый корсет не только корректирует фигуру, но и обеспечивает комфорт при носке.</p>

      <h4>Верхняя одежда</h4>
      <p>Хотя в ОАЭ редко нужна тёплая одежда, лёгкие пальто и жакеты для кондиционированных помещений всегда актуальны.</p>

      <h3>6. Реставрация и переделка</h3>

      <p>Профессиональная <strong>швея в Абу-Даби</strong> может:</p>

      <ul>
        <li>Изменить размер любимой вещи</li>
        <li>Обновить дизайн устаревшей одежды</li>
        <li>Отреставрировать повреждённые участки</li>
        <li>Создать новую вещь из старой ткани</li>
        <li>Укоротить или удлинить изделие</li>
      </ul>

      <h2>Процесс создания одежды на заказ</h2>

      <h3>Этап 1: Консультация</h3>
      <p>При первой встрече <strong>швея Абу-Даби</strong> внимательно выслушает ваши пожелания, оценит особенности фигуры и предложит оптимальные решения.</p>

      <h3>Этап 2: Выбор тканей и материалов</h3>
      <p><strong>Пошив одежды в ОАЭ</strong> предполагает работу с лучшими материалами. Вы выбираете ткани, подкладку, фурнитуру, декоративные элементы.</p>

      <h3>Этап 3: Снятие мерок</h3>
      <p>Точность — залог идеальной посадки. Опытная <strong>швея в Абу-Даби</strong> снимет все необходимые мерки с учётом нюансов.</p>

      <h3>Этап 4: Создание выкройки</h3>
      <p><strong>Индивидуальный пошив одежды</strong> начинается с создания уникальной выкройки специально для вас.</p>

      <h3>Этап 5: Примерки</h3>
      <p>Обычно проводится 2-3 примерки, чтобы убедиться в идеальной посадке и при необходимости внести корректировки.</p>

      <h3>Этап 6: Финальная отделка</h3>
      <p>Завершающие штрихи делают <strong>одежду на заказ в ОАЭ</strong> совершенной — от обработки швов до установки молний и пуговиц.</p>

      <h2>Почему стоит выбрать профессиональную швею в Абу-Даби</h2>

      <h3>Опыт и мастерство</h3>
      <p>Годы работы и сотни довольных клиентов — гарантия качества. <strong>Пошив одежды</strong> требует не только технических навыков, но и художественного вкуса.</p>

      <h3>Индивидуальный подход</h3>
      <p>Каждая клиентка уникальна, и <strong>швея Абу-Даби</strong> учитывает все особенности — от типа фигуры до личных предпочтений в стиле.</p>

      <h3>Качество материалов</h3>
      <p><strong>Пошив одежды на заказ</strong> предполагает использование только качественных тканей и фурнитуры, что обеспечивает долговечность изделий.</p>

      <h3>Учёт климата ОАЭ</h3>
      <p>Опытная <strong>швея в Абу-Даби</strong> знает, какие ткани и модели подходят для местного климата, обеспечивая комфорт даже в жару.</p>

      <h2>Сколько стоит пошив одежды в Абу-Даби</h2>

      <p>Стоимость услуг <strong>швеи в Абу-Даби</strong> зависит от:</p>

      <ul>
        <li>Сложности модели</li>
        <li>Выбранных материалов</li>
        <li>Наличия декоративных элементов</li>
        <li>Срочности выполнения заказа</li>
      </ul>

      <p>В среднем, простая юбка обойдётся от 250 AED, повседневное платье — от 400 AED, а вечерний наряд — от 1000 AED. Учитывая качество и уникальность, <strong>одежда на заказ в ОАЭ</strong> — это выгодное вложение.</p>

      <h2>Как выбрать швею в Абу-Даби</h2>

      <p>При выборе мастера обратите внимание на:</p>

      <ul>
        <li><strong>Портфолио</strong> — посмотрите примеры работ</li>
        <li><strong>Отзывы</strong> — узнайте мнение других клиентов</li>
        <li><strong>Опыт</strong> — уточните, как долго мастер работает</li>
        <li><strong>Специализацию</strong> — некоторые швеи лучше справляются с определёнными типами одежды</li>
        <li><strong>Коммуникацию</strong> — важно, чтобы вас понимали и учитывали ваши пожелания</li>
      </ul>

      <h2>Заключение</h2>

      <p>Услуги профессиональной <strong>швеи в Абу-Даби</strong> открывают безграничные возможности для создания идеального гардероба. От повседневной одежды до роскошных вечерних нарядов — <strong>пошив одежды на заказ</strong> позволяет реализовать любые идеи с гарантией качества и идеальной посадки.</p>

      <p><strong>Индивидуальный пошив одежды в ОАЭ</strong> — это не просто услуга, это возможность создать гардероб, который полностью отражает вашу личность и обеспечивает максимальный комфорт в любой ситуации. Доверьте создание вашего стиля профессионалам!</p>
    `
  }

  const contentEn = {
    title: 'Tailoring Services in UAE: From Casual Wear to Evening Gowns',
    date: 'January 26, 2025',
    content: `
      <p>A professional <strong>seamstress in Abu Dhabi</strong> offers a wide range of services — from creating casual looks to luxurious evening attire. In this article, we'll tell you about all the possibilities that <strong>bespoke clothing tailoring in UAE</strong> opens up.</p>

      <h2>Full range of seamstress services in Abu Dhabi</h2>

      <p><strong>Custom clothing tailoring</strong> includes many directions, each requiring special skills and experience.</p>

      <h3>1. Everyday clothing</h3>

      <h4>Casual dresses</h4>
      <p>Comfortable and stylish dresses for UAE hot climate. An <strong>Abu Dhabi seamstress</strong> will create the perfect dress for you from light, breathable fabrics that will fit well and emphasize your figure's advantages.</p>

      <h4>Blouses and shirts</h4>
      <p><strong>Clothing tailoring</strong> for office is a separate art. A professional blouse with perfect fit will create an impeccable business image.</p>

      <h4>Skirts and trousers</h4>
      <p>From classic straight to fashionable wide models — <strong>custom clothing in UAE</strong> allows realizing any ideas considering your figure's features.</p>

      <h3>2. Business attire</h3>

      <p>For successful Abu Dhabi women, professional wardrobe is especially important. <strong>Clothing tailoring in Abu Dhabi</strong> for business meetings includes:</p>

      <ul>
        <li><strong>Business suits</strong> — classic and modern models</li>
        <li><strong>Jackets and blazers</strong> — strict lines and impeccable cut</li>
        <li><strong>Creased trousers</strong> — perfect fit</li>
        <li><strong>Business dresses</strong> — elegance and comfort in one</li>
      </ul>

      <h3>3. Evening attire</h3>

      <p>When it comes to social events, a <strong>seamstress in Abu Dhabi</strong> becomes your personal fashion designer:</p>

      <h4>Evening dresses</h4>
      <p><strong>Evening dress tailoring</strong> is supreme mastery. From choosing luxurious fabrics to complex draping and decor — every detail is thought through.</p>

      <h4>Cocktail dresses</h4>
      <p>For semi-formal events, elegant cocktail dresses are perfect. <strong>Custom clothing in UAE</strong> allows creating an outfit that emphasizes your individuality.</p>

      <h3>4. Wedding fashion</h3>

      <p>The most important day of your life deserves a perfect dress. An experienced <strong>Abu Dhabi seamstress</strong> will help create:</p>

      <ul>
        <li>Wedding dresses of any style — from classic to avant-garde</li>
        <li>Bridesmaids' dresses</li>
        <li>Outfits for wedding guests</li>
        <li>Accessories: veils, gloves, boleros</li>
      </ul>

      <h3>5. Special clothing</h3>

      <h4>Corsets</h4>
      <p><strong>Corset tailoring</strong> requires special mastery. A properly sewn corset not only corrects the figure but also ensures wearing comfort.</p>

      <h4>Outerwear</h4>
      <p>Although UAE rarely needs warm clothing, light coats and jackets for air-conditioned spaces are always relevant.</p>

      <h3>6. Restoration and alterations</h3>

      <p>A professional <strong>seamstress in Abu Dhabi</strong> can:</p>

      <ul>
        <li>Resize favorite items</li>
        <li>Update outdated clothing design</li>
        <li>Restore damaged areas</li>
        <li>Create new items from old fabric</li>
        <li>Shorten or lengthen products</li>
      </ul>

      <h2>Custom clothing creation process</h2>

      <h3>Stage 1: Consultation</h3>
      <p>At the first meeting, an <strong>Abu Dhabi seamstress</strong> will carefully listen to your wishes, assess figure features and suggest optimal solutions.</p>

      <h3>Stage 2: Fabric and material selection</h3>
      <p><strong>Clothing tailoring in UAE</strong> involves working with the best materials. You choose fabrics, lining, accessories, decorative elements.</p>

      <h3>Stage 3: Taking measurements</h3>
      <p>Accuracy is the key to perfect fit. An experienced <strong>seamstress in Abu Dhabi</strong> will take all necessary measurements considering nuances.</p>

      <h3>Stage 4: Pattern creation</h3>
      <p><strong>Bespoke clothing tailoring</strong> starts with creating a unique pattern specifically for you.</p>

      <h3>Stage 5: Fittings</h3>
      <p>Usually 2-3 fittings are conducted to ensure perfect fit and make adjustments if necessary.</p>

      <h3>Stage 6: Final finishing</h3>
      <p>Finishing touches make <strong>custom clothing in UAE</strong> perfect — from seam processing to zipper and button installation.</p>

      <h2>Why choose a professional seamstress in Abu Dhabi</h2>

      <h3>Experience and mastery</h3>
      <p>Years of work and hundreds of satisfied clients — quality guarantee. <strong>Clothing tailoring</strong> requires not only technical skills but also artistic taste.</p>

      <h3>Individual approach</h3>
      <p>Each client is unique, and an <strong>Abu Dhabi seamstress</strong> considers all features — from body type to personal style preferences.</p>

      <h3>Material quality</h3>
      <p><strong>Custom clothing tailoring</strong> involves using only quality fabrics and accessories, ensuring product durability.</p>

      <h3>Considering UAE climate</h3>
      <p>An experienced <strong>seamstress in Abu Dhabi</strong> knows which fabrics and models suit the local climate, ensuring comfort even in heat.</p>

      <h2>How much does clothing tailoring cost in Abu Dhabi</h2>

      <p>The cost of <strong>seamstress services in Abu Dhabi</strong> depends on:</p>

      <ul>
        <li>Model complexity</li>
        <li>Chosen materials</li>
        <li>Presence of decorative elements</li>
        <li>Order urgency</li>
      </ul>

      <p>On average, a simple skirt costs from 250 AED, a casual dress — from 400 AED, and evening attire — from 1000 AED. Considering quality and uniqueness, <strong>custom clothing in UAE</strong> is a profitable investment.</p>

      <h2>How to choose a seamstress in Abu Dhabi</h2>

      <p>When choosing a craftsman, pay attention to:</p>

      <ul>
        <li><strong>Portfolio</strong> — look at work examples</li>
        <li><strong>Reviews</strong> — learn other clients' opinions</li>
        <li><strong>Experience</strong> — clarify how long the craftsman has been working</li>
        <li><strong>Specialization</strong> — some seamstresses handle certain clothing types better</li>
        <li><strong>Communication</strong> — it's important to be understood and have your wishes considered</li>
      </ul>

      <h2>Conclusion</h2>

      <p>Professional <strong>seamstress services in Abu Dhabi</strong> open unlimited possibilities for creating the perfect wardrobe. From casual wear to luxurious evening attire — <strong>custom clothing tailoring</strong> allows realizing any ideas with quality guarantee and perfect fit.</p>

      <p><strong>Bespoke clothing tailoring in UAE</strong> is not just a service, it's an opportunity to create a wardrobe that fully reflects your personality and provides maximum comfort in any situation. Trust style creation to professionals!</p>
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

      <article className="px-8 sm:px-12 pt-24 pb-32">
        <div className="w-full mx-auto" style={{maxWidth: '800px'}}>
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#CA9E76] hover:text-[#BA8E66] mb-8 transition-colors">
            <span>←</span>
            <span>{lang === 'en' ? 'Back to Blog' : 'Вернуться к блогу'}</span>
          </Link>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="aspect-[16/9] relative">
              <Image
                src="/images/3.JPG"
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
      `}</style>
    </div>
  )
}
