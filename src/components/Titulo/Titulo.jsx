import React from 'react'
import style from './Titulo.module.css'
export default function Titulo() {
  return (
    <div className = {style.container}>
        <h1 className = {style.titulo}>RICK AND MORTY APP</h1>
        <h2 className = {style.subtitulo}>With React</h2>
    </div>
  )
}
