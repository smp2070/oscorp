var about = {
  left: {
    title: 'oscorp',
    descr: 'oscorp Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in augue eu ex egestas convallis in ac arcu. Nunc mi ex, ultrices ac arcu vitae, ultricies malesuada nibh. Integer feugiat feugiat interdum. Sed facilisis velit dolor, vel mollis nibh porttitor a. Aenean sed sagittis dolor. Fusce elementum nunc facilisis, accumsan nulla id, auctor tortor. Ut luctus, tellus fringilla fringilla consectetur, eros ipsum condimentum quam, vel aliquam ante mauris sit amet est.',
    img: '/img/about_pistol.png'
  },
  right: {
    title: 'всегда попадаем в цель',
    descr: 'всегда попадаем в цель Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in augue eu ex egestas convallis in ac arcu. Nunc mi ex, ultrices ac arcu vitae, ultricies malesuada nibh. Integer feugiat feugiat interdum. Sed facilisis velit dolor, vel mollis nibh porttitor a. Aenean sed sagittis dolor. Fusce elementum nunc facilisis, accumsan nulla id, auctor tortor. Ut luctus, tellus fringilla fringilla consectetur, eros ipsum condimentum quam, vel aliquam ante mauris sit amet est.',
    img: '/img/about_laptop.png'
  }
};




var services = [
	[
		{url: 'analytics', title: 'website analytics', img: {backgroundImage: 'url("/img/services_analytics.jpg")'} },
		{url: 'smm', title: 'SMM', img: {backgroundImage: 'url("/img/services_smm.jpg")'} }
	],
	[
		{url: 'development', title: 'web development', img: {backgroundImage: 'url("/img/services_development.jpg")'} },
		{url: 'video', title: 'video production', img: {backgroundImage: 'url("/img/services_video.jpg")'} }
	],
	[
		{url: 'design', title: 'design', img: {backgroundImage: 'url("/img/services_design.jpg")'} },
		{url: 'ad', title: 'context advertising', img: {backgroundImage: 'url("/img/services_ad.jpg")'} }
	],
	[
		{url: 'email-marketing', title: 'e-mail marketing', img: {backgroundImage: 'url("/img/services_email-marketing.jpg")'} },
		{url: 'copywriting', title: 'copywriting', img: {backgroundImage: 'url("/img/services_copywriting.jpg")'}}
	],
	[
		{url: 'sem', title: 'context SEM', img: {backgroundImage: 'url("/img/services_sem.jpg")'} },
		{url: 'website-content', title: 'website content', img: {backgroundImage: 'url("/img/services_website-content.jpg")'} }
	]
];

