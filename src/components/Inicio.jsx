import React, { useEffect, useState } from 'react'
import { todosPersonajes } from '../functions/funciones'

export default function Inicio() {
  const [personaje, setPersonaje] = useState(null);

useEffect(()=>{
  todosPersonajes(setPersonaje)
},[])
  return (
    <>
      {personaje != null ? (
        personaje.map(personaje=> (
          <div key={personaje.id}>
            <a href={personaje.image}>{personaje.name}</a>
            <img src={personaje.image} alt=""/>
          </div>
        ))
      ):('NO')}
    </>
  )
}
