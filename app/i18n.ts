export type Language = 'en' | 'ru';

export const translations = {
  en: {
    hero: {
      title: 'Yana Boro',
      subtitle: 'Custom Tailoring & Design',
      tagline: 'Bespoke Women\'s Clothing in Abu Dhabi',
      experience: '10+ Years of Sewing Excellence',
      cta: 'Book Consultation',
    },
    nav: {
      about: 'About',
      services: 'Services',
      pricing: 'Pricing',
      training: 'Training',
      contact: 'Contact',
    },
    about: {
      title: 'Master Seamstress',
      description: 'With over 10 years of professional experience, I specialize in creating custom women\'s clothing of any complexity. From elegant dresses to perfectly tailored trousers, each piece is crafted with attention to detail and passion for excellence.',
      location: 'Based in Abu Dhabi, serving all UAE',
      specialty: 'Women\'s custom clothing: dresses, skirts, trousers, blouses, and more',
    },
    services: {
      title: 'Services',
      skirts: 'Skirts',
      dresses: 'Dresses',
      blouses: 'Blouses & Tops',
      trousers: 'Trousers',
      jackets: 'Vests & Jackets',
    },
    pricing: {
      title: 'Pricing',
      currency: 'AED',
      skirts: {
        simple: 'Simple straight/pencil skirt, no lining',
        circle: 'Circle/half-circle, flared skirt',
        gathered: 'Heavily gathered, flowing (no lining)',
        lined: 'Gathered with lining',
      },
      dresses: {
        casual: 'Simple everyday dress (straight, no complex details)',
        boho: 'Boho dress with gathers/ruffles',
        evening: 'Evening/cocktail dress (with lining, complex cut, draping)',
      },
      blouses: {
        simple: 'Simple blouse, no lining',
        detailed: 'With gathers, ruffles, delicate fabric (chiffon, etc.)',
        corset: 'Top/corset with lining',
      },
      trousers: {
        simple: 'Simple straight trousers, no lining',
        tailored: 'Tailored trousers (with creases, waistband, pockets)',
        wide: 'Wide, flowing from delicate fabric',
      },
      jackets: {
        vestSimple: 'Vest without lining',
        vestLined: 'Vest with lining (tailored)',
        jacket: 'Jacket (structured, lined, darts, collar)',
      },
    },
    training: {
      title: 'Sewing Training',
      subtitle: 'Learn Professional Tailoring',
      description: 'Complete course from beginner to advanced. In-person training in Abu Dhabi.',
      features: [
        'Full curriculum from basics to advanced techniques',
        'Hands-on practice with real projects',
        'Individual approach to each student',
        'All materials and tools provided',
        'Certificate upon completion',
      ],
      cta: 'Inquire About Training',
    },
    contact: {
      title: 'Get in Touch',
      phone: 'Phone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      location: 'Abu Dhabi, UAE',
      message: 'Ready to create your perfect garment?',
    },
    footer: {
      tagline: 'Crafted with love in Abu Dhabi',
      rights: '© 2026 Yana Borodulina. All rights reserved.',
    },
  },
  ru: {
    hero: {
      title: 'Яна Бородулина',
      subtitle: 'Пошив на Заказ',
      tagline: 'Индивидуальный пошив женской одежды в Абу-Даби',
      experience: '10+ лет швейного опыта',
      cta: 'Записаться на консультацию',
    },
    nav: {
      about: 'О мастере',
      services: 'Услуги',
      pricing: 'Прайс',
      training: 'Обучение',
      contact: 'Контакты',
    },
    about: {
      title: 'Мастер швейного дела',
      description: 'С опытом работы более 10 лет специализируюсь на создании женской одежды любой сложности на заказ. От элегантных платьев до идеально сидящих брюк — каждая вещь создается с вниманием к деталям и страстью к совершенству.',
      location: 'Нахожусь в Абу-Даби, работаю по всем ОАЭ',
      specialty: 'Женская одежда на заказ: платья, юбки, брюки, блузки и многое другое',
    },
    services: {
      title: 'Услуги',
      skirts: 'Юбки',
      dresses: 'Платья',
      blouses: 'Блузки и Топы',
      trousers: 'Брюки',
      jackets: 'Жилеты и Жакеты',
    },
    pricing: {
      title: 'Прайс',
      currency: 'AED',
      skirts: {
        simple: 'Простая прямая/карандаш, без подкладки',
        circle: 'Юбка «солнце», «полусолнце», клёш',
        gathered: 'Сильная сборка, летящая, без подкладки',
        lined: 'Та же, но с подкладкой',
      },
      dresses: {
        casual: 'Простое повседневное (прямое, без сложных деталей)',
        boho: 'Платье бохо/сборки/воланы',
        evening: 'Вечернее/коктейльное (с подкладкой, сложным кроем, драпировкой)',
      },
      blouses: {
        simple: 'Простая блузка без подкладки',
        detailed: 'Сборки, воланы, рюши, тонкая ткань (шифон и т.п.)',
        corset: 'Топ/корсет на подкладке',
      },
      trousers: {
        simple: 'Простые (прямые, без подкладки)',
        tailored: 'Брюки из костюмной ткани (со стрелками, на поясе, карманы)',
        wide: 'Широкие, летящие из тонкой ткани',
      },
      jackets: {
        vestSimple: 'Жилет без подкладки',
        vestLined: 'Жилет на подкладке (костюмный вариант)',
        jacket: 'Жакет (структура, подкладка, вытачки, воротник)',
      },
    },
    training: {
      title: 'Обучение шитью',
      subtitle: 'Изучите профессиональный пошив',
      description: 'Полный курс с нуля. Обучение оффлайн при личной встрече в Абу-Даби.',
      features: [
        'Полная программа от основ до продвинутых техник',
        'Практика на реальных проектах',
        'Индивидуальный подход к каждому ученику',
        'Все материалы и инструменты предоставляются',
        'Сертификат по окончании',
      ],
      cta: 'Узнать об обучении',
    },
    contact: {
      title: 'Свяжитесь со мной',
      phone: 'Телефон',
      email: 'Email',
      whatsapp: 'WhatsApp',
      location: 'Абу-Даби, ОАЭ',
      message: 'Готовы создать идеальный наряд?',
    },
    footer: {
      tagline: 'Создано с любовью в Абу-Даби',
      rights: '© 2026 Яна Бородулина. Все права защищены.',
    },
  },
};

export function getTranslation(lang: Language) {
  return translations[lang];
}
