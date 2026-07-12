import { Header } from "./components/layouts/Header"
import { About } from "./components/sections/About"
import { Benefits } from "./components/sections/Benefits"
import { Equipment } from "./components/sections/Equipment"
import { Hero } from "./components/sections/Hero"
import { Plans } from "./components/sections/Plans"
import { QuoteForm } from "./components/sections/QuoteForm"
import { Services } from "./components/sections/Services"
import { ProfessionalsSection } from "./components/sections/ProfessionalsSection"
import { MobileFinanciers } from "./components/sections/MobileFinanciers"
import { financierLogos } from "./data/siteData"
import { FAQ } from "./components/sections/FAQ"
import Footer from "./components/layouts/Footer"


function App() {


  return (
    <>
    
     <Header />
     
      <main className="">

        <Hero />

        <Benefits/>

        <About/>

        <Plans />
       
        <img
          src="/elementos web_Mesa de trabajo 1 copia.png"
          alt=""
          className="mx-auto w-full object-contain"
        />

        <Services/>

        <span className="block mx-auto bg-hospital-green w-11/12 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        
        <Equipment/>

        <QuoteForm/>

        <ProfessionalsSection/>

       <h3 className="lg:my-10 my-5 text-center text-3xl font-bold text-hospital-dark md:text-6xl">
        Financiadores que confían en nosotros
       </h3>

        <img
         src="/elementos web_9.png"
         alt="Financiadores que confían en Hospital Domiciliario"
         className="mx-auto hidden w-full object-contain md:block"
        />

        <MobileFinanciers
        logos={financierLogos}
        title=""
        />

        <FAQ/>

        <Footer/>

      </main>

    </>
  
  )
}

export default App
