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
    title: 'Портной в Абу-Даби для женщин: индивидуальная женская мода',
    date: '29 января 2026',
    content: `
      <p>В мире, где мода становится все более персонализированной, <strong>портной в Абу-Даби для женщин</strong> открывает двери в уникальный мир индивидуального стиля. Давайте разберемся, почему женская индивидуальная мода набирает популярность и как выбрать идеального мастера.</p>

      <h2>Индивидуальная женская мода в Абу-Даби: новая эра стиля</h2>

      <p>Современные женщины Абу-Даби все чаще отказываются от массового производства в пользу уникальных, созданных специально для них нарядов. <strong>Портной для женщин</strong> становится не просто мастером, а партнером в создании личного стиля.</p>

      <h3>Почему женщины выбирают индивидуальный пошив</h3>

      <h4>Уникальность в каждой детали</h4>
      <p>Когда вы работаете с <strong>портным в Абу-Даби для женщин</strong>, вы получаете не просто одежду - вы получаете произведение искусства, созданное исключительно для вас:</p>

      <ul>
        <li>Эксклюзивный дизайн, который нигде больше не встретится</li>
        <li>Выбор каждой детали - от ткани до пуговиц</li>
        <li>Возможность воплотить любую идею</li>
        <li>Создание собственного стиля</li>
      </ul>

      <h4>Идеальная посадка для вашей фигуры</h4>
      <p>Каждая женщина уникальна, и <strong>мастер по женской одежде</strong> понимает это лучше всех. Индивидуальный пошив решает проблемы, с которыми сталкиваются многие женщины при покупке готовой одежды.</p>

      <h2>Что предлагает портной для женщин в Абу-Даби</h2>

      <h3>Женские платья на заказ</h3>

      <p>Платье - королева женского гардероба. <strong>Портной в Абу-Даби для женщин</strong> создает платья для любого случая:</p>

      <h4>Повседневные платья</h4>
      <ul>
        <li>Платья-рубашки для офиса</li>
        <li>Летние сарафаны из натуральных тканей</li>
        <li>Платья-футляры для деловых встреч</li>
        <li>Макси-платья для прогулок</li>
      </ul>

      <h4>Вечерние платья</h4>
      <ul>
        <li>Коктейльные платья для светских мероприятий</li>
        <li>Вечерние наряды в пол</li>
        <li>Платья для гала-ужинов</li>
        <li>Наряды для красных дорожек</li>
      </ul>

      <h4>Свадебные платья</h4>
      <p>Создание свадебного платья - особая специализация. Опытный <strong>мастер по женской одежде</strong> воплотит вашу мечту о платье принцессы в реальность.</p>

      <h3>Женские костюмы и деловая одежда</h3>

      <p>Для успешной бизнес-леди в Абу-Даби важен безупречный внешний вид. <strong>Пошив женских костюмов на заказ</strong> включает:</p>

      <ul>
        <li><strong>Брючные костюмы</strong> - современный деловой стиль</li>
        <li><strong>Костюмы с юбкой</strong> - классическая элегантность</li>
        <li><strong>Жакеты и блейзеры</strong> - универсальные вещи гардероба</li>
        <li><strong>Деловые платья</strong> - женственность в офисе</li>
      </ul>

      <h3>Коррекция и переделка женской одежды</h3>

      <p><strong>Портной для женщин в Абу-Даби</strong> также специализируется на:</p>

      <ul>
        <li>Подгонке готовой одежды по фигуре</li>
        <li>Изменении размера (ушить или расширить)</li>
        <li>Изменении длины изделий</li>
        <li>Реставрации и обновлении любимых вещей</li>
        <li>Переделке старой одежды в модные модели</li>
      </ul>

      <h2>Специализация: пошив для разных типов женских фигур</h2>

      <h3>Фигура "Песочные часы"</h3>
      <p><strong>Портной в Абу-Даби для женщин</strong> подчеркнет естественные пропорции:</p>
      <ul>
        <li>Приталенные платья и жакеты</li>
        <li>Одежда с акцентом на талии</li>
        <li>V-образные вырезы</li>
      </ul>

      <h3>Фигура "Груша"</h3>
      <p>Создание баланса между верхом и низом:</p>
      <ul>
        <li>Акцент на плечи и декольте</li>
        <li>Темные цвета для низа</li>
        <li>А-силуэты для юбок и платьев</li>
      </ul>

      <h3>Фигура "Яблоко"</h3>
      <p><strong>Женский портной</strong> создаст вертикальные линии:</p>
      <ul>
        <li>V-образные вырезы</li>
        <li>Вертикальные детали кроя</li>
        <li>Свободный крой в области талии</li>
      </ul>

      <h3>Фигура "Прямоугольник"</h3>
      <p>Создание визуальных изгибов:</p>
      <ul>
        <li>Баски и пеплумы</li>
        <li>Драпировки в области талии</li>
        <li>Контрастные вставки</li>
      </ul>

      <h2>Тренды женской индивидуальной моды 2026</h2>

      <h3>1. Устойчивая мода (Sustainable Fashion)</h3>
      <p>Женщины в Абу-Даби все больше ценят экологичность. <strong>Портной для женщин</strong> предлагает:</p>
      <ul>
        <li>Использование натуральных и переработанных тканей</li>
        <li>Создание долговечной одежды высокого качества</li>
        <li>Переработку и обновление существующей одежды</li>
      </ul>

      <h3>2. Максималистичная роскошь</h3>
      <p>Богатые ткани, вышивка, декор - стиль, который любят в ОАЭ:</p>
      <ul>
        <li>Платья с ручной вышивкой</li>
        <li>Использование кружева и органзы</li>
        <li>Декор стразами и бисером</li>
      </ul>

      <h3>3. Неоклассика</h3>
      <p><strong>Портной в Абу-Даби для женщин</strong> создает современную интерпретацию классики:</p>
      <ul>
        <li>Чистые линии с неожиданными деталями</li>
        <li>Классические силуэты из современных материалов</li>
        <li>Минимализм с изюминкой</li>
      </ul>

      <h3>4. Comfort Couture</h3>
      <p>Элегантность не должна жертвовать комфортом:</p>
      <ul>
        <li>Мягкие, дышащие ткани</li>
        <li>Свободные, но стильные силуэты</li>
        <li>Функциональная красота</li>
      </ul>

      <h2>Процесс создания индивидуальной женской одежды</h2>

      <h3>Этап 1: Вдохновение и консультация</h3>
      <p>Первая встреча с <strong>женским портным</strong> - это творческая сессия, где обсуждается:</p>
      <ul>
        <li>Ваш личный стиль и предпочтения</li>
        <li>Назначение одежды</li>
        <li>Просмотр референсов и идей</li>
        <li>Обсуждение бюджета и сроков</li>
      </ul>

      <h3>Этап 2: Выбор материалов</h3>
      <p><strong>Портной для женщин</strong> поможет выбрать идеальные ткани:</p>

      <h4>Для климата ОАЭ подходят:</h4>
      <ul>
        <li><strong>Лен</strong> - дышащий и элегантный</li>
        <li><strong>Хлопок</strong> - универсальный и комфортный</li>
        <li><strong>Шелк</strong> - роскошный и легкий</li>
        <li><strong>Тенсел</strong> - экологичный и приятный к телу</li>
      </ul>

      <h3>Этап 3: Снятие мерок и создание выкройки</h3>
      <p>Профессиональный <strong>портной в Абу-Даби для женщин</strong> снимает детальные мерки и создает уникальную выкройку специально для вашей фигуры.</p>

      <h3>Этап 4: Примерки и корректировки</h3>
      <p>Обычно проводится 2-3 примерки:</p>
      <ul>
        <li><strong>Первая примерка</strong> - проверка базовой посадки</li>
        <li><strong>Вторая примерка</strong> - финальные корректировки</li>
        <li><strong>Третья примерка</strong> (при необходимости) - проверка деталей</li>
      </ul>

      <h3>Этап 5: Финальная отделка</h3>
      <p>Завершающие штрихи делают одежду совершенной.</p>

      <h2>Стоимость индивидуального женского пошива в Абу-Даби</h2>

      <p>Инвестиция в <strong>индивидуальный пошив женской одежды</strong> окупается качеством и долговечностью:</p>

      <h3>Базовый гардероб</h3>
      <ul>
        <li>Блузка: 200-400 AED</li>
        <li>Юбка: 250-450 AED</li>
        <li>Брюки: 300-600 AED</li>
        <li>Простое платье: 400-800 AED</li>
      </ul>

      <h3>Специальные случаи</h3>
      <ul>
        <li>Деловой костюм: 900-1800 AED</li>
        <li>Коктейльное платье: 1000-2000 AED</li>
        <li>Вечернее платье: 1500-4000 AED</li>
        <li>Свадебное платье: 3500-10000 AED</li>
      </ul>

      <h2>Как максимально использовать услуги портного для женщин</h2>

      <h3>Создайте капсульный гардероб</h3>
      <p><strong>Портной в Абу-Даби для женщин</strong> поможет создать набор взаимозаменяемых вещей, которые легко комбинируются между собой.</p>

      <h3>Инвестируйте в базовые вещи</h3>
      <p>Качественные базовые вещи от <strong>мастера по женской одежде</strong> прослужат годами:</p>
      <ul>
        <li>Идеальная белая блузка</li>
        <li>Классические черные брюки</li>
        <li>Универсальное платье-футляр</li>
        <li>Безупречный жакет</li>
      </ul>

      <h3>Обновляйте гардероб, а не выбрасывайте</h3>
      <p>Вместо покупки новой одежды, обратитесь к <strong>портному для женщин</strong> для переделки существующих вещей.</p>

      <h2>Советы по работе с портным для женщин</h2>

      <h3>Будьте честны о своих предпочтениях</h3>
      <p>Чем больше информации вы дадите <strong>портному</strong>, тем лучше будет результат.</p>

      <h3>Приходите на примерки в подходящем белье</h3>
      <p>Носите такое же белье, какое планируете носить с готовым изделием.</p>

      <h3>Доверяйте профессионалу</h3>
      <p>Опытный <strong>мастер по женской одежде в Абу-Даби</strong> знает, что подойдет вашей фигуре лучше всего.</p>

      <h3>Планируйте заранее</h3>
      <p>Особенно для особых случаев - начните процесс за 2-3 месяца.</p>

      <h2>Часто задаваемые вопросы о женском портном</h2>

      <h3>Можно ли принести свою ткань?</h3>
      <p>Большинство <strong>портных для женщин</strong> с радостью работают с тканями клиента, но лучше предварительно обсудить этот вопрос.</p>

      <h3>Что если мне не понравится результат?</h3>
      <p>Профессиональный портной проводит несколько примерок именно для того, чтобы вы были довольны результатом на каждом этапе.</p>

      <h3>Можно ли сделать копию дизайнерского платья?</h3>
      <p><strong>Портной в Абу-Даби для женщин</strong> может создать похожую модель, но с уникальными деталями, адаптированными под вас.</p>

      <h3>Сколько времени занимает пошив?</h3>
      <p>Обычно 2-4 недели для простых моделей, 1-3 месяца для сложных вечерних и свадебных платьев.</p>

      <h2>Преимущества работы с местным портным в Абу-Даби</h2>

      <ul>
        <li><strong>Понимание местного климата</strong> - знание, какие ткани комфортны в жару</li>
        <li><strong>Культурная чувствительность</strong> - уважение к местным традициям при создании модных образов</li>
        <li><strong>Доступность</strong> - легко прийти на примерку</li>
        <li><strong>Персональное обслуживание</strong> - внимание к каждой клиентке</li>
      </ul>

      <h2>Заключение</h2>

      <p><strong>Портной в Абу-Даби для женщин</strong> - это ваш путь к созданию уникального, индивидуального стиля, который отражает вашу личность и подчеркивает вашу красоту. Индивидуальная женская мода - это не роскошь, а разумное вложение в качество, комфорт и уверенность в себе.</p>

      <p>Работая с профессиональным <strong>женским портным</strong>, вы получаете не просто одежду - вы получаете произведения искусства, созданные специально для вас. Каждая вещь идеально сидит, служит годами и делает вас уверенной и неотразимой.</p>

      <p>Доверьтесь мастерству профессионала и откройте для себя мир индивидуальной женской моды в Абу-Даби!</p>
    `
  }

  const contentEn = {
    title: 'Tailor in Abu Dhabi for Ladies: Custom Women\'s Fashion',
    date: 'January 29, 2026',
    content: `
      <p>In a world where fashion is becoming increasingly personalized, a <strong>tailor in Abu Dhabi for ladies</strong> opens doors to a unique world of individual style. Let's understand why custom women's fashion is gaining popularity and how to choose the ideal craftsman.</p>

      <h2>Custom women's fashion in Abu Dhabi: a new era of style</h2>

      <p>Modern women in Abu Dhabi increasingly refuse mass production in favor of unique outfits created specifically for them. A <strong>tailor for ladies</strong> becomes not just a craftsman, but a partner in creating personal style.</p>

      <h3>Why women choose custom tailoring</h3>

      <h4>Uniqueness in every detail</h4>
      <p>When you work with a <strong>tailor in Abu Dhabi for ladies</strong>, you get not just clothing - you get a work of art created exclusively for you:</p>

      <ul>
        <li>Exclusive design that won't be found anywhere else</li>
        <li>Choice of every detail - from fabric to buttons</li>
        <li>Ability to realize any idea</li>
        <li>Creating your own style</li>
      </ul>

      <h4>Perfect fit for your figure</h4>
      <p>Every woman is unique, and a <strong>ladies tailor</strong> understands this better than anyone. Custom tailoring solves problems many women face when buying ready-made clothing.</p>

      <h2>What a tailor for ladies in Abu Dhabi offers</h2>

      <h3>Custom ladies dresses</h3>

      <p>A dress is the queen of women's wardrobe. A <strong>tailor in Abu Dhabi for ladies</strong> creates dresses for any occasion:</p>

      <h4>Everyday dresses</h4>
      <ul>
        <li>Shirt dresses for office</li>
        <li>Summer sundresses from natural fabrics</li>
        <li>Sheath dresses for business meetings</li>
        <li>Maxi dresses for walks</li>
      </ul>

      <h4>Evening dresses</h4>
      <ul>
        <li>Cocktail dresses for social events</li>
        <li>Floor-length evening gowns</li>
        <li>Dresses for gala dinners</li>
        <li>Red carpet outfits</li>
      </ul>

      <h4>Wedding dresses</h4>
      <p>Creating a wedding dress is a special specialization. An experienced <strong>ladies tailor</strong> will turn your dream of a princess dress into reality.</p>

      <h3>Women's suits and business attire</h3>

      <p>For a successful businesswoman in Abu Dhabi, impeccable appearance is important. <strong>Custom ladies suit tailoring</strong> includes:</p>

      <ul>
        <li><strong>Trouser suits</strong> - modern business style</li>
        <li><strong>Skirt suits</strong> - classic elegance</li>
        <li><strong>Jackets and blazers</strong> - universal wardrobe items</li>
        <li><strong>Business dresses</strong> - femininity in office</li>
      </ul>

      <h3>Alterations and modifications of women's clothing</h3>

      <p>A <strong>tailor for ladies in Abu Dhabi</strong> also specializes in:</p>

      <ul>
        <li>Fitting ready-made clothing to figure</li>
        <li>Size changes (take in or let out)</li>
        <li>Changing garment length</li>
        <li>Restoration and updating of favorite items</li>
        <li>Remaking old clothing into fashionable models</li>
      </ul>

      <h2>Specialization: tailoring for different women's body types</h2>

      <h3>Hourglass figure</h3>
      <p>A <strong>tailor in Abu Dhabi for ladies</strong> will emphasize natural proportions:</p>
      <ul>
        <li>Fitted dresses and jackets</li>
        <li>Clothing with waist emphasis</li>
        <li>V-necklines</li>
      </ul>

      <h3>Pear figure</h3>
      <p>Creating balance between top and bottom:</p>
      <ul>
        <li>Emphasis on shoulders and neckline</li>
        <li>Dark colors for bottom</li>
        <li>A-line silhouettes for skirts and dresses</li>
      </ul>

      <h3>Apple figure</h3>
      <p>A <strong>ladies tailor</strong> will create vertical lines:</p>
      <ul>
        <li>V-necklines</li>
        <li>Vertical cut details</li>
        <li>Loose fit in waist area</li>
      </ul>

      <h3>Rectangle figure</h3>
      <p>Creating visual curves:</p>
      <ul>
        <li>Basques and peplums</li>
        <li>Draping in waist area</li>
        <li>Contrasting inserts</li>
      </ul>

      <h2>Custom women's fashion trends 2026</h2>

      <h3>1. Sustainable Fashion</h3>
      <p>Women in Abu Dhabi increasingly value sustainability. A <strong>tailor for ladies</strong> offers:</p>
      <ul>
        <li>Use of natural and recycled fabrics</li>
        <li>Creating durable high-quality clothing</li>
        <li>Recycling and updating existing clothing</li>
      </ul>

      <h3>2. Maximalist luxury</h3>
      <p>Rich fabrics, embroidery, decor - a style loved in UAE:</p>
      <ul>
        <li>Dresses with hand embroidery</li>
        <li>Use of lace and organza</li>
        <li>Decoration with rhinestones and beads</li>
      </ul>

      <h3>3. Neoclassic</h3>
      <p>A <strong>tailor in Abu Dhabi for ladies</strong> creates modern interpretation of classics:</p>
      <ul>
        <li>Clean lines with unexpected details</li>
        <li>Classic silhouettes from modern materials</li>
        <li>Minimalism with twist</li>
      </ul>

      <h3>4. Comfort Couture</h3>
      <p>Elegance shouldn't sacrifice comfort:</p>
      <ul>
        <li>Soft, breathable fabrics</li>
        <li>Loose but stylish silhouettes</li>
        <li>Functional beauty</li>
      </ul>

      <h2>Process of creating custom women's clothing</h2>

      <h3>Stage 1: Inspiration and consultation</h3>
      <p>First meeting with a <strong>ladies tailor</strong> is a creative session discussing:</p>
      <ul>
        <li>Your personal style and preferences</li>
        <li>Clothing purpose</li>
        <li>Reference and idea review</li>
        <li>Budget and timeline discussion</li>
      </ul>

      <h3>Stage 2: Material selection</h3>
      <p>A <strong>tailor for ladies</strong> will help choose ideal fabrics:</p>

      <h4>Suitable for UAE climate:</h4>
      <ul>
        <li><strong>Linen</strong> - breathable and elegant</li>
        <li><strong>Cotton</strong> - universal and comfortable</li>
        <li><strong>Silk</strong> - luxurious and light</li>
        <li><strong>Tencel</strong> - eco-friendly and pleasant to body</li>
      </ul>

      <h3>Stage 3: Taking measurements and pattern creation</h3>
      <p>A professional <strong>tailor in Abu Dhabi for ladies</strong> takes detailed measurements and creates a unique pattern specifically for your figure.</p>

      <h3>Stage 4: Fittings and adjustments</h3>
      <p>Usually 2-3 fittings are conducted:</p>
      <ul>
        <li><strong>First fitting</strong> - checking basic fit</li>
        <li><strong>Second fitting</strong> - final adjustments</li>
        <li><strong>Third fitting</strong> (if necessary) - detail checking</li>
      </ul>

      <h3>Stage 5: Final finishing</h3>
      <p>Finishing touches make clothing perfect.</p>

      <h2>Cost of custom ladies tailoring in Abu Dhabi</h2>

      <p>Investment in <strong>custom ladies clothing tailoring</strong> pays off with quality and durability:</p>

      <h3>Basic wardrobe</h3>
      <ul>
        <li>Blouse: 200-400 AED</li>
        <li>Skirt: 250-450 AED</li>
        <li>Trousers: 300-600 AED</li>
        <li>Simple dress: 400-800 AED</li>
      </ul>

      <h3>Special occasions</h3>
      <ul>
        <li>Business suit: 900-1800 AED</li>
        <li>Cocktail dress: 1000-2000 AED</li>
        <li>Evening dress: 1500-4000 AED</li>
        <li>Wedding dress: 3500-10000 AED</li>
      </ul>

      <h2>How to maximize tailor for ladies services</h2>

      <h3>Create a capsule wardrobe</h3>
      <p>A <strong>tailor in Abu Dhabi for ladies</strong> will help create a set of interchangeable items that easily combine with each other.</p>

      <h3>Invest in basic items</h3>
      <p>Quality basic items from a <strong>ladies tailor</strong> will serve for years:</p>
      <ul>
        <li>Perfect white blouse</li>
        <li>Classic black trousers</li>
        <li>Universal sheath dress</li>
        <li>Impeccable jacket</li>
      </ul>

      <h3>Update wardrobe, don't discard</h3>
      <p>Instead of buying new clothing, contact a <strong>tailor for ladies</strong> to remake existing items.</p>

      <h2>Tips for working with tailor for ladies</h2>

      <h3>Be honest about your preferences</h3>
      <p>The more information you give the <strong>tailor</strong>, the better the result will be.</p>

      <h3>Come to fittings in appropriate underwear</h3>
      <p>Wear the same underwear you plan to wear with the finished garment.</p>

      <h3>Trust the professional</h3>
      <p>An experienced <strong>ladies tailor in Abu Dhabi</strong> knows what will suit your figure best.</p>

      <h3>Plan ahead</h3>
      <p>Especially for special occasions - start the process 2-3 months in advance.</p>

      <h2>Frequently asked questions about ladies tailor</h2>

      <h3>Can I bring my own fabric?</h3>
      <p>Most <strong>tailors for ladies</strong> are happy to work with client's fabrics, but it's better to discuss this in advance.</p>

      <h3>What if I don't like the result?</h3>
      <p>A professional tailor conducts several fittings precisely so you are satisfied with the result at each stage.</p>

      <h3>Can you make a copy of a designer dress?</h3>
      <p>A <strong>tailor in Abu Dhabi for ladies</strong> can create a similar model, but with unique details adapted for you.</p>

      <h3>How long does tailoring take?</h3>
      <p>Usually 2-4 weeks for simple models, 1-3 months for complex evening and wedding dresses.</p>

      <h2>Advantages of working with local tailor in Abu Dhabi</h2>

      <ul>
        <li><strong>Understanding local climate</strong> - knowledge of which fabrics are comfortable in heat</li>
        <li><strong>Cultural sensitivity</strong> - respect for local traditions while creating fashionable looks</li>
        <li><strong>Accessibility</strong> - easy to come for fitting</li>
        <li><strong>Personal service</strong> - attention to each client</li>
      </ul>

      <h2>Conclusion</h2>

      <p>A <strong>tailor in Abu Dhabi for ladies</strong> is your path to creating a unique, individual style that reflects your personality and emphasizes your beauty. Custom women's fashion is not a luxury, but a reasonable investment in quality, comfort and self-confidence.</p>

      <p>Working with a professional <strong>ladies tailor</strong>, you get not just clothing - you get works of art created specifically for you. Every item fits perfectly, serves for years and makes you confident and irresistible.</p>

      <p>Trust the mastery of a professional and discover the world of custom women's fashion in Abu Dhabi!</p>
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
                src="/images/6.JPG"
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
                  <Link href="/blog/womens-tailor-abu-dhabi" style={{ display: 'block', padding: '1rem', borderRadius: '12px', background: '#FFF8F0', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'; }}>
                    <p style={{ color: '#CA9E76', fontWeight: '600', marginBottom: '0.25rem' }}>
                      {lang === 'en' ? 'Women\'s Tailor Abu Dhabi: Finding the Perfect Fit' : 'Женский портной в Абу-Даби: как найти идеальную посадку'}
                    </p>
                    <p style={{ color: '#364147', fontSize: '0.875rem', margin: 0 }}>
                      {lang === 'en' ? 'How to choose a women\'s tailor in Abu Dhabi' : 'Как выбрать мастера по женской одежде'}
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
                </div>
              </div>

              {/* Navigation to Next/Prev Posts */}
              <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #F5E6E6', display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <div style={{ flex: '1', minWidth: '120px' }}>
                  <Link href="/blog/womens-tailor-abu-dhabi" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#CA9E76', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', transition: 'transform 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(-4px)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; }}>
                    <ChevronLeft size={20} />
                    {lang === 'en' ? 'Previous Post' : 'Предыдущая статья'}
                  </Link>
                </div>
                <Link href="/blog" style={{ color: '#CA9E76', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', flex: '0 0 auto' }}>
                  {lang === 'en' ? 'All Posts' : 'Все статьи'}
                </Link>
                <div style={{ flex: '1', minWidth: '120px', display: 'flex', justifyContent: 'flex-end' }}>
                  <Link href="/blog/sewing-trends-uae-2026" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#CA9E76', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', transition: 'transform 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(4px)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; }}>
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
