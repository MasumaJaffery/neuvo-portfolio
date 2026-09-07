// Central i18n store for the whole site.
//
// How it works:
//  - Every translatable element in the markup gets a `data-i18n="path.to.key"`
//    attribute (dot-path into the `translations` object below).
//  - `applyTranslations(lang)` walks the DOM once and swaps textContent
//    (and placeholders, via `data-i18n-placeholder`) for every such element.
//  - `initI18n()` reads the saved language from localStorage (defaulting to
//    English) and applies it — call this once, as early as possible, so the
//    whole page (not just the navbar) is translated on load.
//
// Deliberately left untranslated: anything styled to look like literal code
// or a filename (`cat project.json`, the `name:`/`id:`/`stack:` JSON-style
// keys, the `project.exe` / `analysis.exe` tab names). Those are decorative
// "terminal" flavor text, not prose — same reasoning real software uses for
// keeping code/comments in their original language across locales.

export type Lang = 'en' | 'ur' | 'ar' | 'es' | 'fa';

export const languageNames: Record<Lang, string> = {
  en: 'English',
  ur: 'اردو',
  ar: 'العربية',
  es: 'Español',
  fa: 'فارسی',
};

export const rtlLanguages: Lang[] = ['ur', 'ar', 'fa'];

type Dict = Record<string, unknown>;