var servicesInner = {
  analytics: {
    title: 'website analytics',
    descr: 'Анализ эффективности Ваших рекламных каналов для увеличения доходов',
    img: '/img/service_analytics--large.jpg'
  },
  smm: {
    title: 'social media marketing',
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend risus vel lorem placerat tempus. Nullam ultrices tellus molestie pulvinar ultrices. Nulla facilisi. Aliquam euismod purus quis orci placerat consequat. Proin pulvinar dui neque. Aenean finibus at lorem et tempus. Morbi nec dolor elit. Donec nec enim a elit viverra ornare bibendum id purus. Mauris tincidunt porttitor mauris, sed ultricies erat. Etiam tempus vehicula rutrum. Integer tempor dolor vitae tincidunt aliquet. Nulla feugiat feugiat eleifend. Donec eu arcu lorem. Praesent eget dolor lacus.',
    img: '/img/services_smm.jpg'
  },
  development: {
    title: 'web development',
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend risus vel lorem placerat tempus. Nullam ultrices tellus molestie pulvinar ultrices. Nulla facilisi. Aliquam euismod purus quis orci placerat consequat. Proin pulvinar dui neque. Aenean finibus at lorem et tempus. Morbi nec dolor elit. Donec nec enim a elit viverra ornare bibendum id purus. Mauris tincidunt porttitor mauris, sed ultricies erat. Etiam tempus vehicula rutrum. Integer tempor dolor vitae tincidunt aliquet. Nulla feugiat feugiat eleifend. Donec eu arcu lorem. Praesent eget dolor lacus.',
    img: '/img/services_development.jpg'
  },
  video: {
    title: 'video production',
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend risus vel lorem placerat tempus. Nullam ultrices tellus molestie pulvinar ultrices. Nulla facilisi. Aliquam euismod purus quis orci placerat consequat. Proin pulvinar dui neque. Aenean finibus at lorem et tempus. Morbi nec dolor elit. Donec nec enim a elit viverra ornare bibendum id purus. Mauris tincidunt porttitor mauris, sed ultricies erat. Etiam tempus vehicula rutrum. Integer tempor dolor vitae tincidunt aliquet. Nulla feugiat feugiat eleifend. Donec eu arcu lorem. Praesent eget dolor lacus.',
    img: '/img/services_video.jpg'
  },
  design: {
    title: 'design',
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend risus vel lorem placerat tempus. Nullam ultrices tellus molestie pulvinar ultrices. Nulla facilisi. Aliquam euismod purus quis orci placerat consequat. Proin pulvinar dui neque. Aenean finibus at lorem et tempus. Morbi nec dolor elit. Donec nec enim a elit viverra ornare bibendum id purus. Mauris tincidunt porttitor mauris, sed ultricies erat. Etiam tempus vehicula rutrum. Integer tempor dolor vitae tincidunt aliquet. Nulla feugiat feugiat eleifend. Donec eu arcu lorem. Praesent eget dolor lacus.',
    img: '/img/services_design.jpg'
  },
  ad: {
    title: 'context advertising',
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend risus vel lorem placerat tempus. Nullam ultrices tellus molestie pulvinar ultrices. Nulla facilisi. Aliquam euismod purus quis orci placerat consequat. Proin pulvinar dui neque. Aenean finibus at lorem et tempus. Morbi nec dolor elit. Donec nec enim a elit viverra ornare bibendum id purus. Mauris tincidunt porttitor mauris, sed ultricies erat. Etiam tempus vehicula rutrum. Integer tempor dolor vitae tincidunt aliquet. Nulla feugiat feugiat eleifend. Donec eu arcu lorem. Praesent eget dolor lacus.',
    img: '/img/services_ad.jpg'
  },
  emailMarketing: {
    title: 'Email marketing',
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend risus vel lorem placerat tempus. Nullam ultrices tellus molestie pulvinar ultrices. Nulla facilisi. Aliquam euismod purus quis orci placerat consequat. Proin pulvinar dui neque. Aenean finibus at lorem et tempus. Morbi nec dolor elit. Donec nec enim a elit viverra ornare bibendum id purus. Mauris tincidunt porttitor mauris, sed ultricies erat. Etiam tempus vehicula rutrum. Integer tempor dolor vitae tincidunt aliquet. Nulla feugiat feugiat eleifend. Donec eu arcu lorem. Praesent eget dolor lacus.',
    img: '/img/services_email-marketing.jpg'
  },
  copywriting: {
    title: 'context advertising',
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend risus vel lorem placerat tempus. Nullam ultrices tellus molestie pulvinar ultrices. Nulla facilisi. Aliquam euismod purus quis orci placerat consequat. Proin pulvinar dui neque. Aenean finibus at lorem et tempus. Morbi nec dolor elit. Donec nec enim a elit viverra ornare bibendum id purus. Mauris tincidunt porttitor mauris, sed ultricies erat. Etiam tempus vehicula rutrum. Integer tempor dolor vitae tincidunt aliquet. Nulla feugiat feugiat eleifend. Donec eu arcu lorem. Praesent eget dolor lacus.',
    img: '/img/services_copywriting.jpg'
  },
  sem: {
    title: 'Search Engine Marketing',
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend risus vel lorem placerat tempus. Nullam ultrices tellus molestie pulvinar ultrices. Nulla facilisi. Aliquam euismod purus quis orci placerat consequat. Proin pulvinar dui neque. Aenean finibus at lorem et tempus. Morbi nec dolor elit. Donec nec enim a elit viverra ornare bibendum id purus. Mauris tincidunt porttitor mauris, sed ultricies erat. Etiam tempus vehicula rutrum. Integer tempor dolor vitae tincidunt aliquet. Nulla feugiat feugiat eleifend. Donec eu arcu lorem. Praesent eget dolor lacus.',
    img: '/img/services_sem.jpg'
  },
  websiteContent: {
    title: 'website-content production',
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend risus vel lorem placerat tempus. Nullam ultrices tellus molestie pulvinar ultrices. Nulla facilisi. Aliquam euismod purus quis orci placerat consequat. Proin pulvinar dui neque. Aenean finibus at lorem et tempus. Morbi nec dolor elit. Donec nec enim a elit viverra ornare bibendum id purus. Mauris tincidunt porttitor mauris, sed ultricies erat. Etiam tempus vehicula rutrum. Integer tempor dolor vitae tincidunt aliquet. Nulla feugiat feugiat eleifend. Donec eu arcu lorem. Praesent eget dolor lacus.',
    img: '/img/services_website-content.jpg'
  }
};

