import React from 'react'


// PROPS: Estatus recibe de su padre la cantidad que va a mostrar dentro del span correpondiente.
// Maqueta de Estatus:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Estatus({total}) {
  
  return (
    <header>
        {/* maquetar Estatus aquí */}
        <h1>Estatus de Posteos</h1>
        <p><span>Likes totales: </span>{total}</p>
        
    </header>
  )
}
