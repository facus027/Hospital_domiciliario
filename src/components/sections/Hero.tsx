import { motion } from "framer-motion"

export function Hero() {
  return (
    <section
      id="inicio"
      className=" w-full bg-hero-pattern bg-cover bg-center bg-no-repeat text-white"
    >
      <div className="mx-auto ml-0 mt-5 xl:ml-36 flex min-h-[620px] w-11/12 items-center px-4 py-28 sm:min-h-[680px] lg:min-h-[780px] lg:px-8 lg:py-52">
        <motion.div
          className="mx-auto w-full"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex w-full items-center justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.65 }}
          >
            <img
              src="/elementos web-2.png"
              className="mb-8 w-28 sm:w-36 lg:w-52"
              alt="elemento decorativo corazón"
            />
          </motion.div>

          <div className="flex w-full max-w-8xl flex-col text-center lg:text-left">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-7xl">
              Cuidamos la salud y la calidad de vida de las personas en la
              comodidad de su hogar.
            </h1>

            <p className="mt-6 text-2xl font-bold text-white/90 sm:text-3xl md:text-4xl lg:mt-10 lg:text-5xl">
              Más de 15 años de experiencia
            </p>

            <p className="mt-6 max-w-5xl text-base leading-relaxed text-white/90 sm:text-lg md:text-2xl lg:text-4xl">
              Trabajamos para mejorar la calidad de vida de las personas a través
              de programas de cuidado, acompañamiento y atención integral
              domiciliaria.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}