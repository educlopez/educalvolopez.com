import DarkSwitchFloatNav from './darkSwitchFloatNav';
import Link from 'next/link';


export default function MyFloatNav({ }) {

  return (
    <div>
      <div className="border floatnav border-slate-200 dark:border-slate-700">
        <div className="floatnav-content">
          <Link href="/">
            <a className="transition duration-300 ease-in-out floatnav-item hover:-translate-y-1">
              <img src="/assets/general/home.png" className="img-test" />
            </a>
          </Link>
          <Link href="/about">
            <a className="transition duration-300 ease-in-out floatnav-item hover:-translate-y-1">
              <img src="/assets/general/about.png" className="img-test" />
            </a>
          </Link>
          <Link href="/proyectos">
            <a className="transition duration-300 ease-in-out floatnav-item hover:-translate-y-1">
              <img src="/assets/general/proyects.png" className="img-test" />
            </a>
          </Link>
          <Link href="/blog">
            <a className="transition duration-300 ease-in-out floatnav-item hover:-translate-y-1">
              <img src="/assets/general/blog.png" className="img-test" />
            </a>
          </Link>
          <Link href="/recomendaciones">
            <a className="transition duration-300 ease-in-out floatnav-item hover:-translate-y-1">
              <img src="/assets/general/star.png" className="img-test" />
            </a>
          </Link>
          <hr className="floatnav-separator"></hr>
          <DarkSwitchFloatNav />
        </div>
      </div>
    </div>
  );
}