var portfolio = [
  {id: 1, label: [1,4], url: 'diadema', imageUrl: '/img/p01.jpg', title: 'Diadema', descr: '1,4 Nam dapibus molestie. Nam dapibus molestie. Nam dapibus molestie. Nam dapibus molestie.'},
  {id: 2, label: [2], url: 'diamo', imageUrl: '/img/portfolio_diamo-ring.png', title: 'diamo', descr: 'Some text about project. Some text about project. Some text about project. Some text about project.'},
  {id: 3, label: [3], url: 'topgym', imageUrl: '/img/portfolio-top-gym.jpg', title: 'Top gym', descr: 'Nam dapibus molestie massa ac maximus.'},
  {id: 4, label: [4], url: 'magik', imageUrl: '/img/portfolio-magic.png', title: 'Magik', descr: '4Nam dapibus molestie massa ac maximus.'},
  {id: 5, label: [1,3], url: 'baku', imageUrl: '/img/portfolio-baku.jpg', title: 'Огни баку', descr: 'Nam dapibus molestie massa ac maximus.'},
  {id: 6, label: [1], url: 'zoolux', imageUrl: '/img/portfolio-zoolux.png', title: 'ZooЛюкс', descr: 'Nam dapibus molestie massa ac maximus. Nam dapibus molestie massa ac maximus. Nam dapibus molestie massa ac maximus.'},
  {id: 7, label: [2], url: 'cartli', imageUrl: '/img/portfolio-cartli.png', title: 'Cartli', descr: 'Nam dapibus molestie massa ac maximus.'}
];

