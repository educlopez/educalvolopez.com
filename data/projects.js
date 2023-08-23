import coverChefHere from '@/images/proyectos/cover-chefhere.jpg'
import coverGameDev from '@/images/proyectos/cover-gamedev.jpg'
import coverMovieList from '@/images/proyectos/cover-movielist.jpg'
import coverTalkWorld from '@/images/proyectos/cover-talkworld.jpg'
import coverWardobeme from '@/images/proyectos/cover-wardobeme.jpg'

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