export const translations: Record<Lang, Dict> = {
  en: {
    nav: { home: 'Home', work: 'Work', about: 'About', stack: 'Stack', contact: 'Get in touch' },
    hero: {
      firstName: 'Masuma',
      lastName: 'Jaffery',
      tag: 'Founder · ICodeDreams',
      subtitle: 'Creative Developer crafting digital experiences that blend design & code.',
      viewWork: 'View Work',
      aboutMe: 'About me →',
    },
    about: {
      title: 'About Us',
      whoAmI: 'WHO AM I??',
      user: 'User',
      realName: 'Real Name',
      role: 'Role',
      roleValue: 'Full-Stack Dev / Founder',
      company: 'Company',
      focus: 'Focus',
      focusValue: 'Web · Mobile · Commerce',
      stackLabel: 'Stack',
      stackValue: 'MERN + Native',
      uptime: 'Uptime',
      uptimeValue: '5+ years',
      status: 'Status',
      statusValue: 'Available ●',
      helloTitle: 'Hello, I am Masuma Jaffery',
      bio: 'I specialize in building fast, reliable web and mobile products — from custom Shopify / WooCommerce stores to cross-platform apps. My mission: turn client ideas into shipped, working software.',
      getResume: 'Get Resume',
      pillFullStack: 'Full-Stack Dev',
      pillUiUx: 'UI / UX',
      pillApiDesign: 'API Design',
      frontend: 'Frontend',
      backendMobile: 'Backend & Mobile',
      cmsCommerce: 'CMS & Commerce',
      toolsWorkflow: 'Tools & Workflow',
    },
    contact: {
      nameLabel: 'name',
      emailLabel: 'email',
      messageLabel: 'message',
      namePlaceholder: 'your name',
      emailPlaceholder: 'you@domain.com',
      messagePlaceholder: 'type your message...',
      sendBtn: 'send --now',
      statusSending: '> transmitting...',
      statusSuccess: "> message received. i'll reply soon.",
      statusErrorGeneric: '> transmission failed: check your connection and try again.',
    },
    footer: {
      builtWith: 'Built with TypeScript, Three.js & Astro.',
      managedBy: 'Managed by',
    },
    projects: {
      sectionTitle: 'My Projects',
      viewInTerminal: 'VIEW IN TERMINAL',
      liveSite: 'LIVE SITE',
      github: 'GITHUB',
      statusLive: 'LIVE',
      statusBuilding: 'BUILDING',
      flowStart: 'START',
      flowProblem: 'Problem identified',
      flowGoal: 'Goal defined?',
      flowStackSelected: 'Stack selected',
      flowFeatures: 'Features built',
      flowDeployed: 'Deployed ✓',
      whyProblem: '// problem',
      whyGoal: '// goal',
      whyImpact: '// impact',
    },
    data: {
      PROJECT_001: {
        description:
          'Splendor Homes LLC is a real estate platform developed using React, offering a modern and user-friendly interface for exploring properties, managing listings, and streamlining real estate transactions.',
        why: {
          problem: 'Real estate listings and transactions were scattered across outdated, hard-to-navigate platforms.',
          goal: 'A modern, user-friendly platform to explore properties, manage listings, and streamline transactions.',
          impact: 'Gave Splendor Homes LLC a professional online presence with a smoother listing-to-sale experience.',
        },
      },
      PROJECT_002: {
        description:
          '3D Interactive Nehjul Balagha is a web application that allows users to explore the book in a 3D interactive format, enhancing the reading experience with immersive visuals and interactive features.',
        why: {
          problem: 'Reading Nahj al-Balagha online often means a flat, text-only page without the experience of reading a real book.',
          goal: 'Bring the book into an immersive 3D space so exploring it feels closer to holding and turning pages.',
          impact: 'Gives readers a more engaging, visually rich way to explore the text online.',
        },
      },
      PROJECT_003: {
        description:
          'Northview Associates offers a full range of consultancy and training methods for business consultation, and strategic ways for business growth.',
        why: {
          problem: 'Business consultancy needed a professional online presence to showcase services and build client trust.',
          goal: 'A modern site presenting consultancy and training offerings with clear, strategic messaging.',
          impact: 'Gave Northview Associates a polished digital front door for attracting and informing clients.',
        },
      },
      PROJECT_004: {
        description:
          'Muhasabah (محاسبة) is a spiritual mindfulness and self-accounting application designed to help individuals cultivate daily reflection, maintain consistency in prayer and good habits, and nurture spiritual growth. Built with a modern, glassmorphic Bento design, it offers a tranquil, distraction-free space for everyday contemplation.',
        why: {
          problem: 'People want to build consistent daily reflection and prayer habits but lack a calm, distraction-free space to do it.',
          goal: 'A glassmorphic, Bento-style app for daily self-accounting and spiritual mindfulness.',
          impact: 'Gives users a tranquil space for everyday contemplation and steadier spiritual habits.',
        },
      },
      PROJECT_005: {
        description:
          'Globe Weather is a weather application that provides real-time weather information and forecasts for locations around the world. It allows users to search for specific cities, view current conditions, and access detailed forecasts, making it a valuable tool for planning daily activities based on weather conditions.',
        why: {
          problem: 'Checking accurate weather for a city elsewhere in the world often means juggling cluttered, ad-heavy sites.',
          goal: 'A clean, fast tool to search any city and see current conditions plus a detailed forecast.',
          impact: 'Makes checking weather for daily planning quick and distraction-free, for any location worldwide.',
        },
      },
      PROJECT_006: {
        description:
          'Brunswick Builders, LLC is a construction management and project development firm whose owners and members have over 60 years of combined experience committed to superior quality services to its clients.',
        why: {
          problem: 'A construction firm with decades of combined experience needed an online presence matching their professionalism.',
          goal: 'A clean, credible site presenting their services and process from concept through owner occupancy.',
          impact: 'Gave Brunswick Builders a professional digital presence to attract and inform prospective clients.',
        },
      },
    },
  },

  es: {
    nav: { home: 'Inicio', work: 'Proyectos', about: 'Nosotros', stack: 'Tecnologías', contact: 'Contactar' },
    hero: {
      firstName: 'Masuma',
      lastName: 'Jaffery',
      tag: 'Fundadora · ICodeDreams',
      subtitle: 'Desarrolladora creativa que combina diseño y código en experiencias digitales.',
      viewWork: 'Ver Proyectos',
      aboutMe: 'Sobre mí →',
    },
    about: {
      title: 'Sobre Nosotros',
      whoAmI: '¿QUIÉN SOY?',
      user: 'Usuario',
      realName: 'Nombre real',
      role: 'Rol',
      roleValue: 'Desarrolladora Full-Stack / Fundadora',
      company: 'Empresa',
      focus: 'Enfoque',
      focusValue: 'Web · Móvil · Comercio',
      stackLabel: 'Stack',
      stackValue: 'MERN + Nativo',
      uptime: 'Tiempo activo',
      uptimeValue: '5+ años',
      status: 'Estado',
      statusValue: 'Disponible ●',
      helloTitle: 'Hola, soy Masuma Jaffery',
      bio: 'Me especializo en construir productos web y móviles rápidos y confiables — desde tiendas personalizadas en Shopify / WooCommerce hasta aplicaciones multiplataforma. Mi misión: convertir las ideas de los clientes en software funcional y entregado.',
      getResume: 'Descargar CV',
      pillFullStack: 'Desarrollo Full-Stack',
      pillUiUx: 'UI / UX',
      pillApiDesign: 'Diseño de API',
      frontend: 'Frontend',
      backendMobile: 'Backend y Móvil',
      cmsCommerce: 'CMS y Comercio',
      toolsWorkflow: 'Herramientas y Flujo de trabajo',
    },
    contact: {
      nameLabel: 'nombre',
      emailLabel: 'correo',
      messageLabel: 'mensaje',
      namePlaceholder: 'tu nombre',
      emailPlaceholder: 'you@domain.com',
      messagePlaceholder: 'escribe tu mensaje...',
      sendBtn: 'enviar --ahora',
      statusSending: '> transmitiendo...',
      statusSuccess: '> mensaje recibido. te responderé pronto.',
      statusErrorGeneric: '> transmisión fallida: verifica tu conexión e inténtalo de nuevo.',
    },
    footer: {
      builtWith: 'Creado con TypeScript, Three.js y Astro.',
      managedBy: 'Gestionado por',
    },
    projects: {
      sectionTitle: 'Mis Proyectos',
      viewInTerminal: 'VER EN TERMINAL',
      liveSite: 'SITIO EN VIVO',
      github: 'GITHUB',
      statusLive: 'EN VIVO',
      statusBuilding: 'EN DESARROLLO',
      flowStart: 'INICIO',
      flowProblem: 'Problema identificado',
      flowGoal: '¿Meta definida?',
      flowStackSelected: 'Stack seleccionado',
      flowFeatures: 'Funciones creadas',
      flowDeployed: 'Implementado ✓',
      whyProblem: '// problema',
      whyGoal: '// meta',
      whyImpact: '// impacto',
    },
    data: {
      PROJECT_001: {
        description:
          'Splendor Homes LLC es una plataforma inmobiliaria desarrollada con React que ofrece una interfaz moderna y fácil de usar para explorar propiedades, gestionar listados y agilizar las transacciones inmobiliarias.',
        why: {
          problem: 'Los listados y transacciones inmobiliarias estaban dispersos en plataformas anticuadas y difíciles de usar.',
          goal: 'Una plataforma moderna y fácil de usar para explorar propiedades, gestionar listados y agilizar las transacciones.',
          impact: 'Le dio a Splendor Homes LLC una presencia profesional en línea con una experiencia de venta más fluida.',
        },
      },
      PROJECT_002: {
        description:
          '3D Interactive Nehjul Balagha es una aplicación web que permite a los usuarios explorar el libro en un formato interactivo en 3D, mejorando la experiencia de lectura con imágenes inmersivas y funciones interactivas.',
        why: {
          problem: 'Leer Nahj al-Balagha en línea suele significar una página plana y solo de texto, sin la experiencia de leer un libro real.',
          goal: 'Llevar el libro a un espacio 3D inmersivo para que explorarlo se sienta más cercano a sostenerlo y pasar sus páginas.',
          impact: 'Ofrece a los lectores una forma más atractiva y visualmente rica de explorar el texto en línea.',
        },
      },
      PROJECT_003: {
        description:
          'Northview Associates ofrece una amplia gama de métodos de consultoría y capacitación para asesoría empresarial, además de estrategias para el crecimiento del negocio.',
        why: {
          problem: 'La consultora necesitaba una presencia profesional en línea para mostrar sus servicios y generar confianza con los clientes.',
          goal: 'Un sitio moderno que presente los servicios de consultoría y capacitación con un mensaje claro y estratégico.',
          impact: 'Le dio a Northview Associates una puerta de entrada digital pulida para atraer e informar a sus clientes.',
        },
      },
      PROJECT_004: {
        description:
          'Muhasabah (محاسبة) es una aplicación de mindfulness espiritual y autoevaluación diseñada para ayudar a las personas a cultivar la reflexión diaria, mantener la constancia en la oración y los buenos hábitos, y nutrir su crecimiento espiritual. Construida con un diseño Bento moderno y glassmórfico, ofrece un espacio tranquilo y sin distracciones para la contemplación diaria.',
        why: {
          problem: 'Las personas quieren desarrollar hábitos constantes de reflexión diaria y oración, pero carecen de un espacio tranquilo y sin distracciones para hacerlo.',
          goal: 'Una aplicación de estilo Bento y glassmórfico para la autoevaluación diaria y el mindfulness espiritual.',
          impact: 'Ofrece a los usuarios un espacio tranquilo para la contemplación diaria y hábitos espirituales más estables.',
        },
      },
      PROJECT_005: {
        description:
          'Globe Weather es una aplicación meteorológica que ofrece información del clima en tiempo real y pronósticos para ubicaciones de todo el mundo. Permite a los usuarios buscar ciudades específicas, ver las condiciones actuales y acceder a pronósticos detallados, siendo una herramienta valiosa para planificar actividades diarias según el clima.',
        why: {
          problem: 'Consultar el clima preciso de una ciudad en otra parte del mundo suele implicar lidiar con sitios saturados y llenos de anuncios.',
          goal: 'Una herramienta rápida y sencilla para buscar cualquier ciudad y ver sus condiciones actuales junto con un pronóstico detallado.',
          impact: 'Hace que consultar el clima para planificar el día sea rápido y sin distracciones, en cualquier lugar del mundo.',
        },
      },
      PROJECT_006: {
        description:
          'Brunswick Builders, LLC es una empresa de gestión de construcción y desarrollo de proyectos cuyos propietarios y miembros tienen más de 60 años de experiencia combinada, comprometidos con brindar servicios de calidad superior a sus clientes.',
        why: {
          problem: 'Una empresa de construcción con décadas de experiencia combinada necesitaba una presencia en línea a la altura de su profesionalismo.',
          goal: 'Un sitio claro y confiable que presente sus servicios y su proceso, desde el concepto hasta la entrega al propietario.',
          impact: 'Le dio a Brunswick Builders una presencia digital profesional para atraer e informar a posibles clientes.',
        },
      },
    },
  },

  ur: {
    nav: { home: 'ہوم', work: 'کام', about: 'تعارف', stack: 'اسٹیک', contact: 'رابطہ کریں' },
    hero: {
      firstName: 'معصومہ',
      lastName: 'جعفری',
      tag: 'بانی · ICodeDreams',
      subtitle: 'ایک تخلیقی ڈویلپر جو ڈیزائن اور کوڈ کو ملا کر شاندار ڈیجیٹل تجربات بناتی ہے۔',
      viewWork: 'کام دیکھیں',
      aboutMe: 'میرے بارے میں →',
    },
    about: {
      title: 'ہمارے بارے میں',
      whoAmI: 'میں کون ہوں؟؟',
      user: 'یوزر',
      realName: 'اصل نام',
      role: 'کردار',
      roleValue: 'فل اسٹیک ڈویلپر / بانی',
      company: 'کمپنی',
      focus: 'فوکس',
      focusValue: 'ویب · موبائل · کامرس',
      stackLabel: 'اسٹیک',
      stackValue: 'MERN + نیٹو',
      uptime: 'اپ ٹائم',
      uptimeValue: '+5 سال',
      status: 'اسٹیٹس',
      statusValue: 'دستیاب ●',
      helloTitle: 'السلام علیکم، میں معصومہ جعفری ہوں',
      bio: 'میں تیز اور قابلِ بھروسہ ویب اور موبائل پروڈکٹس بنانے میں مہارت رکھتی ہوں — کسٹم شاپیفائی / ووکامرس اسٹورز سے لے کر کراس پلیٹ فارم ایپس تک۔ میرا مشن: کلائنٹ کے آئیڈیاز کو مکمل، کام کرنے والے سافٹ ویئر میں بدلنا۔',
      getResume: 'ریزیومے حاصل کریں',
      pillFullStack: 'فل اسٹیک ڈویلپر',
      pillUiUx: 'یو آئی / یو ایکس',
      pillApiDesign: 'اے پی آئی ڈیزائن',
      frontend: 'فرنٹ اینڈ',
      backendMobile: 'بیک اینڈ اور موبائل',
      cmsCommerce: 'سی ایم ایس اور کامرس',
      toolsWorkflow: 'ٹولز اور ورک فلو',
    },
    contact: {
      nameLabel: 'نام',
      emailLabel: 'ای میل',
      messageLabel: 'پیغام',
      namePlaceholder: 'آپ کا نام',
      emailPlaceholder: 'you@domain.com',
      messagePlaceholder: 'اپنا پیغام لکھیں...',
      sendBtn: 'ابھی بھیجیں',
      statusSending: '> بھیجا جا رہا ہے...',
      statusSuccess: '> پیغام موصول ہو گیا۔ جلد جواب دوں گی۔',
      statusErrorGeneric: '> ترسیل ناکام ہوئی: اپنا کنکشن چیک کریں اور دوبارہ کوشش کریں۔',
    },
    footer: {
      builtWith: 'TypeScript، Three.js اور Astro کے ساتھ بنایا گیا۔',
      managedBy: 'منظم کردہ از',
    },
    projects: {
      sectionTitle: 'میرے پراجیکٹس',
      viewInTerminal: 'ٹرمینل میں دیکھیں',
      liveSite: 'لائیو سائٹ',
      github: 'گٹ ہب',
      statusLive: 'لائیو',
      statusBuilding: 'زیرِ تعمیر',
      flowStart: 'آغاز',
      flowProblem: 'مسئلہ شناخت ہوا',
      flowGoal: 'مقصد طے ہوا؟',
      flowStackSelected: 'اسٹیک منتخب ہوا',
      flowFeatures: 'فیچرز بنائے گئے',
      flowDeployed: 'ڈیپلائے ہوگیا ✓',
      whyProblem: '// مسئلہ',
      whyGoal: '// مقصد',
      whyImpact: '// اثر',
    },
    data: {
      PROJECT_001: {
        description:
          'Splendor Homes LLC ایک رئیل اسٹیٹ پلیٹ فارم ہے جو React سے تیار کیا گیا ہے، جو پراپرٹیز دیکھنے، لسٹنگز مینج کرنے اور رئیل اسٹیٹ لین دین کو آسان بنانے کے لیے ایک جدید اور صارف دوست انٹرفیس فراہم کرتا ہے۔',
        why: {
          problem: 'رئیل اسٹیٹ لسٹنگز اور لین دین پرانے اور ناقابلِ استعمال پلیٹ فارمز پر بکھرے ہوئے تھے۔',
          goal: 'پراپرٹیز دیکھنے، لسٹنگز مینج کرنے اور لین دین کو آسان بنانے کے لیے ایک جدید، صارف دوست پلیٹ فارم۔',
          impact: 'Splendor Homes LLC کو ایک پیشہ ورانہ آن لائن موجودگی اور زیادہ ہموار لسٹنگ سے سیل تک کا تجربہ ملا۔',
        },
      },
      PROJECT_002: {
        description:
          '3D Interactive Nehjul Balagha ایک ویب ایپلیکیشن ہے جو صارفین کو کتاب کو 3D انٹرایکٹو فارمیٹ میں دیکھنے کی سہولت دیتی ہے، جس سے پرکشش تصاویر اور انٹرایکٹو فیچرز کے ذریعے پڑھنے کا تجربہ بہتر ہوتا ہے۔',
        why: {
          problem: 'نہج البلاغہ آن لائن پڑھنا عموماً ایک سادہ، فلیٹ ٹیکسٹ صفحے تک محدود ہوتا ہے، جس میں حقیقی کتاب پڑھنے کا احساس نہیں ہوتا۔',
          goal: 'کتاب کو ایک عمیق 3D اسپیس میں لانا تاکہ اسے دیکھنا صفحات پلٹنے جیسا محسوس ہو۔',
          impact: 'قارئین کو متن کو آن لائن دیکھنے کا ایک زیادہ دلچسپ اور بصری طور پر بھرپور طریقہ ملتا ہے۔',
        },
      },
      PROJECT_003: {
        description:
          'Northview Associates کاروباری مشاورت کے لیے مشاورتی اور تربیتی طریقوں کی مکمل رینج فراہم کرتی ہے، ساتھ ہی کاروبار کی ترقی کے لیے حکمتِ عملی بھی۔',
        why: {
          problem: 'ایک کاروباری مشاورتی ادارے کو اپنی خدمات دکھانے اور کلائنٹس کا اعتماد بڑھانے کے لیے پیشہ ورانہ آن لائن موجودگی کی ضرورت تھی۔',
          goal: 'ایک جدید سائٹ جو مشاورتی اور تربیتی خدمات کو واضح، حکمتِ عملی پر مبنی پیغام کے ساتھ پیش کرے۔',
          impact: 'Northview Associates کو کلائنٹس تک پہنچنے اور انہیں آگاہ کرنے کے لیے ایک شاندار ڈیجیٹل دروازہ ملا۔',
        },
      },
      PROJECT_004: {
        description:
          'محاسبہ ایک روحانی مائنڈفلنس اور خود احتسابی ایپلیکیشن ہے جو لوگوں کو روزانہ کی خود جانچ، نماز اور اچھی عادات میں تسلسل برقرار رکھنے، اور روحانی نشوونما میں مدد دینے کے لیے بنائی گئی ہے۔ جدید گلاس مورفک بینٹو ڈیزائن کے ساتھ تیار کی گئی یہ ایپ روزمرہ کے تفکر کے لیے ایک پرسکون، بلاتعطل جگہ فراہم کرتی ہے۔',
        why: {
          problem: 'لوگ روزانہ خود جانچ اور نماز کی عادات میں تسلسل چاہتے ہیں لیکن اس کے لیے ایک پرسکون، بلاتعطل جگہ موجود نہیں ہوتی۔',
          goal: 'روزانہ خود احتسابی اور روحانی مائنڈفلنس کے لیے گلاس مورفک، بینٹو طرز کی ایپ۔',
          impact: 'صارفین کو روزمرہ کے تفکر اور مستحکم روحانی عادات کے لیے ایک پرسکون جگہ ملتی ہے۔',
        },
      },
      PROJECT_005: {
        description:
          'Globe Weather ایک موسمی ایپلیکیشن ہے جو دنیا بھر کے مقامات کے لیے حقیقی وقت میں موسم کی معلومات اور پیشگوئیاں فراہم کرتی ہے۔ یہ صارفین کو مخصوص شہر تلاش کرنے، موجودہ حالات دیکھنے اور تفصیلی پیشگوئی تک رسائی دیتی ہے، جو موسم کی بنیاد پر روزمرہ کے منصوبے بنانے میں مددگار ہے۔',
        why: {
          problem: 'دنیا میں کہیں اور کے شہر کا درست موسم جاننے کے لیے اکثر بھری ہوئی، اشتہارات سے بھرپور ویب سائٹس سے گزرنا پڑتا ہے۔',
          goal: 'کسی بھی شہر کو تلاش کرنے اور موجودہ حالات کے ساتھ تفصیلی پیشگوئی دیکھنے کے لیے ایک صاف ستھرا، تیز ٹول۔',
          impact: 'دنیا میں کسی بھی مقام کے لیے روزمرہ کی منصوبہ بندی کے لیے موسم چیک کرنا تیز اور بلاتعطل بنا دیتی ہے۔',
        },
      },
      PROJECT_006: {
        description:
          'Brunswick Builders, LLC ایک تعمیراتی انتظام اور پراجیکٹ ڈویلپمنٹ کمپنی ہے جس کے مالکان اور اراکین کو مجموعی طور پر 60 سال سے زائد کا تجربہ حاصل ہے اور جو اپنے کلائنٹس کو اعلیٰ معیار کی خدمات فراہم کرنے کے لیے پُرعزم ہیں۔',
        why: {
          problem: 'دہائیوں کے مجموعی تجربے والی ایک تعمیراتی کمپنی کو اپنی پیشہ ورانہ حیثیت کے مطابق آن لائن موجودگی کی ضرورت تھی۔',
          goal: 'ایک صاف، قابلِ اعتماد سائٹ جو تصور سے لے کر مالک کو حوالگی تک ان کی خدمات اور عمل کو پیش کرے۔',
          impact: 'Brunswick Builders کو ممکنہ کلائنٹس کو راغب کرنے اور آگاہ کرنے کے لیے ایک پیشہ ورانہ ڈیجیٹل موجودگی ملی۔',
        },
      },
    },
  },

  ar: {
    nav: { home: 'الرئيسية', work: 'الأعمال', about: 'نبذة', stack: 'التقنيات', contact: 'تواصل معنا' },
    hero: {
      firstName: 'معصومة',
      lastName: 'جعفري',
      tag: 'المؤسِّسة · ICodeDreams',
      subtitle: 'مطوّرة إبداعية تصنع تجارب رقمية تمزج بين التصميم والبرمجة.',
      viewWork: 'عرض الأعمال',
      aboutMe: 'نبذة عني ←',
    },
    about: {
      title: 'نبذة عنّا',
      whoAmI: 'من أنا؟؟',
      user: 'المستخدم',
      realName: 'الاسم الحقيقي',
      role: 'الدور',
      roleValue: 'مطوّرة متكاملة / مؤسِّسة',
      company: 'الشركة',
      focus: 'التركيز',
      focusValue: 'ويب · موبايل · تجارة إلكترونية',
      stackLabel: 'التقنيات',
      stackValue: 'MERN + تطبيقات أصلية',
      uptime: 'مدة النشاط',
      uptimeValue: '+5 سنوات',
      status: 'الحالة',
      statusValue: 'متاحة ●',
      helloTitle: 'مرحباً، أنا معصومة جعفري',
      bio: 'أتخصص في بناء منتجات ويب وموبايل سريعة وموثوقة — من متاجر Shopify / WooCommerce المخصصة إلى التطبيقات متعددة المنصات. مهمتي: تحويل أفكار العملاء إلى برمجيات جاهزة وفعّالة.',
      getResume: 'تحميل السيرة الذاتية',
      pillFullStack: 'تطوير متكامل',
      pillUiUx: 'تجربة وواجهة المستخدم',
      pillApiDesign: 'تصميم واجهات API',
      frontend: 'الواجهة الأمامية',
      backendMobile: 'الواجهة الخلفية والموبايل',
      cmsCommerce: 'أنظمة إدارة المحتوى والتجارة',
      toolsWorkflow: 'الأدوات وسير العمل',
    },
    contact: {
      nameLabel: 'الاسم',
      emailLabel: 'البريد الإلكتروني',
      messageLabel: 'الرسالة',
      namePlaceholder: 'اسمك',
      emailPlaceholder: 'you@domain.com',
      messagePlaceholder: 'اكتب رسالتك...',
      sendBtn: 'أرسل الآن',
      statusSending: '> جارٍ الإرسال...',
      statusSuccess: '> تم استلام الرسالة. سأرد قريباً.',
      statusErrorGeneric: '> فشل الإرسال: تحقق من اتصالك وحاول مرة أخرى.',
    },
    footer: {
      builtWith: 'صُنع باستخدام TypeScript وThree.js وAstro.',
      managedBy: 'تُدار بواسطة',
    },
    projects: {
      sectionTitle: 'أعمالي',
      viewInTerminal: 'عرض في الطرفية',
      liveSite: 'الموقع المباشر',
      github: 'جيت هاب',
      statusLive: 'مباشر',
      statusBuilding: 'قيد الإنشاء',
      flowStart: 'البداية',
      flowProblem: 'تحديد المشكلة',
      flowGoal: 'هل تم تحديد الهدف؟',
      flowStackSelected: 'تم اختيار التقنيات',
      flowFeatures: 'تم بناء الميزات',
      flowDeployed: 'تم النشر ✓',
      whyProblem: '// المشكلة',
      whyGoal: '// الهدف',
      whyImpact: '// الأثر',
    },
    data: {
      PROJECT_001: {
        description:
          'Splendor Homes LLC هي منصة عقارية طُوّرت باستخدام React، توفّر واجهة حديثة وسهلة الاستخدام لاستكشاف العقارات وإدارة القوائم وتسهيل الصفقات العقارية.',
        why: {
          problem: 'كانت قوائم العقارات والصفقات مبعثرة عبر منصات قديمة يصعب التنقل فيها.',
          goal: 'منصة حديثة وسهلة الاستخدام لاستكشاف العقارات وإدارة القوائم وتسهيل الصفقات.',
          impact: 'منحت Splendor Homes LLC حضوراً احترافياً على الإنترنت وتجربة أكثر سلاسة من العرض إلى البيع.',
        },
      },
      PROJECT_002: {
        description:
          '3D Interactive Nehjul Balagha هو تطبيق ويب يتيح للمستخدمين استكشاف الكتاب بصيغة تفاعلية ثلاثية الأبعاد، مما يعزز تجربة القراءة بمرئيات غامرة وميزات تفاعلية.',
        why: {
          problem: 'غالبًا ما تعني قراءة نهج البلاغة عبر الإنترنت صفحة نصية مسطحة لا تمنح القارئ تجربة قراءة كتاب حقيقي.',
          goal: 'نقل الكتاب إلى فضاء ثلاثي الأبعاد غامر بحيث يصبح استكشافه أقرب إلى تصفّح صفحاته فعلياً.',
          impact: 'يمنح القرّاء طريقة أكثر جاذبية وثراءً بصرياً لاستكشاف النص عبر الإنترنت.',
        },
      },
      PROJECT_003: {
        description:
          'تقدّم Northview Associates مجموعة كاملة من أساليب الاستشارات والتدريب للاستشارات التجارية، وطرقاً استراتيجية لنمو الأعمال.',
        why: {
          problem: 'احتاجت شركة استشارات تجارية إلى حضور احترافي على الإنترنت لعرض خدماتها وبناء ثقة العملاء.',
          goal: 'موقع حديث يعرض خدمات الاستشارات والتدريب برسالة واضحة واستراتيجية.',
          impact: 'منح Northview Associates واجهة رقمية أنيقة لجذب العملاء وإطلاعهم على خدماتها.',
        },
      },
      PROJECT_004: {
        description:
          'محاسبة (Muhasabah) هو تطبيق للتأمل الروحي والمحاسبة الذاتية مصمم لمساعدة الأفراد على ترسيخ التأمل اليومي، والحفاظ على الانتظام في الصلاة والعادات الحسنة، وتنمية النمو الروحي. صُمّم بأسلوب زجاجي حديث (Bento)، ويوفر مساحة هادئة وخالية من المشتتات للتأمل اليومي.',
        why: {
          problem: 'يرغب الناس في بناء عادات ثابتة للتأمل اليومي والصلاة لكنهم يفتقرون إلى مساحة هادئة وخالية من المشتتات للقيام بذلك.',
          goal: 'تطبيق بأسلوب Bento الزجاجي للمحاسبة الذاتية اليومية والتأمل الروحي.',
          impact: 'يمنح المستخدمين مساحة هادئة للتأمل اليومي وعادات روحية أكثر استقراراً.',
        },
      },
      PROJECT_005: {
        description:
          'Globe Weather هو تطبيق طقس يوفّر معلومات وتوقعات الطقس في الوقت الفعلي لمواقع حول العالم. يتيح للمستخدمين البحث عن مدن محددة، ومشاهدة الأحوال الجوية الحالية، والوصول إلى توقعات مفصّلة، مما يجعله أداة قيّمة لتخطيط الأنشطة اليومية بناءً على حالة الطقس.',
        why: {
          problem: 'غالباً ما يتطلب التحقق من طقس دقيق لمدينة في مكان آخر من العالم التعامل مع مواقع مزدحمة ومليئة بالإعلانات.',
          goal: 'أداة نظيفة وسريعة للبحث عن أي مدينة ومشاهدة أحوالها الحالية إلى جانب توقعات مفصّلة.',
          impact: 'تجعل التحقق من الطقس للتخطيط اليومي أمراً سريعاً وخالياً من المشتتات، لأي موقع حول العالم.',
        },
      },
      PROJECT_006: {
        description:
          'Brunswick Builders, LLC هي شركة لإدارة البناء وتطوير المشاريع، يمتلك مالكوها وأعضاؤها أكثر من 60 عاماً من الخبرة المجمعة، وملتزمون بتقديم خدمات عالية الجودة لعملائهم.',
        why: {
          problem: 'احتاجت شركة بناء تمتلك عقوداً من الخبرة المجمعة إلى حضور إلكتروني يواكب احترافيتها.',
          goal: 'موقع نظيف وموثوق يعرض خدماتهم وعمليتهم من الفكرة وحتى تسليم المالك.',
          impact: 'منح Brunswick Builders حضوراً رقمياً احترافياً لجذب العملاء المحتملين وإطلاعهم.',
        },
      },
    },
  },

  fa: {
    nav: { home: 'خانه', work: 'کارها', about: 'درباره', stack: 'فناوری‌ها', contact: 'تماس با من' },
    hero: {
      firstName: 'معصومه',
      lastName: 'جعفری',
      tag: 'بنیان‌گذار · ICodeDreams',
      subtitle: 'توسعه‌دهنده‌ای خلاق که طراحی و کد را در تجربه‌های دیجیتال ترکیب می‌کند.',
      viewWork: 'مشاهده کارها',
      aboutMe: 'درباره من ←',
    },
    about: {
      title: 'درباره ما',
      whoAmI: 'من کی هستم؟؟',
      user: 'کاربر',
      realName: 'نام واقعی',
      role: 'نقش',
      roleValue: 'توسعه‌دهنده فول‌استک / بنیان‌گذار',
      company: 'شرکت',
      focus: 'تمرکز',
      focusValue: 'وب · موبایل · تجارت الکترونیک',
      stackLabel: 'فناوری‌ها',
      stackValue: 'MERN + بومی',
      uptime: 'مدت فعالیت',
      uptimeValue: '+۵ سال',
      status: 'وضعیت',
      statusValue: 'در دسترس ●',
      helloTitle: 'سلام، من معصومه جعفری هستم',
      bio: 'من در ساخت محصولات وب و موبایل سریع و قابل‌اعتماد تخصص دارم — از فروشگاه‌های اختصاصی Shopify / WooCommerce گرفته تا اپلیکیشن‌های چندسکویی. مأموریت من: تبدیل ایده‌های مشتریان به نرم‌افزارهای آماده و کارآمد.',
      getResume: 'دریافت رزومه',
      pillFullStack: 'توسعه فول‌استک',
      pillUiUx: 'UI / UX',
      pillApiDesign: 'طراحی API',
      frontend: 'فرانت‌اند',
      backendMobile: 'بک‌اند و موبایل',
      cmsCommerce: 'سیستم مدیریت محتوا و تجارت',
      toolsWorkflow: 'ابزارها و گردش کار',
    },
    contact: {
      nameLabel: 'نام',
      emailLabel: 'ایمیل',
      messageLabel: 'پیام',
      namePlaceholder: 'نام شما',
      emailPlaceholder: 'you@domain.com',
      messagePlaceholder: 'پیام خود را بنویسید...',
      sendBtn: 'ارسال --اکنون',
      statusSending: '> در حال ارسال...',
      statusSuccess: '> پیام دریافت شد. به‌زودی پاسخ می‌دهم.',
      statusErrorGeneric: '> ارسال ناموفق بود: اتصال خود را بررسی کرده و دوباره تلاش کنید.',
    },
    footer: {
      builtWith: 'ساخته‌شده با TypeScript، Three.js و Astro.',
      managedBy: 'مدیریت‌شده توسط',
    },
    projects: {
      sectionTitle: 'پروژه‌های من',
      viewInTerminal: 'مشاهده در ترمینال',
      liveSite: 'سایت زنده',
      github: 'گیت‌هاب',
      statusLive: 'زنده',
      statusBuilding: 'در حال ساخت',
      flowStart: 'شروع',
      flowProblem: 'مسئله شناسایی شد',
      flowGoal: 'هدف مشخص شد؟',
      flowStackSelected: 'فناوری انتخاب شد',
      flowFeatures: 'ویژگی‌ها ساخته شد',
      flowDeployed: 'مستقر شد ✓',
      whyProblem: '// مسئله',
      whyGoal: '// هدف',
      whyImpact: '// تأثیر',
    },
    data: {
      PROJECT_001: {
        description:
          'Splendor Homes LLC یک پلتفرم املاک است که با React توسعه یافته و رابط کاربری مدرن و کاربرپسندی برای مشاهده املاک، مدیریت آگهی‌ها و تسهیل معاملات ملکی ارائه می‌دهد.',
        why: {
          problem: 'آگهی‌ها و معاملات ملکی در پلتفرم‌های قدیمی و دشوار پراکنده بودند.',
          goal: 'یک پلتفرم مدرن و کاربرپسند برای مشاهده املاک، مدیریت آگهی‌ها و تسهیل معاملات.',
          impact: 'به Splendor Homes LLC حضوری حرفه‌ای آنلاین و تجربه‌ای روان‌تر از آگهی تا فروش داد.',
        },
      },
      PROJECT_002: {
        description:
          '3D Interactive Nehjul Balagha یک اپلیکیشن وب است که به کاربران امکان می‌دهد کتاب را در قالبی تعاملی سه‌بعدی مرور کنند و با تصاویر غوطه‌ورکننده و ویژگی‌های تعاملی، تجربه مطالعه را بهبود می‌بخشد.',
        why: {
          problem: 'خواندن نهج‌البلاغه به‌صورت آنلاین معمولاً به یک صفحه متنی ساده محدود می‌شود که تجربه خواندن یک کتاب واقعی را ندارد.',
          goal: 'آوردن کتاب به یک فضای سه‌بعدی غوطه‌ورکننده تا مرور آن به ورق زدن واقعی نزدیک‌تر شود.',
          impact: 'به خوانندگان راهی جذاب‌تر و از نظر بصری غنی‌تر برای مرور متن به‌صورت آنلاین می‌دهد.',
        },
      },
      PROJECT_003: {
        description:
          'Northview Associates طیف کاملی از روش‌های مشاوره و آموزش برای مشاوره کسب‌وکار و راهکارهای استراتژیک برای رشد کسب‌وکار ارائه می‌دهد.',
        why: {
          problem: 'یک شرکت مشاوره کسب‌وکار به حضوری حرفه‌ای آنلاین برای نمایش خدمات و جلب اعتماد مشتریان نیاز داشت.',
          goal: 'سایتی مدرن که خدمات مشاوره و آموزش را با پیامی شفاف و استراتژیک ارائه دهد.',
          impact: 'به Northview Associates دروازه‌ای دیجیتال و شیک برای جذب و آگاه‌سازی مشتریان داد.',
        },
      },
      PROJECT_004: {
        description:
          'محاسبه یک اپلیکیشن ذهن‌آگاهی معنوی و خودسنجی است که به افراد کمک می‌کند تفکر روزانه را در خود پرورش دهند، در نماز و عادات خوب ثبات داشته باشند و رشد معنوی خود را تقویت کنند. این اپلیکیشن با طراحی مدرن و شیشه‌ای Bento ساخته شده و فضایی آرام و بدون حواس‌پرتی برای تفکر روزانه فراهم می‌کند.',
        why: {
          problem: 'افراد می‌خواهند عادات ثابتی برای تفکر روزانه و نماز بسازند اما فضایی آرام و بدون حواس‌پرتی برای این کار ندارند.',
          goal: 'اپلیکیشنی به سبک شیشه‌ای Bento برای خودسنجی روزانه و ذهن‌آگاهی معنوی.',
          impact: 'به کاربران فضایی آرام برای تفکر روزانه و عادات معنوی پایدارتر می‌دهد.',
        },
      },
      PROJECT_005: {
        description:
          'Globe Weather یک اپلیکیشن آب‌وهوایی است که اطلاعات و پیش‌بینی آب‌وهوای لحظه‌ای را برای مکان‌های سراسر جهان ارائه می‌دهد. به کاربران امکان می‌دهد شهرهای خاصی را جستجو کنند، شرایط فعلی را ببینند و به پیش‌بینی‌های دقیق دسترسی داشته باشند، که این آن را ابزاری ارزشمند برای برنامه‌ریزی فعالیت‌های روزانه بر اساس آب‌وهوا می‌کند.',
        why: {
          problem: 'بررسی دقیق آب‌وهوای یک شهر در جای دیگری از جهان اغلب به معنای کلنجار رفتن با سایت‌های شلوغ و پر از تبلیغ است.',
          goal: 'ابزاری تمیز و سریع برای جستجوی هر شهری و مشاهده شرایط فعلی به همراه پیش‌بینی دقیق.',
          impact: 'بررسی آب‌وهوا برای برنامه‌ریزی روزانه را برای هر مکانی در جهان سریع و بدون حواس‌پرتی می‌کند.',
        },
      },
      PROJECT_006: {
        description:
          'Brunswick Builders, LLC یک شرکت مدیریت ساخت‌وساز و توسعه پروژه است که مالکان و اعضای آن بیش از ۶۰ سال تجربه ترکیبی دارند و متعهد به ارائه خدماتی با کیفیت برتر به مشتریان خود هستند.',
        why: {
          problem: 'یک شرکت ساختمانی با دهه‌ها تجربه ترکیبی به حضوری آنلاین متناسب با حرفه‌ای‌بودنش نیاز داشت.',
          goal: 'سایتی تمیز و معتبر که خدمات و فرآیند آن‌ها را از ایده تا تحویل به مالک نمایش دهد.',
          impact: 'به Brunswick Builders حضوری دیجیتال حرفه‌ای برای جذب و آگاه‌سازی مشتریان بالقوه داد.',
        },
      },
    },
  },
};

