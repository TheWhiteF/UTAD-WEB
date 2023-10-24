import React from 'react'

export default function ToDoList({elementos}) {
  /*Para cada elemento del array pasado como parámetro en {elementos}, 
  añadimos a la lista (ul) una nueva entrada (li) con una "key" única (elemento.id) 
  y el contenido (elemento.tarea)
  */
  return (
    <ul>
        {elementos.map((elemento)=> (
            <li key={elemento.id}>{elemento.tarea}</li>
        ))}
    </ul>
  )
}