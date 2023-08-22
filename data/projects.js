import coverAneto from '@/images/proyectos/cover-aneto.jpg';
import coverChefHere from '@/images/proyectos/cover-chefhere.jpg';
import coverDentaid from '@/images/proyectos/cover-dentaid.jpg';
import coverGameDev from '@/images/proyectos/cover-gamedev.jpg';
import coverJane from '@/images/proyectos/cover-janeworld.jpg';
import coverMovieList from '@/images/proyectos/cover-movielist.jpg';
import coverSemillasvivas from '@/images/proyectos/cover-semillasvivas.jpg';
import coverNet2phone from '@/images/proyectos/cover-smsnet2phone.jpg';
import coverTalkWorld from '@/images/proyectos/cover-talkworld.jpg';
import coverTantra from '@/images/proyectos/cover-tantraspain.jpg';
import coverWardobeme from '@/images/proyectos/cover-wardobeme.jpg';





export const projects = [
  {
    name: 'Sms Net2phone',
    description:
      'Dashboard en Laravel para el envío y gestión de sms para la empresa Net2phone.',
    job: 'UI, Maquetación y Frontend',
    link: 'https://sms.net2phone.es/login',
    cover: coverNet2phone,
    publishedAt: '2018-08-15',
  },
  {
    name: 'Tantra Spain',
    description:
      'Website en Laravel con catálogo auto gestionable por el cliente.',
    job: 'UI, Maquetación y Frontend',
    link: 'https://tantraspain.com/',
    cover: coverTantra,
    publishedAt: '2017-09-15',
  },
  {
    name: 'Aneto',
    description:
      'Rediseño de tienda online realizada en Prestashop para la empresa Aneto.',
    job: 'UI, Maquetación yFrontend',
    link: 'https://tiendaneto.com/es/',
    cover: coverAneto,
    publishedAt: '2022-10-15',
  },
  {
    name: 'Janeworld',
    description:
      'Implementación de funcionalidades en multitiendas Janeworld y Becool en Prestashop.',
    job: 'Maquetación y Frontend',
    link: 'https://janeworld.com/',
    cover: coverJane,
    publishedAt: '2022-06-15',
  },
  {
    name: 'Dentaid & Waterpike',
    description:
      'Implementación de funcionalidades en distintas tiendas online para varios países Dentaid y Waterpik en Prestashop.',
    job: 'Maquetación y Frontend',
    link: 'https://www.dentaidcomprasonline.pe/',
    cover: coverDentaid,
    publishedAt: '2022-07-15',
  },
  {
    name: 'Semillas Vivas',
    description: 'Rediseño y Frontend de tienda online en Prestashop.',
    job: 'UI, Maquetación y Frontend',
    link: 'https://www.semillasvivas.bio/es/',
    cover: coverSemillasvivas,
    publishedAt: '2021-05-15',
  },
]

export const openprojects = [
  {
    name: 'Movie List',
    description:
      'Sitio web en NextJS y Tailwind, uso de la API de TMDB para mostrar diferentes colecciones de películas y series. El proyecto todavía está en desarrollo',
    job: 'UI, Maquetación y Frontend',
    link: 'https://movielist.educalvolopez.com/',
    cover: coverMovieList,
    github: 'https://github.com/educlopez/movie-list',
    video: 'movielist',
    publishedAt: '2023-02-15',
  },
  {
    name: 'Talk World',
    description:
      'Proyecto realizado con remix.run y usando Suppabase para crear un chat. Para los estilos, se está utilizando Tailwindcss.',
    job: 'UI, Maquetación y Frontend',
    link: 'https://talkworld.educalvolopez.com/',
    cover: coverTalkWorld,
    github: 'https://github.com/educlopez/supabase-remix-talkworld-chat',
    publishedAt: '2023-02-07',
  },
  {
    name: 'Gamedev',
    description:
      'Gamedev es un proyecto donde agregaré minijuegos a medida que aprenda React, Nextjs, y posiblemente migraré de JavaScript a TypeScript. Todos los comentarios y consejos para mejorar el código son bienvenidos.',
    job: 'UI, Maquetación y Frontend',
    link: 'https://gamedev.educalvolopez.com/',
    cover: coverGameDev,
    github: 'https://github.com/educlopez/gamedev',
    publishedAt: '2023-03-31',
  },
  {
    name: 'Chefhere',
    description:
      'Generador de recetas con co:here, pasando ciertos parametros el prompt se completa y devuelve una receta con los ingredientes y pasos a seguir',
    job: 'UI, Maquetación y Frontend',
    link: 'https://chefhere.educalvolopez.com/',
    cover: coverChefHere,
    github: 'https://github.com/educlopez/chefhere-ai-cohere',
    publishedAt: '2023-02-20',
  },
  {
    name: 'Wardobeme',
    description:
      '¡Descubre su guardarropa como nunca antes con Wardrobeme! Sube una imagen de tu ropa y deja que la api de cloudinary detecte elementos y colores individuales en la imagen.',
    job: 'UI, Maquetación y Frontend',
    link: 'https://wardobeme.educalvolopez.com/',
    cover: coverWardobeme,
    github: 'https://github.com/educlopez/wardrobeme',
    publishedAt: '2023-03-13',
  },
]