function getNode(dict: Dict, path: string): unknown {
  return path.split('.').reduce<unknown>((node, part) => {
    if (node && typeof node === 'object') return (node as Dict)[part];
    return undefined;
  }, dict);
}

export function getText(lang: Lang, path: string): string | undefined {
  const primary = getNode(translations[lang] ?? translations.en, path);
  if (typeof primary === 'string') return primary;
  const fallback = getNode(translations.en, path);
  return typeof fallback === 'string' ? fallback : undefined;
}

export function isLang(value: string | null | undefined): value is Lang {
  return !!value && Object.prototype.hasOwnProperty.call(translations, value);
}

export function getCurrentLang(): Lang {
  const attr = document.documentElement.lang;
  return isLang(attr) ? attr : 'en';
}

export function applyTranslations(lang: Lang): void {
  document.documentElement.lang = lang;
  document.documentElement.dir = rtlLanguages.includes(lang) ? 'rtl' : 'ltr';

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;
    const text = getText(lang, key);
    if (text !== undefined) el.textContent = text;
  });

  document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (!key) return;
    const text = getText(lang, key);
    if (text !== undefined) el.setAttribute('placeholder', text);
  });

  document.querySelectorAll<HTMLElement>('[data-lang-code]').forEach((el) => {
    el.textContent = lang.toUpperCase();
  });
  document.querySelectorAll<HTMLElement>('[data-lang-name]').forEach((el) => {
    el.textContent = languageNames[lang];
  });

  document.querySelectorAll<HTMLElement>('[data-lang-option]').forEach((el) => {
    el.classList.toggle('active', el.dataset.langOption === lang);
  });

  localStorage.setItem('site-language', lang);
}

export function initI18n(): Lang {
  const saved = localStorage.getItem('site-language');
  const lang: Lang = isLang(saved) ? saved : 'en';
  applyTranslations(lang);
  return lang;
}
