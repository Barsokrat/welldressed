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
    title: 'Где купить ткани в Абу-Даби: гид по лучшим местам',
    date: '1 февраля 2026',
    content: `
      <p>Выбор тканей в Абу-Даби может стать настоящим приключением. С одной стороны, город предлагает огромное разнообразие материалов, с другой – найти именно то, что нужно, бывает непросто. В этой статье мы поделимся секретами, где <strong>купить ткани в Абу-Даби</strong> и как сделать это максимально эффективно.</p>

      <h2>Особенности рынка тканей в Абу-Даби</h2>

      <p>Практически в любом <strong>магазине тканей в Абу-Даби</strong> вы встретите большое многообразие лёгких и ярких цветастых материалов, а также однотонных тканей для абай и кандур. Это отражает специфику местного рынка и культурные предпочтения.</p>

      <h3>Основные вызовы при выборе тканей</h3>

      <ul>
        <li><strong>Преобладание традиционных тканей</strong> – большая часть ассортимента ориентирована на традиционную одежду</li>
        <li><strong>Поиск европейских тканей</strong> – найти качественный лён, шерсть или костюмные ткани может быть непросто</li>
        <li><strong>Качество материалов</strong> – не всегда легко оценить состав и качество на глаз</li>
        <li><strong>Разброс цен</strong> – стоимость схожих тканей может сильно отличаться в разных местах</li>
      </ul>

      <h2>Общие советы по выбору тканей в Абу-Даби</h2>

      <h3>1. Планируйте логистику заранее</h3>
      <p>В идеале ваша логистика при <strong>выборе тканей в Абу-Даби</strong> должна быть удобной, чтобы не приходилось мотаться по всему городу. Полезно вооружиться знаниями о том, где что продаётся и где что можно найти.</p>

      <h3>2. Всегда проверяйте состав</h3>
      <p>Спрашивайте о составе ткани. В жарком климате ОАЭ особенно важны натуральные, дышащие материалы.</p>

      <h3>3. Берите образцы</h3>
      <p>Многие магазины дают небольшие образцы тканей. Это поможет сравнить материалы дома при естественном освещении.</p>

      <h3>4. Проверяйте ширину ткани</h3>
      <p>Ширина рулона может варьироваться от 90 см до 150 см – это влияет на расход материала.</p>

      <h2>Топ-3 места для покупки тканей: секретные лайфхаки</h2>

      <h3>1. Madinat Zayed Mall + Malik and Shaheed – двойной удар</h3>

      <p><strong>Madinat Zayed Mall</strong> – это одно из крупнейших средоточий тканевых магазинов в Абу-Даби. Ткани можно найти практически в любом швейном квартале города (как скопление однотипных магазинов в одном месте – такие есть по ремонту, по электронике и так далее).</p>

      <h4>Что предлагает Madinat Zayed Mall:</h4>
      <ul>
        <li>Оба этажа торгового центра предлагают выбор тканей</li>
        <li>Большое разнообразие предложений</li>
        <li>Конкурентные цены благодаря множеству продавцов</li>
        <li>Удобное расположение в центре города</li>
      </ul>

      <h4>Секретный лайфхак: Malik and Shaheed</h4>
      <p>Совсем рядом с Madinat Zayed Mall находится магазин <strong>Malik and Shaheed</strong>, который многие упускают из виду. В большей части он специализируется на швейной фурнитуре, но это настоящая находка для серьёзного шитья:</p>

      <ul>
        <li><strong>Швейная фурнитура</strong> – пуговицы, молнии, нитки профессионального качества</li>
        <li><strong>Подкладочные ткани</strong> – хороший выбор качественных подкладок</li>
        <li><strong>Дублерин и флизелин</strong> – различные виды для разных задач</li>
        <li><strong>Основные ткани</strong> – загляните на 2-й этаж, там найдёте интересные варианты</li>
      </ul>

      <p><strong>Совет:</strong> Посетите сначала Madinat Zayed Mall для общего выбора тканей, а затем зайдите в Malik and Shaheed за фурнитурой и специальными материалами. Экономия времени и удобная логистика!</p>

      <h4>Бонус: качественные нитки Gutermann</h4>
      <p>А если вы хотите углубиться в подбор ниток для своего будущего изделия, то можете не пожалеть времени и денег и подобрать нитки из качественного сегмента – речь, конечно же, о нитках <strong>Gutermann</strong>.</p>

      <p>Их можно найти в Абу-Даби: загляните в <strong>WTC Mall в магазин Stitch in Time</strong>, что на подземном уровне торгового центра. Там вы найдёте качественные нитки, и именно там мы подбираем нитки для наших клиентов.</p>

      <h3>2. Regal Fabrics – для ценителей качества</h3>

      <p>Если вы ищете <strong>деликатные ткани в Абу-Даби</strong> или материалы из luxury-сегмента, <strong>Regal Fabrics</strong> – ваш выбор.</p>

      <h4>Преимущества Regal Fabrics:</h4>
      <ul>
        <li><strong>Премиум-качество</strong> – шёлк, кашемир, итальянские и французские ткани</li>
        <li><strong>Разнообразие деликатных материалов</strong> – идеально для вечерних нарядов и особых случаев</li>
        <li><strong>Профессиональная консультация</strong> – персонал разбирается в тканях и поможет с выбором</li>
        <li><strong>Стабильное качество</strong> – можете быть уверены в составе и характеристиках</li>
      </ul>

      <h4>Секрет экономии: секция Leftovers</h4>
      <p>Здесь интересно: для обучения деликатному пошиву можно найти неплохие предложения по <strong>leftovers</strong> (остаткам). Взять хороший кусок качественной ткани в 2-3 раза дешевле – и иногда этого может даже хватить на небольшое изделие, в том числе тренировочное.</p>

      <p><strong>Идеально для:</strong> Если вы учитесь шить или хотите попробовать работу с дорогой тканью без больших затрат, leftovers в Regal Fabrics – отличный вариант.</p>

      <h3>3. UNU General Trading в Umm Al Quwain – для искателей приключений</h3>

      <p>Для любителей многообразия и для тех, у кого есть автомобиль и кто не боится немного "замарать руки", можно рассмотреть (хотя это уже не Абу-Даби) магазин <strong>UNU General Trading</strong> в эмирате Umm Al Quwain.</p>

      <h4>Что это за место:</h4>
      <ul>
        <li><strong>Несколько огромных складов-магазинов</strong> – настоящий рай для любителей тканей</li>
        <li><strong>Супер-широкий выбор</strong> – от простого хлопка до роскошных материалов</li>
        <li><strong>Приятные цены</strong> – значительно ниже, чем в Абу-Даби</li>
        <li><strong>Продажа в розницу</strong> – не нужно покупать оптом</li>
      </ul>

      <h4>Как туда добраться:</h4>
      <p>От Абу-Даби до Umm Al Quwain примерно 1,5-2 часа на машине. Поездка стоит того, если вы планируете закупиться тканями на несколько проектов.</p>

      <h4>Что учесть:</h4>
      <ul>
        <li>Поездка занимает полдня – планируйте заранее</li>
        <li>Возьмите с собой воду и перекус</li>
        <li>Приезжайте с утра – будет больше времени на выбор</li>
        <li>Берите с собой список того, что ищете</li>
        <li>Не стесняйтесь торговаться – это часть культуры</li>
      </ul>

      <h2>Дополнительные советы от мастера по пошиву</h2>

      <h3>Как работать с продавцами в магазинах тканей</h3>

      <p>Продавцы в тканевых магазинах Абу-Даби обычно очень услужливы, но могут быть настойчивыми. Вот как общаться эффективно:</p>

      <ul>
        <li><strong>Знайте, что ищете</strong> – чётко сформулируйте тип ткани, вес, состав</li>
        <li><strong>Не бойтесь отказывать</strong> – если ткань не подходит, просто скажите "no, thank you"</li>
        <li><strong>Просите показать варианты</strong> – часто лучшие ткани не на виду</li>
        <li><strong>Спрашивайте про уход</strong> – нужна ли химчистка, даёт ли ткань усадку</li>
      </ul>

      <h3>Сколько ткани покупать</h3>

      <p>Всегда берите на 10-15% больше расчётного количества. Это страховка от ошибок кроя, усадки после стирки и возможных переделок.</p>

      <h3>Проверка качества прямо в магазине</h3>

      <ul>
        <li><strong>Растяните ткань</strong> – она должна вернуться в исходную форму</li>
        <li><strong>Посмотрите на свет</strong> – оцените плотность плетения</li>
        <li><strong>Потрите пальцами</strong> – качественная ткань не должна "скатываться"</li>
        <li><strong>Понюхайте</strong> – резкий химический запах – плохой знак</li>
      </ul>

      <h2>Специальные ткани для климата Абу-Даби</h2>

      <h3>Лучшие ткани для жаркого климата</h3>

      <ul>
        <li><strong>Лён</strong> – дышащий, прохладный, идеален для лета</li>
        <li><strong>Хлопок</strong> – натуральный, комфортный, универсальный</li>
        <li><strong>Вискоза</strong> – лёгкая, приятная к телу, хорошо драпируется</li>
        <li><strong>Тенсел</strong> – экологичный, шелковистый, не жаркий</li>
        <li><strong>Лёгкая шерсть</strong> – для кондиционированных помещений</li>
      </ul>

      <h3>Чего избегать в ОАЭ</h3>

      <ul>
        <li><strong>Синтетика низкого качества</strong> – не дышит, создаёт дискомфорт</li>
        <li><strong>Тяжёлые ткани</strong> – бархат, плотная шерсть актуальны только зимой</li>
        <li><strong>Ткани тёмных цветов</strong> – притягивают тепло на солнце</li>
      </ul>

      <h2>Когда стоит обратиться к профессионалу</h2>

      <p>Если вы не уверены в выборе ткани для конкретного изделия, профессиональная швея или <strong>мастер по пошиву в Абу-Даби</strong> может:</p>

      <ul>
        <li>Порекомендовать подходящие типы тканей для вашего проекта</li>
        <li>Подсказать, где купить нужный материал</li>
        <li>Рассчитать точное количество ткани</li>
        <li>Выбрать подходящую фурнитуру</li>
        <li>Посоветовать альтернативы, если нужная ткань недоступна</li>
      </ul>

      <h2>Наш личный опыт и рекомендации</h2>

      <p>За годы работы в индустрии пошива одежды в Абу-Даби мы опробовали десятки магазинов и поставщиков тканей. Три места, описанные выше, – это действительно оптимальная комбинация для большинства швейных проектов.</p>

      <h3>Наша стратегия закупки тканей</h3>

      <p>Для <strong>повседневных проектов</strong> мы используем Madinat Zayed Mall + Malik and Shaheed – это экономит время и даёт хороший выбор по приемлемым ценам.</p>

      <p>Для <strong>особых заказов</strong> (свадебные платья, вечерние наряды) обращаемся в Regal Fabrics, где качество материалов гарантировано.</p>

      <p>Для <strong>масштабных закупок</strong> или когда нужно большое разнообразие тканей для коллекции, выезжаем в UNU General Trading – экономия существенная.</p>

      <h2>Заключение</h2>

      <p><strong>Купить ткани в Абу-Даби</strong> – задача выполнимая, если знать правильные места. Используйте наши рекомендации, планируйте логистику заранее и не бойтесь исследовать новые места.</p>

      <p>Помните: качественная ткань – это основа красивого и долговечного изделия. Иногда стоит потратить чуть больше времени на поиски или проехать дальше, чтобы получить именно тот материал, который воплотит вашу идею в жизнь.</p>

      <p>А если вам нужна помощь с выбором тканей или профессиональный пошив одежды, мы всегда рады помочь воплотить ваши идеи в реальность!</p>
    `
  }

  const contentEn = {
    title: 'Where to Buy Fabrics in Abu Dhabi: Guide to Best Places',
    date: 'February 1, 2026',
    content: `
      <p>Choosing fabrics in Abu Dhabi can be a real adventure. On one hand, the city offers a huge variety of materials; on the other, finding exactly what you need can be challenging. In this article, we'll share secrets of where to <strong>buy fabrics in Abu Dhabi</strong> and how to do it most efficiently.</p>

      <h2>Features of the fabric market in Abu Dhabi</h2>

      <p>In almost any <strong>fabric store in Abu Dhabi</strong>, you'll encounter a large variety of light and bright colorful materials, as well as solid fabrics for abayas and kanduras. This reflects the specifics of the local market and cultural preferences.</p>

      <h3>Main challenges when choosing fabrics</h3>

      <ul>
        <li><strong>Predominance of traditional fabrics</strong> – most of the assortment is oriented toward traditional clothing</li>
        <li><strong>Finding European fabrics</strong> – finding quality linen, wool, or suiting fabrics can be difficult</li>
        <li><strong>Material quality</strong> – it's not always easy to assess composition and quality by eye</li>
        <li><strong>Price spread</strong> – the cost of similar fabrics can vary greatly in different places</li>
      </ul>

      <h2>General tips for choosing fabrics in Abu Dhabi</h2>

      <h3>1. Plan logistics in advance</h3>
      <p>Ideally, your logistics when <strong>choosing fabrics in Abu Dhabi</strong> should be convenient, so you don't have to rush around the city to different places. It's useful to arm yourself with knowledge about where what is sold and where what can be found.</p>

      <h3>2. Always check composition</h3>
      <p>Ask about fabric composition. In the hot UAE climate, natural, breathable materials are especially important.</p>

      <h3>3. Take samples</h3>
      <p>Many stores give small fabric samples. This helps compare materials at home in natural lighting.</p>

      <h3>4. Check fabric width</h3>
      <p>Roll width can vary from 90 cm to 150 cm – this affects material consumption.</p>

      <h2>Top 3 places to buy fabrics: secret life hacks</h2>

      <h3>1. Madinat Zayed Mall + Malik and Shaheed – double strike</h3>

      <p><strong>Madinat Zayed Mall</strong> is one of the largest concentrations of fabric stores in Abu Dhabi. Fabrics can be found in almost any sewing quarter of the city (as a cluster of similar stores in one place – such exist for repairs, electronics, and so on).</p>

      <h4>What Madinat Zayed Mall offers:</h4>
      <ul>
        <li>Both floors of the shopping center offer fabric selection</li>
        <li>Large variety of offers</li>
        <li>Competitive prices thanks to many sellers</li>
        <li>Convenient downtown location</li>
      </ul>

      <h4>Secret life hack: Malik and Shaheed</h4>
      <p>Very close to Madinat Zayed Mall is <strong>Malik and Shaheed</strong> store, which many overlook. It mostly specializes in sewing notions, but it's a real find for serious sewing:</p>

      <ul>
        <li><strong>Sewing notions</strong> – buttons, zippers, professional-quality threads</li>
        <li><strong>Lining fabrics</strong> – good selection of quality linings</li>
        <li><strong>Interfacing and fusible</strong> – various types for different tasks</li>
        <li><strong>Main fabrics</strong> – check the 2nd floor, you'll find interesting options</li>
      </ul>

      <p><strong>Tip:</strong> Visit Madinat Zayed Mall first for general fabric selection, then go to Malik and Shaheed for notions and special materials. Time-saving and convenient logistics!</p>

      <h4>Bonus: quality Gutermann threads</h4>
      <p>If you want to go deeper into selecting threads for your future garment, you can spare the time and money to choose threads from the quality segment – we're talking, of course, about <strong>Gutermann threads</strong>.</p>

      <p>They can be found in Abu Dhabi: check out <strong>WTC Mall, Stitch in Time store</strong>, located on the underground level of the shopping center. There you'll find quality threads, and that's where we select threads for our clients.</p>

      <h3>2. Regal Fabrics – for quality connoisseurs</h3>

      <p>If you're looking for <strong>delicate fabrics in Abu Dhabi</strong> or luxury-segment materials, <strong>Regal Fabrics</strong> is your choice.</p>

      <h4>Regal Fabrics advantages:</h4>
      <ul>
        <li><strong>Premium quality</strong> – silk, cashmere, Italian and French fabrics</li>
        <li><strong>Variety of delicate materials</strong> – ideal for evening wear and special occasions</li>
        <li><strong>Professional consultation</strong> – staff knows fabrics and will help with selection</li>
        <li><strong>Stable quality</strong> – you can be sure of composition and characteristics</li>
      </ul>

      <h4>Savings secret: Leftovers section</h4>
      <p>Here's what's interesting: for learning delicate sewing, you can find good <strong>leftovers</strong> deals. Get a good piece of quality fabric 2-3 times cheaper – and sometimes it's even enough for a small item, including practice pieces.</p>

      <p><strong>Perfect for:</strong> If you're learning to sew or want to try working with expensive fabric without big expenses, leftovers at Regal Fabrics are an excellent option.</p>

      <h3>3. UNU General Trading in Umm Al Quwain – for adventurers</h3>

      <p>For variety lovers and those who have a car and aren't afraid to get their hands a bit "dirty," consider (though it's no longer Abu Dhabi) <strong>UNU General Trading</strong> store in Umm Al Quwain emirate.</p>

      <h4>What this place is:</h4>
      <ul>
        <li><strong>Several huge warehouse-stores</strong> – a true paradise for fabric lovers</li>
        <li><strong>Super-wide selection</strong> – from simple cotton to luxurious materials</li>
        <li><strong>Pleasant prices</strong> – significantly lower than in Abu Dhabi</li>
        <li><strong>Retail sales</strong> – no need to buy wholesale</li>
      </ul>

      <h4>How to get there:</h4>
      <p>From Abu Dhabi to Umm Al Quwain is about 1.5-2 hours by car. The trip is worth it if you plan to stock up on fabrics for several projects.</p>

      <h4>What to consider:</h4>
      <ul>
        <li>Trip takes half a day – plan ahead</li>
        <li>Bring water and snacks</li>
        <li>Come in the morning – you'll have more time to choose</li>
        <li>Bring a list of what you're looking for</li>
        <li>Don't hesitate to bargain – it's part of the culture</li>
      </ul>

      <h2>Additional tips from a sewing master</h2>

      <h3>How to work with sellers in fabric stores</h3>

      <p>Sellers in Abu Dhabi fabric stores are usually very helpful but can be persistent. Here's how to communicate effectively:</p>

      <ul>
        <li><strong>Know what you're looking for</strong> – clearly formulate fabric type, weight, composition</li>
        <li><strong>Don't be afraid to refuse</strong> – if fabric doesn't suit, just say "no, thank you"</li>
        <li><strong>Ask to show options</strong> – often the best fabrics aren't on display</li>
        <li><strong>Ask about care</strong> – is dry cleaning needed, does fabric shrink</li>
      </ul>

      <h3>How much fabric to buy</h3>

      <p>Always buy 10-15% more than calculated amount. This is insurance against cutting errors, shrinkage after washing, and possible alterations.</p>

      <h3>Quality check right in the store</h3>

      <ul>
        <li><strong>Stretch the fabric</strong> – it should return to original shape</li>
        <li><strong>Look at the light</strong> – assess weave density</li>
        <li><strong>Rub with fingers</strong> – quality fabric shouldn't pill</li>
        <li><strong>Smell</strong> – sharp chemical smell is a bad sign</li>
      </ul>

      <h2>Special fabrics for Abu Dhabi climate</h2>

      <h3>Best fabrics for hot climate</h3>

      <ul>
        <li><strong>Linen</strong> – breathable, cool, ideal for summer</li>
        <li><strong>Cotton</strong> – natural, comfortable, universal</li>
        <li><strong>Viscose</strong> – light, pleasant to body, drapes well</li>
        <li><strong>Tencel</strong> – eco-friendly, silky, not hot</li>
        <li><strong>Light wool</strong> – for air-conditioned spaces</li>
      </ul>

      <h3>What to avoid in UAE</h3>

      <ul>
        <li><strong>Low-quality synthetics</strong> – doesn't breathe, creates discomfort</li>
        <li><strong>Heavy fabrics</strong> – velvet, thick wool relevant only in winter</li>
        <li><strong>Dark color fabrics</strong> – attract heat in the sun</li>
      </ul>

      <h2>When to turn to a professional</h2>

      <p>If you're unsure about fabric choice for a specific garment, a professional seamstress or <strong>sewing master in Abu Dhabi</strong> can:</p>

      <ul>
        <li>Recommend suitable fabric types for your project</li>
        <li>Suggest where to buy needed material</li>
        <li>Calculate exact fabric amount</li>
        <li>Choose suitable notions</li>
        <li>Advise alternatives if needed fabric is unavailable</li>
      </ul>

      <h2>Our personal experience and recommendations</h2>

      <p>Over years of work in the clothing tailoring industry in Abu Dhabi, we've tried dozens of fabric stores and suppliers. The three places described above are truly the optimal combination for most sewing projects.</p>

      <h3>Our fabric procurement strategy</h3>

      <p>For <strong>everyday projects</strong>, we use Madinat Zayed Mall + Malik and Shaheed – this saves time and gives good selection at reasonable prices.</p>

      <p>For <strong>special orders</strong> (wedding dresses, evening gowns), we turn to Regal Fabrics, where material quality is guaranteed.</p>

      <p>For <strong>large-scale purchases</strong> or when a large variety of fabrics is needed for a collection, we go to UNU General Trading – the savings are substantial.</p>

      <h2>Conclusion</h2>

      <p><strong>Buying fabrics in Abu Dhabi</strong> is a doable task if you know the right places. Use our recommendations, plan logistics in advance, and don't be afraid to explore new places.</p>

      <p>Remember: quality fabric is the foundation of a beautiful and durable garment. Sometimes it's worth spending a bit more time searching or driving further to get exactly the material that will bring your idea to life.</p>

      <p>And if you need help choosing fabrics or professional clothing tailoring, we're always happy to help bring your ideas to reality!</p>
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
                src="/images/blog/fabric-shopping.jpeg"
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
                  <Link href="/blog/custom-clothing-abu-dhabi" style={{ display: 'block', padding: '1rem', borderRadius: '12px', background: '#FFF8F0', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'; }}>
                    <p style={{ color: '#CA9E76', fontWeight: '600', marginBottom: '0.25rem' }}>
                      {lang === 'en' ? 'Custom Clothing in Abu Dhabi: Benefits of Bespoke Tailoring' : 'Одежда на заказ в Абу-Даби: плюсы пошива'}
                    </p>
                    <p style={{ color: '#364147', fontSize: '0.875rem', margin: 0 }}>
                      {lang === 'en' ? 'Why a seamstress in Abu Dhabi is the best choice' : 'Почему швея в Абу-Даби - это лучший выбор'}
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
                <div style={{ flex: '1', minWidth: '120px' }}></div>
                <Link href="/blog" style={{ color: '#CA9E76', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', flex: '0 0 auto' }}>
                  {lang === 'en' ? 'All Posts' : 'Все статьи'}
                </Link>
                <div style={{ flex: '1', minWidth: '120px', display: 'flex', justifyContent: 'flex-end' }}>
                  <Link href="/blog/ladies-tailoring-abu-dhabi" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#CA9E76', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', transition: 'transform 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(4px)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; }}>
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
