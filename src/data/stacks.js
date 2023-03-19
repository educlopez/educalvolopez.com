import img1Password from '@/images/icons/1password.png'
import imgArc from '@/images/icons/arc.png'
import imgBootstrap from '@/images/icons/bootstrap.png'
import imgDocker from '@/images/icons/docker.png'
import imgFigma from '@/images/icons/figma.png'
import imgIpadair from '@/images/icons/ipad-air.png'
import imgLando from '@/images/icons/lando.png'
import imgLgmonitor from '@/images/icons/lg-monitor.png'
import imgLogitechteclado from '@/images/icons/logitech-teclado.png'
import imgMacbook from '@/images/icons/macbook-pro.png'
import imgNextjs from '@/images/icons/nextjs.png'
import imgNotion from '@/images/icons/notion.png'
import imgOzone from '@/images/icons/ozone.png'
import imgRaycast from '@/images/icons/raycast.png'
import imgSetapp from '@/images/icons/setapp.png'
import imgSketch from '@/images/icons/sketch.png'
import imgSlack from '@/images/icons/slack.png'
import imgTableplus from '@/images/icons/tableplus.png'
import imgTailwind from '@/images/icons/tailwind.png'
import imgTransmit from '@/images/icons/transmit.png'
import imgVercel from '@/images/icons/vercel.png'
import imgVscode from '@/images/icons/vscode.png'

