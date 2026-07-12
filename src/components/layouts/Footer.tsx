

function Footer() {
  return (
    <>
    {/* LOGO FINAL */}
<div className="relative bg-hospital-green py-8">
  {/* Logo principal */}
  <a href="#inicio" >
  <img
    className="mx-auto h-20 w-auto py-3 md:h-20 md:py-1"
    src="/logo.png"
    alt="logo_hospital"
    />
    </a>
    

  {/* Logo creador */}

   <a href="https://linktr.ee/viralmk?fbclid=PAZXh0bgNhZW0CMTEAAaaDt0GRMewRaznFlWYwXoXmAf8DphiWiZ3Cdi0Kn-YCgwNpNZ7Lz0743UM_aem_Vzxh6uCC7RpCbm0sA08zgA"
       target="_blank">
   <img
    className="
    absolute
    right-4
    z-10
    h-5
    w-auto
    opacity-80
    md:h-8
    
    "
    src="/Marca viral-03.png"
    alt="logo_viral"
    />
    </a>
 
</div>
    </>
  )
}

export default Footer