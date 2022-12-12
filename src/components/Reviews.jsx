import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'

const reviews = [
  {
    id: 1,
    author: "Eva García",
    title: "CEO en Tantra Fashion",
    body: "Eduardo es una persona con gran capacidad de adaptación y trabajo en equipo, y resolución de problemas. Tiene una gran conocimiento de las nuevas tecnologias, diseño, ecommerce y todo lo relativo al mundo online. Un placer trabajar contigo y estamos en contacto"
  },
  {
    id: 2,
    author: "Javier Pozuelo",
    title: "Desarrollo de software",
    body: "Eduardo es un profesional totalmente capaz de enfrentarse a cualquier reto, todo lo que hace lo lleva a cabo metódica, seria y profesionalmente, siempre ha dado la talla en los proyectos en los que hemos trabajado juntos y cada vez con una complejidad superior al anterior. Sin duda es la persona adecuada para llevar a cabo las tareas de las que él está cualificado."
  },
  {
    id: 3,
    author: "Madeley Zahonero",
    title: "Diseñadora gráfica y web",
    body: "Edu es un compañero excelente, tiene muchos conocimientos técnicos, se nota que es inquieto y le gusta esta a la última en tendencias y herramientas de trabajo. Además no le importa compartir esos conocimientos y experiencia con sus compañeros, ¡siempre está dispuesto a echarte una mano! Es un placer y una suerte trabajar con él, me ha aportado mucho. "
  },
  {
    id: 4,
    author: "María Paz Muñoz",
    title: "Product Manager",
    body: "Un compañero servicial y muy trabajador además de resolutivo. Inquieto, buscando siempre cosas nuevas para aprender y transmitiendo sus conocimientos a todo el equipo. ¡Un lujo trabajar con él!"
  },
  {
    id: 5,
    author: "Jonathan García",
    title: "CEO en Net2phone España",
    body: "De la mano de Eduardo Calvo no solo encontraras soluciones innovadoras, un gran diseñador con útiles conocimientos de back. Tendrá un profesional coherente, con propuesta razonables y muchas ganas de trabajar, asimilando el proyecto como propio. Mi mas sincera recomendación."
  },
  {
    id: 6,
    author: "Linkedin",
    title: "Linkedin",
    body: "Proximamente más"
  },
]


function Review({ title, body, author, className, ...props }) {
  return (
    <figure
      className={clsx(
        'rounded-3xl bg-white/20 dark:bg-slate-900/50 p-6  border border-zinc-100/30 dark:border-zinc-700/40 backdrop-blur',
        className
      )}

      {...props}
    >
      <blockquote className="text-slate-900 dark:text-slate-100">
        <p className="text-sm font-semibold leading-6 before:content-['“'] after:content-['”']">
          {body}
        </p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-slate-800 dark:text-slate-400">
        {author} - {title}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  return (
    <div
      className={clsx('space-y-8 py-4', className)}
    >
      {reviews.map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative grid items-start grid-cols-1 gap-8 overflow-hidden sm:mt-10 md:grid-cols-2 lg:grid-cols-3"
    >
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-slate-800 dark:text-slate-100"
        >
          Testimonios
        </h2>
        <ReviewGrid />
    </section>
  )
}