export const stacksType = [
  {
    id: '1',
    name: 'workstation',
    online: true,
  },
  {
    id: '2',
    name: 'development',
    online: true,
  },
  {
    id: '3',
    name: 'design',
    online: true,
  },
  {
    id: '4',
    name: 'gamer',
    online: true,
  },
  {
    id: '5',
    name: 'productivity',
    online: true,
  },
]
export const stacks = [
  {
    type: 'workstation',
    title: '16” MacBook Pro, M1 Max, 16GB RAM (2021)',
    link: 'https://amzn.to/3hp6Dxj',
    info: 'Utilizo este ordenador todos los días para programar, diseñar y para uso personal. Su diseño es bonito y funcional. La duración de la batería es excelente y me encantan los teclados retroiluminados.',
    img: imgMacbook,
  },
  {
    type: 'workstation',
    title: 'Ipad Air 4º 64gb (2020)',
    link: 'https://amzn.to/3zWYZ3B',
    info: 'Lo uso como pantalla secundaria para el MacBook y para usar procreate y mejorar la productividad en el trabajo. El iPad Air 4th es extremadamente fácil de usar y disfruto viendo películas en él o escuchando música.',
    img: imgIpadair,
  },
  {
    type: 'workstation',
    title: 'LG 27UL650-W - Monitor 27 pulgadas 4K UHD',
    link: 'https://amzn.to/3zWCgER',
    info: 'El LG 27UL650-W es un gran monitor, con una resolución 4K UHD y una excelente reproducción del color. La pantalla es compatible con el MacBook Pro (modelo de 15 pulgadas), pero se verá muy bien en cualquier otro lugar.',
    img: imgLgmonitor,
  },
  {
    type: 'workstation',
    title: 'Logitech K380 Teclado Inalámbrico',
    link: 'https://amzn.to/3EbTrVs',
    info: 'Gran teclado para trabajar en casa, de viaje o en cualquier lugar de trabajo. Funciona con una gran variedad de dispositivos y ordenadores, lo que lo hace muy flexible.',
    img: imgLogitechteclado,
  },
  {
    type: 'development',
    title: 'Visual studio code',
    link: 'https://code.visualstudio.com/?wt.mc_id=DX_841432',
    info: 'Atom, sublime text, phpstorm... descansan en paz en mi recuerdo ya que llego visual studio y me cambio la vida.',
    img: imgVscode,
  },
  {
    type: 'development',
    title: 'Nextjs',
    link: 'https://nextjs.org/',
    info: 'Utilizo Next.js como framework de React porque me permite crear aplicaciones y sitios web de alto rendimiento y con una experiencia de usuario fluida. Además, me ofrece una serie de características útiles como renderizado en el lado del servidor, soporte para SEO y enrutamiento automático. También me gusta la opción de utilizar getInitialProps para obtener datos en el lado del servidor y la posibilidad de crear páginas estáticas para mejorar el rendimiento. En resumen, Next.js es un framework muy completo y potente que me permite crear aplicaciones y sitios web de alta calidad de manera rápida y sencilla.',
    img: imgNextjs,
  },
  {
    type: 'development',
    title: 'Vercel',
    link: 'https://vercel.com',
    info: 'Utilizo Vercel como hosting porque es rápido, seguro y fácil de usar. Además, me permite realizar actualizaciones y despliegues con un solo clic y ofrece soporte para diferentes frameworks y lenguajes de programación, como React, Next.js, Gatsby y muchos más. También me gusta la opción de integración con GitHub y la posibilidad de programar despliegues automáticos cuando se realizan cambios en el repositorio. En resumen, Vercel es un hosting muy completo y versátil que me permite administrar y desplegar mis proyectos de manera rápida y sencilla.',
    img: imgVercel,
  },
  {
    type: 'development',
    title: 'Tailwind',
    link: 'https://tailwindcss.com/',
    info: 'Utilizo Tailwind como framework de CSS para crear sitios web porque me permite crear diseños únicos y personalizados sin tener que escribir tanto código CSS. Además, es muy fácil de usar y integrar en proyectos realizados en React, lo que me permite ahorrar tiempo y esfuerzo en la creación de interfaces de usuario atractivas y funcionales. Aunque también utilizo Bootstrap, encuentro que Tailwind es más adecuado para proyectos en los que necesito un mayor control y personalización del diseño.',
    img: imgTailwind,
  },
  {
    type: 'development',
    title: 'Lando',
    link: 'https://docs.lando.dev/',
    info: 'Utilizo Lando para crear entornos locales para PrestaShop porque es muy fácil de usar y me permite levantar un servidor Docker en cuestión de segundos. Esto me permite comenzar a desarrollar mis proyectos de manera rápida y sencilla, sin tener que preocuparme por la configuración del servidor. Lando también me permite realizar pruebas en diferentes versiones de PHP y bases de datos, lo que me da la flexibilidad necesaria para probar y depurar mi código de manera eficiente. En resumen, Lando es una herramienta muy útil para crear entornos de desarrollo locales para PrestaShop de manera rápida y sencilla.',
    img: imgLando,
  },
  {
    type: 'development',
    title: 'Bootstrap',
    link: 'https://getbootstrap.com/',
    info: 'Utilizo Bootstrap como framework de CSS para crear sitios web porque es fácil de usar, tiene una amplia gama de componentes y diseños predefinidos y es altamente personalizable. Además, es compatible con dispositivos móviles y responsive design, lo que me permite crear sitios web atractivos y fácilmente accesibles desde cualquier dispositivo.',
    img: imgBootstrap,
  },
  {
    type: 'development',
    title: 'Docker',
    link: 'https://www.docker.com/',
    info: 'Llevo años usando Docker, antes para levantar Laravel rapidamente y ahora lo uso por Lando para levantar los ecommerce de la empresa.',
    img: imgDocker,
  },
  {
    type: 'development',
    title: 'Table plus',
    link: 'https://tableplus.com/',
    info: 'El gestor de bases de datos es muy útil, y lo uso desde hace mucho tiempo porque es cómodo y fácil de usar.',
    img: imgTableplus,
  },
  {
    type: 'design',
    title: 'Figma',
    link: 'https://www.figma.com/',
    info: 'Utilizo Figma para diseñar porque es una herramienta en línea y colaborativa que ofrece una amplia gama de herramientas y una interfaz intuitiva. Permite integración con otras herramientas y acceso a diseños desde cualquier lugar y dispositivo.',
    img: imgFigma,
  },
  {
    type: 'design',
    title: 'Sketch',
    link: 'https://www.sketch.com/',
    info: 'Utilizo Sketch para diseñar porque es intuitivo, potente y fácil de usar. Ofrece una amplia gama de herramientas de diseño y una interfaz clara y sencilla. También permite integración con otras herramientas y colaboración con otros diseñadores.Utilizo Figma para diseñar porque es una herramienta en línea y colaborativa que ofrece una amplia gama de herramientas y una interfaz intuitiva. Permite integración con otras herramientas y acceso a diseños desde cualquier lugar y dispositivo.',
    img: imgSketch,
  },
  {
    type: 'productivity',
    title: 'Arc',
    link: 'https://arc.net/',
    info: 'Utilizo el navegador Arc porque me gusta su interfaz y las opciones adicionales que ofrece. También me gusta la gran cantidad de opciones de personalización disponibles, como el editor de temas y los espacios de trabajo. Además, Arc tiene opciones útiles para la reproducción de video y la navegación en websites. Es un navegador rápido, seguro y altamente personalizable que me facilita la navegación en línea.',
    img: imgArc,
  },
  {
    type: 'productivity',
    title: 'Notion',
    link: 'https://notion.com/',
    info: 'Sea lo que sea en lo que estés trabajando, la aplicación Notion es tu amiga. Organiza tus pensamientos e ideas con nuestra plataforma basada en plantillas, que te permite reunir rápidamente ideas para publicaciones de blog, crear tableros de estado de ánimo y hacer una lluvia de ideas creativas. Creada para los creativos.',
    img: imgNotion,
  },
  {
    type: 'productivity',
    title: 'Raycast',
    link: 'https://www.raycast.com/',
    info: 'Se trata de una barra de comandos que puede utilizar para lanzar cualquier comando en su entorno de escritorio. Proporciona acceso a una serie de útiles complementos y accesos directos para realizar operaciones comunes',
    img: imgRaycast,
  },
  {
    type: 'productivity',
    title: 'Slack',
    link: 'https://slack.com/intl/es-es',
    info: 'Productividad o distración pero Slack ayuda mucho al trabajo en remoto permitiendote comunicarte con tus compañeros de proyecto.',
    img: imgSlack,
  },
  {
    type: 'productivity',
    title: '1Password',
    link: 'https://1password.com/es/',
    info: 'Utilizo 1Password para gestionar mis contraseñas y datos personales de manera segura y accesible. Ofrece autenticación en dos pasos y alertas de seguridad para proteger mis cuentas. Es esencial para proteger mis datos personales y mantener seguras mis cuentas en línea.',
    img: img1Password,
  },
  {
    type: 'productivity',
    title: 'Setapp',
    link: 'https://go.setapp.com/invite/vti9ximz',
    info: 'Utilizo Setapp porque es una plataforma de suscripción que me permite acceder a una amplia variedad de aplicaciones de productividad y creatividad de forma fácil y conveniente. No tengo que preocuparme por comprar y descargar cada aplicación individualmente ni por pagar licencias separadas.',
    img: imgSetapp,
  },
  {
    type: 'development',
    title: 'Transmit',
    link: 'https://panic.com/transmit/',
    info: 'Utilizo Transmit como gestor FTP porque es una aplicación fácil de usar y potente que me permite transferir archivos de forma rápida y segura entre mi ordenador y servidores web. También me ofrece una amplia variedad de opciones de configuración y personalización, lo que me permite adaptarlo a mis necesidades específicas de transferencia de archivos. Además, Transmit es compatible con una gran variedad de protocolos de transferencia de archivos, lo que me permite conectarme a una amplia variedad de servidores.',
    img: imgTransmit,
  },
  {
    type: 'workstation',
    title: 'Keywoard Ozone Tactical',
    link: 'https://amzn.to/3yvGQsy',
    info: 'Mi teclado principal este 2023, es un teclado mecánico con switches rojos, es muy cómodo y tiene un diseño muy bonito. Lo uso para programar y para jugar. ',
    img: imgOzone,
    pills: [{ name: 'new' }],
  },
]
