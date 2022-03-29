import SpotifyPlaying from "../components/spotifyPlaying";

export default function Intro() {
  return (
    <section className="relative flex flex-col items-center mx-auto mb-16 md:flex-row md:justify-between md:mb-12 max-w-7xl">
      <div className="flex-1 text-center md:text-left">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-3xl font-normal tracking-tight text-black dark:text-white sm:text-5xl md:text-4xl">
            <span className="block xl:inline">Diseñando web / apps</span>
          </h1>
          <p className="mt-3 text-base text-black dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-1xl lg:mx-0">
            Especializado en diseño web, UI, UX y Maquetación.
          </p>
          <a
            href="#"
            className="inline-flex items-center p-2 mt-3 bg-white rounded-lg bg-opacity-5"
          >
            <span className="mr-2 text-xs text-black dark:text-white">
              Comandos&nbsp;
            </span>
            <kbd className="inline-flex items-center px-2 py-1 pb-2 mr-2 text-xs font-medium text-gray-600 bg-gray-200 border-2 border-b-2 border-gray-600 rounded-lg shadow-sm retro-btn-shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-50">
              ⌘
            </kbd>
            <kbd className="inline-flex items-center px-2 py-1 pb-2 text-xs font-medium text-gray-600 bg-gray-200 border-2 border-b-2 border-gray-600 rounded-lg shadow-sm retro-btn-shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-50">
              k
            </kbd>
          </a>
          {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="">
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium border border-transparent rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div> */}
        </div>
      </div>
      <div className="flex-1 text-center md:text-right">
        <SpotifyPlaying />
      </div>
    </section>
  );
}