var portfolioInner = {
  diadema: {
    titleTop: 'diadema',
    descrTop: 'Главное управление БТИ-24 дарит стереоадреса всем клиентам, заказавшим услугу технической инвентаризации или кадастрового учета. Стереоадрес — это личный сайт квартиры или офиса, с трехмерным кадастровым паспортом, объемной моделью помещения, видами из окон и другими полезными данными. В студии задизайнили макет страницы об объекте недвижимости.',
    titleBottom: 'о бренде',
    descrBottom: 'Ювелирный бренд DIADEMA активно принимает участие в культурной и общественной жизнью родного города Винницы. Компания с 1998 года является постоянным и генеральным партнером конкурса «Мисс Винница». Для победительницы мы изготавливаем уникальные короны по нашим эскизам. «Diadema» является меценатом единственного в Украине фестиваля пародийного кино «Винницианский фестиваль».'
  },
  diamo: {
    title: 'diamo',
    descr: 'Идея создания ювелирных коллекций, которые смогли бы объединить большой ассортимент украшений и смелые индивидуальные решения родилась в 2006 году. За прошедшее десятилетие, компания "Diamo" прошла путь от небольшой команды до уверенного игрока рынка ювелирных украшений. Сегодня наша главная цель состоит в расширении собственного присутствия на этом рынке.'
  },
  magik: {
    title: 'magik',
    descrTop: 'Мы Event студия праздникoв Magik - предоставляем различный спектр услуг в сфере проведения мероприятий, которые надолго запомнятся Вам и Вашим гостям. Вы выбираете удобный Вам часовой формат: 30 минут, 1 час, 8 часов, а мы подбираем артистов для Вашего шоу, которые отвечают Вашему эстетическому вкусу и представлению об идеальном празднике.',
    descrBottom: 'Предоставляем различный спектр услуг в сфере проведения мероприятий, которые надолго запомнятся Вам и Вашим гостям. Вы выбираете удобный Вам часовой формат: 30 минут, 1 час, 8 часов, а мы подбираем артистов для Вашего шоу, которые отвечают Вашему эстетическому вкусу и представлению об идеальном празднике.'
  },
  topgym: {
    top: {
      first: 'лучшее',
      second: 'для вашего тела и души'
    },
    middleTop: {
      title: 'top gym',
      descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores voluptate a modi doloribus fuga iste quas pariatur, minima labore architecto magni quia. Nemo molestiae error, repudiandae provident recusandae pariatur? Beatae.'
    },
    middleBottom: {
      title: 'smm',
      descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare malesuada accumsan. Mauris interdum tellus eu congue ornare. Donec ornare elementum diam nec pretium. Mauris a pellentesque sapien. Donec non nunc at dolor commodo iaculis eget at erat. Ut in mollis nunc. Aliquam placerat aliquam mauris, nec fermentum urna scelerisque a.'
    },
    bottom: {
      title: 'top gym bottom title',
      descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare malesuada accumsan. Mauris interdum tellus eu congue ornare. Donec ornare elementum diam nec pretium. Mauris a pellentesque sapien. Donec non nunc at dolor commodo iaculis eget at erat. Ut in mollis nunc. Aliquam placerat aliquam mauris, nec fermentum urna scelerisque a.'
    }
  },
  zoolux: {
    title: 'ZooЛюкс',
    descrTop: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim, metus ut tempus porttitor, lacus nunc blandit sapien, vitae accumsan eros ante sit amet nunc. Nunc non luctus tortor, id blandit magna. Proin at sapien a velit dignissim accumsan. Mauris tristique tempor nunc eget accumsan. Integer sit amet odio non augue commodo eleifend nec non sem. In et metus in justo egestas finibus maximus nec ante. Ut dapibus eget orci ut rhoncus. Praesent posuere ante vel quam mattis gravida. Phasellus tincidunt, nunc sed placerat volutpat, arcu justo suscipit augue, vitae aliquet erat sapien eget elit. Nullam et elit vulputate, tristique nulla ac, ornare libero. Duis sit amet luctus leo. Donec accumsan sodales odio maximus imperdiet.',
    descrBottom: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim, metus ut tempus porttitor, lacus nunc blandit sapien, vitae accumsan eros ante sit amet nunc. Nunc non luctus tortor, id blandit magna. Proin at sapien a velit dignissim accumsan. Mauris tristique tempor nunc eget accumsan. Integer sit amet odio non augue commodo eleifend nec non sem. In et metus in justo egestas finibus maximus nec ante. Ut dapibus eget orci ut rhoncus.'
  },
  baku: {
    title: 'baku',
    descrTop: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare malesuada accumsan. Mauris interdum tellus eu congue ornare. Donec ornare elementum diam nec pretium. Mauris a pellentesque sapien. Donec non nunc at dolor commodo iaculis eget at erat. Ut in mollis nunc. Aliquam placerat aliquam mauris, nec fermentum urna scelerisque a.',
    descrBottom: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare malesuada accumsan. Mauris interdum tellus eu congue ornare. Donec ornare elementum diam nec pretium. Mauris a pellentesque sapien. Donec non nunc at dolor commodo iaculis eget at erat. Ut in mollis nunc. Aliquam placerat aliquam mauris, nec fermentum urna scelerisque a.'
  },
  cartli: {
    title: 'cartli',
    descrTop: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim, metus ut tempus porttitor, lacus nunc blandit sapien, vitae accumsan eros ante sit amet nunc. Nunc non luctus tortor, id blandit magna. Proin at sapien a velit dignissim accumsan.',
    descrBottom: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim, metus ut tempus porttitor, lacus nunc blandit sapien, vitae accumsan eros ante sit amet nunc. Nunc non luctus tortor, id blandit magna. Proin at sapien a velit dignissim accumsan. Mauris tristique tempor nunc eget accumsan. Integer sit amet odio non augue commodo eleifend nec non sem. In et metus in justo egestas finibus maximus nec ante. Ut dapibus eget orci ut rhoncus.'
  }
};
